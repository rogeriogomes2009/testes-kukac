import { Veiculo } from "../interface/VeiculoRepos"

class Carro implements Veiculo {
  modelo: string
  ano: number
  portas: number
  marca: string

  constructor(modelo: string, ano: number, portas: number, marca: string) {
    this.modelo = modelo
    this.ano = ano
    this.portas = portas
    this.marca = marca
  }

}

export { Carro }