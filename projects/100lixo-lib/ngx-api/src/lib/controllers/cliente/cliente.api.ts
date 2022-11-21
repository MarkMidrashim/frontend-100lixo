import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractAPI, Entity, ICliente, IPaginableAPIModel, PathParams } from '@100lixo-lib/ngx-domain';

@Injectable({
  providedIn: 'root'
})
export class ClienteAPI extends AbstractAPI<ICliente> {

  protected url = 'http://localhost:8765/uve-ms-cliente/api/v1/cliente/';

  /**
   * CONSTRUCTOR
   * @param injector: Injector
   */
  constructor(injector: Injector) {
    super(injector);
  }

  getAll(pathParams?: PathParams, queryParams?: any, customBaseUrl?: string): Observable<IPaginableAPIModel<ICliente>> {
    return super.getListGeneric<ICliente>(pathParams, queryParams, customBaseUrl);
  }

  create(cliente: ICliente, pathParams?: PathParams, queryParams?: any, customBaseUrl?: string): Observable<ICliente> {
    const entity: Entity = cliente as Entity;
    return super.postGeneric<ICliente>(entity, pathParams, queryParams, customBaseUrl);
  }

  update(cliente: ICliente, pathParams?: PathParams): Observable<ICliente> {
    const entity: Entity = cliente as Entity;
    return super.putGeneric<ICliente>(entity, pathParams, undefined, undefined);
  }

}
