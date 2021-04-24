const counterValue = document.getElementById('value');
let number = 0;

const incrementBtnEl = document.querySelector('[data-action="increment"]')
const decrementBtnEl = document.querySelector('[data-action="decrement"]')

incrementBtnEl.addEventListener('click', incrementValue)
/* function incrementValue() {
    number ++
    counterValue.insertAdjacentHTML = number;
} */

decrementBtnEl.addEventListener('click', decrementValue)
/* function decrementValue() {
    number --
    counterValue.insertAdjacentHTML = number;
} */

// или (без innerHTML):
function incrementValue (event) {
    number ++
    const currentTargetCounter = event.currentTarget.value = number;
    counterValue.textContent = currentTargetCounter
}

function decrementValue (event) {
    number --
    const currentTargetCounter = event.currentTarget.value = number;
    counterValue.textContent = currentTargetCounter
} 