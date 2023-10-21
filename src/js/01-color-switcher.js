
const bodyColor = document.querySelector('body');
const stopcolor = document.querySelector('button[data-stop]');
const startColor = document.querySelector('button[data-start]');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let backColor = null;
const onClickStart = () => { 
    backColor = setInterval(() => {
        bodyColor.style.backgroundColor = getRandomHexColor(); 
    }, 3000);
    startColor.setAttribute('disabled', true);
}
startColor.addEventListener('click', onClickStart); 
const onclickStop = () => {
    clearInterval(backColor);
    startColor.removeAttribute('disabled');
}
stopcolor.addEventListener('click', onclickStop);
