let serv = 'https://64022bef302b5d671c34bef5.mockapi.io/api/v1/users';

function getRequest(url) {
    return fetch(url).then(response => { return response.json(); });
}

function display_info() {
    preload();
    getRequest(serv).then(data => {
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
                break;
            }
        }
    });
}

