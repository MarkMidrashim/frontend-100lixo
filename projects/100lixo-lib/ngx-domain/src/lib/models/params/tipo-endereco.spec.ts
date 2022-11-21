import { ITipoEndereco, tipoEnderecoMock } from "./tipo-endereco";

const tipoEndereco: ITipoEndereco = tipoEnderecoMock;

describe('Tests TipoEnderecoModel', () => {
  it('should test ITipoEndereco with value', () => {
    const tipoEnderecoModel: ITipoEndereco = {
      id: tipoEndereco.id,
      descricao: tipoEndereco.descricao
    };
    expect(tipoEnderecoModel.id).toEqual(tipoEnderecoMock.id);
    expect(tipoEnderecoModel.descricao).toEqual(tipoEnderecoMock.descricao);
  });
});
