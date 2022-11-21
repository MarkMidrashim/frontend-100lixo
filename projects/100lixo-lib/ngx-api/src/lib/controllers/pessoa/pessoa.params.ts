import { AbstractQueryParams } from "@100lixo-lib/ngx-domain";

export type PessoaExpandable = '';
export type PessoaParams = 'email';
export type PessoaOrderParams = 'id' | 'email';

export class PessoaQueryParams extends AbstractQueryParams<
  PessoaExpandable,
  PessoaParams,
  PessoaOrderParams
> {}
