'use strict'

function format_currency(num) {
    num = num.toLocaleString();
    return `Rp. ${num}`
}

module.exports = {
    format_currency: format_currency
} 