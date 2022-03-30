const { Router } = require("express");

const PalindControle = require("./app/controladores/PalindControle.js");
const PurchControle = require("./app/controladores/PurshControle.js");
const MotoControle = require("./app/controladores/MotoControle.js");
const CarControle = require("./app/controladores/CarControle.js");
const CepControle = require("./app/controladores/CepControle.js");

const routes = Router();

routes.get("/palind", PalindControle.show);
routes.get("/compras", PurchControle.show);
routes.post("/moto", MotoControle.store);
routes.get("/moto", MotoControle.show);
routes.post("/carro", CarControle.store);
routes.get("/carro", CarControle.show);
routes.post("/ceps", CepControle.show);

module.exports = routes;
