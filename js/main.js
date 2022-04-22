import
{ProductItem, contentResponse}
    from "./render.js";

const signInBtn = document.querySelectorAll('.sign-in-btn')
const signInModalForm = document.querySelector('.sign-in-modalJS')

const showModal = (modal, modalClass) => {
    modal.classList.replace('hide', modalClass)
}

const hideModal = (modal, modalClass) => {
    modal.classList.replace(modalClass, 'hide')
}

const hideModalOnEvent = (modal, modalClass) => {
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains(modalClass)) {
            hideModal(modal, modalClass)
        }
    })
}

hideModalOnEvent(signInModalForm, 'sign-in-modalJS')

signInBtn.forEach((btn) => {
    btn.onclick = () => {
        showModal(signInModalForm, 'sign-in-modalJS')
        document.body.style.overflow = 'hidden'
    }
})

document.body.addEventListener('keydown', (e) => {
    if (e.code === "Escape") {
        hideModal(signInModalForm)
        document.body.style.overflow = 'scroll'
    }
})

const sectionContent = document.querySelectorAll('.section__content')
const productItemData = async () => {
    const response = await fetch('http://localhost:3000/products-items')
    const result = await response.json()
    let resultForSectionContent = result
    if (resultForSectionContent.length > 4) {
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
productItemData()

const articleData = async () => {
    const response = await fetch('http://localhost:3000/articles')
    const articles = await response.json()

    const articleSection = document.querySelector('.articles')
    const articleContent = articleSection.querySelector(".articles__content")
    for (let article of articles) {
        articleContent.innerHTML += `
            <li class="content__item">
                <img class="item__img" src="${article.articleImg}" alt="warning">
                <div class="item__text">
                    <p class="text__date">${article.articleDate}</p>
                    <h4 class="text__title">${article.articleTitle}</h4>
                    <p class="text__main">${article.articleContent.slice(0, 100)}...</p>
                    <button data-idx="${article.id}" class="basket-btn">Подробнее</button>
                </div>
            </li>
    `
    }
    const articleBtns = articleSection.querySelectorAll(".basket-btn")

    const articleModal = document.querySelector('.articles__modal'),
        articleModalDialog = articleModal.querySelector('.modal__dialog--content')

    const modalImg = articleModal.querySelector('.modal__img'),
        modalTitle = articleModal.querySelector('.modal__title'),
        modalDate = articleModal.querySelector('.modal__date'),
        modalMain = articleModal.querySelector('.modal__main')

    hideModalOnEvent(articleModal, 'articles__modal')
    articleBtns.forEach((btn) => {
        btn.addEventListener('click', async () => {
            const response = await fetch(`http://localhost:3000/articles/${btn.attributes[0].value}`)
            const thisArticle = await response.json()
            showModal(articleModal, "articles__modal")
            modalImg.attributes.src.value = thisArticle.articleImg
            modalDate.innerHTML = thisArticle.articleDate
            modalMain.innerHTML = thisArticle.articleContent
            modalTitle.innerHTML = thisArticle.articleTitle
        })
    })
}

articleData()