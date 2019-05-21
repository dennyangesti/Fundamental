// Let and Const Keyword

// var nilai = 5
// var nilai = 10

// console.log(nilai); // 

// let hasil = 4
// hasil = 8 // let hasil = 8, let dihapus untuk mengganti nilai

// console.log(hasil); // Syntax Error, declare hanya sekali saja

// const angka = 3.14
//angka = 314, Syntax Error, tidak bisa mengganti sebuah nilai di const

// console.log(angka);

// Variable Scope, darimana variable bisa diakses
// var => dibatasi oleh function, tidak bisa diakses dari luar
// let => dibatasi oleh function, dibatasi oleh kurung kurawal {}, tidak bisa diakses dari luar
// const => dibatasi oleh function, dibatasi oleh kurung kurawal {}, tidak bisa diakses dari luar

// function hitung() {
//     var didalam = 'String Biasa'
//     let ditengah = true    
//     const diluar = false
// }


// console.log(didalam)
// console.log(ditengah)
// console.log(diluar)

// '', "", ``

// var nama = `Denny`, umur = 24, pekerjaan = `nganggur`

// var es5 = 
// 'Nama saya ' + nama + 
// '\n, sekarang umur saya ' + umur + 
// '\n, saat ini saya ' + pekerjaan +
// '\n, 5 tahun lagi saya berumur ' + (umur+5)

// var es6 = `
// Nama saya ${nama}, 
// sekarang umur saya ${umur}, 
// saat ini saya ${pekerjaan},
// 5 tahun lagi saya berumur ${umur + 5}`

// console.log(es5);
// console.log(es6);

// var buah = [`Apel`, `Jeruk`, `Mangga`]
// var hari = [buah,`Senin`, `Selasa`, `Rabu`] // Memasukkan array ke dalam array
// var name = [...buah,`Angel`, `Milly`, `Tanu`, ...hari] // Penggabungan Array

// console.log(hari);
// console.log(name);

// var number = [1, 2, 3]

// function jumlah(x, y, z) {
//     console.log(x + y + z);
    
// }

// jumlah(number[0], number[1], number[2]) // ES5
// jumlah(...number) // ES6, lebih mudah dan singkat

// Default Parameter

// function tambah (a, b = 2, c = 3) {
//     return (a + b) * c

// }

// console.log(tambah(2)); // (2 + 2) * 3
// console.log(tambah(2, 1, 1)); // (2 + 1) * 1

// // Arrow Function

// function lama(a, b = 2, c = 3) {
//     return (a + b) * c
// }

// var baru = (a, b = 2, c = 3) => {
//     return (a + b) * c
// }

// let hey = () => {console.log(`Hey`)};
// let hei = () => console.log(`Hei`); // Jika hanya satu baris tidak harus memakai {}
// let hui = (nama) => {console.log(`Hui ${nama}`)};
// let hai = nama => console.log(`Hai ${nama}`); // Jika hanya satu parameter tidak harus memakai ()

// hey(); hei(); hui(`Daffa`); hai(`Denny`)

// let pai = () => {return 3.14};
// let pia = () => 3.14; // return 3.14

// console.log(pai());
// console.log(pia());

// var hitung = (x, y, fn) => {
//     return fn(x, y)
// }

// var kali = (a, b) => {
//     return a * b
// }

// var bagi = (a, b) => {
//     return
// }

// Array Filtering
/* 
.filter() adalah sebuah function yang menerima satu argumen/parameter
argumen/parameter tersebut adalah function yang me-return (HARUS) TRUE or FALSE
Return new Array
Data pada array yang menghasilkan TRUE akan di push ke new ARRAY
Akan looping sebanyakan data pada Array
Setiap looping setiap data pada array akan menjadi argument untuk function yang masuk ke filter
*/

// var arr = [0, 1, 2, 3, 4, 5]

// var hasilFilter = arr.filter(tru => tru > 3)
// var hasilFilter1 = arr.filter(tru => tru % 2 == 0) // Genap
// var hasilFilter2 = arr.filter(tru => tru % 2 != 0) // Ganjil

