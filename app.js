


const navBtn = document.querySelector(".nav-button-icon")
const mobileNav = document.querySelector(".mobil-nav")



navBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("mobail-nav-activ")
    navBtn.classList.toggle("nav-button-close")

})


let sectHedMenu = document.querySelector(".section-header-menu")
let headerLogo = document.querySelector(".header-logo")
let headerMenu_a = document.querySelectorAll(".header-menu a")
let headerMenuMobil_a = document.querySelectorAll(".header-menu-mobil a")


headerMenuMobil_a.forEach((a) => {
    a.addEventListener('click', () => {
        mobileNav.classList.toggle("mobail-nav-activ")
        navBtn.classList.toggle("nav-button-close")
    })
})





window.addEventListener('scroll', function () {
    headerMenu_a.forEach(el => {
        if (window.scrollY > 30) {
            el.style.color = "white"
        }
        if (window.scrollY < 30) {
            el.style.color = "black"
        }
    });

    if (window.scrollY > 30) {
        sectHedMenu.classList.add("section-header-menu-scrol")
        headerLogo.classList.add("header-logo-scrol")
    }
    if (window.scrollY < 30) {
        sectHedMenu.classList.remove("section-header-menu-scrol")
        headerLogo.classList.remove("header-logo-scrol")
    }
});


let buttonScroll = document.querySelector(".ric")
buttonScroll.onclick = function scrollUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () { scrolFun() }
function scrolFun() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500
        && document.documentElement.clientWidth > 990) {
        buttonScroll.style.display = "block"
    } else {
        buttonScroll.style.display = "none"
    }
}
// карусель========================



$(document).ready(function () {
    $('.carousel').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,




    });


});



// карусель №2======================
$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 884,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    pauseOnHover: true,
                }
            },
            {
                breakpoint: 595,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    pauseOnHover: true,
                }
            },

        ],

    });
});
// слайдер для 5 блока
$(document).ready(function () {
    $('.content-investment').slick({

        responsive: [
            {
                breakpoint: 2048,
                settings: "unslick"
            },
            {
                breakpoint: 686,
                settings: {

                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    pauseOnHover: true,
                }
            },
        ]


    });
});



// слайдер для 6 блока
$(document).ready(function () {
    $('.start-content-item').slick({
        arrows: false,
        dots: true,
        responsive: [

            {
                breakpoint: 686,
                dots: true,
                arrows: false,
                pauseOnHover: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            },
            {
                breakpoint: 2400,
                settings: "unslick"
            },
        ]



    });


});




