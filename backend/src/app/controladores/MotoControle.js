const { Moto } = require("../servicos/MotoServico.ts");
const { DATABASE } = require("../../db/basedados.js");

class MotoControle {
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
      return response
        .status(400)
        .json({
          error: "Favor preencher os campos ano e passageiros com números",
        });
    }

    if (![1, 2].includes(passageiros)) {
      return response
        .status(400)
        .json({ error: "Favor definir se 1 ou 2 passageiros" });
    }

    DATABASE.motos.push(new Moto(modelo, ano, marca, passageiros));
    return response.json(DATABASE.motos);
  }
  show(request, response) {
    return response.json(DATABASE.motos);
  }
}

module.exports = new MotoControle();
