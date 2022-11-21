import { IEscolaridade, escolaridadeMock } from "./escolaridade";

const escolaridade: IEscolaridade = escolaridadeMock;

describe('Tests EscolaridadeModel', () => {
  it('should test IEscolaridade with value', () => {
    const escolaridadeModel: IEscolaridade = {
      id: escolaridade.id,
      descricao: escolaridade.descricao,
      ativo: escolaridade.ativo,
    };
    expect(escolaridadeModel.id).toEqual(escolaridadeMock.id);
    expect(escolaridadeModel.descricao).toEqual(escolaridadeMock.descricao);
    expect(escolaridadeModel.ativo).toEqual(escolaridadeMock.ativo);
  });
});
