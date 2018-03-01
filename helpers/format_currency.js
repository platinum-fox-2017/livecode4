function format_currency(value) {
  return `Rp. ${value.toLocaleString()}`
}

module.exports = format_currency;
