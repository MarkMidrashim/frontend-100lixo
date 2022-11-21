export interface IUnidade {
  id: number;
  descricao: string;
}

export class Unidade implements IUnidade {
  id: number;
  descricao: string;

  constructor(rawData: IUnidade) {
    this.id = rawData.id;
    this.descricao = rawData.descricao;
  }
}

export const unidadeMock: IUnidade = {
  id: 1,
  descricao: 'Litros'
};
