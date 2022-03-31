const { Router } = require("express");

const PalindController = require("./controllers/PalindController.js");
const PurchController = require("./controllers/PurchController.js");
const MotoController = require("./controllers/MotoController.js");
const CarController = require("./controllers/CarController.js");
const CepController = require("./controllers/CepController.js");

const routes = Router();

routes.get("/palind", PalindController.show);
routes.get("/purchase", PurchController.show);
routes.post("/moto", MotoController.store);
routes.get("/moto", MotoController.show);
routes.post("/carro", CarController.store);
routes.get("/carro", CarController.show);
routes.post("/ceps", CepController.show);

module.exports = routes;
