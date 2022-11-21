import { IVolume, volumeMock } from "./volume";

const volume: IVolume = volumeMock;

describe('Tests VolumeModel', () => {
  it('should test IVolume with value', () => {
    const volumeModel: IVolume = {
      id: volume.id,
      quantidade: volume.quantidade,
      unidade: volume.unidade,
    };
    expect(volumeModel.id).toEqual(volumeMock.id);
    expect(volumeModel.quantidade).toEqual(volumeMock.quantidade);
    expect(volumeModel.unidade).toEqual(volumeMock.unidade);
  });
});
