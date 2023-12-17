let navbar=document.querySelector(".navbar");
let menu = document.querySelector("#menu-bar")
menu.onclick=function(){
    menu.classList.toggle('fa-times');

    navbar.classList.toggle("active");
}
let slides = document.querySelectorAll(".slide-container");
let index=0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
// 
document.querySelectorAll(".featured-image-1").forEach(image1=>{
    image1.addEventListener("click",()=>{
var src=image1.getAttribute("src")
        document.querySelector(".big-image-1").src=src
    })
})

document.querySelectorAll(".featured-image-2").forEach(image2 => {
    image2.addEventListener("click", () => {
        var src = image2.getAttribute("src")
        document.querySelector(".big-image-2").src = src
    })
})

document.querySelectorAll(".featured-image-3").forEach(image3 => {
    image3.addEventListener("click", () => {
        var src = image3.getAttribute("src")
        document.querySelector(".big-image-3").src = src
    })
})

// 
var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
});
var swiper2 = new Swiper(".mySwiper2", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
        },
        next: {
            shadow: true,
            translate: ["120%", 0, -500],
        },
    },
});
var swiper3 = new Swiper(".mySwiper3", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
});
var swiper4 = new Swiper(".mySwiper4", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [180, 0, 0],
        },
        next: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [-180, 0, 0],
        },
    },
});
var swiper5 = new Swiper(".mySwiper5", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: ["-125%", 0, -800],
            rotate: [0, 0, -90],
        },
        next: {
            shadow: true,
            translate: ["125%", 0, -800],
            rotate: [0, 0, 90],
        },
    },
});
var swiper6 = new Swiper(".mySwiper6", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            origin: "left center",
            translate: ["-5%", 0, -200],
            rotate: [0, 100, 0],
        },
        next: {
            origin: "right center",
            translate: ["5%", 0, -200],
            rotate: [0, -100, 0],
        },
    },
});3.


// 
var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});