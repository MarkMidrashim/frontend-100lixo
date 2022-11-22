import { IPaginableAPIModel } from '../interfaces/paginable.interface';
import { Injector } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entity } from './entity.abstract';
import { IQueryParams } from '../interfaces/query-params.interface';
import { PathParams } from '../types/path-params.type';

export abstract class AbstractAPI<T> {

  /**
   * URL a ser chamada
   * @protected
   * @abstract
   * @type {string}
   * @memberof AbstractAPI
   */
  protected abstract url: string;

  /**
   * Service http
   * @protected
   * @type {HttpClient}
   * @memberof AbstractAPI
   */
  protected http: HttpClient;

  /**
   * CONSTRUCTOR
   * @param injector: Injector
   */
  constructor(injector: Injector) {
    this.http = injector.get(HttpClient);
  }

  /**
   * Método responsável por buscar entidade da api com objeto genérico
   *
   * @param pathParams (optional) Path params da request.
   * * É usado para identificar o recurso a ser buscado
   * @param queryParams (optional) Query params da request.
   * * É possível fazer o extends do AbstractQueryParams para definir os seus próprios parâmetros
   * * É usado para ordenar e filtrar os recursos
   * @param customBaseUrl (optional) Parâmetro que permite alterar a url padrão da requisição.
   * @template U objeto abstrato de retorno
   *
   * @returns
   */
  protected getGeneric<U>(pathParams?: PathParams, queryParams?: IQueryParams, customBaseUrl?: string): Observable<U> {
    const getUrl = this.getRequestUrl(pathParams, queryParams, customBaseUrl);
    return this.http.get<U>(getUrl);
  }

  /**
   * Método responsável por buscar uma lista de entidades da api com objeto genérico
   *
   * @param pathParams (optional) Path params da request.
   * * É usado para identificar o recurso a ser buscado
   * @param queryParams (optional) Query params da request.
   * * É possível fazer o extends do AbstractQueryParams para definir os seus próprios parâmetros
   * * É usado para ordenar e filtrar os recursos
   * @param customBaseUrl (optional) Parâmetro que permite alterar a url padrão da requisição.
   * @template U objeto abstrato de retorno
   *
   * @returns
   */
  protected getListGeneric<U>(
    pathParams?: PathParams,
    queryParams?: IQueryParams,
    customBaseUrl?: string
  ): Observable<IPaginableAPIModel<U>> {
    const listUrl = this.getRequestUrl(pathParams, queryParams, customBaseUrl);
    return this.http.get<IPaginableAPIModel<U>>(listUrl);
  }

  /**
   * Método responsável por buscar uma lista de entidades da api com objeto genérico
   *
   * @param pathParams (optional) Path params da request.
   * * É usado para identificar o recurso a ser buscado
   * @param queryParams (optional) Query params da request.
   * * É possível fazer o extends do AbstractQueryParams para definir os seus próprios parâmetros
   * * É usado para ordenar e filtrar os recursos
   * @param customBaseUrl (optional) Parâmetro que permite alterar a url padrão da requisição.
   * @template U objeto abstrato de retorno
   *
   * @returns
   */
  protected getArrayListGeneric<U>(
    pathParams?: PathParams,
    queryParams?: IQueryParams,
    customBaseUrl?: string
  ): Observable<Array<U>> {
    const listUrl = this.getRequestUrl(pathParams, queryParams, customBaseUrl);
    return this.http.get<Array<U>>(listUrl);
  }

  /**
   * Envia um post para api com objeto genérico
   *
   * @param entity: Entity
   * @param pathParams (optional) Path params da request.
   * * É usado para identificar o recurso a ser buscado
   * @param queryParams (optional) Query params da request.
   * * É possível fazer o extends do AbstractQueryParams para definir os seus próprios parâmetros
   * * É usado para ordenar e filtrar os recursos
   * @param customBaseUrl (optional) Parâmetro que permite alterar a url padrão da requisição.
   * @template U objeto abstrato de retorno
   *
   * @returns
   */
  protected postGeneric<U>(entity: Entity, pathParams?: PathParams, queryParams?: IQueryParams, customBaseUrl?: string): Observable<U> {
    const postUrl = this.getRequestUrl(pathParams, queryParams, customBaseUrl);
    return this.http.post<U>(postUrl, entity);
  }

