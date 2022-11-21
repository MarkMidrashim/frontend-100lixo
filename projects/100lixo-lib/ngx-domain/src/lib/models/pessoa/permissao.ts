export interface IPermissao {
  id: string;
  nome: string;
}

export class Permissao implements IPermissao {
  id: string;
  nome: string;

  constructor(rawData: IPermissao) {
    this.id = rawData.id;
    this.nome = rawData.nome;
  }
}

export const permissaoMock: IPermissao = {
  id: '7268b692-138b-493b-8bf0-1574a8c9109e',
  nome: 'ROLE_ADMIN'
};
