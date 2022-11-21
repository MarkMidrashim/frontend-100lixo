export interface ICategoria {
  id: number;
  descricao: string;
}

export class Categoria implements ICategoria {
  constructor(rawData: ICategoria) {
    this.id = rawData.id;
    this.descricao = rawData.descricao;
  }

  id: number;
  descricao: string;
}

export const categoriaMock: ICategoria = {
  id: 1,
  descricao: 'Comércio'
};
