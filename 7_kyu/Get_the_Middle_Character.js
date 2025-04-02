const getMiddle = s => {
    let str = ""
    if(s.length % 2 === 0){
        const str_length = s.length / 2;
        const result = s.slice(str_length - 1, str_length + 1)
        str += result
    }else{
        const str_length = Math.floor(s.length / 2);
        const result = s.slice(str_length, str_length + 1)
        str += result
    }
    return str
}

console.log(getMiddle("test"))