// // //* LOOPING
// // //! Mengulang suatu proses selama kondisi tertentu terpenuhi
// // //! kondisi terpenuhi, dia akan return nilai TRUE

// // //* WHILE LOOP
// // // while(masih hujan){
// // //     menggunakan payung
// // // }

// // // var angka = 0;

// // while(angka < 6) { // TRUE
// //     var hasil = angka % 2 // 1

// //     if(hasil == 0){ //  fALSE
// //         console.log(`${angka} adalah genap`);
// //     } else {
// //         console.log(`${angka} adalah ganjil`);

// //     }

// //     angka++
// // }

// // //* DO WHILE

// // // do{
// // //     Menggunakan payung
// // // }while(masih hujan)

// // var angka = 1; // Nilai awal

// // do {
// //     var hasil = angka % 2 // 1

// //     if(hasil == 0){ //  fALSE
// //         console.log(`${angka} adalah genap`);
// //     } else {
// //         console.log(`${angka} adalah ganjil`);

// //     }

// //     angka++ // Increment
// // } while (angka < 4); // Condition

// // //* FOR LOOP

// // var index;

// // //! Nilai awal ; Condition ; Increment
// // for(index = 1; index < 5; index++){

// //     if(index % 2 == 0) {
// //         console.log(`${index} adalah genap`);
// //     } else {
// //         console.log(`${index} adalah ganjil`)
// //     }

// // }

// // var index;
// // var result = []

// // for(index = 1; index < 5; index++){

// //     if(index % 2 == 0) {
// //         result.push(`${index} adalah genap`)
// //         console.log(`${index} adalah genap`);
// //     } else {
// //         result.push(`${index} adalah genap`)
// //         console.log(`${index} adalah ganjil`)
// //     }

// // }

// // result = result.map(val => `<li>${val}</li>`)

// // document.getElementById('hasil').innerHTML = result.join('')

// // // * * * *

// // for(var i = 0; i < 4; i++){ // i =

// //     result += ' * '

// // }

// // var result = ''

// // for (var i = 1; i < 4; i++){

// //     for( var j = 0; j < i; j++){
// //         result += ' * '
// //     }

// //     result += '\n'
// // }

// // console.log(result);

// // var numbers = [65, 44, 12, 4]

// // var jumlah = (total, num) => {
// //     return total + num
// // }

// // var hasil = numbers.reduce(jumlah)

// // console.log(hasil);

// // var add = (arr) => { // [1, 4, 9]
// //     var a = arr.reduce((total, num) => {
// //         return total + num
// //     })

// //     return a // 14
// // }

// // var multiply = (arr, fun) => {
// //     var doubles = arr.map ((val) => val * val)
// //     // [1, 4, 9]

// //     return fun(doubles)
// // }

// // var m = multiply([1, 2, 3], add)

// // console.log("Nilai m adalah " + m); // 14

// // var satu = ( ) => {

// //     console.log("Function satu");

// // }

// // satu()

// // var dua = (input) => {

// //     console.log(input);

// // }

// // dua("Dudung")

// // var tiga = (x, y, z) => {

// //     console.log(x + y + z)

// // }

// // tiga("Angka ", 12 ," adalah genap")

// // var empat = (a, b) => {

// //     var hasil = a * b

// //     return hasil //TODO Dikeluarkan dari funtion empat

// // }

// // var output = empat(3, 5)

// // console.log(output);

// // * Sort, Menggunakan data pada ARRAY

// var buah = [`Zaitun`, `Belimbing`, `Pepaya`, `Cherry`, `Apel`];

// console.log(buah);
// console.log(buah.sort());

// var angka = [1, 32, 123, 534, 42, 70, 6, 4, 98];

// console.log(angka);
// console.log(angka.sort());

// //! Ascendent
// console.log(
//   angka.sort((a, b) => {
//     return a - b;
//   })
// );
// //! Descendent
// console.log(
//   angka.sort((a, b) => {
//     return b - a;
//   })
// );

var bintang5 = "";
var i, j, k;
for (i = 1; i <= 5; i++) {
  for (j = i; j <= 5; j++) {
    bintang5 += " C ";
  }
  for (k = 1; k <= i; k++) {
    bintang5 += " * ";
  }
  bintang5 += "\n";
}
console.log(bintang5);