// console.log(hasilFilter);
// console.log(arr); // Tidak mengubah nilai array yang lama
// console.log(hasilFilter1);
// console.log(hasilFilter2);

// Array Mapping
/*
Function yang masuk ke .map() tidak harus menghasilkan TRUE or FALSE
Berguna untuk mengubah setiap data pada array
Menghasilkan array baru
*/

// var arrNumb = [1, 4, 9, 16, 25]

// var hasilMap = arrNumb.map(val => val * 2) // Mengkalikan 2 seluruh data dalam array arrNumb
// var hasilMap1 = arrNumb.map(val => val > 4) // Mengubah data array, untuk di cek true or false
// var hasilMap2 = funMap(arrNumb, val => val * 2)

// console.log(hasilMap);
// console.log(hasilMap2);
// console.log(hasilMap1);

// Latihan Function
// Membuat function .filter dan .map

// let belajarArr = [2, 4, 9, 10]
// let belajarMap = []

// var hasilArrMap = belajarArr.map(val => val * 2)
// console.log(hasilArrMap);



// for (let i = 0; i < belajarArr.length; i++){
//     belajarMap.push(belajarArr[i] * 2)
// }
// // console.log(belajarMap);
// console.log(belajarArr.length);




// var hitung = (x, y, fn) => {
    
//     return fn(x,y)
// }

// var tambah = (input1, input2) => {
    
//     return input1 + input2
// }

// var kurang = (input1, input2) => {

//     return input1 - input2
// }

// var hasilTambah = hitung(3, 4, tambah)
// var hasilKurang = hitung(10, 2, kurang)
// console.log(hasilTambah);
// console.log(hasilKurang);

// console.log(latihanFil);

// Membuat function tiruan .map

// var funMap = (arr, fn) => {
//     var arrBaru = []

//     for (var x = 0; x < arr.length; x++) {
//         arrBaru.push(fn (arr[x]))
//     }
//     return arrBaru
// }

// var nomor = [0, 1, 2, 3, 4, 5]

// var hasilFunMap = funMap(nomor, val => val * 2)
// var hasilJava = nomor.map(val => val * 2)

// console.log(hasilFunMap);
// console.log(hasilJava);


// // function tiruan dari .filter
// // membutuhkan if karena .filter hanya menerima nilai True or False

// var funFil = (arr, fn) => {
//     var newArr = []

//     for (var i = 0; i < arr.length; i++) {
//         if (fn (arr[i])) {
//         newArr.push(arr[i])

//         }
//     }
    
//     return newArr
// }

// var angka = [0, 1, 2, 3, 4, 5]

// var hasilFun = funFil(angka, val => val % 2 == 0)
// var hasilJS = angka.filter(val => val % 2 == 0)

// console.log(hasilFun);
// console.log(hasilJS);

// PROMISE

// var library = new Promise ((berhasil, gagal) => {
//     var buku = []

//     if (buku.length == 0) {
//         gagal(`Buku tidak tersedia.`)
//     } else {
//         berhasil(`Buku tersedia.`)
  
//     }
// })

// library.then((res => console.log(res))).catch((err) => console.log(err))
// func .then akan menjalankan function berhasil
// func .catch akan menjalankan function gagal

// OBJECT LITERAL (Properties)

// var merk = `Bajaj`
// var tahun = `2012`
// var pemilik = `Ling Tong`

// var pulsar = {
//     merk, tahun, pemilik
// }

// console.log(pulsar);

// OBJECT LITERAR (Method)

// var something = {
//     sayHello: function() {
//         console.log(`Hello ES5`); // ES 5
        
//     }
// }

// var somethings = {
//     sayHello() {
//         console.log(`Hello ES6`); // ES 6
        
//     }
// }

// something.sayHello()
// somethings.sayHello()

// DESTRUCTIONG ARRAY

// var buah = [`Apel`, `Duku`, `Leci`]

// var [a, d, l] = buah

// console.log(a);
// console.log(d);
// console.log(l);

// DESTRUCTING OBJECT

var andi = {
    nama: `Andi`,
    usia: 24,
    job: `PNS`
}

var {nama, usia, job} = andi

console.log(nama);
console.log(usia);
console.log(job);




