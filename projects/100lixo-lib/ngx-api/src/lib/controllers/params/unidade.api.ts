import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractAPI, IUnidade } from '@100lixo-lib/ngx-domain';

@Injectable({
  providedIn: 'root'
})
export class UnidadeAPI extends AbstractAPI<IUnidade> {

  protected url = 'http://localhost:8765/uve-ms-cliente/api/v1/params/unidades';

  /**
   * CONSTRUCTOR
   * @param injector: Injector
   */
  constructor(injector: Injector) {
    super(injector);
  }

  getAll(): Observable<Array<IUnidade>> {
    return super.getArrayListGeneric<IUnidade>();
  }

}
