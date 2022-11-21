import { ILogradouro, logradouroMock } from "../endereco/logradouro";
import {
  ICategoria,
  IFrequencia,
  IStatus,
  ITipoEndereco,
  IVolume,
  statusMock,
  categoriaMock,
  tipoEnderecoMock,
  volumeMock,
  frequenciaMock
} from "../params";

export interface ICliente {
  id: number;
  nome: string;
  documento: string;
  ultimosDigitosDocumento: number;
  dataNascimento: Date;
  tipoCliente: string;
  cep: string;
  numeroEndereco: number;
  complementoEndereco?: string;
  quantidadeUnidades?: number;
  ddd: number;
  telefone: string;
  email: string;
  sindico: boolean;
  dataAtualizacao?: Date;
  dataCriacao?: Date;
  frequencia: IFrequencia;
  logradouro: ILogradouro;
  volume: IVolume;
  tipoEndereco: ITipoEndereco;
  categoria: ICategoria;
  status: IStatus;
}

export class Cliente implements ICliente {
  constructor(rawData: ICliente) {
    this.id = rawData.id;
    this.nome = rawData.nome;
    this.documento = rawData.documento;
    this.ultimosDigitosDocumento = rawData.ultimosDigitosDocumento;
    this.dataNascimento = rawData.dataNascimento;
    this.tipoCliente = rawData.tipoCliente;
    this.cep = rawData.cep;
    this.numeroEndereco = rawData.numeroEndereco;
    this.complementoEndereco = rawData.complementoEndereco;
    this.quantidadeUnidades = rawData.quantidadeUnidades;
    this.ddd = rawData.ddd;
    this.telefone = rawData.telefone;
    this.email = rawData.email;
    this.sindico = rawData.sindico;
    this.dataAtualizacao = rawData.dataAtualizacao;
    this.dataCriacao = rawData.dataCriacao;
    this.frequencia = rawData.frequencia;
    this.logradouro = rawData.logradouro;
    this.volume = rawData.volume;
    this.tipoEndereco = rawData.tipoEndereco;
    this.categoria = rawData.categoria;
    this.status = rawData.status;
  }

  id: number;
  nome: string;
  documento: string;
  ultimosDigitosDocumento: number;
  dataNascimento: Date;
  tipoCliente: string;
  cep: string;
  numeroEndereco: number;
  complementoEndereco?: string;
  quantidadeUnidades?: number;
  ddd: number;
  telefone: string;
  email: string;
  sindico: boolean;
  dataAtualizacao?: Date;
  dataCriacao?: Date;
  frequencia: IFrequencia;
  logradouro: ILogradouro;
  volume: IVolume;
  tipoEndereco: ITipoEndereco;
  categoria: ICategoria;
  status: IStatus;
}

export const clienteMock: ICliente = {
  id: 1,
  nome: "Marcos Franco",
  documento: "U2FsdGVkX1+vQnouu+9eFNwDHr/Wjl8Pz/Lz4ooSv18=",
  ultimosDigitosDocumento: 52,
  dataNascimento: new Date(1997, 2, 13),
  tipoCliente: "PF",
  cep: "08552-310",
  numeroEndereco: 98,
  complementoEndereco: undefined,
  quantidadeUnidades: undefined,
  ddd: 11,
  telefone: "93224-7792",
  email: "marcos.franco@gmail.com",
  sindico: false,
  dataAtualizacao: undefined,
  frequencia: frequenciaMock,
  logradouro: logradouroMock,
  volume: volumeMock,
  tipoEndereco: tipoEnderecoMock,
  categoria: categoriaMock,
  status: statusMock
};
