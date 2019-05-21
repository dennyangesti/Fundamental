// console.log("my name is denny");

// // Ini adalah komentar
// console.log("last");

// // Testing
// // komentar
// // dulu

// var nama = 'Denny';
// console.log(nama);

// var warna = 'Biru';
// var angka = 1994;
// console.log(warna); // Variable
// console.log('warna'); // String
// console.log(angka); // Variable

// var usia = 24; // variable hanya bisa menyimpan 1 nilai
// usia = 30;
// console.log(usia);

// var x = 'halo haha hadir';
// var y = 'DUNIA';
// var z = 12345;

// var hasilX = x.toUpperCase();
// console.log(hasilX);

// var hasilY = y.toLowerCase();
// console.log(hasilY);

// console.log(x.replace('ha', 'mi')); // hanya mengubah 'ha' pertama atau 1x
// console.log(x.replace(/ha/g, 'mi')); // mengubah seluruh 'ha', karna ada 'g' yang bersifat global

// console.log(z) // 12345
// console.log(z.toString()) // '12345'

// var stringAngka = '12345'; // String
// var angka = 12345; // Number

// Number dibagi 2, Integer & Float
// Integer = Angka Bulat
// Float = Angka Decimal

// console.log(parseInt(stringAngka));
// console.log(stringAngka);

// var stringFloat = '123.456';
// var angkaDecimal = 123.456;

// console.log(parseFloat(stringFloat));
// console.log(stringFloat);
// console.log(parseInt(stringFloat)); // Hanya membuang bagian decimalnya saja

// // SHIFT+ALT, COPY KE BAWAH

// var a = parseFloat(stringFloat); // menyimpan data di variabel yang baru
// console.log(a); // print data yang disimpan di variabel a

// var b = parseFloat(stringFloat); // menyimpan data di variabel yang baru
// console.log(typeof(b)); // print tipe data yang disimpan di variabel b

// var hari = 'Selasa';
// var tanggal = 16;
// var nama = 'Denny';
// var usia = 24;

// console.log('Ini adalah string pertama ' + ' dan ini kedua');
// console.log('Hari ini adalah hari ' + hari);
// console.log('Hari ini tanggal ' + tanggal);
// console.log(nama + ' ' + usia);

// // ketika number bertemu string, maka number akan menjadi string -> type coersin

// var usiaSaya = 24
// var usiaKamu = 12

// console.log(usiaSaya ** usiaKamu)
// var hasilKali = usiaSaya * usiaKamu
// console.log('Hasil perkaliannya adalah ' + hasilKali);

// console.log('Hasil perjumlahannya adalah ' + usiaSaya + usiaKamu); // akan membuat number menjadi string
// console.log('Hasil perjumlahannya adalah ' + (usiaSaya + usiaKamu)); // number akan diproses baru menjadi string
// console.log('Hasil pengurangannya adalah ' + (usiaSaya - usiaKamu)); // number akan diprosesbaru menjadi string
// console.log('Hasil pembagiannya adalah ' + usiaSaya / usiaKamu);
// console.log('Hasil modulusnya adalah ' + usiaSaya % usiaKamu);

// var angkaBebas = 98
// angkaBebas++ // +1
// angkaBebas++ // +1
// console.log(angkaBebas);
// angkaBebas-- // -1
// angkaBebas-- // -1
// console.log(angkaBebas);

// console.log(angkaBebas+=2) // angkaBebas + 2
// console.log(angkaBebas-=2) // angkaBebas - 2
// console.log(angkaBebas*=2) // angkaBebas * 2
// console.log(angkaBebas/=2) // angkaBebas / 2

// Math Object

// console.log(Math.PI); // Hasil matematika dari PI
// console.log(Math.abs(-4.7)); // absolut, menghilangkan nilai minus atau negatif
// console.log(Math.pow(8, 2)); // pangkat, hasil dari 8 pangkat 2
// console.log(Math.sqrt(64)); // akar 2, hasil dari 64 akar 2
// console.log(Math.cbrt(8)); // akar 3, hasil dari 8 akar 3

// Pembulatan Math

// console.log(Math.round(4.7)); // pembulatan matematika
// console.log(Math.round(4.4)); // pembulatan matematika
// console.log(Math.floor(4.7)); // pembulatan ke bawah
// console.log(Math.ceil(4.4)); // pembulatan ke atas

// Math, Min, Max

// console.log(Math.random()); // Memilih angka secara random dari 0 - 0.9
// console.log(Math.random() * 11); // Memilih angka secara random dari 0 - 10
// console.log(Math.floor(Math.random() * 11)); ; // Memilih dan membulatkan angka secara random dari 0-10

