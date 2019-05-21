// Latihan Soal Solve It! #1

// let x = 4
// let y = 3
// let z = 2
// let w = Math.pow((x+y*z)/(x*y), z) // 0.69
// let v = Math.round(w)

// console.log(w)
// console.log(v)

// Solve it! #2
// var angka = prompt ('Silahkan masukkan angka berapapun:')
// alert('Kuadrat dari ' + angka + ' = ' + Math.pow(angka, 2));

// Latihan soal Solve It! #3

// var jawaban = Math.cbrt(8)
// console.log(jawaban);

// Latihan Soal Solve It! #4

// var soal = 485 
// var tahun = Math.floor(soal/360)
// var sisaTahun = soal%360 // 125

// var bulan = Math.floor(sisaTahun/30)
// var sisaBulan = sisaTahun%30 // 4


// var minggu = Math.floor(sisaBulan/7)
// var sisaMinggu = sisaMinggu%7 // 0
// var hari = (soal-(tahun*360)-(bulan*30)-(minggu*7))
 
// console.log(soal + ' Hari adalah ' + tahun + ' Tahun ' + bulan + ' Bulan ' + minggu + ' Minggu ' + hari + ' Hari ')

// Latihan Soal Solve It! #5
// andi + budi = 49
// rasio = 0.4 = 4/10 = 4:10 = 2:5 = andi = 2, budi = 5
// totalRatio = 2+5 = 7
// andi = totalUmur * (ratioAndi / totalRatio)
// budi = totalUmur * (ratioBudi / totalRatio)

// var totalUmur = 49, ratioAndi = 2, ratioBudi = 5,
//     totalRatio = 7
// var andi = totalUmur * (ratioAndi / totalRatio) + 2
// var budi = totalUmur * (ratioBudi / totalRatio) + 2

// console.log(andi)
// console.log(budi)

// Latihan Soal Solve It! #6

// let sekarang = new Date()
// let hariIni = sekarang.getDate()
// let besok = sekarang.getDate()+1
// let kemarin = sekarang.getDate()-1
// let bulan = sekarang.getMonth()+1
// let tahun = sekarang.getFullYear()

// console.log('Hari ini tanggal ' + hariIni + '-' + bulan + '-' + tahun)
// console.log('Besok tanggal ' + besok + '-' + bulan + '-' + tahun)
// console.log('Kemarin tanggal ' + kemarin + '-' + bulan + '-' + tahun)

// Latihan Soal Solve It! #7

// Cara 1
// var x = 'Halo Duniaaaa'
// var jumlahA = console.log(x.match(/a/g))
// Cara 2
// var kalimat = 'Halo Dunia'
// var panjang1 = kalimat.length

// var kalimat2 = kalimat.replace(/a/g, '')
// var panjang2 = kalimat2.length

// var jumlah = panjang1 - panjang2
// console.log(jumlah);


// Latihan Soal Solve It! #8
// Jarak = 120km
// A = 60km/jam; B = 40km/jam
// Start jam 9; Tabrakan ?

// var totalJarak = 120
// var v1 = 60
// var v2 = 40
// var vTotal = v1 + v2
// var time = totalJarak / vTotal * 60

// console.log('Mobil akan saling bertabrakan setelah ' + time + ' Menit');


// Solve it! #9
// var random = Math.floor(Math.random() * 101)
// console.log(random);

// Solve it! #10
// let alas = 'sepatu'
// let warna = 'biru'
// let harga = 'mahal'

// switch (true) {
//     case alas == 'sepatu' && warna == 'biru' && harga == 'mahal':
//         console.log('Saya suka sepatu biru yang mahal');
//         break;

//     case alas == 'sepatu' && warna == 'merah' && harga == 'mahal':
//         console.log('Saya suka sepatu merah yang mahal');
//         break;
    
//     case alas == 'sepatu' && warna == 'biru' && harga == 'murah':
//         console.log('Saya suka sepatu biru yang murah');
//         break;
    
//     case alas == 'sepatu' && warna == 'merah' && harga == 'murah':
//         console.log('Saya suka sepatu merah yang murah');
//         break;

