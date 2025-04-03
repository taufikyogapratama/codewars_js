const isIsogram = str => {
    const unik = new Set(str.toLowerCase().split("")).size;
    return unik === str.length
}

console.log(isIsogram("Dermatoglyphics"))