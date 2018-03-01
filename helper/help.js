class Help{
    static format_currency(number){
        let reverse = number.toString().split('').reverse();
        let arr =[];
        for(let i=0; i<reverse.length; i++){
            if((i+1)%3 ===0 && (i+1)!== reverse.length){
                arr.push(reverse[i]);
                arr.push('.');
            } else {
                arr.push(reverse[i]);
            }
        }
        return 'Rp. ' + arr.reverse().join('');
    }
}

module.exports = Help;