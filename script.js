const again = document.querySelector('.again')
const guess = document.querySelector('.guess')
const check = document.querySelector('.check')
const score = document.querySelector('.score')
const number = document.querySelector('.number')
const message = document.querySelector('.message')
const highscore = document.querySelector('.highscore')

let gameScore = 20
let gameHighscore = 0
let gameOver = false

const randomNumber = Math.floor(Math.random() * 20) + 1
console.log('COM NUMBER:', randomNumber)

check.addEventListener('click', () => {
    const myNumber = +guess.value

    if (!gameOver) {
        if (!myNumber) {
            message.textContent = 'Type any number...'
        } else {
            if (myNumber == randomNumber) {
                number.textContent = randomNumber
                message.textContent = 'You are win.🏆'
                document.body.style.background = '#60b347'
                if (gameHighscore < gameScore) {
                    gameHighscore = gameScore
                    highscore.textContent = gameHighscore
                }
                
            } else if (myNumber > randomNumber) {
                if (gameScore == 1) {
                    gameOver = true
                }
                gameScore--
                score.textContent = gameScore
                message.textContent = 'Too Height...'
            } else if (myNumber < randomNumber) {
                if (gameScore == 1) {
                    gameOver = true
                }
                gameScore--
                score.textContent = gameScore
                message.textContent = 'Too Low...'
            }
        }
    }
    
})

again.addEventListener('click', () => {
    gameScore = 20
    score.textContent = 20
    document.body.style.background = '#222'
    message.textContent = 'Start guessing...'
    number.textContent = '?'
    guess.value = ''
})