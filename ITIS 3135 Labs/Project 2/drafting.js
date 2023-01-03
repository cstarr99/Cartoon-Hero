'use strict';

var list = document.getElementsByClassName("item");  
for (let i = 0; i < list.length; i++) {
  let div = document.createElement("DIV");
  let hideButton = document.createTextNode("-");
  div.className = "end";
  div.appendChild(hideButton);
  list[i].appendChild(div);
}


let end = document.getElementsByClassName("end");
for (var i = 0; i < end.length; i++) {
  end[i].onclick = function() {
    const div = this.parentElement;
    div.style.display = "none";
  }
}


