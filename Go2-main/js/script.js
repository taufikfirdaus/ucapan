let nama, val;
const url_string = document.URL;
const url = new URL(url_string);
let doi;

if (url.searchParams.get('in') != null) {
  doi = url.searchParams.get('in');
} else {
  doi = "Fita Dwi febrianty";
}

let footer = document.getElementById("credit");
footer.innerHTML = doi;
footer.href = "https://www.instagram.com/kifuatambassador/";

function time() {
  var d = new Date();
  var n = d.getHours();
  console.log(n);
  if (n >= 5 && n <= 10) {
    return "Pagi"
  } else if (n >= 10 && n <= 15) {
    return "Siang"
  } else if (n >= 15 && n <= 18) {
    return "Sore"
  } else if (n >= 18 && n <= 24) {
    return "Malam"
  }
}

function makan() {
  switch (time()) {
    case "Pagi":
    return "sarapan"
    break;
    case "Siang":
    return "makan siang"
    break;
    case "Malam":
    return "makan malam"
    break;
    case "Sore":
    return "makan"
    break;
    default:
    break;
  }
}

function selesai() {
  const teks = document.getElementById('teks');
  const btn = document.querySelector('.tombol');
  teks.innerHTML = `Semangat ${doi} <i
  class="fas fa-heart text-danger animate__animated animate__heartBeat animate__repeat-3"></i>`;
  btn.classList.add('d-none');
  teks.classList.remove('d-none');  
}


document.querySelector(".tombol").addEventListener('click', function () {
  Swal.fire({
    title: 'halo mbak fita :)',
    html: `Selamat ${time()}, Kamu udah ${makan()}?`,
    timer: 2500,
    timerProgressBar: true,
    showConfirmButton: false,
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire('ada yang mau aku omongin nih').then((result) => {
        Swal.fire({
          title: ' ',
          html: `gimana mbak kabare ? `,
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `sehat dong, masa engga hehehe`,
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false,
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire('gimana kabar doi anda ?)').then((result) => {
                  Swal.fire(
                    'pasti sudah punya doi dong',
                    '',
                    'success'
                    ).then((result) => {
                      Swal.fire(
                        'kalo aku sih belom :(',
                        '',
                        'error'
                        ).then((result) => {
                          Swal.fire('tapi aku masih usaha aja hehe').then((result) => {
                            Swal.fire({
                              title: 'gimana mbak',
                              text: 'ngopi ga kuy ?',
                              showDenyButton: true,
                              confirmButtonText: `gass kuy :)`,
                              denyButtonText: `ntar aja aku kabari :(`,
                            }).then((result) => {
                              /* Read more about isConfirmed, isDenied below */
                              if (result.isConfirmed) {
                                Swal.fire({
                                  title: 'why ?',
                                  input: 'text',
                                  inputPlaceholder: 'ex: biasanya, or etc',
                                  showCancelButton: false,
                                  inputValidator: (value) => {
                                    if (!value) {
                                      return 'Isi dulu lah anjay '
                                    }
                                  }
                                }).then((result) => {
                                  Swal.fire('Okey Imbak pit', 'terimakasih :)', 'success').then((result) => {
                                    Swal.fire("See ya! kingun nih ^^").then((result) => {
                                      selesai()
                                    });
                                  })
                                })
                              } else if (result.isDenied) {
                                Swal.fire('okedeh kalo ga mau :)').then((result) => {
                                  Swal.fire("See ya! mungkin belum jodoh ^^").then((result) => {
                                    selesai()
                                  });
                                })
                              }
                            })
                          })
                        })
                        
                      })
                  })
              }
            })
          }
        })
      })
    }
  })
});
