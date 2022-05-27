
function bgColors() {
    var container = document.getElementById("container");
    var bgColorName = prompt("Enter Background Color");
    container.style.backgroundColor = bgColorName;
  }
  
  function textColors(){
      var heading = document.getElementById("heading");
      var para = document.getElementById("para");
      var textColor = prompt("Inter  Text Color")
      heading.style.color=textColor;
      para.style.color=textColor;

  }
  function imgHandler(condition) {
    var img = document.getElementById("img");
    console.log(condition);
    if (condition == "show") {
      img.style.display = "inline-block";
    } else if (condition == "hide") {
      img.style.display = "none";
    } else if (condition == "small") {
      img.style.width = "400px";
      img.style.height = "400px";
    } else if (condition == "large") {
      img.style.width = "700px";
      img.style.height = "700px";
    } else {
      return;
    }
  }

  function imgChange(toggle, e) {
    console.log("helllloo", toggle, e);
    if (toggle == "on") {
      e.src = "img/bulbOn.jpg";
    } else {
      e.src =   "img/bulbOff.jpg";
    }
  }
  function foo() {
    var para1 = document.getElementById("para1");
    console.log(para1.id);
  
    para1.className += " newpara";
  }
  function foo(){
  var para1 = document.getElementById("para1");
  var para2 = document.getElementById("para2");
  var para3 = document.getElementById("para3");
  var para4 = document.getElementById("para4");
  var textColor = prompt("Inter  Text Color")
  para1.style.color=textColor;
  para2.style.color=textColor;
  para3.style.color=textColor;
  para4.style.color=textColor;
}
  