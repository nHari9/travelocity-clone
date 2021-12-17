var count = 0;
  function dropMenu() {
    if (count == 0) {
      document.getElementById("dropMenu").style.visibility = "visible";
      count = 1;
    } else if (count == 1) {
      document.getElementById("dropMenu").style.visibility = "hidden";
      count = 0;
    } 
  }

  