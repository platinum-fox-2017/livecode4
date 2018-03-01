format_currency = (num) => {
  return `Rp. ${Number(num).toLocaleString()}`;
}
module.exports = {
  format_currency: format_currency
};
