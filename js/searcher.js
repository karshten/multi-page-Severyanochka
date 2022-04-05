import
{
    sectionResponse, contentResponse, labelResponse, undefinedResponse, mainPageContent,
    hide, show
}
    from "./render.js";

let catalogNames = [
    'Молоко',
    'Колбаса',
    'Мясо',
    'Овощи',
    'Напитки',
    'Непродовольственные товары',
    'Кондитерское изделие',
    'Сладкое',
    'Хлеб',
    'Здоровое питание',
    'Детское питание',
    'Зоотовары',
    'Блинчики',
    'Творог',
    'Сгущеное молоко',
    'Чай',
    'Кофе',
    'Масло сливочное',
    'Еда',
]

const sortedNames = catalogNames.sort()
const inputSearch = document.querySelector('.search__input')
const listSearch = document.querySelector('.content__list')

inputSearch.addEventListener('keyup', (e) => {
    const value = inputSearch.value
    removeListItem()

    for (let i of sortedNames) {
        if (i.toLowerCase().includes(value.toLowerCase())
            && value !== '') {

            let listItem = document.createElement('li')
            listItem.classList.add('list__item')
            listItem.setAttribute("onclick", "displayNames('" + i + "')")

            let name = "<b>" + i.substr(0, value.length) + "</b>";
            name += i.substr(value.length)

            listItem.innerHTML = name
            listSearch.appendChild(listItem)
        }
    }

    if (e.code === 'Enter' && value !== '') {
        onSearch(value)
        removeListItem()
    }
})

function displayNames(value) {
    inputSearch.value = value
    removeListItem()
}

function removeListItem() {
    document.querySelectorAll(".list__item").forEach((item) => {
        item.remove()
    })
}

function onSearch(value) {
    inputSearch.value = ''
    hide(mainPageContent)
    show(sectionResponse)
    labelResponse.innerHTML = value
    console.log('check')
}

hide(sectionResponse)
hide(undefinedResponse)
