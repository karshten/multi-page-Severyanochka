const signInBtn = document.querySelector('#sign-in-btn')
const signInModalForm = document.querySelector('.sign-in-modalJS')
const signInDialog = document.querySelector('.sign-in-modal__dialog')

const showModal = () => {
    signInModalForm.classList.replace('hide', 'sign-in-modal')
    document.body.style.overflow = 'hidden'
}

const hideModal = () => {
    signInModalForm.classList.replace('sign-in-modal', 'hide')
    document.body.style.overflow = 'scroll'
}

signInBtn.onclick = () => {
    showModal()
}

signInModalForm.addEventListener('click', (e)=>{
    if (e.target.classList.contains('sign-in-modalJS')){
        hideModal()
    }
})

document.body.addEventListener('keydown', (e) => {
    if (e.code === "Escape") {
        hideModal()
    }
})