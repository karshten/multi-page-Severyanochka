import
{
    sectionResponse, contentResponse, labelResponse, undefinedResponse, mainPageContent,
    hide, show, hideFade, showFade
}
    from "./render.js";

const data = async () => {
    const response = await fetch(`http://localhost:3000/catalogNames`)
    const data = await response.json()
    console.log(data)

    const sortedNames = data.sort()
    const inputSearch = document.querySelector('.search__input')
    const listSearch = document.querySelector('.content__list')
    const btnSearch = document.querySelector('.searchBtn')
    hide(undefinedResponse)

    inputSearch.addEventListener('keyup', (e) => {
        let value = inputSearch.value
        value === '' ? hide(listSearch) : show(listSearch)
        const correctText = inputSearch.value[0].toUpperCase()
        inputSearch.value = inputSearch.value.replace(inputSearch.value[0], correctText)
        removeListItem()
        for (let i of sortedNames) {
            if (i.toLowerCase().startsWith(value.toLowerCase())
                && value !== '') {
                let listItem = document.createElement('li')
                listItem.classList.add('list__item')
                listItem.setAttribute("onclick", "displayNames('" + i + "')")

                let name = "<b>" + i.substr(0, value.length) + "</b>";
                name += i.substr(value.length)


                listItem.onclick = (event) => {
                    onFined(event.target.innerHTML)
                }

                listItem.innerHTML = name
                listSearch.appendChild(listItem)
            }
        }

        if (sortedNames.includes(value)) {
            e.code === 'Enter' && value !== '' ? onFined(value) : NaN
            btnSearch.onclick = () => {
                onFined(value)
            }
        } else {
            btnSearch.onclick = () => {
                onUndefined(value)
            }
            e.code === 'Enter' && value !== '' ? onUndefined(value) : NaN
        }
    })

    function onUndefined(value) {
        onSearch(value)
        show(undefinedResponse)
        hide(contentResponse)
        contentResponse.classList.remove('section__content')
    }

    function onFined(value) {
        onSearch(value)
        hide(undefinedResponse)
        show(contentResponse)
        contentResponse.classList.add('section__content')
    }

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
        const correctText = inputSearch.value[0].toUpperCase()
        inputSearch.value = inputSearch.value.replace(inputSearch.value[0], correctText)
        inputSearch.value = ''
        removeListItem()
        hide(mainPageContent)
        show(sectionResponse)
        showFade(sectionResponse)
        setTimeout(() => {
            hideFade(sectionResponse)
        }, 500)
        labelResponse.innerHTML = value
    }
}
data()