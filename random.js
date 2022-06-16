const goBtn = document.querySelector(".generate");
const firstScore = document.querySelector(".score-1");
const secondScore = document.querySelector(".score-2");

document.querySelector(".generate").addEventListener("click", function () {
  let alhilal = Math.floor(Math.random() * 5);
  let alnasar = Math.floor(Math.random() * 5);
  document.querySelector(".score-1").textContent = alhilal;
  document.querySelector(".score-2").textContent = alnasar;
});
