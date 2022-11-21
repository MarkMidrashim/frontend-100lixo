import { ICliente, clienteMock } from "./cliente";

const cliente: ICliente = clienteMock;

describe('Tests ClienteModel', () => {
  it('should test ICliente with value', () => {
    const clienteModel: ICliente = {
      nome: cliente.nome,
      documento: cliente.documento,
      ultimosDigitosDocumento: cliente.ultimosDigitosDocumento,
      dataNascimento: cliente.dataNascimento,
      tipoCliente: cliente.tipoCliente,
      cep: cliente.cep,
      numeroEndereco: cliente.numeroEndereco,
      complementoEndereco: cliente.complementoEndereco,
      quantidadeUnidades: cliente.quantidadeUnidades,
      ddd: cliente.ddd,
      telefone: cliente.telefone,
      email: cliente.email,
      sindico: cliente.sindico,
      dataAtualizacao: cliente.dataAtualizacao,
      frequencia: cliente.frequencia,
      logradouro: cliente.logradouro,
      volume: cliente.volume,
      tipoEndereco: cliente.tipoEndereco,
      categoria: cliente.categoria,
      status: cliente.status
    };
    expect(clienteModel.cep).toEqual(clienteMock.cep);
  });
});
