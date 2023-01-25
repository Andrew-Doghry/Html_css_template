let countDownDate = new Date('Jan 7,2024 23:59:59').getTime();



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

let num= true;
let countProjects = document.querySelector('.stats .card .projects');
let countClients = document.querySelector('.stats .card .clients');
let countCountires = document.querySelector('.stats .card .countries');
let countmoney = document.querySelector('.stats .card .money');
projects = 135;
clients = 150;
countries = 51;
money = 500;
console.log(window.innerHeight)
let stats = document.querySelector('.stats')
window.onscroll=()=>{
        if(num){
    if(window.scrollY>=stats.offsetTop-400 ){
        countDown(countProjects,projects,15)
        countDown(countClients,clients,15)
        countDown(countCountires,countries,15 )
        countDown(countmoney,money,0.5)
    num=false;
}   
        }
    }
function countDown(obj,limit , time){
    obj.innerHTML = 0;
    let handler = setInterval(() => {
        obj.innerHTML = (+obj.innerHTML) + 1;
        if(+(obj.innerHTML) > limit){
            clearInterval(handler);
        }
        
    }, time);

}
