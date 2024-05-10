// Pengkondisian IF
// Pola dasar pengkondisian IF:

// if(kondisi) {
//     blok kode yang akan dieksekusi jika kondisi terpenuhi atau bernilai TRUE tapi jika kondisi ini bernilai FALSE, maka block kode ini akan di lewati dan tidak di eksekusi dan keluar dari block IF.
// }

// contoh penggunaan "if":
// var nilai = 80;
// if (nilai >= 70) {
//   console.log("Anda lulus ujian.");
// }

// var angka = 1;
// if (angka === 1) {
//   alert("anda memasukan angka 1");
// }

// var angka = 2;
// if (angka < 5) {
//   alert(angka + " lebih kecil dari 5");
// }

// var angka = 4;
// if (angka % 2 == 0) {
//   alert(angka + " adalah angka genap");
// }

// var angka = prompt("Masukan Angka");

// if (angka % 2 == 0) {
//   alert("angka" + angka + " yang anda masukan adalah angka genap");
// }

// var angka = prompt("Berapa hasil dari 3 + 3");

// if (angka == 6) {
//   alert("Selamat Jawaban Anda Benar. 6 adalah jawabannya");
// }

// -----------------------------------------------------

// Pengkondisian ELSE
// Pola dasar Pengkondisian IF-ELSE:

// if (kondisi) {
//     block kode yang akan dieksekusi jika kodisi terpenuhi
// } else {
//     block kode yang akan dieksekusi jika kondisi tidak terpenuhi
// }

// var nilai = 70;

// if (nilai >= 70) {
//   console.log("Selamat anda lulus ujian");
// } else {
//   console.log("Anda belum lulus ujian");
// }

// var angka = 4;
// if (angka % 2 == 0) {
//   alert(angka + " adalah angka Genap");
// } else {
//   alert(angka + " adalah angka Ganjil");
// }

// var angka = prompt("Masukan angka");

// if (angka % 2 == 0) {
//   alert("Angka " + angka + " yang anda masukan adalah angka Genap");
// } else {
//   alert("Angka " + angka + " yang anda masukan adalah angka Ganjil");
// }

var angka = prompt("Berapa hasil dari 3 + 3");

if (angka == 6) {
  alert("Selamat Jawaban Anda Benar. " + angka + " Adalah Jawaban yang Benar");
} else {
  alert("Maaf Jawaban Anda Kurang Tepat");
}
