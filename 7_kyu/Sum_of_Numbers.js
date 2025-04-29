// const getSum = (a,b) => a === b ? a : a + b;


const getSum = (a,b) => {
    if(a === b){
        return a;
    }else if(a < b){
        let result = 0;
        for(let early = a; early < b+1; early++){
            result += early
        }
        return result
    }else{
        let result = 0;
        for(let early = a; early > b-1; early--){
            result += early
        }
        return result
    }
}
console.log(getSum(5,-1))
console.log(getSum(-392,-53))