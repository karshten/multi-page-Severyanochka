import
{ProductItem, showElem, hideElem, hideElemOnEvent}
    from "./render.js";

const dropDownContent = document.querySelector('.account__dropDown--menu'),
    dropDownBtns = document.querySelectorAll('.dropDown-btn'),
    dropDownWindow = document.querySelectorAll('.dropDown-window')
dropDownWindow[1].style.top = '-105%'

dropDownBtns.forEach((btn, i) => {
    let clickedBtn = false
    btn.onclick = () => {
        if (clickedBtn === false) {
            clickedBtn = true
            showElem(dropDownWindow[i])
            btn.classList.add('chevrons-left')
        }
        else {
            clickedBtn = false
            hideElem(dropDownWindow[i])
            btn.classList.remove('chevrons-left')
        }
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

    const articleModal = document.querySelector('.modal')

    const modalImg = articleModal.querySelector('.modal__img'),
        modalTitle = articleModal.querySelector('.modal__title'),
        modalDate = articleModal.querySelector('.modal__date'),
        modalMain = articleModal.querySelector('.modal__main')

    hideElemOnEvent(articleModal, 'modal')
    articleBtns.forEach((btn) => {
        btn.addEventListener('click', async () => {
            const response = await fetch(`http://localhost:3000/articles/${btn.attributes[0].value}`)
            const thisArticle = await response.json()
            showElem(articleModal, "modal")
            modalImg.attributes.src.value = thisArticle.articleImg
            modalDate.innerHTML = thisArticle.articleDate
            modalMain.innerHTML = thisArticle.articleContent
            modalTitle.innerHTML = thisArticle.articleTitle
        })
    })
}

articleData()