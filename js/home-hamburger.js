const searchClose = document.querySelector('.searchOpenClose');
const searchBox = document.querySelector('.main-menu-search');
const searchIcon = document.querySelector('.searchIcon');
const navList = document.getElementById('nav-list');
const langs = document.getElementById('langs');
const IconX = document.querySelector('.xIcon');
const menu = document.querySelector('.menu-container');
const bagla = document.querySelector('.closeOpen');
const bar = document.querySelector('.bar');
eventListeners();

function eventListeners() {
  bar.addEventListener('click', menuController);
  searchIcon.addEventListener('click', menuSearchLogicController);
}

function menuController() {
  this.classList.toggle('active');
  let classCounter = Array.from(this.classList).length;
  htmlElementsController(classCounter, [searchIcon, navList, langs, searchBox]);
  menu.classList.toggle("active");
}

function menuSearchLogicController() {
  bar.classList.add('active');
  let classCounter = Array.from(bar.classList).length;

  htmlElementsController(classCounter, [searchIcon, navList, langs, searchBox]);
}


function htmlElementsController(classCounter, htmlData) {
  let isTrue, cssProperty, htmlElements;
  isTrue = true;
  cssProperty = 'displayNone';
  htmlElements = [...htmlData];

  if (classCounter > 1) {
    htmlElements.forEach((htmlElementContent) => {
      if (Array.from(htmlElementContent.classList).includes(cssProperty)) {
        isTrue = false;
      } else {
        isTrue = true;
      }
      addOrRemoveController(htmlElementContent, cssProperty, isTrue);
    });
  } else {
    htmlElements.forEach((htmlElementContent) => {
      if (Array.from(htmlElementContent.classList).includes(cssProperty)) {
        isTrue = false;
      } else {
        isTrue = true;
      }
      addOrRemoveController(htmlElementContent, cssProperty, isTrue);
    });
  }
}

function addOrRemoveController(element, cssProperty, dedector) {
  if (dedector) {
    element.classList.add(cssProperty);
  } else {
    element.classList.remove(cssProperty);
  }
}















// const searchClose = document.querySelector(".searchOpenClose");
// const searchBox = document.querySelector(".main-menu-search");
// const searchIcon = document.querySelector(".searchIcon");
// const navList = document.getElementById("nav-list");
// const langs = document.getElementById("langs");
// const IconX = document.querySelector(".xIcon");
// const menu = document.querySelector(".menu-container");
// const bagla = document.querySelector(".closeOpen");
// const bar = document.querySelector(".bar");
// console.log(searchClose);

// searchIcon.addEventListener("click", OpenInput);
// IconX.addEventListener("click", CloseInput);

// function OpenInput(e) {
//   langs.classList.add("displayNone");
//   navList.classList.add("displayNone");
//   searchIcon.classList.add("displayNone");
//   IconX.classList.remove("displayNone");
//   searchBox.classList.add("open");
//   searchBox.classList.remove("displayNone");
// }
// function CloseInput(e) {
//   langs.classList.remove("displayNone");
//   navList.classList.remove("displayNone");
//   searchIcon.classList.remove("displayNone");
//   IconX.classList.add("displayNone");
//   searchBox.classList.remove("open");
//   searchBox.classList.add("displayNone");
// }

// bar.addEventListener("click", function () {
//   if (bar.className === "bar") {
//     bar.classList.toggle("active");
//     menu.classList.toggle("active");
//     langs.classList.add("displayNone");
//     navList.classList.add("displayNone");
//     searchIcon.classList.add("displayNone");
//     // IconX.classList.remove("displayNone");
//     searchBox.classList.add("open");
//     searchBox.classList.remove("displayNone");
//   } else {
//     bar.classList.remove("active");
//     menu.classList.remove("active");
//     langs.classList.remove("displayNone");
//     navList.classList.remove("displayNone");
//     searchIcon.classList.remove("displayNone");
//     searchBox.classList.remove("open");
//     searchBox.classList.add("displayNone");
//   }

// });
// bagla.addEventListener("click", function () {
//   menu.classList.remove("active");
//   CloseInput();
// });
