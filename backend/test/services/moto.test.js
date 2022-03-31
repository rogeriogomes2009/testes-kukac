const { Moto } = require("../../src/app/services/MotoServices");

describe("Testando serviços de motocicleta", () => {
  it("Precisa retornar motocicleta = {modelo: 'Hornet', ano: 2018, marca: 'Honda', rodas: '2', passageiros: 2 }", () => {
    const result = new Moto("Hornet", 2018, "Honda", 2);
    expect(result).toEqual({
      modelo: "Hornet",
      ano: 2018,
      marca: "Honda",
      rodas: 2,
      passageiros: 2,
    });
  });
});
