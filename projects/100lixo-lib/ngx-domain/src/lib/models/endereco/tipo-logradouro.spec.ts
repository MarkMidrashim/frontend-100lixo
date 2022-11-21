import { ITipoLogradouro, tipoLogradouroMock } from "./tipo-logradouro";

const tipoLogradouro: ITipoLogradouro = tipoLogradouroMock;

describe('Tests TipoLogradouroModel', () => {
  it('should test ITipoLogradouro with value', () => {
    const tipoLogradouroModel: ITipoLogradouro = {
      id: tipoLogradouro.id,
      nome: tipoLogradouro.nome,
      abreviacao: tipoLogradouro.abreviacao
    };
    expect(tipoLogradouroModel.id).toEqual(tipoLogradouroMock.id);
  });
});
