let nameElem = document.querySelector('#name');
let importantElems = document.querySelectorAll('#john > .important');
nameElem.addEventListener('focus', (event) => {
    event.stopPropagation();
    importantElems.forEach(important => {
        important.classList.add('shape');
    })
})