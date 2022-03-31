const cep = require("../services/CepServices.js");

class CepController {
  async show(request, response) {
    const { ceps } = request.body;

    for (let i = 0; i < ceps.length; i++) {
      if (ceps[i] === "null" || ceps[i] === 0) {
        return response.status(400).json({ error: "Precisa de 5 CEP's" });
      }
    }

    if (ceps.length !== 5) {
      return response.status(400).json({ error: "Precisa de  5 CEP's" });
    }

    for (let i = 0; i < ceps.length; i++) {
      if (ceps[i].toString().length !== 8) {
        return response
          .status(400)
          .json({ error: "O Código Postal precisa ter 8 digitos" });
      }
    }

    const cepPromises = await cep(ceps);

    return response.json(cepPromises);
  }
}

module.exports = new CepController();
