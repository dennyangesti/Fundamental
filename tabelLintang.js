var arrData = [
  {
    nama: "Budi",
    tanggal: 12,
    bulan: "Januari",
    tahun: 1986,
    zodiak: "Capricorn",
    usia: 32,
    pensiun: -23,
    kota: "Ambon"
  },
  {
    nama: "Deni",
    tanggal: 24,
    bulan: "September",
    tahun: 1985,
    zodiak: "Libra",
    usia: 33,
    pensiun: -22,
    kota: "Palu"
  }
];

var umurPensiun = 55;
var usia =
  new Date().getFullYear() -
  document.getElementById("tanggal").value.split("-")[0];

var show = () => {
  var list = arrData.map(val => {
    return `
      <tr>
        <td>${val.nama}</td>
        <td>${val.tanggal}</td>
        <td>${val.bulan}</td>
        <td>${val.tahun}</td>
        <td>${val.zodiak}</td>
        <td>${val.usia}</td>
        <td>${val.pensiun}</td>
        <td>${val.kota}</td>
      </tr>`;
  });
  document.getElementById("dataTable").innerHTML = list.join("");
};
show();

var daftar = () => {
  var nama = document.getElementById("namaUser").value;
  var tgl = document.getElementById("tanggal").value;
  var kota = document.getElementById("kota").value;

  nama = nama.charAt(0).toUpperCase() + nama.slice(1).toLowerCase();

  var splitTgl = tgl.split("-"); // ["tahun", "bulan", "tanggal"]
  var hari = splitTgl[2];
  var tahun = splitTgl[0];
  var month = splitTgl[1];
  var bulan = [
    `Januari`,
    `Februari`,
    `Maret`,
    `April`,
    `Mei`,
    `Juni`,
    `Juli`,
    `Agustus`,
    `September`,
    `Oktober`,
    `November`,
    `Desember`
  ];
  var bulanShow = bulan[month - 1];

  show();
};
