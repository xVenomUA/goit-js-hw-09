
const bodyColor = document.querySelector('body');
const stopcolor = document.querySelector('button[data-stop]');
const startColor = document.querySelector('button[data-start]');
stopcolor.setAttribute('disabled', true);
console.log(5);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let backColor = null;
const onClickStart = () => { 
    backColor = setInterval(() => {
        bodyColor.style.backgroundColor = getRandomHexColor(); 
    }, 750);
    startColor.setAttribute('disabled', true);
    stopcolor.removeAttribute('disabled');
}
startColor.addEventListener('click', onClickStart); 
const onclickStop = () => {
    clearInterval(backColor);
    startColor.removeAttribute('disabled');
    stopcolor.setAttribute('disabled', true);
}
stopcolor.addEventListener('click', onclickStop);
