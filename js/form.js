const inputForm = document.querySelector('#phone__input'),
    selectForm = document.querySelector('#phone__select')
console.log(Object(selectForm))
console.log(selectForm.value)
selectForm.onclick = () => {
    if (selectForm.value === 'KG') {
        inputForm.attributes[0].value = '123 456 789'
    }
    else if (selectForm.value === 'RU') {
        inputForm.attributes[0].value = '123 456 78-90'
    }
}
inputForm.onkeypress = ()=>{
    console.log('dasda')
    if (inputForm.value){
        inputForm.value = ''
    }
}