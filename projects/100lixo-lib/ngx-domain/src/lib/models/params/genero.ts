export interface IGenero {
  id: number;
  descricao: string;
  ativo: boolean;
}

export class Genero implements IGenero {
  constructor(rawData: IGenero) {
    this.id = rawData.id;
    this.descricao = rawData.descricao;
    this.ativo = rawData.ativo;
  }

  id: number;
  descricao: string;
  ativo: boolean;
}

export const generoMock: IGenero = {
  id: 1,
  descricao: 'Feminino',
  ativo: true
};
