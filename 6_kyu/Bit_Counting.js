// 1234 is 10011010010
//  return 5 karena 1 nya ada 5?

const countBits = n => {
    let curNum = n;
    let arrBinner = [];
    while (curNum > 0){
        if(curNum % 2 === 0){
            arrBinner.unshift(0)
            curNum /= 2
        }else{
            arrBinner.unshift(1)
            curNum = Math.floor(curNum / 2)
        }
    }
    const one = arrBinner.filter((e) => {
        return e === 1
    })
    return one.length
};

console.log(countBits(1234))