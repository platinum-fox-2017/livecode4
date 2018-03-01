function formatRupiah(value){
    let beString = value.toString();
    let newString = '';
    for(let i=beString.length-1; i>=0; i--){
        if(i === 2){
            newString += beString[i]+ ',';
        } else {
            newString += beString[i];
        }
    }
    let balik = newString.split('').reverse().join('');
    return 'Rp ' + balik;
}

module.exports = {formatRupiah}