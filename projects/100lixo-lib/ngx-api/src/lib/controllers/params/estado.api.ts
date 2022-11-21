import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractAPI, IEstado } from '@100lixo-lib/ngx-domain';

@Injectable({
  providedIn: 'root'
})
export class EstadoAPI extends AbstractAPI<IEstado> {

  protected url = 'http://localhost:8765/uve-ms-cliente/api/v1/params/estados';

  /**
   * CONSTRUCTOR
   * @param injector: Injector
   */
  constructor(injector: Injector) {
    super(injector);
  }

  getAll(): Observable<Array<IEstado>> {
    return super.getArrayListGeneric<IEstado>();
  }

}
