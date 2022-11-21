import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICliente, Cliente, PathParams, IPaginableAPIModel } from '@100lixo-lib/ngx-domain';
import { ClienteAPI } from '@100lixo-lib/ngx-api';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NgxClienteService {

  /**
   * CONSTRUCTOR
   * @param _clienteApi: ClienteAPI
   */
  constructor(
    private readonly _clienteApi: ClienteAPI
  ) { }

  getAll(): Observable<IPaginableAPIModel<ICliente>> {
    return this._clienteApi.getAll()
      .pipe(map((items: IPaginableAPIModel<ICliente>) => {
        items.content = items.content.map((cliente: ICliente) => new Cliente(cliente));
        return items;
      }));
  }

  update(cliente: ICliente, pathParams: PathParams): Observable<ICliente> {
    return this._clienteApi.update(cliente, pathParams);
  }

}
