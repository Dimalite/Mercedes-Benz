const modalBtn = document.querySelector('.more') 
const modal = document.querySelector('.modal')
// const mBtns = document.querySelectorAll('.design__descr')
// console.log(mBtns);



modalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden')
})
// modal__close
modal.addEventListener('click', (event) => {
    const target = event.target

    if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
        modal.classList.add('hidden')
    }
})
