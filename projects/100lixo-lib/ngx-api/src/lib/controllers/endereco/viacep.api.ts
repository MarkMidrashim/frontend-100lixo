import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractAPI, IViacep } from '@100lixo-lib/ngx-domain';

@Injectable({
  providedIn: 'root'
})
export class ViacepAPI extends AbstractAPI<IViacep> {

  protected url = 'https://viacep.com.br/ws/';

  /**
   * CONSTRUCTOR
   * @param injector: Injector
   */
  constructor(injector: Injector) {
    super(injector);
  }

  getCep(cep: string): Observable<IViacep> {
    const customBaseUrl = `${this.url}/${cep}/json`;
    return super.getGeneric<IViacep>(undefined, undefined, customBaseUrl);
  }

}
