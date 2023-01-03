'use strict';

const accordion = document.getElementsByClassName("accordion");
let i;

function open() {
    this.classList.toggle("active");
    
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block"; 
}
}


for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", open);
}


