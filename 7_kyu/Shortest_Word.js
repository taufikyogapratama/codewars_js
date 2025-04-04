const findShort = s => {
    const arr = s.split(" ");
    let arr_length = [];
    arr.map(value => {
        arr_length.unshift(value.length)
    })
    return Math.min(...arr_length)
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))