import
{ProductItem, contentResponse}
    from "./render.js";

const signInBtn = document.querySelectorAll('.sign-in-btn')
const signInModalForm = document.querySelector('.sign-in-modalJS')

const showModal = (modal) => {
    modal.classList.replace('hide', 'sign-in-modal')
    document.body.style.overflow = 'hidden'
}

const hideModal = (modal) => {
    modal.classList.replace('sign-in-modal', 'hide')
    document.body.style.overflow = 'scroll'
}

signInBtn.forEach((btn) => {
    btn.onclick = () => {
        showModal(signInModalForm)
    }
})

const hideModalOnEvent = (modal, modalClass) => {
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains(modalClass)) {
            hideModal(modal)
        }
    })
}
hideModalOnEvent(signInModalForm, 'sign-in-modalJS')

document.body.addEventListener('keydown', (e) => {
    if (e.code === "Escape") {
        hideModal(signInModalForm)
    }
})

const sectionContent = document.querySelectorAll('.section__content')
const data = async () => {
    const response = await fetch('http://localhost:3000/products-items')
    const result = await response.json()
    let resultForSectionContent = result
    if (resultForSectionContent.length > 4){
        resultForSectionContent.splice(4)
    }
    for (let obj of resultForSectionContent) {
        const item = new ProductItem(
            obj.img,
            obj.price,
            obj.stockPercent,
            obj.isStock,
            obj.defaultPrice,
            obj.title,
            obj.stars
        )
        item.render(sectionContent)
    }
}
data()