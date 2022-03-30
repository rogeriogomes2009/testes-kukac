const palind = (number) => {
  const revNumber = number.toString().split("").reverse().join("");
  return revNumber == number;
};

const palindromoRol = (inicial, final) => {
  const valorRol = [];
  for (let index = inicial; index <= final; index += 1) {
    if (palind(index)) {
      valorRol.push(index);
    }
  }
  return valorRol;
};

module.exports = { palindromoRol, palind };
