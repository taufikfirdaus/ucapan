let nama, val;
const url_string = document.URL;
const url = new URL(url_string);
let doi;

if (url.searchParams.get('in') != null) {
  doi = url.searchParams.get('in');
} else {
  doi = "Rizky Aulia";
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
    title: 'Hai Iky :)',
    html: `Selamat ${time()}, Kamu udah ${makan()}?`,
    timer: 2500,
    timerProgressBar: true,
    showConfirmButton: false,
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire('ada yang mau aku omongin nih').then((result) => {
        Swal.fire({
          title: ' ',
          html: `tapi aku malu ngomonginnya, `,
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `jadi pake ini aja hehehe`,
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false,
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire('mau ga deket sama aku :)').then((result) => {
                  Swal.fire(
                    'aku banyak kekurangannya!',
                    '',
                    'error'
                    ).then((result) => {
                      Swal.fire(
                        'ga sempurna dari yang kamu inginkan!',
                        '',
                        'error'
                        ).then((result) => {
                          Swal.fire('tapi hatiku tulus').then((result) => {
                            Swal.fire({
                              title: 'aku mau nanya sekali lagi',
                              text: 'mau ga Iky deket sama aku ? kasih alasan dong',
                              showDenyButton: true,
                              confirmButtonText: `mau :)`,
                              denyButtonText: `Ga mau :(`,
                            }).then((result) => {
                              /* Read more about isConfirmed, isDenied below */
                              if (result.isConfirmed) {
                                Swal.fire({
                                  title: 'alasanya?',
                                  input: 'text',
                                  inputPlaceholder: 'ex: biasanya, or etc',
                                  showCancelButton: false,
                                  inputValidator: (value) => {
                                    if (!value) {
                                      return 'Isi dulu dong Pliss'
                                    }
                                  }
                                }).then((result) => {
                                  Swal.fire('Okey Iky', 'terimakasih :)', 'success').then((result) => {
                                    Swal.fire("See ya! perasaan ini untukmu ^^").then((result) => {
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
