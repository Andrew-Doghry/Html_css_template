let countDownDate = new Date('Jan 7,2023 23:59:59').getTime();



let counter = setInterval(() => {
    let currentDate = countDownDate - new Date().getTime();
    let days = Math.floor(currentDate / (1000 * 60 * 60 * 24));
    let hours = Math.floor(currentDate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(currentDate % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(currentDate % (1000 * 60) / (1000));
    document.querySelector('.days').innerText = days < 10 ? `0${days}` : days;
    document.querySelector('.hours').innerText = hours < 10 ? `0${hours}` : hours;
    document.querySelector('.minutes').innerText = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector('.seconds').innerText = seconds < 10 ? `0${seconds}` : seconds;

    if (currentDate === 0) {
        clearInterval(counter)
    }

}, 1000);