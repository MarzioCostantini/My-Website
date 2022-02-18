
const toggleButton = document.querySelector(".toggle-button-menu")
const navbarLinks = document.querySelector(".navbar-link")

toggleButton.addEventListener("click", function(event){
  event.preventDefault()
  navbarLinks.classList.toggle ("nav-open")
})


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

/*Animation Augen*/ 

const color = document.getElementsByClassName("color");
document.onmousemove = function(){

  //get horizontal and vertical position of mouse
  let x = event.clientX * 100 / window.innerWidth + "%";
  let y = event.clientY * 100 / window.innerHeight + "%";
  
  for(let i=0; i < 2; i++){
    color[i].style.left = x;
    color[i].style.top = y;
    color[i].style.transform = "translate(-"+x+", -"+y+")";
  }
  
}