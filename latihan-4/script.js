// Latihan else-if

// var noAngkot = 1;
// var angkotBeroperasi = 6;
// var jmlAngkot = 10;

// for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
//   if (noAngkot <= angkotBeroperasi) {
//     console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
//   } else if (noAngkot == 8 && noAngkot <= jmlAngkot) {
//     console.log("Angkot No. " + noAngkot + " sedang lembur");
//   } else {
//     console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");
//   }
// }

var noAngkot = 1;
var angkotBeroperasi = 6;
var jmlAngkot = 10;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
  } else if (noAngkot == 8) {
    console.log("Angkot No. " + noAngkot + " sedang lembur");
  } else {
    console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");
  }
}
