export interface ITipoEndereco {
  id: number;
  descricao: string;
}

export class TipoEndereco implements ITipoEndereco {
  id: number;
  descricao: string;

  constructor(rawData: ITipoEndereco) {
    this.id = rawData.id;
    this.descricao = rawData.descricao;
  }
}

export const tipoEnderecoMock: ITipoEndereco = {
  id: 1,
  descricao: 'Residencial'
};
