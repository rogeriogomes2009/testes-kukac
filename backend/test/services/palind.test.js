const PalindService = require("../../src/app/services/PalindServices");

describe("Testando serviço Palindromo", () => {
  it("retornar verdadeiro para '212'", () => {
    const result = PalindService.palindromo(212);
    expect(result).toBe(true);
  });

  it("retornar falso para '789'", () => {
    const result = PalindService.palindromo(789);
    expect(result).toBe(false);
  });

  it("retornar verdadeiro para  '616'", () => {
    const result = PalindService.palindromo(616);
    expect(result).toBe(true);
  });

  it("Precisa retornar 44", () => {
    const result = PalindServico.palindromo(44, 45);
    expect(result).toContain(44);
  });
  it("precisa retornar 101-111-121-191-202-212-222-313-414-515-616-717-818", () => {
    const result = PalindService.palindromoRol(100, 202);
    expect(result).toContain(
      101,
      111,
      121,
      191,
      202,
      212,
      222,
      313,
      414,
      515,
      616,
      717,
      818
    );
  });
});
