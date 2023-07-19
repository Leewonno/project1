let mainText = document.querySelector("h2");
let subT1 = document.querySelector(".title2 > p");
let mainImg = document.querySelector(".mainInfor2 > img")

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    if(value > 200) {
    mainText.style.animation = "mySlide 1s ease-out";
    mainImg.style.animation = "mySlide 3s ease-out";
    subT1.style.animation = "mySlide 1s ease-out";
    } else {
        mainText.style.animation = "disapear 1s ease-out";
        mainImg.style.animation = "disapear 3s ease-out";
        subT1.style.animation = "disapear 1s ease-out";
    }
});

let mainText2 = document.querySelector(".title3 > h2");
let subT2 = document.querySelector(".title3 > p");

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    if(value > 700) {
    mainText2.style.animation = "mySlide2 1s ease-out";
    subT2.style.animation = "mySlide2 1s ease-out";
    } else {
        mainText2.style.animation = "disapear2 1s ease-out";
        subT2.style.animation = "disapear2 1s ease-out";
    }
});

let mainText3 = document.querySelector(".title4 > h2");
let subT3 = document.querySelector(".title4 > p");

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    if(value > 1183) {
    mainText3.style.animation = "mySlide3 1s ease-out";
    subT3.style.animation = "mySlide3 1s ease-out";
    } else {
        mainText3.style.animation = "disapear3 1s ease-out";
        subT3.style.animation = "disapear3 1s ease-out";
    }
});