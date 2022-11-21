import { permissaoMock } from './permissao';
import { IPessoa, pessoaMock } from './pessoa';

const pessoa: IPessoa = pessoaMock;

describe('Tests PessoaModel', () => {
  it('should test IPessoa with value', () => {
    const pessoaModel: IPessoa = {
      id: pessoa.id,
      nome: pessoa.nome,
      email: pessoa.email,
      password: pessoa.password,
      ativo: pessoa.ativo,
      acessos: pessoa.acessos,
      permissoes: [permissaoMock]
    };
    expect(pessoaModel.id).toEqual(pessoaMock.id);
    expect(pessoaModel.nome).toEqual(pessoaMock.nome);
    expect(pessoaModel.email).toEqual(pessoaMock.email);
    expect(pessoaModel.ativo).toEqual(pessoaMock.ativo);
    expect(pessoaModel.permissoes).toEqual(pessoaMock.permissoes);
  });
});
