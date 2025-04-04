const solution = number => {
    let result = 0;
    if(number > 0){
        for(let i = number - 1; i > 0; i--){
            if(i % 3 === 0 || i % 5 === 0){
                result += i
            }
        }
        return result
    }else{
        return 0
    }   
}

console.log(solution(-10))