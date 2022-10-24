
  //  start AOS Animation----------------
  AOS.init();
 'use strict';
// select scroll to top button
const scrollToTop = document.querySelector(".scroll_to_top");
//select navbar
const homeNav = document.querySelector(".navbar");
//select all nav links
const navLink = document.querySelectorAll(".nav-link");
 
window.onscroll = function(){
    if(window.scrollY > 100){
      navLink.forEach(el => {
        el.classList.add('addColor')
      })
      homeNav.classList.add('scrollNow')
     
    } else {
      navLink.forEach(el => {
        el.classList.remove('addColor')
      })
      homeNav.classList.remove('scrollNow')
     
    }
  
// add toggle style to scroll to top button
if(window.scrollY > 400){ 
  scrollToTop.style.opacity= '1'
}else {
  scrollToTop.style.opacity= '0'  
}
}


