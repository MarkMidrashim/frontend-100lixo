import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { fromEvent, forkJoin } from 'rxjs';
import { map, debounceTime, tap, finalize } from 'rxjs/operators';
import { cpf, cnpj } from 'cpf-cnpj-validator';
import Swal from 'sweetalert2';
import {
  IViacep,
  ICategoria,
  TipoCliente,
  IStatus,
  ITipoEndereco,
  ITipoLogradouro,
  ILogradouro,
  ICliente,
  IEstado,
  IMunicipio,
  IBairro,
  IGenero,
} from '@100lixo-lib/ngx-domain';
import { ViacepAPI, ClienteAPI } from '@100lixo-lib/ngx-api';
import { NgxCryptoService, NgxParamsService } from '@100lixo-lib/ngx-service';
import { NgxLoadingService } from '@100lixo-lib/ngx-component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  @Input() isLinear = true;
  @Input() isEditable = true;
  @ViewChild('cep') cepInput!: ElementRef;

  public contentLoaded = false;
  public isCategoria: boolean = false;
  public tipoCliente!: TipoCliente;
  public tipoEndereco!: ITipoEndereco;
  public labelDocumento!: string;
  public documentMask!: string;

  protected status!: IStatus;
  protected categoria!: ICategoria;
  protected estado!: IEstado;
  protected municipio!: IMunicipio;
  protected bairro!: IBairro;
  protected tipoLogradouro!: ITipoLogradouro;
  protected logradouro!: ILogradouro;
  protected genero!: IGenero;
  protected cepSearched!: IViacep;

  public statusList!: IStatus[];
  public categoriaList!: ICategoria[];
  public tipoEnderecoList!: ITipoEndereco[];
  public estadoList!: IEstado[];
  public tipoLogradouroList!: ITipoLogradouro[];
  public generoList!: IGenero[];

  public form!: FormGroup;

  /**
   * CONSTRUCTOR
   * @param _formBuilder: FormBuilder
   * @param _cryptoService: NgxCryptoService
   * @param _router: Router
   * @param _viacepApi: ViacepAPI
   * @param _clienteApi: ClienteAPI
   * @param _paramsService: NgxParamsService
   */
  constructor(
    private _formBuilder: FormBuilder,
    private _cryptoService: NgxCryptoService,
    private _router: Router,
    private readonly _viacepApi: ViacepAPI,
    private readonly _clienteApi: ClienteAPI,
    private _paramsService: NgxParamsService,
    private _loadingService: NgxLoadingService
  ) {
    this.form = this._formBuilder.group({
      step1: this._formBuilder.group({
        tipo_cliente: new FormControl('', [Validators.required]),
      }),
      step2: this._formBuilder.group({
        nome: new FormControl('', [
          Validators.required,
          Validators.maxLength(100),
        ]),
        documento: new FormControl('', [
          Validators.required,
          Validators.maxLength(18),
        ]),
        ultimos_digitos_documento: new FormControl('', [
          Validators.required,
          Validators.maxLength(2),
        ]),
        data_nascimento: new FormControl(''),
        ddd: new FormControl('', [
          Validators.required,
          Validators.maxLength(2),
        ]),
        telefone: new FormControl('', [
          Validators.required,
          Validators.maxLength(10),
        ]),
        email: new FormControl('', [
          Validators.email,
          Validators.required,
          Validators.maxLength(100),
        ]),
        categoria: new FormControl(''),
        genero: new FormControl(''),
      }),
      step3: this._formBuilder.group({
        cep: new FormControl('', [
          Validators.required,
          Validators.maxLength(9),
        ]),
        sindico: new FormControl(false, [Validators.required]),
        logradouro: new FormControl('', [
          Validators.required,
          Validators.maxLength(255),
        ]),
        bairro: new FormControl('', [
          Validators.required,
          Validators.maxLength(100),
        ]),
        municipio: new FormControl('', [
          Validators.required,
          Validators.maxLength(100),
        ]),
        estado: new FormControl('', [
          Validators.required,
          Validators.maxLength(2),
        ]),
        complemento_endereco: new FormControl('', [Validators.maxLength(50)]),
        quantidade_unidades: new FormControl('', [Validators.maxLength(9999)]),
        termo_responsabilidade: new FormControl('', [Validators.required]),
      }),
    });
  }

  ngOnInit(): void {
    const loading = this._loadingService.create();
    this.contentLoaded = true;
    forkJoin({
      status: this._paramsService.getStatus(),
      categorias: this._paramsService.getCategoria(),
      estados: this._paramsService.getEstado(),
      generos: this._paramsService.getGenero(),
    })
      .pipe(finalize(() => this._loadingService.destroy(loading)))
      .subscribe((response) => {
        this.statusList = response.status;
        this.categoriaList = response.categorias;
        this.estadoList = response.estados;
        this.generoList = response.generos;
        this.contentLoaded = false;
      });
  }

  getLastTwoNumbersFromDocumentAndValidate(value: string): void {
    if (this.tipoCliente == 'PF') {
      if (cpf.isValid(value)) {
        this.form
          .get('step2')
          ?.get('ultimos_digitos_documento')
          ?.setValue(value.slice(-2));
        this.form.get('step2')?.get('documento')?.setErrors(null);
      } else {
        this.form.get('step2')?.get('documento')?.setErrors({ invalid: true });
      }
    } else {
      if (cnpj.isValid(value)) {
        this.form
          .get('step2')
          ?.get('ultimos_digitos_documento')
          ?.setValue(value.slice(-2));
        this.form.get('step2')?.get('documento')?.setErrors(null);
      } else {
        this.form.get('step2')?.get('documento')?.setErrors({ invalid: true });
      }
    }
  }

  searchCep(): void {
    fromEvent(this.cepInput.nativeElement, 'keyup')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(1500),
        tap(() => (this.contentLoaded = false))
      )
      .subscribe((item: string) => {
        this._viacepApi
          .getCep(item.replace('-', ''))
          .subscribe((cep: IViacep) => {
            if (!cep?.localidade?.match(/Suzano/g)) {
              Swal.fire({
                title: 'Desculpe!',
                text: 'O CEP informado não é atendido pela nossa Cooperativa',
                icon: 'error',
              });
            } else {
              this.contentLoaded = true;
              this.cepSearched = cep;
              this.treatmentInformationsFromCep();
            }
          });
      });
  }

  /* checkTipoEndereco(event: any): void {
    this.tipoEndereco = this.tipoEnderecoList.filter(
      (item) => item.id == event.target.value
    )[0];
  } */

  defineTypePerson(): void {
    if (this.form.get('step1')?.get('tipo_cliente')?.value == 'PF') {
      this.labelDocumento = 'CPF';
      this.documentMask = '000.000.000-00';
      this.isCategoria = false;
      this.form
        .get('step2')
        ?.get('categoria')
        ?.setValue(
          this.categoriaList.filter((item) =>
            item.descricao.includes('aplica')
          )[0].id
        );
      this.form.get('step2')?.get('categoria')?.setValidators(null);
      this.form.get('step2')?.updateValueAndValidity();
    } else {
      this.labelDocumento = 'CNPJ';
      this.documentMask = '00.000.000/0000-00';
      this.isCategoria = true;
      this.form
        .get('step2')
        ?.get('categoria')
        ?.setValidators(Validators.required);
      this.form.get('step2')?.updateValueAndValidity();
    }
  }

  private treatmentInformationsFromCep(): void {
    const step3 = this.form.get('step3');
    step3?.get('bairro')?.setValue(this.cepSearched.bairro);
    step3?.get('municipio')?.setValue(this.cepSearched.localidade);
    step3?.get('estado')?.setValue(this.cepSearched.uf);
    step3?.get('logradouro')?.setValue(this.cepSearched.logradouro);
    step3?.updateValueAndValidity();
  }

  private retrieveObjectsToPost(): void {
    this.categoria = this.categoriaList.filter(
      (item) => item.id == this.form.get('step2')?.get('categoria')?.value
    )[0];
    this.status = this.statusList.filter(
      (item) => item.descricao.toLowerCase() == 'novo'
    )[0];
    this.estado = this.estadoList.filter(
      (item) => item.sigla == this.form.get('step3')?.get('estado')?.value
    )[0];

    this.municipio = {
      id: 1,
      nome: this.form.get('step3')?.get('municipio')?.value,
      estado: this.estado,
    } as IMunicipio;

    this.bairro = {
      nome: this.form.get('step3')?.get('bairro')?.value,
      ativo: true,
      municipio: this.municipio,
    } as IBairro;

    this.logradouro = {
      nome: this.form.get('step3')?.get('logradouro')?.value,
      bairro: this.bairro,
    } as ILogradouro;
  }

  register(): void {
    if (this.form.valid) {
      const loading = this._loadingService.create();
      this.retrieveObjectsToPost();

      const entity = {
        tipoCliente: this.form.get('step1')?.get('tipo_cliente')?.value,
        nome: this.form.get('step2')?.get('nome')?.value,
        documento: this._cryptoService.encrypt(
          this.form.get('step2')?.get('documento')?.value
        ),
        ultimosDigitosDocumento: parseInt(
          this.form.get('step2')?.get('ultimos_digitos_documento')?.value
        ),
        dataNascimento:
          this.form.get('step2')?.get('data_nascimento')?.value || null,
        ddd: parseInt(this.form.get('step2')?.get('ddd')?.value),
        telefone: this.form.get('step2')?.get('telefone')?.value,
        email: this.form.get('step2')?.get('email')?.value,
        cep: this.form.get('step3')?.get('cep')?.value,
        tipoEndereco: this.tipoEndereco,
        logradouro: this.logradouro,
        numeroEndereco: parseInt(
          this.form.get('step3')?.get('numero_endereco')?.value
        ),
        complementoEndereco: this.form.get('step3')?.get('complemento_endereco')
          ?.value,
        quantidadeUnidades: parseInt(
          this.form.get('step3')?.get('quantidade_unidade')?.value
        ),
        sindico: this.form.get('step3')?.get('sindico')?.value,
        status: this.status,
      } as ICliente;

      this._clienteApi
        .create(entity)
        .pipe(finalize(() => this._loadingService.destroy(loading)))
        .subscribe(
          (res) => {
            Swal.fire({
              title: 'Cadastro realizado!',
              text: 'Seu cadastro foi realizado, agora, aguarde o nosso contato.',
              icon: 'success',
            }).then((result) => {
              this._router.navigate(['/']);
            });
          },
          (err) => {
            Swal.fire({
              title: 'Erro ao cadastrar!',
              text: err.message,
              icon: 'error',
            });
          }
        );
    }
  }
}
