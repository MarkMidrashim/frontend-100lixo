import { IFrequencia, frequenciaMock } from "./frequencia";

const frequencia: IFrequencia = frequenciaMock;

describe('Tests FrequenciaModel', () => {
  it('should test IFrequencia with value', () => {
    const frequenciaModel: IFrequencia = {
      id: frequencia.id,
      descricao: frequencia.descricao,
      sigla: frequencia.sigla
    };
    expect(frequenciaModel.id).toEqual(frequenciaMock.id);
    expect(frequenciaModel.descricao).toEqual(frequenciaMock.descricao);
    expect(frequenciaModel.sigla).toEqual(frequenciaMock.sigla);
  });
});
