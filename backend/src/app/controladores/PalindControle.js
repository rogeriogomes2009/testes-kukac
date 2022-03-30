const { palindromoRol } = require('../servicos/PalindServico.js');

class PalindromoController {
  show(request, response) {
    const { initialValue, finalValue } = request.query;

    if (+initialValue > +finalValue) {
      return response.status(400).json({
        error: 'O valor inicial precisa ser < que valor final.'
      });
    }

    if (+initialValue <= 10) {
      return response.status(400).json({ error: 'Valor inicial precisa ser > 10' });
    }
    return response.json(palindromoRol(+initialValue, +finalValue));
  }

}

module.exports = new PalindromoController();