// console.log(Math.max(1, 3, 5)) // memilih angka yang paling besar
// console.log(Math.min(1, 3, 5)) // memilih angka yang paling kecil

// Date Object

// var tanggal = new Date()
// console.log(tanggal)
// console.log(tanggal.getFullYear());
// console.log(tanggal.getMonth()); // dimulai dari 0, januari = 0
// console.log(tanggal.getDate());
// console.log(tanggal.getDay());
// console.log(tanggal.getHours());
// console.log(tanggal.getMinutes());
// console.log(tanggal.getSeconds());
// console.log(tanggal.getMilliseconds());
// console.log(tanggal.getTime());

// IF ELSE

// var umur = 25

// if (umur <= 18) {
//     console.log('Belum cukup umur')
// } else {
//     console.log('Sudah cukup umur');
    
// }


// WHILE
// console.log('Angka manual 1');
// console.log('Angka manual 2');
// console.log('Angka manual 3');
// console.log('Angka manual 4');
// console.log('Angka manual 5');

// var angka = 1

// while (angka < 6) {

//     console.log('Angka loop ' + angka);
//     angka++; // angka +1
// }

// DO WHILE
// var numberDo = 1

// do {
//     console.log('Number : ' + numberDo);
//     numberDo++;
// } while (numberDo < 6)

// FOR

// var numberFor

// for(numberFor = 1; numberFor < 6; numberFor++) {
//     console.log('Nilai: ' + numberFor);
    
// }

// Print Nilai Genap
// var genapNilai

// for (genapNilai = 1; genapNilai < 10; genapNilai++) {
//     if (genapNilai % 2 == 0) {
//         console.log(genapNilai);
        
//     }
// }
// Print Nilai Ganjil
// var ganjilNilai

// for (ganjilNilai= 1; ganjilNilai < 10; ganjilNilai++) {
//     if (ganjilNilai % 2 !== 0) {
//         console.log(ganjilNilai);
        
//     }
// }

// LOOP DRAWING

// var bintang = ''

// for (var i = 0; i < 5; i++){
//     bintang += ' * '
// }

// console.log(bintang);

// var bintang = ''
// var i
// var j

// for (i = 1; i <= 5; i++){
//     for (j = 1; j <= i; j++){
//         bintang += ' * '
//     }
//     bintang += '\n'
// }
// console.log(bintang);

// for (i = 1; i <= 5; i++){
//     for (j = 1; j <= i; j++){
//         bintang += ' * '
//     }
//     bintang += '\n'
// }
// console.log(bintang);

// FUNCTION
// Blok kode yang memiliki tugas tertentu
// Memiliki nama dan dapat dijalankan berulang kali
// Bisa tanpa menerima input dan menghasilkan output
// Menerima input tanpa menghasilkan output
// Menghasilkan output tanpa menerima input
// Bisa menerima input dan mengeluarkan output


// function sayHello(nama){
//     console.log('Halo, ' + nama);
    
// }
// sayHello('Denny')

// function hasilRandom() {
//     var hasil = Math.floor(Math.random() * 10)

//     return hasil
// }
// var output = hasilRandom()
// console.log(output);

// function jumlah(x, y){
//     console.log('Nilai X: ' + x);
//     console.log('Nilai y: ' + y);

//     var hasil = x + y

//     return hasil
// }

// var output = jumlah(12,14)
// console.log(output);

// Call-back Function
// function satu(x, fn){
//     console.log('Nilai X: ' + x);
//     fn()
    
    
// }

// function dua(){
//     console.log('Dari function kedua');
    
// }

// satu(5, dua)

// function tiga(q){
//     console.log('Nilai Q: ' + q);

//     empat(q)
// }

// function empat(w){
//     console.log(w + ' kali 2 adalah : ' + (w * 2))
// }

// tiga(3)

// function lima(x, fn){
//     console.log('X kuadrat adalah: ' + (x * x));

//     fn()

// }

// lima(5, function(){console.log('Ini dari function fn');
// })

// function enam(x, fn){
//     var num1 = 25
//     var num2 = 35

//     console.log('Nilai x adalah ' + x);
    

//     fn(num1, num2)
// }

// function tujuh(x,y){
//     console.log(x + 'ditambah ' + y + ' sama dengan ' + (x + y));
    
// }

// enam(9, tujuh)

// function delapan(){

//     return function(){
//         console.log('Function ini dari hasil return function delapan');
        

//     }
// }

// var hasil = delapan()
// hasil()

// function last () {
//     console.log('Dari function last');
//     return 4;
    
// }
// function terakhir () {
//     console.log('Dari function terakhir');
//     return 5;
    
// }
// function please (unknown) {
//     console.log('Isi dari unknown adalah ' + unknown);
    
// }

// please (last)
// please (terakhir())

