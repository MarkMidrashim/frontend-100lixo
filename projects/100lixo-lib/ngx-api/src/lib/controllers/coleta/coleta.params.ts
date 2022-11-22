import { AbstractQueryParams } from "@100lixo-lib/ngx-domain";

export type ColetaExpandable = '';
export type ColetaParams = 'periodo';
export type ColetaOrderParams = 'id' | 'periodo';

export class ColetaQueryParams extends AbstractQueryParams<
  ColetaExpandable,
  ColetaParams,
  ColetaOrderParams
> {}
