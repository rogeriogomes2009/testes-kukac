import { Vehicle } from "../interface/VehicleRepos";

class Motocycle implements Vehicle {
  modelo: string;
  ano: number;
  marca: string;
  rodas: number;
  passageiros: number;

  constructor(modelo: string, ano: number, marca: string, passageiros: number) {
    this.modelo = modelo;
    this.ano = ano;
    this.marca = marca;
    this.rodas = 2;
    this.passageiros = passageiros;
  }
}

export { Motocycle };
