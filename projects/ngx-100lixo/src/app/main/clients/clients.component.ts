import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NgxBreadcrumbService } from '@100lixo-lib/ngx-component';
import { ICliente, IPaginableAPIModel } from '@100lixo-lib/ngx-domain';
import { NgxClienteService } from '@100lixo-lib/ngx-service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  public clientes!: IPaginableAPIModel<ICliente>;
  private _clientes: BehaviorSubject<IPaginableAPIModel<ICliente>> =
    new BehaviorSubject<IPaginableAPIModel<ICliente>>({} as unknown as IPaginableAPIModel<ICliente>);
  public readonly clientes$ = this._clientes.asObservable();

  /**
   * CONSTRUCTOR
   * @param _breadcrumbService: NgxBreadcrumbService
   */
  constructor(
    private _breadcrumbService: NgxBreadcrumbService,
    private readonly _clienteService: NgxClienteService
  ) { }

  ngOnInit(): void {
    this._breadcrumbService.add('clients-breadcrumb', 'Clientes', '/clients', 1);
    this._clienteService.getAll()
      .subscribe((items: IPaginableAPIModel<ICliente>) => {
        this.clientes = items;
        this._clientes.next(items);
      });
  }

}
