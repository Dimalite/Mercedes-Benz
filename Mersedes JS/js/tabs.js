const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]')
const tabsContentElems = document.querySelectorAll('[data-tabs-field]')
const titles = document.querySelectorAll('.section__title design__title')
console.log(titles);

for (let btn of tabsHandlerElems) {
    btn.addEventListener('click', () => {
        tabsHandlerElems.forEach(item => item.classList.remove('design-list__item_active'))
        btn.classList.add('design-list__item_active')

        tabsContentElems.forEach(content => {
            if (content.dataset.tabsField === btn.dataset.tabsHandler) {
                content.classList.remove('hidden')
            } else {
                content.classList.add('hidden')
            }
        })
    })
}


