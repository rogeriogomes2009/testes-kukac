const { Carro } = require('../servicos/CarServico.ts');
const { DATABASE } = require('../../db/basedados.js');


class CarControle {
  store(request, response) {
    const { modelo, ano, marca, portas } = request.body;

    if (!modelo || !ano || !marca || !portas) {
      return response.status(400).json({ error: 'Favor preencher todos os campos' });
    }

    if (typeof modelo !== 'string' || typeof marca !== 'string') {
      return response.status(400).json({ error: 'Favor preencher modelo e marca com texto' });
    }

    if (typeof ano !== 'number' || typeof portas !== 'number') {
      return response.status(400).json({ error: 'Favor preencher os campos ano e portas com números' });
    }

    if (![2, 4].includes(portas)) {
      return response.status(400).json({ error: 'Favor definir se 2 ou 4 portas' });
    }

    DATABASE.carros.push(new Carro(
      modelo,
      ano,
      marca,
      portas
    ));
    return response.json(DATABASE.carros);
  }
  show(request, response) {
    return response.json(DATABASE.carros);
  }

}



module.exports = new CarControle();
