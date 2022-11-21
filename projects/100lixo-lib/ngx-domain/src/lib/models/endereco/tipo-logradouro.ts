export interface ITipoLogradouro {
  id: number;
  nome: string;
  abreviacao: string;
}

export class TipoLogradouro implements ITipoLogradouro {
  constructor(rawData: ITipoLogradouro) {
    this.id = rawData.id;
    this.nome = rawData.nome;
    this.abreviacao = rawData.abreviacao;
  }

  id: number;
  nome: string;
  abreviacao: string;
}

export const tipoLogradouroMock: ITipoLogradouro = {
  id: 128,
  nome: "Rua",
  abreviacao: "R"
};
