const menu = document.querySelector(".menu-container");
const bagla = document.querySelector(".closeOpen");
const bar = document.querySelector(".bar");
bar.addEventListener("click", function () {
  bar.classList.toggle("active");
  menu.classList.toggle("active");
  console.log('salam')
});
bagla.addEventListener("click", function () {
  menu.classList.remove("active");
});

