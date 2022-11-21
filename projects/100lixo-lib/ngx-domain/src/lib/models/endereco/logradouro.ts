import { bairroMock, IBairro } from './bairro';
import { ITipoLogradouro, tipoLogradouroMock } from './tipo-logradouro';

export interface ILogradouro {
  id: number;
  nome: string;
  tipoLogradouro: ITipoLogradouro;
  bairro: IBairro;
}

export class Logradouro implements ILogradouro {
  constructor(rawData: ILogradouro) {
    this.id = rawData.id;
    this.nome = rawData.nome;
    this.tipoLogradouro = rawData.tipoLogradouro;
    this.bairro = rawData.bairro;
  }

  id: number;
  nome: string;
  tipoLogradouro: ITipoLogradouro;
  bairro: IBairro;
}

export const logradouroMock: ILogradouro = {
  id: 1,
  nome: "Visconde do Rio Branco",
  bairro: bairroMock,
  tipoLogradouro: tipoLogradouroMock
};
