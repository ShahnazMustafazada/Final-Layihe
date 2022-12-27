let s_openSearchBox = document.querySelector('.s-openSearchBox');
let s_searchBtn = document.querySelector('.s-openSearchBtn');
let s_inputOpen = document.querySelector('.s-openSearchInput');
let s_searchClose = document.querySelector('.s-close');
let s_submitBtn = document.querySelector('.s-submitBtn');
let bgInput = document.querySelector('.s-openInput');
let searchBody = document.querySelector('.searchOpenBody2');
let overlay =  document.querySelector('.overlay');


s_openSearchBox.addEventListener('click', OpenInput);
function OpenInput(){
    s_inputOpen.classList.toggle('active');
    s_searchClose.classList.toggle('active');
    s_submitBtn.classList.toggle('active');
    bgInput.classList.toggle('active');
    overlay.classList.toggle('active')
    searchBody.classList.toggle('active')
    
}
s_searchClose.addEventListener('click', closeSearch);
function closeSearch(){
    s_searchClose.classList.remove('active')
    s_inputOpen.classList.remove('active')
    s_submitBtn.classList.remove('active')
    bgInput.classList.remove('active');
    overlay.classList.remove('active')
    searchBody.classList.remove('active')
}