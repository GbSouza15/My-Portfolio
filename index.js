const btnMobile = document.querySelector('#btn-mobile')

const buttonSobre = document.querySelector('.sobre')

const buttonHabilidades = document.querySelector('.habilidades')

const buttonProjetos = document.querySelector('.projetos')

const buttonContato = document.querySelector('.contato')

const nav = document.querySelector('#navegacao')



btnMobile.addEventListener('click', () => {
    
    nav.classList.toggle('active')
})

buttonSobre.addEventListener('click', () => {

    nav.classList.remove('active')
})

buttonHabilidades.addEventListener('click', () => {

    nav.classList.remove('active')
})

buttonProjetos.addEventListener('click', () => {

    nav.classList.remove('active')
})

buttonContato.addEventListener('click', () => {

    nav.classList.remove('active')
})

