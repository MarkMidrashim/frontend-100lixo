export interface IEscolaridade {
  id: number;
  descricao: string;
  ativo: boolean;
}

export class Escolaridade implements IEscolaridade {
  constructor(rawData: IEscolaridade) {
    this.id = rawData.id;
    this.descricao = rawData.descricao;
    this.ativo = rawData.ativo;
  }

  id: number;
  descricao: string;
  ativo: boolean;
}

export const escolaridadeMock: IEscolaridade = {
  id: 1,
  descricao: 'Superior - Completo',
  ativo: true
};