  /**
   * Envia um put para api com objeto genérico
   *
   * @param entity: Entity
   * @param pathParams (optional) Path params da request.
   * * É usado para identificar o recurso a ser buscado
   * @param queryParams (optional) Query params da request.
   * * É possível fazer o extends do AbstractQueryParams para definir os seus próprios parâmetros
   * * É usado para ordenar e filtrar os recursos
   * @param customBaseUrl (optional) Parâmetro que permite alterar a url padrão da requisição.
   * @template U objeto abstrato de retorno
   *
   * @returns
   */
  protected putGeneric<U>(entity: Entity, pathParams?: PathParams, queryParams?: IQueryParams, customBaseUrl?: string): Observable<U> {
    const putUrl = this.getRequestUrl(pathParams, queryParams, customBaseUrl);
    return this.http.put<U>(putUrl, entity);
  }

  /**
   * Envia um patch para api com objeto genérico
   *
   * @param entity: Entity
   * @param pathParams (optional) Path params da request.
   * * É usado para identificar o recurso a ser buscado
   * @param queryParams (optional) Query params da request.
   * * É possível fazer o extends do AbstractQueryParams para definir os seus próprios parâmetros
   * * É usado para ordenar e filtrar os recursos
   * @param customBaseUrl (optional) Parâmetro que permite alterar a url padrão da requisição.
   * @template U objeto abstrato de retorno
   *
   * @returns
   */
  protected patchGeneric<U>(entity: Entity, params?: HttpParams): Observable<U> {
    return this.http.patch<U>(this.url, entity, { params: params });
  }

  /**
   * Envia um delete para api
   *
   * @param pathParams (optional) Path params da request.
   * * É usado para identificar o recurso a ser buscado
   * @param queryParams (optional) Query params da request.
   * * É possível fazer o extends do AbstractQueryParams para definir os seus próprios parâmetros
   * * É usado para ordenar e filtrar os recursos
   * @param customBaseUrl (optional) Parâmetro que permite alterar a url padrão da requisição.
   *
   * @returns
   */
  protected deleteGeneric(params?: HttpParams): Observable<void> {
    return this.http.delete<void>(this.url, { params: params });
  }

  /**
   * Obtém a url que será utilizada para fazer a requisição a api.
   * A url é gerada através da combinação das propriedades recebidas no método
   *
   * @param pathParams (optional) Path params da request.
   * * É usado para identificar o recurso
   * @param queryParams (optional) Query params da request.
   * * É possível fazer o extends do AbstractQueryParams para definir os seus próprios parâmetros
   * * É usado para ordenar e filtrar os recursos
   * @param customBaseUrl (optional) Parâmetro que permite alterar a url padrão da requisição.
   * * Quando informado, deixará de ser utilizado o baseUrl e passará a utilizar a url informada.
   * * Quando informado, continuará a adicionar os pathParams e queryParams.
   *
   */
  protected getRequestUrl(
    pathParams?: PathParams,
    queryParams?: IQueryParams,
    customBaseUrl?: string
  ): string {
    const stringQueryParams = this.createQueryParams(queryParams);

    let requestUrl = customBaseUrl ? customBaseUrl : this.url;
    if (pathParams) {
      requestUrl += `${pathParams}`;
    }

    return `${requestUrl}${stringQueryParams}`;
  }

  /**
   * Cria a string com os query params que será utilizada nas requisiçoes a api.
   *
   * @param queryParamsOptions (optional) Query params da request.
   * * É possível fazer o extends do AbstractQueryParams para definir os seus próprios parâmetros
   * * É usado para ordenar e filtrar os recursos
   *
   */
  protected createQueryParams(queryParamsOptions?: IQueryParams): string {
    const queryParams = [];

    if (!queryParamsOptions || queryParamsOptions.getParams().length === 0) {
      return '';
    }

    queryParams.push(
      queryParamsOptions
        .getParams()
        .map((item) => `${item.key}=${encodeURI(item.value)}`)
        .join('&')
    );

    return `?${queryParams.join('&')}`;
  }

}
