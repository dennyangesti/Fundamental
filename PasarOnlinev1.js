var welcome = alert('Selamat datang di Pasar Online \n\nby: Denny Angesti Pratama')
var userNama = prompt('Nama anda')
var daftarMenu = ['Ayam', 'Ikan', 'Sapi']
var daftarHarga = [25000, 50000, 75000]
var totalBelanja = [0,0,0]
var totalTambah = [0,0,0]
var totalHarga = [0,0,0]
var input = [0,0,0]
var daftar, detail, lagi, totalBill, konfirmasi, bayar, bayarKurang, saran

do {

    do {
        var check = false
        daftar = parseInt(prompt(
            'Daftar Menu: \n' + 
        '1. Ayam @ Rp 25.000\n2. Ikan @ Rp 50.000\n3. Sapi @ Rp 75.000\n\n' + 
        'Masukan pesanan yang anda inginkan\n' + 
        'Pilihan hanya 1 sampai 3\n\n ' + 
        '(1 untuk Ayam, 2 untuk Ikan, 3 untuk Sapi) '
        )) -1
        
        if (daftar < 0 || daftar >= 3){
            check = true
            alert('Mohon maaf untuk saat ini,\nPilihan hanya 1-3,\nMasukkan angka yang benar')
        } 
        if  (!Number.isInteger(daftar)){
            check = true
            alert('Mohon maaf, mohon untuk masukkan angka')
        }
    } while (check)

    do {
        var check2 = false   
        input[daftar] = parseInt(prompt('Masukkan jumlah ' + daftarMenu[daftar]))
        
        if  (!Number.isInteger(input[daftar])){
            check2 = true
            alert('Mohon maaf, mohon untuk masukkan angka')
            
            
        }
        if  (input[daftar] < 0){
            check2 = true
            alert('Mohon maaf, mohon untuk masukkan angka')
        }
    } while (check2)

    lagi = confirm('Ingin belanja lagi?')
    totalBelanja[daftar] = totalBelanja[daftar] + input[daftar]

} while (lagi == true)

totalHarga[0] = totalHarga[0] + (daftarHarga[0] * totalBelanja[0])
totalHarga[1] = totalHarga[1] + (daftarHarga[1] * totalBelanja[1])
totalHarga[2] = totalHarga[2] + (daftarHarga[2] * totalBelanja[2])
totalBill = totalHarga[0] + totalHarga [1] + totalHarga [2]

do {
    (konfirmasi == true)
    detail = alert(
        'Detail Pembelian:\nAtas nama: ' + userNama + '\n\n' + 
    daftarMenu[0] + '\nRp. ' + daftarHarga[0] + ' x ' + totalBelanja[0] + ' = Rp. ' + totalHarga[0] + '\n' + 
    daftarMenu[1] + '\nRp. ' + daftarHarga[1] + ' x ' + totalBelanja[1] + ' = Rp. ' + totalHarga[1] + '\n' + 
    daftarMenu[2] + '\nRp. ' + daftarHarga[2] + ' x ' + totalBelanja[2] + ' = Rp. ' + totalHarga[2] + 
    '\n\nTotal yang harus dibayar:' + '\nRp: ' + totalBill
    )
    konfirmasi = confirm('Apakah detail pembelian anda sudah benar?')
    if (konfirmasi == String){
        alert('Mohon hanya masukkan angka')
    }
} 
while (konfirmasi == false)

    do {
        var check3 = false
        bayar = parseInt(prompt('Masukkan uang anda sesuai dengan total harga berikut:\n' + 'Rp. ' + totalBill ))
        if (!Number.isInteger(bayar)){
            check3 = true
            alert('Mohon maaf, mohon hanya masukkan angka')
        }
        else if (bayar < 0){
            check3 = true
            alert('Mohon maaf, angka tidak bisa lebih kecil dari 0')
        }
    }
    while (check3)


if (bayar < totalBill){
    do {
        (bayar < totalBill)
        alert('Mohon maaf uang yang anda masukkan kurang, \nSenilai: Rp. ' + (totalBill-bayar))
        bayarKurang = parseInt(prompt('Mohon masukkan kembali uang yang kurang sebesar = Rp. ' + (totalBill-bayar)))
        bayar = bayar + bayarKurang

    } while (bayar < totalBill)
}

alert('Transaksi telah Berhasil.\nPesanan anda akan segera kami proses.\nMohon untuk menunggu.')
saran = confirm('Apakah anda menyukai aplikasi ini?')

if (saran == false){
    prompt('Silahkan masukkan kritik dan saran anda, \nAgar aplikasi ini bisa menjadi lebih baik lagi')
    alert(
    'Saran dan kritik anda telah kami terima,\n' + 
    'Kami akan berusaha untuk lebih baik lagi.\n ' + 
    'Terimakasih, telah berbelanja di PasarOnline.'
    )
} else {
alert('Terimakasih, telah berbelanja di PasarOnline.')
}

console.log('Pembeli: ' + userNama);
console.log(
    'Detail Pembelian:\n' + 
    daftarMenu[0] + '\nRp. ' + daftarHarga[0] + ' x ' + totalBelanja[0] + ' = Rp. ' + totalHarga[0] + '\n' + 
    daftarMenu[1] + '\nRp. ' + daftarHarga[1] + ' x ' + totalBelanja[1] + ' = Rp. ' + totalHarga[1] + '\n' + 
    daftarMenu[2] + '\nRp. ' + daftarHarga[2] + ' x ' + totalBelanja[2] + ' = Rp. ' + totalHarga[2]
    );

console.log('Total belanja: Rp. ' + totalBill);
console.log('Jumlah Pembayaran: Rp. ' + bayar);
console.log('Kembali: Rp. ' + (bayar-totalBill));

console.log('Terimakasih, hati - hati');