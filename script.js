function myFunction() {
  document.getElementById("mymenu").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.menubtn')) {
    var dropdowns = document.getElementsByClassName("menucontent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


home.changeColorGrey = function() {
  document.body.style.background = "lightgrey";
  document.getElementById("curentcolor").innerHTML = "Grey";
}
red.changeColorRed = function() {
  document.body.style.background = "red";
  document.getElementById("curentcolor").innerHTML = "Red";
}
orange.changeColorOrange = function() {
  document.body.style.background = "orange";
  document.getElementById("curentcolor").innerHTML = "Orange";
}
purple.changeColorPurple = function() {
  document.body.style.background = "purple";
  document.getElementById("curentcolor").innerHTML = "Purple";
}
green.changeColorGreen = function() {
  document.body.style.background = "green";
  document.getElementById("curentcolor").innerHTML = "Green";
}


window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key){
  if (key.keyCode == "49"){
    document.body.style.background = "lightgrey";
    document.getElementById("curentcolor").innerHTML = "Grey";
  }
  else if (key.keyCode == "50"){
    document.body.style.background = "red";
    document.getElementById("curentcolor").innerHTML = "Red";
  }
  else if (key.keyCode == "51"){
    document.body.style.background = "orange";
    document.getElementById("curentcolor").innerHTML = "Orange";
  }
  else if (key.keyCode == "52"){
    document.body.style.background = "purple";
    document.getElementById("curentcolor").innerHTML = "Purple";
  }
  else if (key.keyCode == "53"){
    document.body.style.background = "green";
    document.getElementById("curentcolor").innerHTML = "Green";
  }
}