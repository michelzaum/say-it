const addZeroToDecimals = require("./addZeroToDecimals");

function formatDate(value) {
  const valueToDate = new Date(value);

  const hours = addZeroToDecimals(valueToDate.getHours());
  const minutes = addZeroToDecimals(valueToDate.getMinutes());
  const day = addZeroToDecimals(valueToDate.getDate());
  const month = addZeroToDecimals(valueToDate.getMonth() + 1);
  const year = valueToDate.getFullYear();
  
  return `${day}/${month}/${year}, ${hours}:${minutes}`;
}

module.exports = formatDate;
