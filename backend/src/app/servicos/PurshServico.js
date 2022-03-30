
const rest = (valor, nota) => valor % nota;

const trocoCompra = (valorCompra, pagamento) => {
  const notaTroco = (nota, valor) => {
    if (troco - rest(nota, valor) === 0) {
      return 0;
    }
    const notas = (troco - rest(valor, nota)) / nota;
    troco = troco - (notas * nota);
    return notas;
  };
  let troco = pagamento - valorCompra;


  return {
    troco,
    'notas de 100': notaTroco(100, troco),
    'notas de 10': notaTroco(10, troco),
    'notas de 1': notaTroco(1, troco)
  };
};



export default trocoCompra;
