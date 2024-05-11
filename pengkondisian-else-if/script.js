// Pengkondisian else if
// Pola dasar Pengkondisian "else-if":

// if (kondisi1) {
//     blok kode yang akan dieksekusi jika kondisi terpenuhi
// } else if (kondisi2) {
//     blok kode yang akan dieksekusi jika kondisi2 terpenuhi
// } else if (kondisi3) {
//     blok kode yang akan dieksekusi jika kondisi3 terpenuhi
// }
//     dan seterusnya
// else {
//     blok kode yang akan dieksekusi jika semua kondisi sebelumnya tidak terpenuhi
// }

// var nilai = 70;

// if (nilai >= 90) {
//     console.log("Nilai Anda A.");
// } else if (nilai >= 80) {
//     console.log("Nilai Anda B.");
// } else if (nilai >= 70) {
//     console.log("Nilai Anda C.");
// } else {
//     console.log("Nilai Anda D atau kurang.");
// }

var angka = prompt("Masukan angka");

if (angka % 2 == 0) {
  alert(angka + " adalah bilangan genap");
} else if (angka % 2 == 1) {
  alert(angka + " adalah bilangan ganjil");
} else {
  alert("yang anda masukan bukan angka");
}
