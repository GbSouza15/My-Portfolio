const btnMobile = document.querySelector('#btn-mobile')

const elements = document.querySelectorAll('nav li')

btnMobile.addEventListener('click', () => {
    const nav = document.querySelector('#navegacao')
    nav.classList.toggle('active')
})

console.log(elements)