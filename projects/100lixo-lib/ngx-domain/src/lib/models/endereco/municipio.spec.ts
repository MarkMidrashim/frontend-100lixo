import { IMunicipio, municipioMock } from "./municipio";

const municipio: IMunicipio = municipioMock;

describe('Tests MunicipioModel', () => {
  it('should test IMunicipio with value', () => {
    const municipioModel: IMunicipio = {
      id: municipio.id,
      nome: municipio.nome,
      estado: municipio.estado
    };
    expect(municipioModel.id).toEqual(municipioMock.id);
  });
});
