let all_ava = ['../resources/Ellipse 4.png', '../resources/Ellipse 7.png', '../resources/Ellipse 8 (1).png', '../resources/Ellipse 8.png', '../resources/Ellipse 12 (1).png', '../resources/Ellipse 12 (2).png', '../resources/Ellipse 12 (3).png', '../resources/Ellipse 12.png'];
let all_arts = ['../resources/Rectangle 3566.png', '../resources/Rectangle 3573 (1).png', '../resources/Rectangle 3573 (2).png', '../resources/Rectangle 3573.png',];
let names = ['Jaeden Simon', 'Ashley Blair', 'Jaliyah Coffey', 'Skyler Ballard', 'Kayden Garrett', 'Billy Robertson', 'Felix Castaneda', 'Isla Soto', 'Allyson Hicks', 'Frankie Austin', 'Landin Walker', 'Lyric Giles', 'Asa Thornton', 'Malcolm Peterson', 'Kaden Andrade', 'Finley Fitzpatrick', 'Marley Carlson', 'Lina Robinson', 'Gael Archer', 'Gunner Acevedo']
let words = ['drink', 'memory', 'abrupt', 'guiltless', 'afford', 'design', 'time', 'toad', 'behavior', 'clap', 'muscle', 'tent', 'sturdy', 'pick', 'button', 'welcome', 'lumber', 'curtain', 'imported', 'silent', 'crook', 'quizzical', 'malicious', 'minor', 'income', 'jittery', 'fork', 'loutish', 'share', 'satisfy']

let millisecs = [10000, 23000, 43281, 3823];

let serv = 'https://64022bef302b5d671c34bef5.mockapi.io/api/v1/users';

let euro = false;
let rub = false;
let usd = false;
let nft = true;
let btc = false;
let coin = [euro, usd, rub, nft, btc];

let theme = true;

function menu(th) {
    th.lastChild.onchange = function () {
        clearTimers();
        if (theme) {
            document.querySelector('.check').firstChild.style.filter = "grayscale(100%)";

        }
        else {
            document.querySelector('.check').firstChild.style.filter = "grayscale(100%) invert()";
        }
        document.querySelector('.check').firstChild.style.opacity = ".3";
        document.querySelector('.check').classList.remove('check');
        th.classList.toggle("check", this.checked);
        th.firstChild.style.filter = "grayscale(0)";
        th.firstChild.style.opacity = "1";
        removecontent();
        let preloader = document.getElementById('preloader');
        preloader.style.display = 'flex';
    }
}

// Create main page
function mainpage() {
    $(function () {
        $("#contentmaincontent").load("../html/auction.html");
    });
}
// create shop page
function shoppage() {
    $(function () {
        $("#contentmaincontent").load("../html/shop.html");
    });
}
// Create settings page
function settingspage() {
    $(function () {
        $("#contentmaincontent").load("../html/settings.html");
    });
}
function userpage(){
    $(function () {
        $("#contentmaincontent").load("../html/user.html");
    });
}
// Remove all content from main page
function removecontent() {
    document.getElementById('contentmaincontent').innerHTML = '';
}
// Exit page
function exit() {
    let cont = document.querySelector('.content');
    cont.insertAdjacentHTML('beforeend', `<div class="dialog">
    <div class="window">
        <span class="size-name">Do you want to exit?</span>
        <div class="yes-no">
            <button class="blue-button account-btn" onclick="window.location.replace('../html/loginpage.html')">Yes</button>
            <button class="blue-button account-btn" onclick="dialog_remove()">No</button>
        </div>
    </div>
    <div class="back-blur"></div>
</div>`);
}
function dialog_remove() {
    let cont = document.querySelector('.dialog');
    cont.remove();
}

function getrandom(max) {
    return Math.floor(Math.random() * max);
}
function getrandomelement(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function openCard(th) {
    let cur_img = th.previousSibling.previousSibling.src.replace('http://127.0.0.1:5500', '');
    let cur_name = th.parentElement.nextSibling.nextSibling.textContent;
    let cur_creator = th.parentElement.previousSibling.previousSibling.childNodes[1].childNodes[3].childNodes[1].textContent;
    let cur_price = th.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[3].childNodes[3].textContent;
    let cur_ava = th.parentElement.previousSibling.previousSibling.childNodes[1].childNodes[1].src.replace('http://127.0.0.1:5500', '');

    removecontent();
    mainpage();

    let auctionpage = document.getElementById('auctionpage');
    auctionpage.lastChild.checked = true;
    document.querySelector('.check').firstChild.style.filter = "grayscale(100%)";
    document.querySelector('.check').firstChild.style.opacity = ".3";
    document.querySelector('.check').classList.remove('check');
    auctionpage.classList.add("check");
    auctionpage.firstChild.style.filter = "grayscale(0)";
    auctionpage.firstChild.style.opacity = "1";
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'flex';

    setTimeout(() => {
        document.getElementById('aucimg').src = cur_img;
        document.getElementById('auava').src = cur_ava;
        document.getElementById('artname').textContent = cur_name;
        document.getElementById('swcreator').textContent = cur_creator;
        document.getElementById('swprice').textContent = cur_price;
    }, 1500)
}
// Change currency
function course() {
    let price = parseFloat(`${getrandom(3)}.${getrandom(100)}`, 10);
    if (coin[0]) {
        return (Math.round(price * 1472 * 100) / 100 + ' EUR');
    }
    if (coin[2]) {
        return (Math.round(price * 118230 * 100) / 100 + ' RUB');
    }
    if (coin[1]) {
        return (Math.round(price * 1565 * 100) / 100 + ' USD');
    }
    if (coin[3]) {
        return (price + ' ETH');
    }
    if (coin[4]) {
        return (Math.round(price / 14.73 * 100) / 100 + ' BTC')
    }
}

// получение данных
function getRequest(url) {
    return fetch(url).then(response => { return response.json(); });
}
// отправка данных
function sendRequest(method, url, body = null) {
    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(body)
    });
}

function getname() {
    let param = (new URL(document.location)).searchParams;
    let flag = false;

    getRequest(serv).then(data => {
        let user_name = document.getElementById('username');
        let hi_name = document.getElementById('hiname');
        let ava = document.getElementById('ava');
        let banner = document.getElementById('banner');
        let bio = document.getElementById('bio');
        let login = param.get('login');
        for (let i = 0; i < data.length; i++) {
            if (data[i]['login'] == login) {
                hi_name.innerHTML = `Hello, ${data[i]['name']}`;
                user_name.innerHTML = `${data[i]['name']}`;
                ava.src = data[i]['ava'];
                banner.src = data[i]['banner'];
                bio.innerHTML = data[i]['bio'];
                flag = false;
                break;
            }
            else {
                flag = true;
            }
        }
        if (flag) {
            window.location.replace('../html/loginpage.html');
        }
    });
}

getname();