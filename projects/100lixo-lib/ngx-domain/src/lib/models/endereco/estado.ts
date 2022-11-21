export interface IEstado {
  id: number;
  nome: string;
  sigla: string;
}

export class Estado implements IEstado {
  constructor(rawData: IEstado) {
    this.id = rawData.id;
    this.nome = rawData.nome;
    this.sigla = rawData.sigla;
  }

  id: number;
  nome: string;
  sigla: string;
}

export const estadoMock: IEstado = {
  id: 25,
  nome: "São Paulo",
  sigla: "SP"
};