//     case alas == 'sendal' && warna == 'biru' && harga == 'mahal':
//         console.log('Saya suka sendal biru yang mahal');
//         break;

//     case alas == 'sendal' && warna == 'merah' && harga == 'mahal':
//         console.log('Saya suka sendal merah yang mahal');
//         break;

//     case alas == 'sendal' && warna == 'biru' && harga == 'murah':
//         console.log('Saya suka sendal biru yang murah');
//         break;

//     case alas == 'sendal' && warna == 'merah' && harga == 'murah':
//         console.log('Saya suka sendal merah yang murah');
//         break;

//     default:
//         console.log('Saya tidak tau suka apa');
        
//         break;
// }   

// Solve it! #11

// Solved with IF
// alert('Selamat Datang!');
// var inputNumber = prompt('Masukkan angka dibawah');

// if (inputNumber % 2 == 0) {
//     alert('Angka ' + inputNumber + ' tergolong bilangan GENAP!');
    
// }   else {
//     alert('Angka ' + inputNumber + ' tergolong bilangan GANJIL!');    
// }

// Solved with SWITCH

// alert('Selamat Datang!');
// var inputNumber = prompt('Masukkan angka dibawah');

// switch (inputNumber) {
//     case (inputNumber % 2 == 0):
//     alert('Angka ' + inputNumber + ' tergolong bilangan GENAP!');
//     break;

//     default:
//     alert('Angka ' + inputNumber + ' tergolong bilangan GANJIL!'); 
//     break;
// }
// Solve it! #13
//IMT = Massa(kg) / Tinggi(m)^2

// alert('Selamat datang!')
// var nama = prompt('Masukkan nama anda')
// var massa = prompt('Masukkan berat anda dalam kilogram')
// var tinggi = prompt('Masukkan tinggi anda dalam meter')
// var imt = massa / (Math.pow(tinggi, 2))


// if (imt < 18.5) {
//     console.log('Berat badan anda kurang');
    
// } else if (imt >= 18.5 && imt <= 24.9) {
//     console.log('Berat badan anda ideal');
    
// } else if (imt >= 25 && imt <= 29.9) {
//     console.log('Berat badan anda berlebih');
    
// } else if (imt >= 30 && imt <= 39.9) {
//     console.log('Berat badan anda sangat berlebih');
    
// } else if (imt >= 39.9) {
//     console.log('Anda obesitas');
    
// }

// if (imt < 18.5) {
//     alert('Berat badan anda kurang, \n penuhi kebutuhan kalori dan protein anda segera, \n dan jangan lupa olahraga');
    
// } else if (imt >= 18.5 && imt <= 24.9) {
//     alert('Berat badan anda ideal, \n kebutuhan anda sudah terpenuhi, \n selalu ingat untuk berolahraga');
    
// } else if (imt >= 25 && imt <= 29.9) {
//     alert('Berat badan anda berlebih, \n coba lakukan kalori defisit untuk mengurahi lemak yang ada ditubuh \n selalu olahraga');
    
// } else if (imt >= 30 && imt <= 39.9) {
//     alert('Berat badan anda sangat berlebih, \n ayo coba diet untuk menurunkan berat badan anda segera');
    
// } else if (imt >= 39.9) {
//     alert('Anda obesitas \n jangan patah semangat ayo diet dan berolahraga');
    
// }
// console.log ('IMT anda adalah ' + imt)

// Solve it!#4 (Cleaner)
var hariAwal = Number(prompt('Masukkan jumlah hari: '))

var tahun = Math.floor(hariAwal / 360)
hari = hariAwal % 360
var bulan = Math.floor(hari / 30)
hari = har % 30
var minggu = Math.floor(hari % 7)
hari = hari % 7

console.log('Jumlah hari: ' + hariAwal);
console.log('Ada berapa tahun: ' + tahun);
console.log('Ada berapa bulan: ' + bulan);
console.log('Ada berapa minggu: ' + minggu);
console.log('Ada berapa hari: ' + hari);
