export interface IViacep {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export class Viacep implements IViacep {
  constructor(rawData: IViacep) {
    this.cep = rawData.cep;
    this.logradouro = rawData.logradouro;
    this.complemento = rawData.complemento;
    this.bairro = rawData.bairro;
    this.localidade = rawData.localidade;
    this.uf = rawData.uf;
    this.ibge = rawData.ibge;
    this.gia = rawData.gia;
    this.ddd = rawData.ddd;
    this.siafi = rawData.siafi;
  }

  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export const viacepMock: IViacep = {
  cep: "08613-450",
  logradouro: "Rua Um",
  complemento: "",
  bairro: "Jardim Lazzareschi",
  localidade: "Suzano",
  uf: "SP",
  ibge: "3552502",
  gia: "6725",
  ddd: "11",
  siafi: "7151"
};
