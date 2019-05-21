var fungsiKu = () => {
            
    // var form = document.getElementById(`form`)
    // var input = form[0]
    // var data = input.value

    var nama = document.getElementById('nama').value
    var usia = document.getElementById('usia').value
    var radio = document.getElementsByName('gender')
    var checkbox = document.getElementsByName('skill')
    var radioValue = ''
    var skill = []
  
    
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked == true) {
            radioValue = radio[i].value
        }
    }

    for (var x = 0; x < checkbox.length; x++) {
        if (checkbox[x].checked == true) {
            skill.push(checkbox[x].value)
        }
    }
    console.log(skill);
    
    var prgf = document.getElementById('disini')    

    prgf.innerHTML = `<b>Nama: ${nama}, <br>
    Usia: ${usia}, <br>
    Jenis kelamin: ${radioValue}, <br>
    Skill: ${skill.join(`, `)}</b>`
                

}
