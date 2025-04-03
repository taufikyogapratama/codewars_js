const accum = s => {
    const arr = s.split("");
    let str = "";
    for(let i = 0; i < arr.length; i++){
        str += arr[i].toUpperCase()
        for(let kali = 0; kali < i; kali++){
            str += arr[i].toLowerCase()
        }
        str += "-"
    }
    return str.slice(0, -1);
}

console.log(accum("RqaEzty"))