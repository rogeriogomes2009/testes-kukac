const { Car } = require("../../src/app/services/CarServices");

describe("Testando serviços de carros", () => {
  it("Precisa devolver carro = {modelo: 'Fiesta', ano: 2019, portas: 4, marca: 'Ford' }", () => {
    const result = new Car("Fiesta", 2019, 4, "Ford");
    expect(result).toEqual({
      modelo: "Uno",
      ano: 2019,
      portas: 4,
      marca: "Ford",
    });
  });
});
