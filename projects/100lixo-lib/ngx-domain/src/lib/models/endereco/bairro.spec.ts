import { IBairro, bairroMock } from "./bairro";

const bairro: IBairro = bairroMock;

describe('Tests BairroModel', () => {
  it('should test IBairro with value', () => {
    const bairroModel: IBairro = {
      id: bairro.id,
      nome: bairro.nome,
      ativo: bairro.ativo,
      municipio: bairro.municipio
    };
    expect(bairroModel.id).toEqual(bairroMock.id);
  });
});
