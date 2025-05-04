const moveZeros = arr => {
    let nonZero = [];
    let zeros = [];
    for(const element of arr){
        if(element === 0 || element === +0){
            zeros.push(0)
        }else{
            nonZero.push(element)
        }
    }
    return [...nonZero,...zeros]
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))
console.log(moveZeros([ 9, +0, 9, 1, 2, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0 ]))
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))