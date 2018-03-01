function formatUang(money) {
  return `Rp. ${money.toLocaleString()}`
}

// console.log(formatUang(45000))
module.exports = {
  formatUang: formatUang
}