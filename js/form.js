const inputForm = document.querySelector('#phone__input'),
    selectForm = document.querySelector('#phone__select')
selectForm.onclick = () => {
    if (selectForm.value === 'RU') {
        inputForm.attributes[0].value = '12'
    } else if (selectForm.value === 'KG') {
        inputForm.attributes[0].value = '10'
        inputForm.attributes[1].value = '123 456 789'
    }
}