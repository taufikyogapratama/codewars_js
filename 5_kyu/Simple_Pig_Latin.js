// pigIt('Hello world !');     // elloHay orldway !

// tulis semua huruf setelah huruf pertama, kemudian tambahkan huruf pertama di paling belakang, kemudian tambahin ay

// 1. buat array berisi 

const pigIt = str => {
    const arrStr = str.split(" ")
    let firstLetter = [];
    let afterFirstLetter = [];
    for(const e of arrStr){
        firstLetter.push(e[0])
        afterFirstLetter.push(e.slice(1))
    }
    let result = ''
    for(let i = 0; i < arrStr.length; i++){
        result += `${afterFirstLetter[i]}${firstLetter[i]}`
        if(firstLetter[i] === "!" || firstLetter[i] === "," || firstLetter[i] === "." || firstLetter[i] === "?"){
            result += " "
        }else{
            result += "ay "
        }
    }
    return result.slice(0,-1)
}

console.log(pigIt('Hello world !'))
console.log(pigIt('Pig latin is cool'))