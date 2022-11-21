import { IPermissao, permissaoMock } from "./permissao";

export interface IPessoa {
  id: string;
  nome: string;
  email: string;
  password: string;
  ativo: boolean;
  acessos: number;
  permissoes: Array<IPermissao>;
}

export class Pessoa implements IPessoa {
  id: string;
  nome: string;
  email: string;
  password: string;
  ativo: boolean;
  acessos: number;
  permissoes: Array<IPermissao>;

  constructor(rawData: IPessoa) {
    this.id = rawData.id;
    this.nome = rawData.nome;
    this.email = rawData.email;
    this.password = rawData.password;
    this.ativo = rawData.ativo;
    this.acessos = rawData.acessos;
    this.permissoes = rawData.permissoes;
  }
}

export const pessoaMock: IPessoa = {
  id: '7268b692-138b-493b-8bf0-1574a8c9109e',
  nome: 'Miguel Fernando Jorge Aragão',
  email: 'mmiguelfernandojorgearagao@gmail.com',
  password: '',
  ativo: true,
  acessos: 10,
  permissoes: [permissaoMock]
};
