const digitize = n => {
    const num_str = String(n);
    const arr = [];
    for(let i in num_str){
        arr.unshift(Number(num_str[i]))
    }
    return arr;
}

console.log(digitize(35231))