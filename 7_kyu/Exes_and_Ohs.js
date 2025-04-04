const XO = str => {
    let o_count = "";
    let x_count = "";
    const str_lower = str.toLowerCase();
    for(let i = 0; i < str_lower.length;i++){
        if(str_lower[i] === "o"){
            o_count += "o";
        }else if(str_lower[i] === "x"){
            x_count += "x"
        }
    }
    if(o_count.length === 0 & x_count === 0){
        return true
    }else if(o_count.length === x_count.length){
        return true
    }else{
        return false
    }
}

console.log(XO("zzoo"))