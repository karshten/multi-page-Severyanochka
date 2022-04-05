export const sectionResponse = document.querySelector('.section__search-response'),
    contentResponse = sectionResponse.querySelector('.section__content'),
    labelResponse = sectionResponse.querySelector('.label-about__name'),
    undefinedResponse = sectionResponse.querySelector('.undefined-title'),
    mainPageContent = document.querySelector('#main')

export function hide(elem) {
    elem.classList.add('hide')
}

export function show(elem) {
    elem.classList.remove('hide')
}
