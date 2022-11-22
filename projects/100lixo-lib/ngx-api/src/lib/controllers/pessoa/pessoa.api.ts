import { Inject, Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractAPI, IEnvironment, IPaginableAPIModel, IPessoa, IQueryParams, PathParams } from '@100lixo-lib/ngx-domain';

@Injectable({
  providedIn: 'root'
})
export class PessoaAPI extends AbstractAPI<IPessoa> {

  protected url = this._environment.backendUrl + '/api/v1/usuario/';

  /**
   * CONSTRUCTOR
   * @param injector: Injector
   */
  constructor(
    @Inject('environment') private _environment: IEnvironment,
    injector: Injector
  ) {
    super(injector);
  }

  get(pathParams?: PathParams, queryParams?: IQueryParams, customBaseUrl?: string): Observable<IPessoa> {
    return super.getGeneric<IPessoa>(pathParams, queryParams, customBaseUrl);
  }

  getAll(pathParams?: PathParams, queryParams?: IQueryParams, customBaseUrl?: string): Observable<IPaginableAPIModel<IPessoa>> {
    return super.getListGeneric<IPessoa>(pathParams, queryParams, customBaseUrl);
  }

  create(entity: IPessoa): Observable<IPessoa> {
    return super.postGeneric(entity);
  }

  update(entity: IPessoa): Observable<IPessoa> {
    return super.putGeneric(entity);
  }

  /*delete(id: number): Observable<void> {
    return super.deleteGeneric(id);
  }*/

}
