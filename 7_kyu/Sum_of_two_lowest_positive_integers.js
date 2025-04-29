// [19, 5, 42, 2, 77] => 2 , 5 => 7

const sumTwoSmallestNumbers = numbers => {
    let sortArr = numbers.sort((a,b)=>a-b);
    return sortArr[0]+sortArr[1]
}