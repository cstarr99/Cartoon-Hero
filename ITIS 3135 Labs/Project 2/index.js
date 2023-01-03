'use strict';

function openTab(event, Topic) {
    const tabpara = document.getElementsByClassName("tab-para");
    for (let i = 0; i < tabpara.length; i++) {
      tabpara[i].style.display = "none";
    }
    const tabs = document.getElementsByClassName("tabs");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].className = tabs[i].className.replace(" active", "");
    }

    document.getElementById(Topic).style.display = "block";
    event.currentTarget.className += " active";
  }

  