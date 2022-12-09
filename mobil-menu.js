// Dropdown burger menu

function myFunction() {
    let x = document.getElementById("myLinks");
    let y = document.querySelector(".topnav");
    if (x.style.display === "flex") {
      x.style.display = "none";
      y.style.width = "auto";
    } else {
      x.style.display = "flex";
      y.style.width = "100%";
    }
  }