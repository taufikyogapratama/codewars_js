const findOdd = A => {
    if(A.length === 1){
        return A[0]
    }else{
        const data = A.reduce((acc, cur) => {
            acc[cur] = (acc[cur] || 0) + 1
            return acc
        },{})
        for(let odd in data){
            if(data[odd] % 2 !== 0){
                return Number(odd)
            }
        }
    }
}

console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))