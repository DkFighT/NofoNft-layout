var catalog = document.getElementById('shops');

document.getElementById('search-panel').style.display = 'flex';
// document.getElementById('filter-btn').style.display = 'flex';

function addcard(card_name, card_url) {

    if (card_name != '' && card_url != '') {
        getRequest(serv).then(data => {
            let ncards;
            let card_id;
            for (let i = 0; i < data.length; i++) {
                if ((new URL(document.location)).searchParams.get('login') == data[i]['login']) {
                    if (data[i]['cards'] != '') {
                        ncards = data[i]['cards'];
                    }
                    else {
                        ncards = [];
                    }
                    card_id = data[i]['id'];

                    catalog.insertAdjacentHTML('beforeend', `<div class="card">
                    <div class="like-header">
                        <div class="nickname">
                            <img src="${data[i]['ava']}" alt="ava">
                            <div class="creator-name">
                                <span class="name">${data[i]['name']}</span>
                                <span class="type">Owner</span>
                            </div>
                        </div>
                    </div>
                    <div class="photo-wt-btn">
                        <img src="${card_url}" alt="art">
                    </div>
                    <span class="name left-align searchingname">${card_name}</span>
                    <div class="line line1"></div>
                    <div class="card-finance-info">
                        <div class="creator-name">
                            <span class="type">Ending in</span>
                            <span class="name" id="timer4">24 hours left</span>
                        </div>
                        <div class="creator-name">
                            <span class="type right-align">Highest bid</span>
                            <span class="name right-align">${course()}</span>
                        </div>
                    </div>
                </div>`);

                    break;
                }
            }
            let newdata = {
                cards:
                    [{
                        card_name: card_name,
                        card_url: card_url
                    }]
            }
            let some = {
                cards: newdata['cards'].concat(ncards)
            }
            console.log(newdata['cards'].concat(ncards));
            sendRequest('PUT', serv + '/' + card_id, some);
        })
    }
    else {
        warn_alert('Not enogth data', 'Ok');
    }
}

function addcardalert() {
    let cont = document.querySelector('.content');
    cont.insertAdjacentHTML('beforeend', `<div class="dialog">
    <div class="window new-gap">
        <span class="name">Name</span>
        <input name="entername" id="entername" type="text" class="search-field field-color img_link_field">
        <span class="name">Image link</span>
        <input name="enterimagelink" id="enterimagelink" type="text" class="search-field field-color img_link_field">
        <div class="yes-no">
            <button class="blue-button account-btn" onclick="addcard(document.getElementById('entername').value,document.getElementById('enterimagelink').value); dialog_remove()">Create</button>
        </div>
    </div>
    <div class="back-blur"></div>
</div>`);
}

document.getElementById('search-field').oninput = function () {
    let val = document.getElementById('search-field').value.trim().toLowerCase();
    let searchel = document.querySelectorAll('.card .searchingname');
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let lefttimefrom = document.getElementById('fromtime').value;
    let lefttimeto = document.getElementById('fromtimeto').value;
    if (from == '') {
        from = 0;
    }
    if (to == '') {
        to = 100000000;
    }
    if (lefttimeto == '') {
        lefttimeto = 25;
    }
    if (lefttimefrom == '') {
        lefttimefrom = 0;
    }
    if (val != '') {
        searchel.forEach(element => {
            if (element.innerText.toLowerCase().search(val) != -1 && (from <= parseFloat(element.parentElement.childNodes[9].childNodes[3].childNodes[3].textContent.replace(' ETH', ''), 10) && to >= parseFloat(element.parentElement.childNodes[9].childNodes[3].childNodes[3].textContent.replace(' ETH', ''), 10)) && (lefttimefrom <= element.parentElement.childNodes[9].childNodes[1].childNodes[3].textContent.replace(' hours left', '') && lefttimeto >= element.parentElement.childNodes[9].childNodes[1].childNodes[3].textContent.replace(' hours left', ''))) {
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

function generateYourArts() {
    getRequest(serv).then(data => {
        for (let i = 0; i < data.length; i++) {
            if ((new URL(document.location)).searchParams.get('login') == data[i]['login']) {
                for (let j = 0; j < data[i]['cards'].length; j++) {
                    catalog.insertAdjacentHTML('beforeend', `<div class="card">
                    <div class="like-header">
                        <div class="nickname">
                            <img src="${data[i]['ava']}" alt="ava">
                            <div class="creator-name">
                                <span class="name">${data[i]['name']}</span>
                                <span class="type">Owner</span>
                            </div>
                        </div>
                    </div>
                    <div class="photo-wt-btn">
                        <img src="${data[i]['cards'][j]['card_url']}" alt="art">
                    </div>
                    <span class="name left-align searchingname">${data[i]['cards'][j]['card_name']}</span>
                    <div class="line line1"></div>
                    <div class="card-finance-info">
                        <div class="creator-name">
                            <span class="type">Ending in</span>
                            <span class="name" id="timer4">24 hours left</span>
                        </div>
                        <div class="creator-name">
                            <span class="type right-align">Highest bid</span>
                            <span class="name right-align">${course()}</span>
                        </div>
                    </div>
                </div>`);
                }
                break;
            }
        }
    })
}
generateYourArts();