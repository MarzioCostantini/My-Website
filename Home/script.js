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

/*Sechseck*/
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
    `rotateY(${x / 80}deg) rotateX(${-y / 30}deg)`
  );
}

document.addEventListener("mousemove", function (e) {
  var x = e.clientX - detectaCoordsElem(el).x;
  var y = e.clientY - detectaCoordsElem(el).y;
  mueveElem(el, x, y);
});

/*Dreick*/
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
    `rotateY(${x / 80}deg) rotateX(${-y / 30}deg)`
  );
}

document.addEventListener("mousemove", function (e) {
  var x = e.clientX - detectaCoordsElem(dreieck).x;
  var y = e.clientY - detectaCoordsElem(dreieck).y;
  mueveElem(dreieck, x, y);
});

/*Kreis*/
const kreis = document.querySelector(".kreis");

function detectaCoordsElem(e) {
  var coords = e.getBoundingClientRect();
  return {
    x: coords.left + coords.width / 2,
    y: coords.top + coords.height / 2,
  };
}
function mueveElem(kreis, x, y) {
  kreis.style.setProperty(
    "transform",
    `rotateY(${x / 80}deg) rotateX(${-y / 30}deg)`
  );
}

document.addEventListener("mousemove", function (e) {
  var x = e.clientX - detectaCoordsElem(kreis).x;
  var y = e.clientY - detectaCoordsElem(kreis).y;
  mueveElem(kreis, x, y);
});



/*Sechseck*/
const sechseck = document.querySelector(".sechseck");

function detectaCoordsElem(e) {
  var coords = e.getBoundingClientRect();
  return {
    x: coords.left + coords.width / 2,
    y: coords.top + coords.height / 2,
  };
}
function mueveElem(sechseck, x, y) {
  sechseck.style.setProperty(
    "transform",
    `rotateY(${x / 80}deg) rotateX(${-y / 30}deg)`
  );
}

document.addEventListener("mousemove", function (e) {
  var x = e.clientX - detectaCoordsElem(sechseck).x;
  var y = e.clientY - detectaCoordsElem(sechseck).y;
  mueveElem(sechseck, x, y);
});











function myFunction() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  const h1 = document.querySelector("h1");
  h1.classList.toggle("h1-dark")
}


/*in View Animation*/

const animierteElemente = document.querySelectorAll(".scrollanimation")
const observer = new IntersectionObserver(
    (element) => {
        element.forEach((element) => {
            if(element.intersectionRatio > 0) {
                element.target.classList.add("sichtbar")
            } 
        })
    }
)

animierteElemente.forEach((eintrag)=> {
    observer.observe(eintrag)
})