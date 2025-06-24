/*
Input = ["Ryan", "Kieran", "Jason", "Yous"]
Output = ["Ryan", "Yous"]

Input = ["Peter", "Stephen", "Joe"]
Output = []

langkah langkah:
1. buat array kosong
2. looping, jika element.length === 4 masukkan ke array kosong tadi
3. return array yang sudah dibuat

looping pakai forEach

*/

/*
const friend = (friends) => {
  const result = [];
  friends.forEach((e) => {
    if (e.length === 4) {
      result.push(e);
    }
  });
  return result;
};
*/

const friend = (friends) => friends.filter((e) => e.length === 4);

console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));
console.log(friend(["Peter", "Stephen", "Joe"]));
