let mainText = document.querySelector("h2");
let subT1 = document.querySelector(".title2 > p");
let mainImg = document.querySelector(".mainInfor2 > img");
let mainTable = document.querySelector(".title2 > table")

let mainText2 = document.querySelector(".title3 > h2");
let subT2 = document.querySelector(".title3 > p");
let mainImg2 = document.querySelector("#mainThird >.mainInfor2 > img");
let mainTable2 = document.querySelector(".title3 > table");


let mainText3 = document.querySelector("#mainFourth > .title2 > h2");
let subT3 = document.querySelector("#mainFourth > .title2 > p");
let mainImg3 = document.querySelector("#mainFourth > .mainInfor2 > img");


let map = document.querySelector(".map"); 

let title = document.querySelector(".songdo")
let title2 = document.querySelector(".gwangan")
let title3 = document.querySelector(".gamcheon")
let title4 = document.querySelector(".dadaepo")


if (title) {
    const ydFirst = 397;
    const ydSecond = 875;
    const ydThird = 1370;
    const ydFourth = 1950;

    window.addEventListener("scroll", function () {
        let value = window.scrollY;
        if(value > ydFirst) {
        mainText.style.animation = "mySlide1 1s ease-out";
        subT1.style.animation = "mySlide1 1s ease-out";
        mainImg.style.animation = "mySlide1 3s ease-out";
        mainTable.style.animation = "mySlide1 1s ease-out";
        } else {
            mainText.style.animation = "disapear1 1s ease-out";
            subT1.style.animation = "disapear1 1s ease-out";
            mainImg.style.animation = "disapear1 3s ease-out";
            mainTable.style.animation = "disapear1 1s ease-out";
        }
    });

    window.addEventListener("scroll", function () {
        let value = window.scrollY;

        if(value > ydSecond) {
        mainText2.style.animation = "mySlide2 1s ease-out";
        subT2.style.animation = "mySlide2 1s ease-out";
        mainImg2.style.animation = "mySlide2 3s ease-out";
        mainTable2.style.animation = "mySlide2 1s ease-out";
        } else {
            mainText2.style.animation = "disapear2 1s ease-out";
            subT2.style.animation = "disapear2 1s ease-out";
            mainImg2.style.animation = "disapear2 3s ease-out";
            mainTable2.style.animation = "disapear2 1s ease-out";
        }
    });

    window.addEventListener("scroll", function () {
        let value = window.scrollY;

        if(value > ydThird) {
        mainText3.style.animation = "mySlide1 1s ease-out";
        subT3.style.animation = "mySlide1 1s ease-out";
        mainImg3.style.animation = "mySlide1 3s ease-out";
        } else {
            mainText3.style.animation = "disapear1 1s ease-out";
            subT3.style.animation = "disapear1 1s ease-out";
            mainImg3.style.animation = "disapear1 3s ease-out";
        }
    });

    window.addEventListener("scroll", function () {
        let value = window.scrollY;

        if(value > ydFourth) {
            map.style.animation = "mySlide3 1s ease-out";
        } else {
            map.style.animation = "disapear3 1s ease-out";
        }
    });

} else if(title2) {
    const gwFirst = 450;
    const gwSecond = 980;
    const gwThird = 1493;
    const gwFourth = 2003;

    window.addEventListener("scroll", function () {
        let value = window.scrollY;
        if(value > gwFirst) {
        mainText.style.animation = "mySlide1 1s ease-out";
        subT1.style.animation = "mySlide1 1s ease-out";
        mainImg.style.animation = "mySlide1 3s ease-out";
        } else {
            mainText.style.animation = "disapear1 1s ease-out";
            subT1.style.animation = "disapear1 1s ease-out";
            mainImg.style.animation = "disapear1 3s ease-out";
        }
    });

    window.addEventListener("scroll", function () {
        let value = window.scrollY;

        if(value > gwSecond) {
        mainText2.style.animation = "mySlide2 1s ease-out";
        subT2.style.animation = "mySlide2 1s ease-out";
        mainImg2.style.animation = "mySlide2 3s ease-out";
        } else {
            mainText2.style.animation = "disapear2 1s ease-out";
            subT2.style.animation = "disapear2 1s ease-out";
            mainImg2.style.animation = "disapear2 3s ease-out";
        }
    });

    window.addEventListener("scroll", function () {
        let value = window.scrollY;

        if(value > gwThird) {
        mainText3.style.animation = "mySlide1 1s ease-out";
        subT3.style.animation = "mySlide1 1s ease-out";
        mainImg3.style.animation = "mySlide1 3s ease-out";
        } else {
            mainText3.style.animation = "disapear1 1s ease-out";
            subT3.style.animation = "disapear1 1s ease-out";
            mainImg3.style.animation = "disapear1 3s ease-out";
        }
    });

    window.addEventListener("scroll", function () {
        let value = window.scrollY;

        if(value > gwFourth) {
            map.style.animation = "mySlide3 1s ease-out";
        } else {
            map.style.animation = "disapear3 1s ease-out";
        }
    });

    let use = document.querySelector(".usemap");

    window.addEventListener("scroll", function () {
        let value = window.scrollY;
        
        if(value > 2533) {
            use.style.animation = "mySlide3 2s ease-out";
        } else {
            use.style.animation = "disapear3 2s ease-out";
        }
    });
} else if (title3) {
    const gcFirst = 407;
    const gcSecond = 882;
    const gcThird = 1400;
    const gcFourth = 1928;

    window.addEventListener("scroll", function () {
        let value = window.scrollY;
        console.log(value)
        if(value > gcFirst) {
        mainText.style.animation = "mySlide1 1s ease-out";
        subT1.style.animation = "mySlide1 1s ease-out";
        mainImg.style.animation = "mySlide1 3s ease-out";
        } else {
            mainText.style.animation = "disapear1 1s ease-out";
            subT1.style.animation = "disapear1 1s ease-out";
            mainImg.style.animation = "disapear1 3s ease-out";
        }
    });

    window.addEventListener("scroll", function () {
        let value = window.scrollY;

        if(value > gcSecond) {
        mainText2.style.animation = "mySlide2 1s ease-out";
        subT2.style.animation = "mySlide2 1s ease-out";
        mainImg2.style.animation = "mySlide2 3s ease-out";
        } else {
            mainText2.style.animation = "disapear2 1s ease-out";
            subT2.style.animation = "disapear2 1s ease-out";
            mainImg2.style.animation = "disapear2 3s ease-out";
        }
    });

    window.addEventListener("scroll", function () {
        let value = window.scrollY;

        if(value > gcThird) {
        mainText3.style.animation = "mySlide1 1s ease-out";
        subT3.style.animation = "mySlide1 1s ease-out";
        mainImg3.style.animation = "mySlide1 3s ease-out";
        } else {
            mainText3.style.animation = "disapear1 1s ease-out";
            subT3.style.animation = "disapear1 1s ease-out";
            mainImg3.style.animation = "disapear1 3s ease-out";
        }
    });

    window.addEventListener("scroll", function () {
        let value = window.scrollY;

        if(value > gcFourth) {
            map.style.animation = "mySlide3 1s ease-out";
        } else {
            map.style.animation = "disapear3 1s ease-out";
        }
    });
} else if(title4) {
    const ddFirst = 513;
    const ddSecond = 1010;
    const ddThird = 1502;
    const ddFourth = 2020;
    window.addEventListener("scroll", function () {
        let value = window.scrollY;
        if(value > ddFirst) {
        mainText.style.animation = "mySlide1 1s ease-out";
        subT1.style.animation = "mySlide1 1s ease-out";
        mainImg.style.animation = "mySlide1 3s ease-out";
        } else {
            mainText.style.animation = "disapear1 1s ease-out";
            subT1.style.animation = "disapear1 1s ease-out";
            mainImg.style.animation = "disapear1 3s ease-out";
        }
    });

    window.addEventListener("scroll", function () {
        let value = window.scrollY;

        if(value > ddSecond) {
        mainText2.style.animation = "mySlide2 1s ease-out";
        subT2.style.animation = "mySlide2 1s ease-out";
        mainImg2.style.animation = "mySlide2 3s ease-out";
        } else {
            mainText2.style.animation = "disapear2 1s ease-out";
            subT2.style.animation = "disapear2 1s ease-out";
            mainImg2.style.animation = "disapear2 3s ease-out";
        }
    });

    window.addEventListener("scroll", function () {
        let value = window.scrollY;

        if(value > ddThird) {
        mainText3.style.animation = "mySlide1 1s ease-out";
        subT3.style.animation = "mySlide1 1s ease-out";
        mainImg3.style.animation = "mySlide1 3s ease-out";
        } else {
            mainText3.style.animation = "disapear1 1s ease-out";
            subT3.style.animation = "disapear1 1s ease-out";
            mainImg3.style.animation = "disapear1 3s ease-out";
        }
    });

    window.addEventListener("scroll", function () {
        let value = window.scrollY;

        if(value > ddFourth) {
            map.style.animation = "mySlide3 1s ease-out";
        } else {
            map.style.animation = "disapear3 1s ease-out";
        }
    });
} else {
    const btFirst = 480;
    const btSecond = 980;
    const btThird = 1480;
    const btFourth = 2082;
    window.addEventListener("scroll", function () {
        let value = window.scrollY;
        if(value > btFirst) {
        mainText.style.animation = "mySlide1 1s ease-out";
        subT1.style.animation = "mySlide1 1s ease-out";
        mainImg.style.animation = "mySlide1 3s ease-out";
        } else {
            mainText.style.animation = "disapear1 1s ease-out";
            subT1.style.animation = "disapear1 1s ease-out";
            mainImg.style.animation = "disapear1 3s ease-out";
        }
    });

    window.addEventListener("scroll", function () {
        let value = window.scrollY;

        if(value > btSecond) {
        mainText2.style.animation = "mySlide2 1s ease-out";
        subT2.style.animation = "mySlide2 1s ease-out";
        mainImg2.style.animation = "mySlide2 3s ease-out";
        mainTable2.style.animation = "mySlide2 1s ease-out";
        } else {
            mainText2.style.animation = "disapear2 1s ease-out";
            subT2.style.animation = "disapear2 1s ease-out";
            mainImg2.style.animation = "disapear2 3s ease-out";
            mainTable2.style.animation = "disapear2 1s ease-out";
        }
    });

    window.addEventListener("scroll", function () {
        let value = window.scrollY;
        let mainImg4 = document.querySelector(".mainInfor3 > img")

        if(value > btThird) {
            mainImg4.style.animation = "mySlide3 1s ease-out";
        } else {
            mainImg4.style.animation = "disapear3 1s ease-out";
        }
    });

    window.addEventListener("scroll", function () {
        let value = window.scrollY;
        
        if(value > btFourth) {
            map.style.animation = "mySlide3 1s ease-out";
        } else {
            map.style.animation = "disapear3 1s ease-out";
        }
    });
}




