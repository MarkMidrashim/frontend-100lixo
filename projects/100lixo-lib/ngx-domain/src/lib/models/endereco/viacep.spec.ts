import { IViacep, viacepMock } from "./viacep";

const viacep: IViacep = viacepMock;

describe('Tests ViacepModel', () => {
  it('should test IViacep with value', () => {
    const viacepModel: IViacep = {
      cep: viacep.cep,
      logradouro: viacep.logradouro,
      complemento: viacep.complemento,
      bairro: viacep.bairro,
      localidade: viacep.localidade,
      uf: viacep.uf,
      ibge: viacep.ibge,
      gia: viacep.gia,
      ddd: viacep.ddd,
      siafi: viacep.siafi
    };
    expect(viacepModel.cep).toEqual(viacepMock.cep);
    expect(viacepModel.logradouro).toEqual(viacepMock.logradouro);
  });
});
