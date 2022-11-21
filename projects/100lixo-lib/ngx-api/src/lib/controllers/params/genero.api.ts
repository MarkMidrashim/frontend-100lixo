import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractAPI, IGenero } from '@100lixo-lib/ngx-domain';

@Injectable({
  providedIn: 'root'
})
export class GeneroAPI extends AbstractAPI<IGenero> {

  protected url = 'http://localhost:8765/uve-ms-cliente/api/v1/params/genero';

  /**
   * CONSTRUCTOR
   * @param injector: Injector
   */
  constructor(injector: Injector) {
    super(injector);
  }

  getAll(): Observable<Array<IGenero>> {
    return super.getArrayListGeneric<IGenero>();
  }

}
