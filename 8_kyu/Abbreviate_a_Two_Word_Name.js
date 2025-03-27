const abbrevName = (name) => {
    let initial = ""
    initial += name[0]
    for (let i = 0; i < name.length; i++) {
        if (name[i] === " ") {
            initial += `.${name[i+1]}`
        }
    }
    return initial.toUpperCase()
}

console.log(abbrevName("Taufik Yoga Pratama"))