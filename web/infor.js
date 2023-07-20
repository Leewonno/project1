let mainText = document.querySelector("h2");
let subT1 = document.querySelector(".title2 > p");
let mainImg = document.querySelector(".mainInfor2 > img");

window.addEventListener("scroll", function () {
    let value = window.scrollY;

    if(value > 200) {
    mainText.style.animation = "mySlide1 1s ease-out";
    subT1.style.animation = "mySlide1 1s ease-out";
    mainImg.style.animation = "mySlide1 3s ease-out";
    } else {
        mainText.style.animation = "disapear1 1s ease-out";
        subT1.style.animation = "disapear1 1s ease-out";
        mainImg.style.animation = "disapear1 3s ease-out";
    }
});

let mainText2 = document.querySelector(".title3 > h2");
let subT2 = document.querySelector(".title3 > p");
let mainImg2 = document.querySelector(".mainInfor3 > img");

window.addEventListener("scroll", function () {
    let value = window.scrollY;

    if(value > 700) {
    mainText2.style.animation = "mySlide2 1s ease-out";
    subT2.style.animation = "mySlide2 1s ease-out";
    mainImg2.style.animation = "mySlide2 3s ease-out";
    } else {
        mainText2.style.animation = "disapear2 1s ease-out";
        subT2.style.animation = "disapear2 1s ease-out";
        mainImg2.style.animation = "disapear2 3s ease-out";
    }
});

let mainText3 = document.querySelector(".title4 > h2");
let subT3 = document.querySelector(".title4 > p");
let mainImg3 = document.querySelector(".mainInfor4 > img");

window.addEventListener("scroll", function () {
    let value = window.scrollY;

    if(value > 1136) {
    mainText3.style.animation = "mySlide1 1s ease-out";
    subT3.style.animation = "mySlide1 1s ease-out";
    mainImg3.style.animation = "mySlide1 3s ease-out";
    } else {
        mainText3.style.animation = "disapear1 1s ease-out";
        subT3.style.animation = "disapear1 1s ease-out";
        mainImg3.style.animation = "disapear1 3s ease-out";
    }
});

let map = document.querySelector(".map");

window.addEventListener("scroll", function () {
    let value = window.scrollY;

    if(value > 1580) {
        map.style.animation = "mySlide3 2s ease-out";
    } else {
        map.style.animation = "disapear3 2s ease-out";
    }
});



// let box = $('main')
// let boxHeight = box.height();
// let boxOffsetTop = box.offset().top;
// let quickMenu = $('.btn');
// let quickMenuHeight = quickMenu.height();
// const DURATION = 700;

// $(window).resize(function(){
//     boxHeight = box.height();
//     boxOffsetTop = box.offset().top;
//     quickMenuHeight = quickMenu.height();
// })

// $(window).scroll(function() {
//     let scrollTop = $(this).scrollTop();
//     let point;
//     let endPoint = boxHeight - quickMenuHeight;
//     if ( scrollTop < boxOffsetTop ) {
//         point = 0;
//     } else if ( scrollTop > endPoint ) {
//         point = endPoint;
//     } else {
//         point = scrollTop - boxOffsetTop; // 따라다니는 영역에서 우측 최상단에 위치
//     }
//     quickMenu.stop().animate({top: point}, DURATION);
// });