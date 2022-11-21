import { Injectable, Injector } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AbstractAPI, IPaginableAPIModel, IPessoa, IQueryParams, PathParams } from '@100lixo-lib/ngx-domain';

@Injectable({
  providedIn: 'root'
})
export class PessoaAPI extends AbstractAPI<IPessoa> {

  protected url = 'http://localhost:8765/uve-ms-pessoa/api/v1/pessoas';

  /**
   * CONSTRUCTOR
   * @param injector: Injector
   */
  constructor(injector: Injector) {
    super(injector);
  }

  get(pathParams?: PathParams, queryParams?: IQueryParams, customBaseUrl?: string): Observable<IPessoa> {
    return super.getGeneric<IPessoa>(pathParams, queryParams, customBaseUrl);
  }

  getAll(): Observable<IPaginableAPIModel<IPessoa>> {
    return super.getListGeneric<IPessoa>();
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
