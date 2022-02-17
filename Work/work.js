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


/*1*/
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


/*2*/
const dreieck = document.querySelector(".dreieck");

function detectaCoordsElem(e) {
  var coords = e.getBoundingClientRect();
  return {
    x: coords.left + coords.width / 5,
    y: coords.top + coords.height / 5,
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

/*3*/
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


/*4*/
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


/*5*/
const elm5 = document.querySelector(".elm5");

function detectaCoordsElem(e) {
  var coords = e.getBoundingClientRect();
  return {
    x: coords.left + coords.width / 2,
    y: coords.top + coords.height / 2,
  };
}
function mueveElem(elm5, x, y) {
  elm5.style.setProperty(
    "transform",
    `rotateY(${x / 80}deg) rotateX(${-y / 30}deg)`
  );
}

document.addEventListener("mousemove", function (e) {
  var x = e.clientX - detectaCoordsElem(elm5).x;
  var y = e.clientY - detectaCoordsElem(elm5).y;
  mueveElem(elm5, x, y);
});

/*6*/
const elm6 = document.querySelector(".elm6");

function detectaCoordsElem(e) {
  var coords = e.getBoundingClientRect();
  return {
    x: coords.left + coords.width / 2,
    y: coords.top + coords.height / 2,
  };
}
function mueveElem(elm6, x, y) {
  elm6.style.setProperty(
    "transform",
    `rotateY(${x / 80}deg) rotateX(${-y / 30}deg)`
  );
}

document.addEventListener("mousemove", function (e) {
  var x = e.clientX - detectaCoordsElem(elm6).x;
  var y = e.clientY - detectaCoordsElem(elm6).y;
  mueveElem(elm6, x, y);
});

/*7*/
const elm7 = document.querySelector(".elm7");

function detectaCoordsElem(e) {
  var coords = e.getBoundingClientRect();
  return {
    x: coords.left + coords.width / 2,
    y: coords.top + coords.height / 2,
  };
}
function mueveElem(elm7, x, y) {
  elm7.style.setProperty(
    "transform",
    `rotateY(${x / 80}deg) rotateX(${-y / 30}deg)`
  );
}

document.addEventListener("mousemove", function (e) {
  var x = e.clientX - detectaCoordsElem(elm7).x;
  var y = e.clientY - detectaCoordsElem(elm7).y;
  mueveElem(elm7, x, y);
});

/*8*/
const elm8 = document.querySelector(".elm8");

function detectaCoordsElem(e) {
  var coords = e.getBoundingClientRect();
  return {
    x: coords.left + coords.width / 2,
    y: coords.top + coords.height / 2,
  };
}
function mueveElem(elm8, x, y) {
  elm8.style.setProperty(
    "transform",
    `rotateY(${x / 80}deg) rotateX(${-y / 30}deg)`
  );
}

document.addEventListener("mousemove", function (e) {
  var x = e.clientX - detectaCoordsElem(elm8).x;
  var y = e.clientY - detectaCoordsElem(elm8).y;
  mueveElem(elm8, x, y);
});

/*9*/
const elm9 = document.querySelector(".elm9");

function detectaCoordsElem(e) {
  var coords = e.getBoundingClientRect();
  return {
    x: coords.left + coords.width / 2,
    y: coords.top + coords.height / 2,
  };
}
function mueveElem(elm9, x, y) {
  elm9.style.setProperty(
    "transform",
    `rotateY(${x / 90}deg) rotateX(${-y / 30}deg)`
  );
}

document.addEventListener("mousemove", function (e) {
  var x = e.clientX - detectaCoordsElem(elm9).x;
  var y = e.clientY - detectaCoordsElem(elm9).y;
  mueveElem(elm9, x, y);
});