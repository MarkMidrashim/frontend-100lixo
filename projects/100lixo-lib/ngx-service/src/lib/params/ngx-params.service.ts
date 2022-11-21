import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ICategoria,
  IFrequencia,
  IStatus,
  ITipoEndereco,
  IVolume,
  IUnidade,
  ITipoLogradouro,
  Status,
  Frequencia,
  Categoria,
  TipoEndereco,
  Volume,
  Unidade,
  TipoLogradouro,
  IEstado,
  Estado,
  IEscolaridade,
  Escolaridade,
  IGenero,
  Genero
} from '@100lixo-lib/ngx-domain';
import {
  CategoriaAPI,
  FrequenciaAPI,
  StatusAPI,
  TipoEnderecoAPI,
  TipoLogradouroAPI,
  UnidadeAPI,
  EstadoAPI,
  VolumeAPI,
  EscolaridadeAPI,
  GeneroAPI
} from '@100lixo-lib/ngx-api';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NgxParamsService {

  /**
   * CONSTRUCTOR
   * @param _statusApi: StatusAPI
   * @param _frequenciaApi: FrequenciaAPI
   * @param _categoriaApi: CategoriaAPI
   * @param _tipoEnderecoApi: TipoEnderecoAPI
   * @param _volumeApi: VolumeAPI
   * @param _unidadeApi: UnidadeAPI
   * @param _tipoLogradouroApi: TipoLogradouroAPI
   * @param _estadoApi: EstadoAPI
   * @param _estadoApi: EscolaridadeAPI
   * @param _estadoApi: GeneroAPI
   */
  constructor(
    private readonly _statusApi: StatusAPI,
    private readonly _frequenciaApi: FrequenciaAPI,
    private readonly _categoriaApi: CategoriaAPI,
    private readonly _tipoEnderecoApi: TipoEnderecoAPI,
    private readonly _volumeApi: VolumeAPI,
    private readonly _unidadeApi: UnidadeAPI,
    private readonly _tipoLogradouroApi: TipoLogradouroAPI,
    private readonly _estadoApi: EstadoAPI,
    private readonly _escolaridadeApi: EscolaridadeAPI,
    private readonly _generoApi: GeneroAPI
  ) { }

  getStatus(): Observable<Array<IStatus>> {
    return this._statusApi.getAll()
      .pipe(map((items: Array<IStatus>) => items.map((status: IStatus) => new Status(status))));
  }

  getFrequencia(): Observable<Array<IFrequencia>> {
    return this._frequenciaApi.getAll()
      .pipe(map((items: Array<IFrequencia>) => items.map((frequencia: IFrequencia) => new Frequencia(frequencia))));
  }

  getCategoria(): Observable<Array<ICategoria>> {
    return this._categoriaApi.getAll()
      .pipe(map((items: Array<ICategoria>) => items.map((categoria: ICategoria) => new Categoria(categoria))));
  }

  getTipoEndereco(): Observable<Array<ITipoEndereco>> {
    return this._tipoEnderecoApi.getAll()
      .pipe(map((items: Array<ITipoEndereco>) => items.map((tipoEndereco: ITipoEndereco) => new TipoEndereco(tipoEndereco))));
  }

  getVolume(): Observable<Array<IVolume>> {
    return this._volumeApi.getAll()
      .pipe(map((items: Array<IVolume>) => items.map((volume: IVolume) => new Volume(volume))));
  }

  getUnidade(): Observable<Array<IUnidade>> {
    return this._unidadeApi.getAll()
      .pipe(map((items: Array<IUnidade>) => items.map((unidade: IUnidade) => new Unidade(unidade))));
  }

  getTipoLogradouro(): Observable<Array<ITipoLogradouro>> {
    return this._tipoLogradouroApi.getAll()
      .pipe(map((items: Array<ITipoLogradouro>) => items.map((tipoLogradouro: ITipoLogradouro) => new TipoLogradouro(tipoLogradouro))));
  }

  getEstado(): Observable<Array<IEstado>> {
    return this._estadoApi.getAll()
      .pipe(map((items: Array<IEstado>) => items.map((estado: IEstado) => new Estado(estado))));
  }

  getEscolaridade(): Observable<Array<IEscolaridade>> {
    return this._escolaridadeApi.getAll()
      .pipe(map((items: Array<IEscolaridade>) => items.map((estado: IEscolaridade) => new Escolaridade(estado))));
  }

  getGenero(): Observable<Array<IGenero>> {
    return this._generoApi.getAll()
      .pipe(map((items: Array<IGenero>) => items.map((estado: IGenero) => new Genero(estado))));
  }

}
