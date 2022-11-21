import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPessoa, Pessoa } from '@100lixo-lib/ngx-domain';
import { PessoaAPI, PessoaQueryParams } from '@100lixo-lib/ngx-api';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NgxPessoaService {

  /**
   * CONSTRUCTOR
   * @param _pessoaApi: PessoaAPI
   */
  constructor(
    private readonly _pessoaApi: PessoaAPI
  ) { }

  getById(id: string): Observable<IPessoa> {
    return this._pessoaApi.get(id)
      .pipe(map((item: IPessoa) => new Pessoa(item)));
  }

  getByEmail(email: string): Observable<IPessoa> {
    const queryParams = new PessoaQueryParams();
    queryParams.addQueryParam('email', email);

    return this._pessoaApi.get(`findByEmail`, queryParams)
      .pipe(map((item: IPessoa) => new Pessoa(item)));
  }

}
