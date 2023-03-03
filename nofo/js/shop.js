var catalog = document.getElementById('shops');
var counerofscrolls = 1;

document.getElementById('search-panel').style.display = 'flex';
document.getElementById('filter-btn').style.display = 'flex';

function cardGenerator(n) {
    for (let i = 0; i < n; i++) {
        catalog.insertAdjacentHTML('beforeend', `<div class="card">
    <div class="like-header">
        <div class="nickname">
            <img src="${all_ava[getrandom(8)]}" alt="ava">
            <div class="creator-name">
                <span class="name">${getrandomelement(names)}</span>
                <span class="type">Owner</span>
            </div>
        </div>
        <div class="grey-btn-cubic" onclick="like(this)"><img src="../resources/Heart.png" alt="plus"></div>
    </div>
    <div class="photo-wt-btn">
        <img src="${all_arts[getrandom(4)]}" alt="art">
        <button class="glass-btn" onclick="openCard(this); return false;">Place a Bid</button>
    </div>
    <span class="name left-align searchingname">${getrandomelement(words)} ${getrandomelement(words)} ${getrandomelement(words)}</span>
    <div class="line line1"></div>
    <div class="card-finance-info">
        <div class="creator-name">
            <span class="type">Ending in</span>
            <span class="name" id="timer4">${getrandom(25)} hours left</span>
        </div>
        <div class="creator-name">
            <span class="type right-align">Highest bid</span>
            <span class="name right-align">${course()}</span>
        </div>
    </div>
</div>`);
    }
}
cardGenerator(9);

catalog.addEventListener('scroll', (event) => {
    if (catalog.scrollTop > counerofscrolls * 400) {
        cardGenerator(3);
        counerofscrolls++;
    }
})

document.getElementById('search-field').oninput = function (){
    let val = document.getElementById('search-field').value.trim().toLowerCase();
    let searchel = document.querySelectorAll('.card .searchingname');
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let lefttimefrom = document.getElementById('fromtime').value;
    let lefttimeto = document.getElementById('fromtimeto').value;
    if (from == ''){
        from = 0;
    }
    if(to == ''){
        to = 100000000;
    }
    if(lefttimeto == ''){
        lefttimeto = 25;
    }
    if(lefttimefrom == ''){
        lefttimefrom = 0;
    }
    if (val != '') {
        searchel.forEach(element => {
            if (element.innerText.toLowerCase().search(val) != -1 && (from <= parseFloat(element.parentElement.childNodes[9].childNodes[3].childNodes[3].textContent.replace(' ETH', ''), 10) && to >= parseFloat(element.parentElement.childNodes[9].childNodes[3].childNodes[3].textContent.replace(' ETH', ''), 10)) && (lefttimefrom <= element.parentElement.childNodes[9].childNodes[1].childNodes[3].textContent.replace(' hours left', '') && lefttimeto >= element.parentElement.childNodes[9].childNodes[1].childNodes[3].textContent.replace(' hours left', ''))){
                element.parentElement.classList.remove('hiden');
            }
            else {
                element.parentElement.classList.add('hiden');
            }
        });
    }
    else {
        searchel.forEach(element => {
            element.parentElement.classList.remove('hiden');
        });
    }
}