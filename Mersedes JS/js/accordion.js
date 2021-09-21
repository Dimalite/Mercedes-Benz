const lists = document.querySelectorAll('.feature-sub')
const btns = document.querySelectorAll('.feature__link')
let changeDiv = document.querySelector('.feature-wrapper')
console.log(changeDiv);

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        btns.forEach((btnItem, idx) => {
            if (btnItem === btn) {
                btnItem.classList.toggle('feature__link_active')
                lists[idx].classList.toggle('hidden')
                changeDiv.classList.toggle('feature-wrapper')
            } else {
                btnItem.classList.remove('feature__link_active')
                lists[idx].classList.add('hidden')
                changeDiv.classList.toggle('feature-wrapper2')
            }

        })
    })
})