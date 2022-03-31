import { Vehicle } from "../interface/VehicleRepos";

class Car implements Vehicle {
  modelo: string;
  ano: number;
  portas: number;
  marca: string;

  constructor(modelo: string, ano: number, portas: number, marca: string) {
    this.modelo = modelo;
    this.ano = ano;
    this.portas = portas;
    this.marca = marca;
  }
}

export { Car };
