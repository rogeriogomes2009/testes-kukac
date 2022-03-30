const trocaCompra = require('../servicos/PurchServico');

class PurchControle {
  show(request, response) {
    const { valorCompra, pagamento } = request.query;

    if (+valorCompra <= 0 || +pagamento <= 0) {
      return response.status(400).json({ error: 'Valor compra e valor pgto devem ser > que 0' });
    }
    if (+pagamento < valorCompra) {
      return response.status(400).json({ error: 'Valor de pgto deve ser > que valor compra' });
    }
    return response.json(trocaCompra(+valorCompra, +pagamento));
  }
}


module.exports = new PurchControle();
