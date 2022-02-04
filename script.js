



document.onmousemove = cursorAnim;
var colors = ["#CBA422"];
function cursorAnim(event) {
  var circle = document.createElement("div");
  circle.setAttribute("class", "circle-mouse");

  document.body.appendChild(circle);

  circle.style.left = event.clientX + "px";
  circle.style.top = event.clientY + "px";

  var color = colors[Math.floor(Math.random() * colors.length)];
  circle.style.borderColor = color;

  circle.style.transition = "all 1.5s ease 0s";

  circle.style.left = circle.offsetLeft - 0 + "px";
  circle.style.top = circle.offsetTop - 0 + "px";

  circle.style.width = "0px";
  circle.style.height = "0px";
  circle.style.borderWidth = "1px";
  circle.style.borderRadius = "50px";
  circle.style.opacity = "0";
}

const el = document.querySelector(".element");

function detectaCoordsElem(e) {
  var coords = e.getBoundingClientRect();
  return {
    x: coords.left + coords.width / 5,
    y: coords.top + coords.height / 5,
  };
}
function mueveElem(el, x, y) {
  el.style.setProperty(
    "transform",
    `rotateY(${x / 1}deg) rotateX(${-y / 1}deg)`
  );
}









document.addEventListener("mousemove", function (e) {
  var x = e.clientX - detectaCoordsElem(el).x;
  var y = e.clientY - detectaCoordsElem(el).y;
  mueveElem(el, x, y);
});

const dreieck = document.querySelector(".dreieck");

function detectaCoordsElem(e) {
  var coords = e.getBoundingClientRect();
  return {
    x: coords.left + coords.width / 2,
    y: coords.top + coords.height / 2,
  };
}
function mueveElem(dreieck, x, y) {
  dreieck.style.setProperty(
    "transform",
    `rotateY(${x / 80}deg) rotateX(${-y / 25}deg)`
  );
}

document.addEventListener("mousemove", function (e) {
  var x = e.clientX - detectaCoordsElem(dreieck).x;
  var y = e.clientY - detectaCoordsElem(dreieck).y;
  mueveElem(dreieck, x, y);
});
