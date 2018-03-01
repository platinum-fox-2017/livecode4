function formatUang(value) {
    let result = value.toLocaleString();
    return `Rp. ${result}`;
}

module.exports = {
    formatUang: formatUang
}