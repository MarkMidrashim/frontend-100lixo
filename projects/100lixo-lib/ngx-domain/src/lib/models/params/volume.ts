import { IUnidade, unidadeMock } from "./unidade";

export interface IVolume {
  id: number;
  quantidade: number;
  unidade: IUnidade;
}

export class Volume implements IVolume {
  constructor(rawData: IVolume) {
    this.id = rawData.id;
    this.quantidade = rawData.quantidade;
    this.unidade = rawData.unidade;
  }

  id: number;
  quantidade: number;
  unidade: IUnidade;
}

export const volumeMock: IVolume = {
  id: 1,
  quantidade: 50.000,
  unidade: unidadeMock
};
