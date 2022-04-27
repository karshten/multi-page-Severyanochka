import {
    hideElem, showElem
} from "../../js/render.js";

const catalogModal = document.querySelector('.catalog__modal'),
    catalogBtns = document.querySelectorAll('.header__catalog')
let btnClicked = false
catalogBtns.forEach(btn =>
    btn.addEventListener('click', () => {
        if (btnClicked === false){
            showElem(catalogModal)
            btnClicked = true
        }
        else {
            hideElem(catalogModal)
            btnClicked = false
        }
    })
)