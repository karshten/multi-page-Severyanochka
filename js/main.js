const signInBtn = document.querySelector('#sign-in-btn')
const signInModalForm = document.querySelector('.sign-in-modalJS')

const showModal = (modal) => {
    modal.classList.replace('hide', 'sign-in-modal')
    document.body.style.overflow = 'hidden'
}

const hideModal = (modal) => {
    modal.classList.replace('sign-in-modal', 'hide')
    document.body.style.overflow = 'scroll'
}

signInBtn.onclick = () => {
    showModal(signInModalForm)
}

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