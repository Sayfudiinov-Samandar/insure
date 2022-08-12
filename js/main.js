let eLbtn = document.querySelector(".nav-open");
let elHeader = document.querySelector(".header-box");

eLbtn.addEventListener("click",function(){
    elHeader.classList.toggle("nav-block")
})