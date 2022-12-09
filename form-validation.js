
  
function validateForm() {
    let formName = document.getElementById("name");
    let formMail = document.getElementById("mail");
    let formError1 = document.querySelector(".form-fejl1");
    let formError2 = document.querySelector(".form-fejl2");
    let xy = document.forms["myForm"]["name"].value;
    if (xy == "") {
        formName.style.border = "2px solid var(--red)";
        formError1.innerHTML = '<div style="color :var(--red);margin: -10px 0 20px;">Udfyld dit navn</div>';
        return false;
    }

    let yz = document.forms["myForm"]["mail"].value;
    if (yz == "") {
        formMail.style.border = "2px solid var(--red)";
        formError2.innerHTML = '<div style="color :var(--red);margin: -10px 0 20px;">Udfyld din mail</div>';
        return false;
    }
  }