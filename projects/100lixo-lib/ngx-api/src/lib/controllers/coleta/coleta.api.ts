import { Inject, Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractAPI, IEnvironment, IPaginableAPIModel, IColeta, IQueryParams, PathParams } from '@100lixo-lib/ngx-domain';

@Injectable({
  providedIn: 'root'
})
export class ColetaAPI extends AbstractAPI<IColeta> {

  protected url = this._environment.backendUrl + '/api/v1/coleta/';

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

  get(pathParams?: PathParams, queryParams?: IQueryParams, customBaseUrl?: string): Observable<IColeta> {
    return super.getGeneric<IColeta>(pathParams, queryParams, customBaseUrl);
  }

  getAll(pathParams?: PathParams, queryParams?: IQueryParams, customBaseUrl?: string): Observable<IPaginableAPIModel<IColeta>> {
    return super.getListGeneric<IColeta>(pathParams, queryParams, customBaseUrl);
  }

  create(entity: IColeta): Observable<IColeta> {
    return super.postGeneric(entity);
  }

  update(entity: IColeta): Observable<IColeta> {
    return super.putGeneric(entity);
  }

  delete(entity: IColeta, id: number): Observable<void> {
    return super.deleteGeneric(entity, id);
  }

}
