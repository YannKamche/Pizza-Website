const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

const navLink = document.querySelectorAll(".nav__link")
/*~~~~~~~~~~~~~~~ TOGGLE MENU ~~~~~~~~~~~~~~~*/
/* MENU SHOW */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* MENU HIDDEN */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu")
    })
}

/* REMOVE MENU MOBILE */
navLink.forEach(link => link.addEventListener('click', () => {
    navMenu.classList.remove("show-menu")
}))
/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/