// var arrNumber = [10, 7, 21, 3, 1, 43]
// var arrString = ['Andi', 'Aldi', 'Bernard', 'Angel']

// console.log(arrNumber.sort()); // function untuk mengurutkan angka depan saja
// console.log(arrNumber.sort(function(a, b){return a - b})); // function untuk mengurutkan angka
// console.log(arrString.sort()); // function untuk mengurutkan string


// ARRAY
// Variable yang bisa menyimpan lebih dari 1 data
// Index dimulai dari 0

// var mobil1 = 'Yaris'
// var mobil2 = 'Avanza'
// var mobil3 = 'Xenia'

// var arrMobil = ['Yaris', 'Avanza', 'Xenia']
// var arrRandom = [94, true, 'Random', 21, '24']
// var arrColor = [
//     'Red',
//     'Green',
//     'Blue',
//     'Yellow',
//     'Pink',
//     'Black'
// ]

// console.log(arrMobil); // Print seluruh data dalam array
// console.log(arrMobil.toString()); // Print seluruh data tanpa tutup kurung
// console.log(arrMobil.join( ' ! ' )); // Menggabungkan data dengan string/number baru
// console.log(arrMobil.length); // Print jumlah data dalam array
// console.log(arrMobil[0]); // Print data pertama dalam array
// console.log(arrMobil[1]); // Print data kedua dalam array
// console.log(arrMobil[2]); // Print data ketiga dalam array
// console.log(arrColor.sort()); // Mengurutkan data pada array
// console.log(arrColor.reverse()); // Mengurutkan data secara terbalik pada array
// console.log(arrColor.indexOf('Green')); // Mencari index dalam array



// var xy
// var banyakData = arrColor.length

// for (xy = 0; xy < banyakData; xy++){
//     console.log(arrColor[xy]); // arrColor[0]
    
// }

// var buah = ['Apel', 'Jeruk', 'Manggis', 'Strawberry']
// console.log(buah);
// buah.pop() // Menghilangkan data urutan terakhir
// console.log(buah);
// buah.push('Anggur') // Menambahkan data pada urutan terakhir
// console.log(buah);

// var hari = ['Senin', 'Selasa', 'Rabu']
// console.log(hari);
// hari.shift() // Menghilangkan data urutan awal
// console.log(hari);
// hari.unshift('Kamis')
// console.log(hari); // Menambahkan data pada urutan awal

// var merk = ['Zara', 'Uniqlo', 'H&M']
// merk.splice(2, 0, 'Pull and Bear') // (index, banyak data yang dihapus, data baru)
// console.log(merk); // 
// merk.splice(0,1);
// console.log(merk);

// var game = ['Ragnarok', 'RF', 'Seal', 'Dota', 'CounterStrike', 'MobileLegend', 'PUBG']
// var gameSlice = game.slice(1) 
// var gameSlice2 = game.slice(1, 4)
// game[3] = 'Tetris' // Mengganti data ke 3 dengan data baru
// game[8] = 'Angry Bird' // Melongkapi data sampai data ke 8 untuk menambah data baru

// console.log(game); // slice tidak menghapus data array yang asli
// console.log(gameSlice); // menghapus data sebelum index 1
// console.log(gameSlice2); // mengambil data index 1 sampai 4, tetapi 4 tidak ikut


// var warna = ['Red', 'Green', 'Blue', 'Cream']
// warna.reverse() // Cream, Blue, Green, Red
// warna.sort() // Blue, Cream, Green, Red
// warna.pop() // Blue , Cream, Green
// warna.unshift('Black') // Black, Blue, Cream, Green
// warna.splice(1,0) // Black, Blue, Cream, Green
// warna.splice(1,2, 'First', 'Second') // Black, First, Second, Green
// delete warna[2] // Menghapus data tanpa mengubah urutan array, Undefined

// console.log(warna);

// var nama1 = ['Alexa', 'Badrun']
// var nama2 = ['Cintya', 'Denny', 'Elisa']
// var nama3 = ['Farhan', 'Gea', 'Hanifa', 'Intan' ]

// var gabunganNama = nama1.concat(nama2) // menggabungkan array
// var gabunganNama1 = nama2.concat(nama1)
// var gabunganNama2 = nama1.concat(nama2, nama3)
// console.log(gabunganNama);
// console.log(gabunganNama1);
// console.log(gabunganNama2);

var hitung = (x, y, fn) => { // + 4 ujian fundamental
    return fn(x,y)
}

var kali = (a, b) => {
    return a * b
}
var bagi = (a, b) => {
    return a / b
}

var hasilKali = hitung(4, 5, kali)
var hasilBagi = hitung(50, 10, bagi)

console.log(hasilKali);
console.log(hasilBagi)






















