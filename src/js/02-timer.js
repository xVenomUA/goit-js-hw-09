import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
const calendar = document.getElementById('datetime-picker');
const calDays = document.querySelector('span[data-days]');
const calHours = document.querySelector('span[data-hours]');
const calMinutes = document.querySelector('span[data-minutes]');
const calSeconds = document.querySelector('span[data-seconds]');
const start = document.querySelector('button[data-start]');
let time = 0;
let timer = null;
const optionsofReturt = {
  timeout: 1500,
  position: 'right-top',
  width: '400px',
  distance: '15px',
  borderRadius: '15px',
};
const markup = `<button type="button" data-stop>Stop</button>
    <button type="button" data-reset>Reset</button>
`;
start.insertAdjacentHTML('afterend', markup);
const stop = document.querySelector('button[data-stop]');
const reset = document.querySelector('button[data-reset]');
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  monthSelectorType: 'static',
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notiflix.Notify.failure(
        'Please choose a date in the future',
        optionsofReturt
      );
      return;
    }
    Notiflix.Notify.success('Done', optionsofReturt);
    time = selectedDates[0] - Date.now();
    const { days, hours, minutes, seconds } = convertMs(time);
    calDays.textContent = addLeadingZero(days);
    calHours.textContent = addLeadingZero(hours);
    calMinutes.textContent = addLeadingZero(minutes);
    calSeconds.textContent = addLeadingZero(seconds);
  },
};
flatpickr(calendar, options);

const onClickStart = () => {
    timer = setInterval(() => {
    if (time <= 0) {
      clearInterval(timer);
        Notiflix.Notify.info('Time is over', optionsofReturt);
        Notiflix.Notify.info('Chose a new data', optionsofReturt);
        start.removeAttribute('disabled');
      return;
    }
    const { days, hours, minutes, seconds } = convertMs(time);
    calDays.textContent = addLeadingZero(days);
    calHours.textContent = addLeadingZero(hours);
    calMinutes.textContent = addLeadingZero(minutes);
    calSeconds.textContent = addLeadingZero(seconds);
    time -= 1000;
    }, 1000);
    
  start.setAttribute('disabled', true);
};
start.addEventListener('click', onClickStart);
stop.addEventListener('click', () => {
  clearInterval(timer);
  start.removeAttribute('disabled');
});
reset.addEventListener('click', () => {
  clearInterval(timer);
  start.removeAttribute('disabled');
  calDays.textContent = '00';
  calHours.textContent = '00';
  calMinutes.textContent = '00';
    calSeconds.textContent = '00';
    time = 0; 
    Notiflix.Notify.info('Timer was reseted', optionsofReturt);
});
