import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractAPI, ICategoria } from '@100lixo-lib/ngx-domain';

@Injectable({
  providedIn: 'root'
})
export class CategoriaAPI extends AbstractAPI<ICategoria> {

  protected url = 'http://localhost:8765/uve-ms-cliente/api/v1/params/categorias';

  /**
   * CONSTRUCTOR
   * @param injector: Injector
   */
  constructor(injector: Injector) {
    super(injector);
  }

  getAll(): Observable<Array<ICategoria>> {
    return super.getArrayListGeneric<ICategoria>();
  }

}
