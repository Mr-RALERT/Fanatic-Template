

// Start Header :

let btnBars = document.querySelector(".header .bars")

let btnCansle = document.querySelector(".header .container  > div.d-flex .top i");



let divBox = document.querySelector(".header .container > div.d-flex") ;



btnBars.onclick = function () {
    divBox.style.cssText = "right : 0;";

}

btnCansle.onclick = function () {
    divBox.style.cssText = "right : -300%;";

}


let header = document.querySelector(".header");

let containerHeader = document.querySelector(".header .container")
let btnUp = document.querySelector(".btnUp");

let allLinks = document.querySelectorAll(".header ul li");


allLinks.forEach((ele) => {
    ele.onclick = function () {
        window.scrollTo(0,ele.getAttribute("scroll"))
    }
})





window.onscroll = function () {
    if (window.scrollY >= 100) {
        containerHeader.style.cssText = "height : 50px";
        btnUp.style.cssText = "display : block ;"
    }else {
        btnUp.style.cssText = "display : none ;"
        containerHeader.style.cssText = "height : inhert"
    }
    if (window.scrollY < 1000) {
        allLinks.forEach((ele) => ele.classList.remove("active"))
        allLinks[0].classList.add("active");
    }
    if (window.scrollY >= 1000) {
        allLinks.forEach((ele) => ele.classList.remove("active"))
        allLinks[1].classList.add("active");
    }
    if (window.scrollY >= 2000) {
        allLinks.forEach((ele) => ele.classList.remove("active"))
        allLinks[2].classList.add("active");
    }
    if (window.scrollY >= 4500) {
        allLinks.forEach((ele) => ele.classList.remove("active"))
        allLinks[3].classList.add("active");
    }
    if (window.scrollY >= 6200) {
        allLinks.forEach((ele) => ele.classList.remove("active"))
        allLinks[4].classList.add("active");
    }
    if (window.scrollY >= 7000) {
        allLinks.forEach((ele) => ele.classList.remove("active"))
        allLinks[5].classList.add("active");
    }
}


