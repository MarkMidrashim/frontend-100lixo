import { IUnidade, unidadeMock } from "./unidade";

const unidade: IUnidade = unidadeMock;

describe('Tests UnidadeModel', () => {
  it('should test IUnidade with value', () => {
    const unidadeModel: IUnidade = {
      id: unidade.id,
      descricao: unidade.descricao
    };
    expect(unidadeModel.id).toEqual(unidadeMock.id);
    expect(unidadeModel.descricao).toEqual(unidadeMock.descricao);
  });
});
