const purchaseChange = require("../../src/app/services/PurshServices").default;

describe("Testando serviços de compra", () => {
  it("Deve retornar troco = 62, notas de 100 = 0, notas de 10 = 6 e notas de 1 = 2", () => {
    const result = purchaseChange(100, 162);
    expect(result).toEqual({
      troco: 62,
      "notes of 100": 0,
      "notes of 10": 6,
      "notes of 1": 2,
    });
  });
  it("Deve retonar troco = 0, notas de 100 = 0, notas de 10 = 0 e notas de 1 = 0", () => {
    const result = purchaseChange(100, 100);
    expect(result).toEqual({
      troco: 0,
      "notas de 100": 0,
      "notas de 10": 0,
      "notas de 1": 0,
    });
  });
});
