import { estadoMock, IEstado } from "./estado";

export interface IMunicipio {
  id: number;
  nome: string;
  estado: IEstado;
}

export class Municipio implements IMunicipio {
  constructor(rawData: IMunicipio) {
    this.id = rawData.id;
    this.nome = rawData.nome;
    this.estado = rawData.estado;
  }

  id: number;
  nome: string;
  estado: IEstado;
}

export const municipioMock: IMunicipio = {
  id: 1,
  nome: "Poá",
  estado: estadoMock
};
