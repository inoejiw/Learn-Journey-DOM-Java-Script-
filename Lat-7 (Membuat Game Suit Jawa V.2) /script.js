// var ulang = true;
// while (ulang) {
//   // ? Menangkap pilihan player
//   var i = prompt("Pilih satu : Gajah, Semut, Orang");

//   // ? Menangkap pilihan computer
//   // ! Membangkitkan pilihan random
// var comp = Math.random();

// if (comp < 0.36) {
//   comp = "Gajah";
// } else if (comp >= 0.36 && comp < 0.67) {
//   comp = "Semut";
// } else {
//   comp = "Orang";
// }

//   // ? Menentukan rules
// var hasil = "";

// if (i == comp) {
//   hasil = "Seri";
// } else if (i == "Gajah") {
//   hasil = comp == "Semut" ? "Kalah" : "Menang";
// } else if (i == "Semut") {
//   hasil = comp == "Gajah" ? "Menang" : "Kalah";
// } else if (i == "Orang") {
//   hasil = comp == "Gajah" ? "Kalah" : "Menang";
// } else {
//   hasil = "memasukan nama yang salah";
// }

//   alert(
//     "Kamu memilih : " +
//       i +
//       "\nDan komputer memilih : " +
//       comp +
//       "\nMaka Hasilnya : Kamu " +
//       hasil
//   );

//   ulang = confirm("Apakah ingin ulang Kembali ?");
// }

// alert("Terima Kasih Sudah Bermain!");

// // var hasil = "";

// // if (i == comp) {
// //   hasil = "Seri";
// // } else if (i == "Gajah") {
// //   if (comp == "Orang") {
// //     hasil = "Kalah";
// //   } else {
// //     hasil = "Menang";
// //   }
// // } else if (i == "Semut") {
// //   if (comp == "Orang") {
// //     hasil = "Kalah";
// //   } else {
// //     hasil = "Menang";
// //   }
// // } else if (i == "Orang") {
// //   if (comp == "gajah") {
// //     hasil = "Kalah";
// //   } else {
// //     hasil = "Menang";
// //   }
// // } else {
// //   alert("Kamu memasukan isi yang salah!");
// // }

// // alert(
// //   "Kamu " +
// //     "'" +
// //     i +
// //     "'" +
// //     " dan comp " +
// //     comp +
// //     " Hasilnya adalah : Kamu " +
// //     hasil
// // );

function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.36) return "gajah";
  if (comp >= 0.36 && comp < 0.67) return "orang";
  return "semut";
}

function getHasil(comp, player) {
  if (player == comp) return "SERI";
  if (player == "gajah") return comp == "orang" ? "MENANG" : "KALAH";
  if (player == "orang") return comp == "Gajah" ? "KALAH" : "MENANG";
  if (player == "semut") return comp == "orang" ? "KALAH" : "MENANG";
}

// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
// const pilihanComputer = getPilihanComputer();
// const pilihanPlayer = pGajah.className;
// const hasil = getHasil(pilihanComputer, pilihanPlayer);

// const imgComputer = document.querySelector(".img-komputer");
// imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

// const info = document.querySelector(".info");
// info.innerHTML = hasil;
// });

// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pSemut.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();

    setTimeout(function () {
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});
