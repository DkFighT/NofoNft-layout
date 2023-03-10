let serv = 'https://64022bef302b5d671c34bef5.mockapi.io/api/v1/users';

function getRequest(url) {
    return fetch(url).then(response => { return response.json(); });
}

function getrandom(max) {
    return Math.floor(Math.random() * max);
}

function display_info() {
    preload();
    getRequest(serv).then(data => {
        let catalog = document.getElementById('shops');
        let log_id = (new URL(document.location)).searchParams.get('login');
        let banner = document.getElementById('banner');
        let ava = document.getElementById('ava');
        let name = document.getElementById('name');
        let bio = document.getElementById('bio');

        for (let i = 0; i < data.length; i++) {
            if (log_id == data[i]['login']) {
                document.title = data[i]['name'] + "'s Page";
                banner.style.background = `url(${data[i]['banner']})`;
                banner.style.backgroundPosition = 'center';
                banner.style.backgroundSize = 'cover';
                ava.src = data[i]['ava'];
                name.textContent = data[i]['name'];
                bio.textContent = data[i]['bio'];

                for (let j = 0; j < data[i]['cards'].length; j++) {
                    catalog.insertAdjacentHTML('beforeend', `<div class="card new-card">
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
                            <span class="name right-align">${getrandom(5)}.${getrandom(100)} ETH</span>
                        </div>
                    </div>
                </div>`);
                }

                break;
            }
        }
    });
}

