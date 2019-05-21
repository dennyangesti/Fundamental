// // // OBJECT
// // // Mampu menyimpan banyak data seperti array
// // // Jika pada array menggunakan index, object menggunakan properti
// // // Mampu menyimpan data apapun; String, Number, Boolean, Undefined

// // var manusia = {namaDpn: 'Denny', namaBlkg: 'Pratama', usia: 24, job: 'Penyelam'}
// // var manusia2 = {
// //     namaDpn: 'Daffa',
// //     namaBlkg: 'Afghani',
// //     usia: 11,
// //     job: 'Pelajar',
// //     alive: true,
// //     namaFull: function (){
// //         return this.namaDpn + ' ' + this.namaBlkg
// //     },
// //     sayHello: function(nama){
// //         console.log('Hai ' + nama);
        
// //     } 
// // }

// // var namaLengkap = manusia2.namaFull()
// // console.log(namaLengkap);
// // manusia2.sayHello('Alex')
// // manusia2.sayHello(manusia2.namaFull())


// // console.log(manusia);
// // console.log(manusia.namaDpn);
// // console.log(manusia2.usia);

// // // OBJECT LITERAL

// // var orang = {namaDpn: 'Janice', namaBlkg: 'Manuella'}

// // // keyword 'new'

// // var warna = new Object()
// // warna.pertama = 'Merah'
// // warna.kedua = 'Biru'
// // warna.ketiga = 'Hijau'

// // console.log(warna);

// // // 

// // var human = function (nama, umur, job){ // Function Expression
// //     this.namaDpn = nama
// //     this.usia = umur
// //     this.pekerjaan = job
// // }

// // var human2 = function (nama, umur, job){ // Function Declaration
// //     this.namaDpn = nama
// //     this.usia = umur
// //     this.pekerjaan = job
// // }


// // var satu = new human('Andi', 24, 'BodyBuilder')
// // var satu2 = new human('Alex', 21, 'Calisthenics')
// // var satu3 = new human('Arul', 30, 'PowerLifter')
// // console.log(satu);
// // console.log(satu2);
// // console.log(satu3);

// // console.log(satu.usia);
// // console.log(satu2['usia']);

// // // Adding, Changing, and Deleting Properties

// // satu.alamat = 'Kebon Jeruk' // Menambah Property
// // satu.usia = function(){ // Mengubah property
// //     console.log('Telah diubah menjadi function');
    
// // }
// // delete satu.pekerjaan // Menghapus property
// // console.log(satu);

// // var objOne = {
// //     propOne: 'String biasa',
// //     propTwo: {
// //         subPropOne: 23,
// //         subPropTwo: function(x){
// //             console.log('Sub Property Two ' + x);
            
// //         }
// //     },
// //     propThree: ['Red', 'Green', 'Blue'],
// //     propFour: [
// //         12,
// //         {insideOne: 44, insideTwo: 35}

// //     ]
// // }

// // console.log(objOne.propTwo.subPropOne); // 23
// // objOne.propTwo.subPropTwo(); // Sub Property Two
// // console.log(objOne.propTwo.subPropTwo(objOne.propTwo.subPropOne)); //  Sub Property Two 23
// // console.log(objOne.propFour[1].insideTwo); // 35

// //  var hari = {
// //      pertama: 'Senin',
// //      kedua: 'Selasa',
// //      ketiga: 'Rabu',
// //      keempat: 'Kamis',
// //      kelima: 'Jumat',
// //      keenam: 'Sabtu',
// //      ketujuh: 'Minggu'
// //  }

// //  var namaProp // Akan berisi nama setiap property
 
// // //Looping for in
// //  for (namaProp in hari) { // in untuk memasukkan nilai dari property
// //      console.log(namaProp + ': ' + hari[namaProp]);
     
// //  }

// //  function People (nama, umur, job) {
// //      this.nama = nama
// //      this.umur = umur
// //      this.job = job
// //  }
// // People.prototype.address = 'Jakarta' // Semua object akan memiliki property ini

// // var denny = new People('Denny', 24, 'Diver')

// // console.log(denny);
// // console.log(denny.nama); // Alvin
// // console.log(denny.address); // Jakarta

// // CLASS

// // class manusia {
// //     constructor(nama, usia, pekerjaan){// Tempat membuat property
// //         this.name = nama,
// //         this.age = usia,
// //         this.job = pekerjaan
// //     }
// //     // Tempat membuat method
// //     sayHello(){
// //         console.log('Hello, i\'m ' + this.name);
        
// //     }
// // }

// // var manusia1 = new manusia('Michael', 28, 'Driver')

// // console.log(manusia1);
// // manusia1.sayHello()

// // Inheritens

// class MakhlukHidup {
//     constructor(place, hidup){
//         this.tempatTinggal = place
//         this.bernyawa = hidup
//     }

//     makan(){
//         console.log('Sedang makan');
        
//     }

//     bernafas(){
//         console.log('Sedang bernafas');
        
//     }

//     bekerja(){
//         console.log('Sedang bekerja');
        
//     }
    
// }

// class manusia extends MakhlukHidup {
//     constructor(place, hidup, mind){
//         super(place, hidup)
//         this.berakal = mind
//     }
//     merokok(){
//         console.log('Sedang Merokok');
        
//     }
// }

// class hewan extends MakhlukHidup {
//     constructor(place, hidup, species, bertelur, beranak){
//         super(place, hidup)
//         this.species = species
//         this.telur = bertelur
//         this.anak = beranak

//     }
//     berburu(){
//         console.log('Sedang berburu');
        
//     }
// }

// class tumbuhan extends MakhlukHidup {
//     constructor(place, hidup, berbunga, berbuah){
//         super(place, hidup)
//         this.bunga = berbunga
//         this.buah = berbuah
//     }
//     fotosintesis(){
//         console.log('Sedang berfotosintesis');
        
//     }
// }

// var singa = new hewan('Hutan', true, 'Mamalia', false, true)
// var ayam = new hewan('Rumah Warga', true, 'Unggas', true, false)
// var dhimas = new manusia('Rawamangun', true, false)
// var reinhart = new manusia('Cideng', true, true)

// console.log('Species singa adalah ' + singa.species);
// console.log(reinhart);


// // console.log(singa);
// // console.log(ayam);
// // singa.berburu()

// console.log(dhimas);

// var padi = new tumbuhan('Sawah', true, true, true)
// padi.fotosintesis()

// // console.log(padi);
// // padi.fotosintesis()
