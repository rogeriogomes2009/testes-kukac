const { Router } = require("express");

const PalindController = require("./controllers/PalindController.js");
const PurchController = require("./controllers/PurchController.js");
const MotoController = require("./controllers/MotoController.js");
const CarController = require("./controllers/CarController.js");
const CepController = require("./controllers/CepController.js");

const routes = Router();

routes.get("/palind", PalindController.show);
routes.get("/purchase", PurchController.show);
routes.post("/motocycle", MotoController.store);
routes.get("/motocycle", MotoController.show);
routes.post("/car", CarController.store);
routes.get("/car", CarController.show);
routes.post("/ceps", CepController.show);

module.exports = routes;
