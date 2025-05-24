/*
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
*/

/*
1. Buat array even dan odd
2. buat looping untuk mengecek setiap angka add atau even
3. jika even masukkan di array even dan jika odd masukkan di array odd
4. return array yang element nya 1
*/

const findOutlier = integers => {
    let even = [];
    let odd = [];
    for(let i = 0; i < integers.length; i++){
        if(integers[i] % 2 === 0){
            even.push(integers[i]);
        }else{
            odd.push(integers[i]);
        };
    };
    if(even.length === 1){
        return even[0];
    }else{
        return odd[0];
    };
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
console.log(findOutlier([0, 1, 2]))
console.log(findOutlier([1, 2, 3]))
console.log(findOutlier([2,6,8,10,3]))
console.log(findOutlier([0,0,3,0,0]))
console.log(findOutlier([1,1,0,1,1]))