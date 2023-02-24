var timer1 = document.getElementById('glassTimer');
var timer2 = document.getElementById('timer2');
var timer3 = document.getElementById('timer3');
var timer4 = document.getElementById('timer4');
var timers = [timer1, timer2, timer3, timer4];
var activeTimers = [];

document.getElementById('search-panel').style.display = 'none';
document.getElementById('filter-btn').style.display = 'none';

function timerStart(timer, ind) {
    let startedTimer = setInterval(t, 1000, ind, timer);
    activeTimers.push(startedTimer);
}

function t(pos, timer1) {
    let sec = Math.floor(millisecs[pos] % 60);
    let min = Math.floor((millisecs[pos] / 60) % 60);
    let hour = Math.floor((millisecs[pos] / 60) / 60 % 60);
    timer1.innerHTML = `${hour}h : ${min}m : ${sec}s`;
    millisecs[pos] -= 1;
}
function switchCards(th) {
    let cur_img = th.previousSibling.previousSibling;
    let cur_name = th.parentElement.nextSibling.nextSibling;
    let cur_creator = th.parentElement.previousSibling.previousSibling.childNodes[1].childNodes[3].childNodes[1];
    let cur_price = th.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[3].childNodes[3];
    let cur_ava = th.parentElement.previousSibling.previousSibling.childNodes[1].childNodes[1];

    let sw_img = document.getElementById('aucimg').src.replace('http://127.0.0.1:5500', '');
    document.getElementById('aucimg').src = `..${cur_img.src.replace('http://127.0.0.1:5500', '')}`;
    cur_img.src = `..${sw_img}`;

    let sw_ava = document.getElementById('auava').src.replace('http://127.0.0.1:5500', '');
    document.getElementById('auava').src = `..${cur_ava.src.replace('http://127.0.0.1:5500', '')}`;
    cur_ava.src = `..${sw_ava}`;

    let sw_name = document.getElementById('artname').textContent;
    document.getElementById('artname').textContent = cur_name.textContent;
    cur_name.textContent = sw_name;

    let sw_creator = document.getElementById('swcreator').textContent;
    document.getElementById('swcreator').textContent = cur_creator.textContent;
    cur_creator.textContent = sw_creator;

    let sw_price = document.getElementById('swprice').textContent;
    document.getElementById('swprice').textContent = cur_price.textContent;
    cur_price.textContent = sw_price;
}

function viewall() {
    clearTimers();
    let shopmenu = document.getElementById('shop');
    shopmenu.lastChild.checked = true;
    document.querySelector('.check').firstChild.style.filter = "grayscale(100%)";
    document.querySelector('.check').firstChild.style.opacity = ".3";
    document.querySelector('.check').classList.remove('check');
    shopmenu.classList.add("check");
    shopmenu.firstChild.style.filter = "grayscale(0)";
    shopmenu.firstChild.style.opacity = "1";
    removecontent();
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'flex';
    shoppage();
}

function start() {
    for (let i = 0; i < timers.length; i++) {
        timerStart(timers[i], i);
    }
    console.log('timers started');
}

start();

function clearTimers() {
    for (let i = 0; i < timers.length; i++) {
        clearInterval(activeTimers[i]);
    }
    console.log('cleared');
}