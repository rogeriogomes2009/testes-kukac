const { palindromoRol } = require("../services/PalindServices.js");

class PalindController {
  show(request, response) {
    const { initialValue, finishValue } = request.query;

    if (+initialValue > +finishValue) {
      return response.status(400).json({
        error: "O valor inicial precisa ser < que valor final.",
      });
    }

    if (+initialValue <= 10) {
      return response
        .status(400)
        .json({ error: "Valor inicial precisa ser > 10" });
    }
    return response.json(palindromoRol(+initialValue, +finishValue));
  }
}

module.exports = new PalindController();
