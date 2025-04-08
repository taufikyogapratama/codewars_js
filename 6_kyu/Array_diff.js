const arrayDiff = (a, b) => a.filter((value) => !b.includes(value))

console.log(arrayDiff([1,2,3], [1,2]))