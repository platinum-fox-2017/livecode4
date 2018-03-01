function formatCurrency(value){
    return `Rp. ${value.toLocaleString()}`
}

module.exports = {
    formatCurrency: formatCurrency
}