import { IGenero, generoMock } from "./genero";

const genero: IGenero = generoMock;

describe('Tests GeneroModel', () => {
  it('should test IGenero with value', () => {
    const generoModel: IGenero = {
      id: genero.id,
      descricao: genero.descricao,
      ativo: genero.ativo,
    };
    expect(generoModel.id).toEqual(generoMock.id);
    expect(generoModel.descricao).toEqual(generoMock.descricao);
    expect(generoModel.ativo).toEqual(generoMock.ativo);
  });
});
