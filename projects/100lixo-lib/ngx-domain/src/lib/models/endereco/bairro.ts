import { IMunicipio, municipioMock } from './municipio';

export interface IBairro {
  id: number;
  nome: string;
  ativo: boolean;
  municipio: IMunicipio;
}

export class Bairro implements IBairro {
  constructor(rawData: IBairro) {
    this.id = rawData.id;
    this.nome = rawData.nome;
    this.ativo = rawData.ativo;
    this.municipio = rawData.municipio;
  }

  id: number;
  nome: string;
  ativo: boolean;
  municipio: IMunicipio;
}

export const bairroMock: IBairro = {
  id: 1,
  ativo: true,
  nome: "Vila Perracine",
  municipio: municipioMock
};
