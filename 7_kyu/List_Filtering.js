const filter_list = l => {
    return l.filter((num) => typeof num === "number")
}

// const filter_list = l => {
//     let num = [];
//     for(let i in l){
//         if(Number.isFinite(l[i])){
//             num.unshift(l[i])
//         }
//     }
//     return num.reverse();
// }

console.log(filter_list([1,2,'aasf','1','123',123]))