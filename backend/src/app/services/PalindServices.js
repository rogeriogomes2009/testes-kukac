const palind = (number) => {
  const revNumber = number.toString().split("").reverse().join("");
  return revNumber == number;
};

const palindList = (initial, final) => {
  const listValue = [];
  for (let index = initial; index <= final; index += 1) {
    if (palind(index)) {
      listValue.push(index);
    }
  }
  return listValue;
};

module.exports = { palindList, palind };
