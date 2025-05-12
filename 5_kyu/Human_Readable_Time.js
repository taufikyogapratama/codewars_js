// 359999 => (99:59:59)

// 61s = 1:1

// 1. cari menit = detik / 60 dibulatkan kebawah, kemudian ambil modulenya 16 jadi detik
// 2. cari jam = menit /60 dibulatkan kebawah, kemudian ambil modulo 60 nya terus jadikan menit

const humanReadable = (seconds) => {
  if (seconds) {
    let detik = 0,
      menit = 0,
      jam = 0;
    menit = Math.floor(seconds / 60);
    detik = seconds % 60;
    jam = Math.floor(menit / 60);
    menit = menit % 60;
    return `${String(jam).length === 1 ? `0${jam}` : jam}:${
      String(menit).length === 1 ? `0${menit}` : menit
    }:${String(detik).length === 1 ? `0${detik}` : detik}`;
  } else {
    return "00:00:00";
  }
};

console.log(humanReadable(0));
console.log(humanReadable(359999));
console.log(humanReadable(59));
console.log(humanReadable(60));
console.log(humanReadable(90));
console.log(humanReadable(3599));
