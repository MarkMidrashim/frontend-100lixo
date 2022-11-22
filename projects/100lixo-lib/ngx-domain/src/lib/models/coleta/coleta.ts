import { IPessoa, pessoaMock } from "../pessoa";

export declare type TPeriodo = 'M' | 'T' | 'N';

export interface IColeta {
  id: string;
  dataColeta: Date;
  periodo: TPeriodo;
  usuario: IPessoa;
}

export class Coleta implements IColeta {
  id: string;
  dataColeta: Date;
  periodo: TPeriodo;
  usuario: IPessoa;

  constructor(rawData: IColeta) {
    this.id = rawData.id;
    this.id = rawData.id;
    this.dataColeta = rawData.dataColeta;
    this.periodo = rawData.periodo;
    this.usuario = rawData.usuario;
  }
}

export const coletaMock: IColeta = {
  id: '7268b692-138b-493b-8bf0-1574a8c9109e',
  dataColeta: new Date(2022, 10, 10),
  periodo: 'T',
  usuario: pessoaMock
};
