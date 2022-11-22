import { IColeta, coletaMock } from './coleta';

const coleta: IColeta = coletaMock;

describe('Tests ColetaModel', () => {
  it('should test IColeta with value', () => {
    const coletaModel: IColeta = {
      id: coleta.id,
      dataColeta: coleta.dataColeta,
      periodo: coleta.periodo,
      usuario: coleta.usuario
    };
    expect(coletaModel.id).toEqual(coletaMock.id);
    expect(coletaModel.dataColeta).toEqual(coletaMock.dataColeta);
    expect(coletaModel.periodo).toEqual(coletaMock.periodo);
    expect(coletaModel.usuario).toEqual(coletaMock.usuario);
  });
});
