const purchaseChange = require("../services/PurchServices.js");

class PurchController {
  show(request, response) {
    const { purshaseValue, payment } = request.query;

    if (+purshaseValue <= 0 || +payment <= 0) {
      return response
        .status(400)
        .json({ error: "Valor compra e valor pgto devem ser > que 0" });
    }
    if (+payment < purshaseValue) {
      return response
        .status(400)
        .json({ error: "Valor de pgto deve ser > que valor compra" });
    }
    return response.json(purchaseChange(+purshaseValue, +payment));
  }
}

module.exports = new PurchController();
