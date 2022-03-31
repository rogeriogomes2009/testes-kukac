const { Car } = require("../services/CarServices.ts");
const { DATABASE } = require("../../db/database.js");

class CarController {
  store(request, response) {
    const { modelo, ano, marca, portas } = request.body;

    if (!modelo || !ano || !marca || !portas) {
      return response
        .status(400)
        .json({ error: "Favor preencher todos os campos" });
    }

    if (typeof modelo !== "string" || typeof marca !== "string") {
      return response
        .status(400)
        .json({ error: "Favor preencher modelo e marca com texto" });
    }

    if (typeof ano !== "number" || typeof portas !== "number") {
      return response
        .status(400)
        .json({ error: "Favor preencher os campos ano e portas com números" });
    }

    if (![2, 4].includes(portas)) {
      return response
        .status(400)
        .json({ error: "Favor definir se 2 ou 4 portas" });
    }

    DATABASE.cars.push(new Car(modelo, ano, marca, portas));
    return response.json(DATABASE.cars);
  }
  show(request, response) {
    return response.json(DATABASE.cars);
  }
}

module.exports = new CarController();
