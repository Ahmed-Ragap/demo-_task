
'use strict';


// toggle absolute && fixed navbar
let homeNav = document.querySelector(".navbar");
window.onscroll = function(){
  const scroll = window.scrollY > 100 ? homeNav.classList.add('scrollNow'):   homeNav.classList.remove('scrollNow')

} 

