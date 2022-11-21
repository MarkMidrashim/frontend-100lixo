import { ILogradouro, logradouroMock } from "./logradouro";

const logradouro: ILogradouro = logradouroMock;

describe('Tests LogradouroModel', () => {
  it('should test ILogradouro with value', () => {
    const logradouroModel: ILogradouro = {
      id: logradouro.id,
      nome: logradouro.nome,
      tipoLogradouro: logradouro.tipoLogradouro,
      bairro: logradouro.bairro
    };
    expect(logradouroModel.id).toEqual(logradouroMock.id);
  });
});
