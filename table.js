// ARRAY

var arrMan = [], arrHew = []

// FORM MANUSIA

var submit = () => {

    var nama = document.getElementById("nama").value
    var umur = document.getElementById("umur").value
    var gender = document.getElementsByName("gender")
    var job = document.getElementsByName("pekerjaan")[0].value

    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked == true) {
        gender = gender[i].value
        }
    }

    // CARA 1
    arrMan.push({
        nama, umur, gender, job
    })

    show(arrMan, 'man')

    // CARA 2
    // var table = document.getElementById("man")
    // var tbody = table.insertRow(0)
    // var namaMan = tbody.insertCell(0)
    // var umurMan = tbody.insertCell(1)
    // var genderMan = tbody.insertCell(2)
    // var jobMan = tbody.insertCell(3)

    // namaMan.innerHTML = `${nama}`
    // umurMan.innerHTML = `${umur}`
    // genderMan.innerHTML = `${gender}`
    // jobMan.innerHTML = `${job}`

    // console.log(nama);
    // console.log(umur);
    // console.log(genderValue);
    // console.log(job);

}


// FORM HEWAN

var submit1 = () => {

    var nama = document.getElementById("nama1").value
    var umur = document.getElementById("umur1").value
    var gender = document.getElementsByName("gender1")
    var job = document.getElementsByName("status")

    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked == true) {
        gender = gender[i].value
        }
    }
    
    for (var i = 0; i < job.length; i++) {
        if (job[i].checked == true) {
        job = job[i].value
        }
    }

    // CARA 1
    arrHew.push ({
        nama, umur, gender, job
    })

    show(arrHew, 'hew')

    // CARA 2
    // var table1 = document.getElementById("hew")
    // var tbody1 = table1.insertRow(0)
    // var namaHew = tbody1.insertCell(0)
    // var umurHew = tbody1.insertCell(1)
    // var genderHew = tbody1.insertCell(2)
    // var statusHew = tbody1.insertCell(3)

    // namaHew.innerHTML = `${nama1}`
    // umurHew.innerHTML = `${umur1}`
    // genderHew.innerHTML = `${gender1}`
    // statusHew.innerHTML = `${status}`

    // console.log(nama1);
    // console.log(umur1);
    // console.log(genderValue1);
    // console.log(statusValue);
}

var show = (arrei, target) => {
    var list = ""

    for(var i = 0; i < arrei.length; i++){
        list += `
        
        <tr>
            <td>${arrei[i].nama}</td>
            <td>${arrei[i].umur}</td>
            <td>${arrei[i].gender}</td>
            <td>${arrei[i].job}</td>
        </tr>
        `
    }
    
    document.getElementById(`${target}`).innerHTML = list;

}