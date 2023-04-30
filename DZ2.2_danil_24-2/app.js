const minutesElement = document.getElementById('timer-box__value__minutes');
const secondsElement = document.getElementById('timer-box__value__seconds');
const result = document.getElementById('result');

let minutes = 0;
let seconds = 0;

function timer() {
    const interval = setInterval(() => {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        minutesElement.textContent = String(minutes).padStart(2, '0');
        secondsElement.textContent = String(seconds).padStart(2, '0');
        switch (minutes) {
            case 1:
                result.innerText = 'Прошла одна минута...';
                break;
            case 2:
                result.innerText = 'Прошло две минуты...';
                break;
            case 3:
                result.innerText = 'Прошло три минуты...';
                break;
            case 4:
                result.innerText = 'Прошло четыре минуты...';
                break;
            case 5:
                result.innerText = 'Время истекло!';
                clearInterval(interval);
                break;
        }
    }, 1000);
}

timer();