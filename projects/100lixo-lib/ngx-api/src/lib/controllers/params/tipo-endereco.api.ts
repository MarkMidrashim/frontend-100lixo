import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractAPI, ITipoEndereco } from '@100lixo-lib/ngx-domain';

@Injectable({
  providedIn: 'root'
})
export class TipoEnderecoAPI extends AbstractAPI<ITipoEndereco> {

  protected url = 'http://localhost:8765/uve-ms-cliente/api/v1/params/tiposEndereco';

  /**
   * CONSTRUCTOR
   * @param injector: Injector
   */
  constructor(injector: Injector) {
    super(injector);
  }

  getAll(): Observable<Array<ITipoEndereco>> {
    return super.getArrayListGeneric<ITipoEndereco>();
  }

}
