const sortIntegers=(number)=>{
    return parseInt(number.toString().split('').sort().reverse().toString().replace(/,/g,''));
}

sortIntegers(1235464);