const { Roteador } = require("express");

const PalindControle = require("./app/controladores/PalindControle.js");
const PurchControle = require("./app/controladores/PurshControle.js");
const MotoControle = require("./app/controladores/MotoControle.js");
const CarControle = require("./app/controladores/CarControle.js");
const CepControle = require("./app/controladores/CepControle.js");

const roteador = Roteador();

roteador.get("/palindromo", PalindControle.show);
roteador.get("/compra", PurchControle.show);
roteador.post("/moto", MotoControle.store);
roteador.get("/moto", MotoControle.show);
roteador.post("/carro", CarControle.store);
roteador.get("/carro", CarControle.show);
roteador.post("/ceps", CepControle.show);

module.exports = roteador;
