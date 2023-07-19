// let options = {
//     rootMargin: "0px",
//     threshold: 1.0
// }

// let observer = new IntersectionObserver(callback, options)

// function callback (e) {
//     // if (e.isIntersecting === false) {
//     $(target).slideUp()
//     console.log(e)
//     // }
// }

// let target = document.querySelector('map');
// observer.observe(target);

let mainText = document.querySelector("h2");
let subT1 = document.querySelector(".title2 > p");

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    if(value > 200) {
    mainText.style.animation = "mySlide 1s ease-out";
    subT1.style.animation = "mySlide 1s ease-out";
    } else {
        mainText.style.animation = "disapear 1s ease-out";
        subT1.style.animation = "disapear 1s ease-out";
    }
});

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    console.log(value)
    if(value > 700) {
    mainText.style.animation = "mySlide 1s ease-out";
    subT1.style.animation = "mySlide 1s ease-out";
    } else {
        mainText.style.animation = "disapear 1s ease-out";
        subT1.style.animation = "disapear 1s ease-out";
    }
});

