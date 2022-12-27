let searchClose = document.querySelector(".searchOpenClose");
let searchBox = document.querySelector(".main-menu-search");
let searchIcon = document.querySelector(".searchIcon");
let navList = document.getElementById("nav-list");
let langs = document.getElementById("langs");
let IconX = document.querySelector(".xIcon");
console.log(searchClose);

searchIcon.addEventListener("click", OpenInput);
IconX.addEventListener("click", CloseInput);

function OpenInput(e) {
  langs.classList.add("displayNone");
  navList.classList.add("displayNone");
  searchIcon.classList.add("displayNone");
  IconX.classList.remove("displayNone");
  searchBox.classList.add("open");
  searchBox.classList.remove("displayNone");
}
function CloseInput(e) {
  langs.classList.remove("displayNone");
  navList.classList.remove("displayNone");
  searchIcon.classList.remove("displayNone");
  IconX.classList.add("displayNone");
  searchBox.classList.remove("open");
  searchBox.classList.add("displayNone");
}






