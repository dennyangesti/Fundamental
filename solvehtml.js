var funKuadrat = () => {
    var angka = document.getElementById("angka").value

    var hasil = angka * angka

    //console.log(hasil);

    var result = document.getElementById("hasil")
    result.innerHTML = `
    Hasil kuadratnya adalah ${hasil}!`
    
}

var funPangkat = () => {
    var angka1 = document.getElementById("angka1").value
    var angka2 = document.getElementById("angka2").value

    var hasil1 = Math.pow(angka1, angka2)

    var result1 = document.getElementById("hasil2")
    result1.innerHTML = `
    Hasil pangkat bilangan ${angka1} dengan <sup>${angka2}</sup>
    adalah ${hasil1}`
}

var mencari = () => {
    var kalimatFull = document.getElementById("kalimat").value
    var cari = document.getElementById("cari").value

    var totKalimat = kalimatFull.length
    console.log(totKalimat);
    
    for (var i = 0; i < kalimatFull.length; i++) {
        if (cari == true) {
            var hilang = kalimatFull[i].replace('')
        }
    }
    
    var totHilang = hilang.length
    
    console.log(hilang);
    

    var hasil = totKalimat - totHilang

    var result2 = document.getElementById("hasilCari")
    hasilCari.innerHTML = `
    Jumlah '${cari}' dalam kalimat tersebut, sebanyak ${hasil} buah`
}


var kali = () =>{
    var angkaSatu = parseInt(document.getElementById("angkaSatu").value)
    var angkaDua = parseInt(document.getElementById("angkaDua").value)

    var resX = angkaSatu * angkaDua
    var hasilCal = document.getElementById("hasilCal")
    hasilCal.innerHTML = `${angkaSatu} X ${angkaDua} = ${resX}`
}

var bagi = () =>{
    var angkaSatu = parseInt(document.getElementById("angkaSatu").value)
    var angkaDua = parseInt(document.getElementById("angkaDua").value)

    var resBagi = angkaSatu / angkaDua
    var hasilCal = document.getElementById("hasilCal")
    hasilCal.innerHTML = `${angkaSatu} / ${angkaDua} = ${resBagi}`
}

var tambah = () =>{
    var angkaSatu = parseInt(document.getElementById("angkaSatu").value)
    var angkaDua = parseInt(document.getElementById("angkaDua").value)

    var resTambah = angkaSatu + angkaDua
    var hasilCal = document.getElementById("hasilCal")
    hasilCal.innerHTML = `${angkaSatu} + ${angkaDua} = ${resTambah}`
}

var kurang = () =>{
    var angkaSatu = parseInt(document.getElementById("angkaSatu").value)
    var angkaDua = parseInt(document.getElementById("angkaDua").value)

    var resKurang = angkaSatu - angkaDua
    var hasilCal = document.getElementById("hasilCal")
    hasilCal.innerHTML = `${angkaSatu} - ${angkaDua} = ${resKurang}`
}

var mod = () =>{
    var angkaSatu = Number(document.getElementById("angkaSatu").value)
    var angkaDua = Number(document.getElementById("angkaDua").value)

    var resMod = angkaSatu % angkaDua
    var hasilCal = document.getElementById("hasilCal")
    hasilCal.innerHTML = `${angkaSatu} % ${angkaDua} = ${resMod}`
}

var pangkat = () =>{
    var angkaSatu = parseInt(document.getElementById("angkaSatu").value)
    var angkaDua = parseInt(document.getElementById("angkaDua").value)

    var resPangkat = Math.pow(angkaSatu, angkaDua)
    var hasilCal = document.getElementById("hasilCal")
    hasilCal.innerHTML = `${angkaSatu}<sup>${angkaDua}</sup> = ${resPangkat}`
}