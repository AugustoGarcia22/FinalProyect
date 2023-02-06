const navToggle = document.querySelector(".nav-boton")
const navMenu = document.querySelector(".Nav-menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("Nav-menu_visible")
})

const bdark = document.querySelector('#bdark');
const body = document.querySelector('body');

bdark.addEventListener('click', e =>{
    body.classList.toggle('darkmode');
}); 
