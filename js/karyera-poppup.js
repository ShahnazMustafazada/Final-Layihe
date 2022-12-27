const Poppup = document.querySelector('.karyera-poppup');
const CareerButton = document.querySelector('#btnApeal');
const FormPoppup = document.querySelector('.btn');
const backBtn = document.querySelector('.backBtn');
// const VacancySection = document.querySelector('.vacancy');
const overlay2 = document.querySelector('.overlay2')
let initialClass = 'karyera-poppup';


eventListeners();

function eventListeners() {
  CareerButton.addEventListener('click', poppupSetter);
  FormPoppup.addEventListener('click', formValidation);
  overlay2.addEventListener('click', popuppDisableController);
  backBtn.addEventListener('click', backPoppup)
}

function poppupSetter(e) {
  Poppup.classList.add('welcome');
  overlay2.classList.add('active')
  e.stopPropagation();
}

function formValidation(e) {
  Poppup.classList.add('goodBye');
  // setTimeout(() => Poppup.className = initialClass,1000)
  overlay2.classList.remove('active')
  e.stopPropagation();
}
function backPoppup(){
       Poppup.classList.add('back');
       overlay2.classList.remove('active')
}
function popuppDisableController() {
  Poppup.style.display = 'none';
  overlay2.classList.remove('active')
}