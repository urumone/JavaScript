// for (var nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++) {
//   console.log("hello world " + nilaiAwal + "x");
// }

// Latihan Pengulangan

var jlmAngkot = 10;
var angkotBeroperasi = 5;
var noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
  console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
  noAngkot++;
}

// for (noAngkot; noAngkot <= jlmAngkot; noAngkot++) {
//   console.log("Angkot No " + noAngkot + " sedang tidak beroperasi");
// }

// Atau bisa gunakan perintah berikut

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jlmAngkot; noAngkot++) {
  console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");
}
