<<<<<<< HEAD
//TOP MENU HOVER
const menuButtons = document.querySelectorAll('.menu_btn');

for (var i = 0; i < menuButtons.length; i++) {
    let count = i;

    menuButtons[count].onmouseenter = function () {
        menuButtons[count].classList.add("hover_border");
    };

    menuButtons[count].onmouseleave = function () {
        menuButtons[count].classList.remove("hover_border");
    };
};

const socialIcons = document.querySelectorAll('footer .social li');

const socialPath = document.querySelectorAll('footer .social path');

for (var j = 0; j < menuButtons.length; j++) {
    let count = j;

    socialIcons[count].onmouseenter = function () {
        socialPath[count].classList.add("green_icon");
    };

    socialIcons[count].onmouseleave = function () {
        socialPath[count].classList.remove("green_icon");
    };
};

//Mobile Navigation

const navButton = document.getElementById('mobile_nav_btn');
const closeButton = document.getElementById('mobile_close_btn');
const mobileNavigation = document.getElementById('mobile_navigation');
const hamburgerButton = document.querySelector('#mobile_nav_btn g');
const exButton = document.querySelector("#mobile_close_btn g")

//add hover effect to icons
navButton.onmouseenter = function () {
    hamburgerButton.classList.add("green_icon");
};
navButton.onmouseleave = function () {
    hamburgerButton.classList.remove("green_icon");
};
closeButton.onmouseenter = function () {
    exButton.classList.add("green_icon");
};
closeButton.onmouseleave = function () {
    exButton.classList.remove("green_icon");
};

//add click function to show menu
navButton.addEventListener("click", function() {
    mobileNavigation.style.display = "flex";
    navButton.style.display = "none";
    closeButton.style.display = "flex";
});

//add click function to close menu
closeButton.addEventListener("click", function() {
    mobileNavigation.style.display = "none";
    navButton.style.display = "flex";
    closeButton.style.display = "none";
=======
//TOP MENU HOVER
const menuButtons = document.querySelectorAll('.menu_btn');

for (var i = 0; i < menuButtons.length; i++) {
    let count = i;

    menuButtons[count].onmouseenter = function () {
        menuButtons[count].classList.add("hover_border");
    };

    menuButtons[count].onmouseleave = function () {
        menuButtons[count].classList.remove("hover_border");
    };
};

const socialIcons = document.querySelectorAll('footer .social li');

const socialPath = document.querySelectorAll('footer .social path');

for (var j = 0; j < menuButtons.length; j++) {
    let count = j;

    socialIcons[count].onmouseenter = function () {
        socialPath[count].classList.add("green_icon");
    };

    socialIcons[count].onmouseleave = function () {
        socialPath[count].classList.remove("green_icon");
    };
};

//Mobile Navigation

const navButton = document.getElementById('mobile_nav_btn');
const closeButton = document.getElementById('mobile_close_btn');
const mobileNavigation = document.getElementById('mobile_navigation');
const hamburgerButton = document.querySelector('#mobile_nav_btn g');
const exButton = document.querySelector("#mobile_close_btn g")

//add hover effect to icons
navButton.onmouseenter = function () {
    hamburgerButton.classList.add("green_icon");
};
navButton.onmouseleave = function () {
    hamburgerButton.classList.remove("green_icon");
};
closeButton.onmouseenter = function () {
    exButton.classList.add("green_icon");
};
closeButton.onmouseleave = function () {
    exButton.classList.remove("green_icon");
};

//add click function to show menu
navButton.addEventListener("click", function() {
    mobileNavigation.style.display = "flex";
    navButton.style.display = "none";
    closeButton.style.display = "flex";
});

//add click function to close menu
closeButton.addEventListener("click", function() {
    mobileNavigation.style.display = "none";
    navButton.style.display = "flex";
    closeButton.style.display = "none";
>>>>>>> 803e8bc2b1f9157992b74ee6b7dc20178098e53d
});