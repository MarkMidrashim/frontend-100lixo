import { IQueryParam, IQueryParams } from '../interfaces/query-params.interface';

/**
 * Classe abstrata utilizada para mapear as interações as interações com os query params a serem enviados para a api.
 * @template T expandable type definition
 * @template U query params type definition
 * @template Z order type definition
 */
export abstract class AbstractQueryParams<T, U, Z> implements IQueryParams {
  private params: IQueryParam[] = [];

  /**
   * Adiciona um array de expandables a lista de parâmetros.
   *
   * @param expandables Array de expandables que será adicionado.
   *
   */
  addExpandables(expandables: T[]): void {
    expandables.forEach((exp) => {
      const expandable = exp as unknown as string;
      this.add('expand', expandable);
    });
  }

  /**
   * Define a paginação a lista de parâmetros.
   *
   * @param page Número da página a ser adicionado.
   * @param pageSize Quantidade de registros a serem retornados.
   *
   */
  setPagination(page: number, pageSize: number): void {
    this.add('page', page.toString(), true);
    this.add('pageSize', pageSize.toString(), true);
  }

  /**
   * Adiciona a ordenação a lista de parâmetros.
   *
   * @param property Propriedade que será adicionada para a ordenação.
   * @param reverse Informa de a ordenação deve ser feita de forma inversa (descendente).
   *
   */
  addOrder(property: Z, reverse = false): void {
    let propertyString = property as unknown as string;
    if (reverse) {
      propertyString = `-${propertyString}`;
    }
    this.add('order', propertyString);
  }

  /**
   * Adiciona query params a lista de parâmetros.
   *
   * @param param Propriedade que será adicionada.
   * @param value Valor a ser adicionado.
   *
   */
  addQueryParam(param: U, value: string | boolean | Date): void {
    if (typeof value === 'boolean') {
      value = String(value);
    } else if (value instanceof Date) {
      value = value.toUTCString();
    }

    const key = param as unknown as string;
    this.add(key, value as string);
  }

  /**
   * Adiciona novos query params a lista privada.
   *
   * @param key Propriedade que será adicionada.
   * @param value Valor a ser adicionado.
   * @param isToReplaceExistingValue Define se irá substituir um valor já existente com a chave informada.
   *
   */
  private add(key: string, value: string, isToReplaceExistingValue?: boolean): void {
    let queryParamIndex = -1;
    const newQueryParam: IQueryParam = { key, value };

    if (isToReplaceExistingValue) {
      queryParamIndex = this.params.findIndex((p) => p.key === key);
    }

    if (queryParamIndex === -1) {
      this.params.push(newQueryParam);
    } else {
      this.params[queryParamIndex] = newQueryParam;
    }
  }

  /**
   * Retorna a lista com os query params.
   *
   */
  getParams(): IQueryParam[] {
    return this.params;
  }
}
