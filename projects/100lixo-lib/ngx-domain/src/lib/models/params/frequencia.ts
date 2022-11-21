export interface IFrequencia {
  id: number;
  descricao: string;
  sigla: string;
}

export class Frequencia implements IFrequencia {
  constructor(rawData: IFrequencia) {
    this.id = rawData.id;
    this.descricao = rawData.descricao;
    this.sigla = rawData.sigla;
  }

  id: number;
  descricao: string;
  sigla: string;
}

export const frequenciaMock: IFrequencia = {
  id: 1,
  descricao: 'Semanal',
  sigla: 'S'
};
