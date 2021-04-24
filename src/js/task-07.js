const input = document.getElementById('font-size-control');
const text = document.getElementById('text');

input.addEventListener('input', onInputChange);
function onInputChange(event) {
    event.currentTarget.value < 50 ? text.style.fontSize = '10px' : text.style.fontSize = '50px';
}