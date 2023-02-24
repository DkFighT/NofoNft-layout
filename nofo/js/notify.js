function like(th) {
    if (th.firstElementChild.src.includes('Heart.png')) {
        th.firstElementChild.src = '../resources/heart1.png';
        let date = new Date();
        addnotify(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - Did you like the Art!`);
    }
    else {
        th.firstElementChild.src = '../resources/Heart.png';
    }
}

function follow(th) {
    if (th.firstElementChild.src.includes('Group%20427320314.png')) {
        th.firstElementChild.src = '../resources/check.png';
        let date = new Date();
        addnotify(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - You follow ${th.previousSibling.previousSibling.firstElementChild.textContent}`);
    }
    else {
        th.firstElementChild.src = '../resources/Group 427320314.png';
        let date = new Date();
        addnotify(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - You unfollow ${th.previousSibling.previousSibling.firstElementChild.textContent}`);
    }
}
function addnotify(text) {
    let notification = document.getElementById('notifList');
    let not = document.getElementById('not');
    let point = document.getElementById('point');
    not.addEventListener('mouseenter', () => { point.style.opacity = '0'; });
    notification.insertAdjacentHTML('afterbegin', `<div class="notify">${text}</div>`);
    point.style.opacity = '1';
    if (document.getElementsByClassName('notify').length > 6) {
        document.getElementsByClassName('notify')[7].remove();
    }
}