import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractAPI, IEscolaridade } from '@100lixo-lib/ngx-domain';

@Injectable({
  providedIn: 'root'
})
export class EscolaridadeAPI extends AbstractAPI<IEscolaridade> {

  protected url = 'http://localhost:8765/uve-ms-cliente/api/v1/params/escolaridade';

  /**
   * CONSTRUCTOR
   * @param injector: Injector
   */
  constructor(injector: Injector) {
    super(injector);
  }

  getAll(): Observable<Array<IEscolaridade>> {
    return super.getArrayListGeneric<IEscolaridade>();
  }

}
