import { IEstado, estadoMock } from "./estado";

const estado: IEstado = estadoMock;

describe('Tests EstadoModel', () => {
  it('should test IEstado with value', () => {
    const estadoModel: IEstado = {
      id: estado.id,
      nome: estado.nome,
      sigla: estado.sigla
    };
    expect(estadoModel.id).toEqual(estadoMock.id);
  });
});
