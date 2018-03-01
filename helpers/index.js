class Helper {
    static getPrice(number) {
        return 'Rp. '+ parseInt(number).toLocaleString();
    }
}

module.exports = Helper;