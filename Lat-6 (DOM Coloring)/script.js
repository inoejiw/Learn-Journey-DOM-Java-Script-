// ? Button Section
const button = document.querySelector(".btn");

// const bdy = document.getElementsByTagName("body")[0];

button.addEventListener("click", function () {
  // bdy.style.backgroundColor = "orange";

  // document.body.style.backgroundColor = "orange";

  // document.body.setAttribute("class", "orange");

  document.body.classList.toggle("orange");
});

const tAcakWarna = document.createElement("button");
const teksTombol = document.createTextNode("Acak warna");

tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute("type", "button");

button.after(tAcakWarna);

tAcakWarna.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  console.log(r + "," + g + "," + b);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// ? Slider Section
const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

sMerah.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sHijau.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sBiru.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// ? Cursor coloring
document.body.addEventListener("mousemove", function (event) {
  // Posisi Mouse
  // console.log(event.clientY);
  // Ukuran Browser
  // console.log(window.innerWidth);
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  // console.log(xPos);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);

  document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ",100)";
});
