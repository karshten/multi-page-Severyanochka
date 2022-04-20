import {
    hide, show
} from "./render.js";

const catalogModal = document.querySelector('.catalog__modal'),
    catalogBtns = document.querySelectorAll('.header__catalog')
let btnClicked = false
catalogBtns.forEach(btn =>
    btn.addEventListener('click', () => {
        if (btnClicked === false){
            show(catalogModal)
            btnClicked = true
        }
        else {
            hide(catalogModal)
            btnClicked = false
        }
    })
)
