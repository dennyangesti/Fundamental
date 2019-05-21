// Nilai Ujian


// Akan meminta inputan untuk mata pelajaran dibawah ini:
// Nama siswa
// Nilai Matematika
// Nilai Bahasa Indonesia
// Nilai Bahasa Inggris
// Nilai Ilmu Pengetahuan Alam

alert('Selamat datang!')
var userNama = prompt('Silahkan masukkan Nama anda')
var nilaiMat = parseFloat(prompt('Silahkan masukkan nilai Matematika anda'))
var nilaiInd = parseFloat(prompt('Silahkan masukkan nilai Bahasa Indonesia anda'))
var nilaiIng = parseFloat(prompt('Silahkan masukkan nilai Bahasa Inggris anda'))
var nilaiIpa = parseFloat(prompt('Silahkan masukkan nilai Ilmu Pengetahuan Alam anda'))



// Nilai di rata2
var totalNilai = (nilaiMat + nilaiInd + nilaiIng + nilaiIpa)
var rataRata = totalNilai/4

// (Lulus: A - C, tidak lulus D - E)
// 85 ke atas A
// 84 - 76 B
// 75 - 66 C
// 65 - 50 D
// sisanya E

var indexNilai, lulus, greet

if (rataRata > 85) {
    indexNilai = 'A'
    lulus = true
    
} else if (rataRata >= 76 && rataRata <= 84){
    indexNilai = 'B'
    lulus = true

} else if (rataRata >= 66 && rataRata <= 75){
    indexNilai = 'C'
    lulus = true

} else if (rataRata >= 50 && rataRata <= 65){
    indexNilai = 'D'
    lulus = false

} else {
    indexNilai = 'E'
    lulus = false

}

if (lulus) {
    greet = 'Selamat, Anda dinyatakan lulus.';
    
} else {
    greet = 'Mohon maaf, Anda dinyatakan tidak lulus.';
    
}

console.log('Nama : ' + userNama);
console.log('Dengan nilai akhir : ' + rataRata)
console.log('Index Nilai : ' + indexNilai)
console.log(greet)

// Nama : Alvin
// Dengan nilai akhir : 76
// Index Nilai : B
// Selamat, Anda dinyatakan lulus.

// Nama : Alvin
// Dengan nilai akhir : 49
// Index Nilai : E
// Mohon maaf, Anda dinyatakan tidak lulus.