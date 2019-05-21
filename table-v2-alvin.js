////////////////////////////////////////////////////////////////////////////////////////////////
/*-----------------------------------------S T A R T !----------------------------------------*/
////////////////////////////////////////////Data Awal///////////////////////////////////////////
var arrManusia = [
    {nama: `Alex`, umur: 22, job: `DEV`},
    {nama: `Alicia`, umur: 32, job: `DEV`},
    {nama: `Alona`, umur: 26, job: `DEV`},
    {nama: `Batios`, umur: 33, job: `CEO`},
    {nama: `Bakhti`, umur: 38, job: `PM`},
    {nama: `Charlee`, umur: 27, job: `CTO`}
];

var arrJob = [`All`, `Dev`, `CEO`, `PM`, `CTO`];
///////////////////////////////////////////////////////////////////////////////////////////////
/*-------------------------------------------------------------------------------------------*/
////////////////////////////////////Render List Data ke Tabel//////////////////////////////////
var funShow = () => {
    var listManusia = arrManusia.map(val => { /* val = {nama, umur, job} */
        return `
        <tr>
            <td>${val.nama}</td>
            <td>${val.umur}</td>
            <td>${val.job}</td>
        </tr>
        `
    })
    
    var listJob = arrJob.map(val => { /* val = string, 'All', 'Dev', 'CEO', 'PM', 'CTO' */
        return `<option>${val}</option>`

    })

    document.getElementById('tableBaru').innerHTML = listManusia.join('')
    document.getElementById('job').innerHTML = listJob.join('')
}

funShow();
////////////////////////////////////////////////////////////////////////////////////////////////
/*--------------------------------------------------------------------------------------------*/
/////////////////////////////////////Input Data - Submit Button/////////////////////////////////
var funSubmit = () => {
    var nama = document.getElementById('nama').value
    var umur = document.getElementById('umur').value
    var job = document.getElementById('jobT').value

    
    nama = nama.charAt(0).toUpperCase() + nama.slice(1).toLocaleLowerCase()

    if (job.length <= 3) {
        job = job.toUpperCase()
    } else {
        job = job.charAt(0).toUpperCase() + job.slice(1).toLowerCase()
    }
    /* Memasukkan data baru ke data awal */
    arrManusia.push({ 
        nama, umur, job 
    })

    /* Melakukkan pengecekkan apabila data Job belum ada dalam data awal*/
    /* Jika data 'job' belum ada, maka data tersebut akan dimasukkan ke data awal */
    if (arrJob.includes(job) == false) {
        arrJob.push(job)
    }

    funShow() /* Merender ulang data, karena ada data baru yang masuk */
    
}
/////////////////////////////////////////////////////////////////////////////////////////////////
/*---------------------------------------------------------------------------------------------*/
/////////////////////////////////////////////Filter Nama/////////////////////////////////////////
var filNama = () => {
    var filter = document.getElementById('search').value
    var test = []
    var list = []

    for (var i = 0; i < arrManusia.length; i++) {
        var name = arrManusia[i].nama.toLowerCase()
        var input = filter.toLowerCase()

        if (name.includes(input)) { // True or False
            test.push(arrManusia[i])
        }
    }

    list = test.map(val => {
        return `
        <tr>
            <td>${val.nama}</td>
            <td>${val.umur}</td>
            <td>${val.job}</td>
        </tr>
        `
    })

    document.getElementById("tableBaru").innerHTML = list.join('')
    
}
/////////////////////////////////////////////////////////////////////////////////////////////////
/*---------------------------------------------------------------------------------------------*/
/////////////////////////////////////////Filter Umur/////////////////////////////////////////////
var filUmur = () => {
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value

    /*Untuk cek apabila kedua number*/
    if(!(num1 == '' || num2 == '')){
        var list = arrManusia.filter(val => {
            return (val.umur >= num1 && val.umur <= num2)
        })
    } 
    else {
        list = arrManusia
    }

    list = list.map(val => {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        </tr>
        `
    })
        
        document.getElementById('tableBaru').innerHTML = list.join('')
    
    }
    
/////////////////////////////////////////////////////////////////////////////////////////////////
/*---------------------------------------------------------------------------------------------*/
///////////////////////////////////////Filter Pekerjaan//////////////////////////////////////////
var filJob = () => {
    /*Menu dropdown yang dipilih*/
    var selectedJob = document.getElementById('job').value

    if (!(selectedJob == 'All')){
        var list = arrManusia.filter (val => {
            return (val.job.includes(selectedJob))
        })
    }
    else {
        var list = arrManusia
    }
    /*Filter selectedJob ke property job yang ada di val ({name, umur, job})*/
    var list = arrManusia.filter(val => {
        return (val.job.includes(selectedJob))
    })

    list = list.map(val => {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        </tr>
        `
    })
    document.getElementById('tableBaru').innerHTML = list.join('')
}
/////////////////////////////////////////////////////////////////////////////////////////////////
/*--------------------------------------F I N I S H !------------------------------------------*/
/////////////////////////////////////////////////////////////////////////////////////////////////



