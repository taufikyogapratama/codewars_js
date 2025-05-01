const digitalRoot = n => {
    let strN = String(n);
    let arrN = strN.split("");
    let numCount = arrN.reduce((acc,cur) => {
        return acc + Number(cur)
    },0)
    let strNumCount = String(numCount);
    if(strNumCount.length === 1){
        return Number(strNumCount);
    }else{
        return digitalRoot(Number(strNumCount))
    }
}

console.log(digitalRoot(132189))