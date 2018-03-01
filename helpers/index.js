function format_currency(input){
  return `RP.${input.toLocaleString()}`
}

module.exports = format_currency;
