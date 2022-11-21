import { IPermissao, permissaoMock } from './permissao';

const permissao: IPermissao = permissaoMock;

describe('Tests PermissaoModel', () => {
  it('should test IPermissao with value', () => {
    const permissaoModel: IPermissao = {
      id: permissao.id,
      nome: permissao.nome
    };
    expect(permissaoModel.id).toEqual(permissaoMock.id);
    expect(permissaoModel.nome).toEqual(permissaoMock.nome);
  });
});
