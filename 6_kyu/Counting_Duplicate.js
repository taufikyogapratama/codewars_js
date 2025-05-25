/*"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice*/

/*
 * 1. buat set
 * 2. return text.length - set.length
*/

const duplicateCount = text => {
  const lowerText = text.toLowerCase();
  const karakterCount = {};
  for (let char of lowerText) {
    karakterCount[char] = (karakterCount[char] || 0) + 1;
  }
  let jumlahDuplikat = 0;
  for (let key in karakterCount) {
    if (karakterCount[key] > 1) {
      jumlahDuplikat++;
    }
  }
  return jumlahDuplikat;
}

console.log(duplicateCount("Indivisibilities"))
console.log(duplicateCount("aA11"))
console.log(duplicateCount("aabBcde"))

