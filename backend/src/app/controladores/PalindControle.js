const { palindromoRol } = require("../servicos/PalindServico.js");

class PalindromoController {
  show(request, response) {
    const { valorInicial, valorFinal } = request.query;

    if (+valorInicial > +valorFinal) {
      return response.status(400).json({
        error: "O valor inicial precisa ser < que valor final.",
      });
    }

    if (+valorInicial <= 10) {
      return response
        .status(400)
        .json({ error: "Valor inicial precisa ser > 10" });
    }
    return response.json(palindromoRol(+valorInicial, +valorFinal));
  }
}

module.exports = new PalindromoController();
