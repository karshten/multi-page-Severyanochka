export const sectionResponse = document.querySelector('.section__search-response'),
    contentResponse = sectionResponse.querySelector('.section__content'),
    labelResponse = sectionResponse.querySelector('.label-about__name'),
    undefinedResponse = sectionResponse.querySelector('.undefined-title'),
    mainPageContent = document.querySelector('#main')

export function showFade(elem) {
    elem.classList.add('fade')
}

export function hideFade(elem) {
    elem.classList.remove('fade')
}

export const showElem = (elem, elemClass) => {
    elem.classList.replace('hide', elemClass)
    elem.classList.remove('hide')
}

export const hideElem = (elem, elemClass) => {
    elem.classList.replace(elemClass, 'hide')
    elem.classList.add('hide')
    document.body.style.overflow = 'scroll'
}

export const hideElemOnEvent = (elem, elemClass) => {
    elem.addEventListener('click', (e) => {
        if (e.target.classList.contains(elemClass)) {
            hideElem(elem, elemClass)
        }
    })
}

export class ProductItem {
    constructor(img, price, stockPercent, isStock = false, defaultPrice, title, stars) {
        this.img = img;
        this.price = price;
        this.stockPercent = stockPercent;
        this.isStock = isStock;
        this.defaultPrice = defaultPrice;
        this.title = title;
        this.stars = stars;
    }

    render(section) {
        const productItem = document.createElement('div')
        productItem.innerHTML = `
        <div class="item-product">
            <img class="favorite-btn" src="assets/icons/favorite.svg" alt="toFavorites">
            <img class="product__img" src="${this.img}" alt="product">
            <div class="${this.isStock ? "stock" : "hide"}">
                ${this.stockPercent}%
            </div>
            <div class="product__content">
                <div class="product__price">
                    <div class="price__cart__content">
                        <h4 class="cart__price">${this.defaultPrice - (this.defaultPrice * this.stockPercent / 100)} ₽</h4>
                        <p class="${this.isStock ? "" : "hide"}">С картой</p>
                    </div>
                    <div class=" ${this.isStock ? "price__default" : "hide"}">
                        <h4 class="default__price">${this.defaultPrice}</h4>
                        <p>Обычная</p>
                    </div>
                </div>
                <h4 class="product__title">${this.title}</h4>
                <ul class="product-stars">
                    <li class="stars__star star__active"></li>
                    <li class="stars__star star__active"></li>
                    <li class="stars__star"></li>
                    <li class="stars__star"></li>
                    <li class="stars__star"></li>
                </ul>
                <div class="basket-btn">В корзину</div>
            </div>
</div>`

        for (let elem of section) {
            elem.innerHTML += productItem.innerHTML
        }
        contentResponse.innerHTML += productItem.innerHTML
    }
}