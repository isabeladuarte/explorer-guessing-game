// Variáveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

console.log(randomNumber)

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleKeydownEnteder)

// Funções
function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector('#inputNumber')
    const number = Number(inputNumber.value)
    number ? '' : alert('Campo obrigatório')
    
    if(number >= 0 && number <=10){
        if(number == randomNumber) {
            toggleScreen()

            screen2.querySelector('h2').innerText = `Acertou em ${xAttempts} tentativas`
        }
    } else {
        alert('Digite um número entre 0 e 10')
    }

    inputNumber.value = ''

    xAttempts++
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function handleKeydownEnteder() {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick() 
    } 
}

