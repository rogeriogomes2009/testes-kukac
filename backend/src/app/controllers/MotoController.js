const { Moto } = require("../services/MotoServices.ts");
const { DATABASE } = require("../../db/database.js");

class MotoController {
  store(request, response) {
    const { modelo, ano, marca, passageiros } = request.body;

    if (!modelo || !ano || !marca || (!passageiros && passageiros !== 0)) {
      return response
        .status(400)
        .json({ error: "Favor preencher todos os campos" });
    }

    if (typeof modelo !== "string" || typeof marca !== "string") {
      return response
        .status(400)
        .json({ error: "Favor preencher modelo e marca com texto" });
    }

    if (typeof ano !== "number" || typeof passageiros !== "number") {
      return response.status(400).json({
        error: "Favor preencher os campos ano e passageiros com números",
      });
    }

    if (![1, 2].includes(passageiros)) {
      return response
        .status(400)
        .json({ error: "Favor definir se 1 ou 2 passageiros" });
    }

    DATABASE.motocycles.push(new Moto(modelo, ano, marca, passageiros));
    return response.json(DATABASE.motocycles);
  }
  show(request, response) {
    return response.json(DATABASE.motocycles);
  }
}

module.exports = new MotoController();
