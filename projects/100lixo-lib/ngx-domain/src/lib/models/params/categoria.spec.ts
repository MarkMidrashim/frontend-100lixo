import { ICategoria, categoriaMock } from "./categoria";

const categoria: ICategoria = categoriaMock;

describe('Tests CategoriaModel', () => {
  it('should test ICategoria with value', () => {
    const categoriaModel: ICategoria = {
      id: categoria.id,
      descricao: categoria.descricao
    };
    expect(categoriaModel.id).toEqual(categoriaMock.id);
    expect(categoriaModel.descricao).toEqual(categoriaMock.descricao);
  });
});
