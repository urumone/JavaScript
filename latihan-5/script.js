var noAngkot = 1;
var jmlAngkot = 10;
var angkotBeroperasi = 6;

for (noAngkot; noAngkot <= 10; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
    //   } else if (noAngkot == 8) {
    //     console.log("Angkot No. " + noAngkot + " sedang lembur");
  } else if (noAngkot == 8 || noAngkot == 10) {
    console.log("Angkot No. " + noAngkot + " sedang lembur");
    //   } else if (noAngkot == 10) {
    //     console.log("Angkot No. " + noAngkot + " sedang lembur");
  } else {
    console.log("Angkot No. " + noAngkot + " Sedang tidak beroperasi");
  }
}
