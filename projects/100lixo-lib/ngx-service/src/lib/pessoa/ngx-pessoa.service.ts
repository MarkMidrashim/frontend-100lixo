import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPaginableAPIModel, IPessoa, Pessoa } from '@100lixo-lib/ngx-domain';
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

  getByEmail(email: string): Observable<IPaginableAPIModel<IPessoa>> {
    const queryParams = new PessoaQueryParams();
    queryParams.addQueryParam('email', email);

    return this._pessoaApi.getAll(undefined, queryParams).pipe(
      map((response: IPaginableAPIModel<IPessoa>) => {
        response.content = response.content.map((item: IPessoa) => new Pessoa(item))
        return response;
      })
    );
  }

}
