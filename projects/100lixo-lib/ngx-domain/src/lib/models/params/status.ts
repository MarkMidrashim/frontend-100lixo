export interface IStatus {
  id: number;
  descricao: string;
}

export class Status implements IStatus {
  id: number;
  descricao: string;

  constructor(rawData: IStatus) {
    this.id = rawData.id;
    this.descricao = rawData.descricao;
  }
}

export const statusMock: IStatus = {
  id: 1,
  descricao: 'Novo'
};
