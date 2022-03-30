const axios = require('axios');

const baseUrl = `https://viacep.com.br/ws`;

const CEPs = async (ceps = []) => {
  const arrAddresses = [];

  const consumingAPI = await Promise.all(ceps.map(cep => axios.get(`${baseUrl}/${cep}/json/`)));
  consumingAPI.map(address => arrAddresses.push(address.data));

  return arrAddresses;
};

module.exports = CEPs;

