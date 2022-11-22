import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPaginableAPIModel, IColeta, Coleta } from '@100lixo-lib/ngx-domain';
import { ColetaAPI, ColetaQueryParams } from '@100lixo-lib/ngx-api';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NgxColetaService {

  /**
   * CONSTRUCTOR
   * @param _coletaApi: ColetaAPI
   */
  constructor(
    private readonly _coletaApi: ColetaAPI
  ) { }

  getById(id: string): Observable<IColeta> {
    return this._coletaApi.get(id)
      .pipe(map((item: IColeta) => new Coleta(item)));
  }

  getAll(): Observable<IPaginableAPIModel<IColeta>> {
    return this._coletaApi.getAll(undefined).pipe(
      map((response: IPaginableAPIModel<IColeta>) => {
        response.content = response.content.map((item: IColeta) => new Coleta(item))
        return response;
      })
    );
  }

  getByPeriodo(periodo: string): Observable<IPaginableAPIModel<IColeta>> {
    const queryParams = new ColetaQueryParams();
    queryParams.addQueryParam('periodo', periodo);

    return this._coletaApi.getAll(undefined, queryParams).pipe(
      map((response: IPaginableAPIModel<IColeta>) => {
        response.content = response.content.map((item: IColeta) => new Coleta(item))
        return response;
      })
    );
  }

  create(entity: IColeta): Observable<IColeta> {
    return this._coletaApi.create(entity)
      .pipe(map((item: IColeta) => new Coleta(item)));
  }

  update(entity: IColeta): Observable<IColeta> {
    return this._coletaApi.update(entity)
      .pipe(map((item: IColeta) => new Coleta(item)));
  }

}
