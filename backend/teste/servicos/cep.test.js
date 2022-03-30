const CEPs = require('../../src/app/servicos/CepServico');

describe("Testando serviços de CEPs", () => {
  it("Precisa retornar todos os endereços", async () => {
    const result = await CEPs([24750190, 24740000, 20020000, 24720170, 012300000]);
    expect(result.data);
  });
});
