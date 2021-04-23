
let cardOne = document.querySelector('.card__one')
let cardTwo = document.querySelector('.card__two')
let cardThree = document.querySelector('.card__three')
let cardFour = document.querySelector('.card__four')
let cardFive = document.querySelector('.card__five')
let cardSix = document.querySelector('.card__six')

let containerWithCards = document.getElementById('all__cards')

let allCards = [cardOne, cardTwo, cardThree, cardFour, cardFive, cardSix]


for (let element of allCards) {
    element.addEventListener('mouseover', setHoverMask)
}

for (let element of allCards) {
    element.addEventListener('mouseout', removeHoverMask)
}

function setHoverMask (event) {
    for (let element of allCards) {
        if (element != event.target){
            element.classList.remove('not__hover__mask')
            element.classList.add('hover__mask')  
        }
        else{
            element.classList.add('not__hover__mask')
        }
    }
}

function removeHoverMask () {
    for (let element of allCards) {
        element.classList.remove('hover__mask')
    }
}

