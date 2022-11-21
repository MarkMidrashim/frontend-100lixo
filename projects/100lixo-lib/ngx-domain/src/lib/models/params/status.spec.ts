import { IStatus, statusMock } from "./status";

const status: IStatus = statusMock;

describe('Tests StatusModel', () => {
  it('should test IStatus with value', () => {
    const statusModel: IStatus = {
      id: status.id,
      descricao: status.descricao
    };
    expect(statusModel.id).toEqual(statusMock.id);
    expect(statusModel.descricao).toEqual(statusMock.descricao);
  });
});
