
'use strict';

const accordianButtons = document.querySelectorAll('button');

accordianButtons.addEventListener("click", buttonClick());

function buttonClick() {
var btn = alert(this.id);
btn.classList.toggle('is-open');
var content = this.nextElementSibling;
content.classList.toggle('is-open');

for (i = 0; i < accordianButtons.length; i++) {
if (content != btn) {
    content = null;
  }
   else {
    content = content.classList;
  }
}


}
