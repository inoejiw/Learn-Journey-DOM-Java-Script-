// * DOM selecetion

// ! document.getElementById()
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "cyan";
judul.innerHTML = "Ihsan Nursyahjiwa";

// ! document.getElementByTagName() -> mengembalikan HTML Collection.
const p = document.getElementsByTagName("p");

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "orange";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

// ! document.getElementsByClassName() -> mengembalikan HTML Collection
const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "Anjayyy";
