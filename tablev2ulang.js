var arrManusia = [
    {nama: `Alex`, umur: 22, job: `DEV`},
    {nama: `Alicia`, umur: 32, job: `DEV`},
    {nama: `Alona`, umur: 26, job: `DEV`},
    {nama: `Batios`, umur: 33, job: `CEO`},
    {nama: `Bakhti`, umur: 38, job: `PM`},
    {nama: `Charlee`, umur: 27, job: `CTO`}
];

var arrJob = [`All`, `DEV`, `CEO`, `PM`, `CTO`];

var showManusia = () => {
    var listManusia = arrManusia.map(val = val => {
        return `
        <tr>
            <td>${val.nama}</td>
            <td>${val.umur}</td>
            <td>${val.job}</td>
        </tr>        
        `
    })

    var listJob = arrJob.map(val = val => {
        return `
        <option>${val}</option>
        `
    })
    document.getElementById("tableBaru").innerHTML = listManusia.join('')
    document.getElementById("job").innerHTML = listJob.join('')
}

showManusia()

var funSubmit = () => {
    var nama = document.getElementById("nama").value
    var umur = document.getElementById("umur").value
    var job = document.getElementById("jobT").value

    nama = nama.charAt(0).toUpperCase() + nama.slice(1).toLowerCase()

    if (job.length <= 3) {
        job = job.toUpperCase()
    } else {
        job = job.charAt(0).toUpperCase() + job.slice(1).toLowerCase()
    }

    arrManusia.push({
        nama, umur, job
    })
    
    if (!(arrJob.includes(job))) {
        arrJob.push(job)
    }

    showManusia()
    
}

var filNama = () => {
    var filter = document.getElementById("search").value
    var test = []
    var list = []

    for (i = 0; i < arrManusia.length; i++) {
        var name = arrManusia[i].nama.toLowerCase()
        var input = filter.toLowerCase()

        if (name.includes(input)) {
            test.push(arrManusia[i])
        }
    }

    list = test.map (val = val => {
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

var filUmur = () => {
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value

    if (!(num1 == '' || num2 == '')){
        var list = arrManusia.filter(val = val => {
            return (val.umur >= num1 && val.umur <= num2)
        })
    } else {
        list = arrManusia
    }

    list = list.map (val = val => {
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

var filJob = () => {
    var selectJob = document.getElementById('job').value

    if((selectJob !== 'All')) {
        var list = arrManusia.filter(val = val => {
            return (val.job.includes(selectJob))
        })
    } else {
        list = arrManusia
    }

    var list = arrManusia.filter(val => {
        return (val.job.includes(selectJob))
    })

    list = list.map (val = val => {
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