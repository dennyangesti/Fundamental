////////////////////Data Awal///////////////////////
var arrNama = [];

arrNama[0] = {nama: `Alex`, umur: 22, job: `Dev`};
arrNama[1] = {nama: `Alicia`, umur: 32, job: `Dev`};
arrNama[2] = {nama: `Alona`, umur: 26, job: `Dev`};
arrNama[3] = {nama: `Batios`, umur: 33, job: `CEO`};
arrNama[4] = {nama: `Bakhti`, umur: 38, job: `PM`};
arrNama[5] = {nama: `Charlee`, umur: 27, job: `CTO`};

var list = ""
for (var x = 0; x < arrNama.length; x++) {
    list = list + `
    <tr>
        <td>${arrNama[x].nama}</td>
        <td>${arrNama[x].umur}</td>
        <td>${arrNama[x].job}</td>
    </tr>`
}

document.getElementById("tableBaru").innerHTML = list;
///////////////////////////////////////////////////////

//////////////////Data Pekerjaan//////////////////////
let arrJob = [`All`, `Dev`, `CEO`, `PM`, `CTO`]
var userJob;
for (var j = 0; j < arrJob.length; j++) {
    userJob +=  `
    <option value = ${arrJob[j]}> ${arrJob[j]} </option>
    `
}

document.getElementById('job').innerHTML = userJob;
///////////////////////////////////////////////////////

////////////////Function Button Submit/////////////////
var funSubmit = () => {
    var nama = document.getElementById("nama").value
    var umur = document.getElementById("umur").value
    var job = document.getElementById("jobT").value

    arrNama.push({
        nama, umur, job
    })

    display(arrNama)

    /////////////////Update Pekerjaan///////////////////
    /////////Jika tidak ada di dalam option/////////////
    var checkData = 0;
    for (var i = 0; i < arrJob.length; i++) {
        if (job.toLowerCase() !== arrJob[i].toLowerCase()) {
            checkData ++
        }
    }

    if (checkData == arrJob.length) {
        arrJob.push(job);
    }

   
    var userJob;
    for (var j = 0; j < arrJob.length; j++) {
        userJob += `
        <option value = ${arrJob[j]}> ${arrJob[j]} </option>
        `
}

document.getElementById('job').innerHTML = userJob;

}
////////////////////////////////////////////////////////

//////////// Function untuk Input Data Baru/////////////
var display = (arrBaru) => {
    var list2 = ``

    for(var i = 0; i < arrBaru.length; i++){
        list2 += `
        <tr>
            <td>${arrBaru[i].nama}</td>
            <td>${arrBaru[i].umur}</td>
            <td>${arrBaru[i].job}</td>
        </tr>
        `
    }
    
    document.getElementById("tableBaru").innerHTML = list2;
}
/////////////////////////////////////////////////////////

///////////////////Filter Nama/////////////////////////
var filNama = () => {
    var nama = document.getElementById("search").value.toLowerCase()
    
    var listNama = '';
    for(i = 0; i < arrNama.length; i++) {
        if (arrNama[i].nama.toLowerCase().includes(nama) == true) {
            listNama += `
            <tr>
                <td>${arrNama[i].nama}</td>
                <td>${arrNama[i].umur}</td>
                <td>${arrNama[i].job}</td>
            </tr>
            `
        }
    }
    document.getElementById('tableBaru').innerHTML = listNama;
    console.log(nama
        );
    
}
////////////////////////////////////////////////////////////////////////

////////////////////////////Filter Umur/////////////////////////////////
var filUmur = () => {
    var umur1 = document.getElementById("num1").value
    var umur2 = document.getElementById("num2").value



    // console.log(umur1);
    // console.log(umur2);
x
}
///////////////////////////////////////////////////////

//////////////////Filter Pekerjaan///////////////////////
var filJob = () => {
    var jobList = document.getElementById("job").value

    var listJob = '';
    for (i = 0; i < arrNama.length; i++) {
        if (jobList === arrJob[0]) {
            listJob += `
            <tr>
                <td>${arrNama[i].nama}</td>
                <td>${arrNama[i].umur}</td>
                <td>${arrNama[i].job}</td>
            </tr>
            `
        } else if (jobList == arrNama[i].job) {
            listJob += `
            <tr>
                <td>${arrNama[i].nama}</td>
                <td>${arrNama[i].umur}</td>
                <td>${arrNama[i].job}</td>
            </tr>
            `
        }
    }
    document.getElementById('tableBaru').innerHTML = listJob;
}
/////////////////////////////////////////////////////////////