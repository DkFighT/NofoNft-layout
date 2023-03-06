var user_id;

getRequest(serv).then(data => {
    let usr_name = document.getElementById('us_name');
    let usr_sername = document.getElementById('us_sername');
    let pass = document.getElementById('pas');
    let login_field = document.getElementById('log');
    let biogr = document.getElementById('bio_area');
    let ch_ava = document.getElementById('ch_ava');
    let lg = (new URL(document.location)).searchParams;
    for (let i = 0; i < data.length; i++) {
        if (lg.get('login') == data[i]['login']) {
            user_id = i + 1;
            usr_name.value = data[i]['name'].split(' ')[0];
            try {
                usr_sername.value = data[i]['name'].split(' ')[1];
            }
            catch (err) {
                console.log(err);
            }
            login_field.value = data[i]['login'];
            pass.value = data[i]['password'];
            biogr.value = data[i]['bio'];
            ch_ava.src = data[i]['ava'];
            break;
        }
    }
});

function createPathDialog() {
    let cont = document.querySelector('.content');
    cont.insertAdjacentHTML('beforeend', `<div class="dialog">
    <div class="window">
        <span class="size-name">Enter image link</span>
        <input type="text" id="link" class="search-field field-color img_link_field" placeholder="http(s)://..." value="">
        <div class="yes-no">
            <button class="blue-button account-btn" onclick="replacelink()">Apply</button>
            <button class="blue-button account-btn" onclick="dialog_remove()">Cancel</button>
        </div>
    </div>
    <div class="back-blur"></div>
</div>`);
}

function replacelink() {
    let ch_ava = document.getElementById('ch_ava');
    let link = document.getElementById('link');
    if (link.value != '') {
        ch_ava.src = link.value;
        dialog_remove();
    }
    else {
        dialog_remove();
    }
}

function saveData() {
    let usr_name = document.getElementById('us_name');
    let usr_sername = document.getElementById('us_sername');
    let pass = document.getElementById('pas');
    let login_field = document.getElementById('log');
    let biogr = document.getElementById('bio_area');
    let ch_ava = document.getElementById('ch_ava');
    let data = {
        name: usr_name.value + ` ${usr_sername.value}`,
        login: login_field.value,
        password: pass.value,
        bio: biogr.value,
        ava: ch_ava.src
    }
    if (login_field != '' && pass.value != '' && usr_name.value != '') {
        sendRequest("PUT", serv + `/${user_id}`, data);
        setTimeout(() => { window.location.reload(); }, 500)
    }
    else {
        alert('Недостаточно данных');
    }
    return false;
}

var fl = false;
document.getElementById('view').onclick = () => {
    let pass = document.getElementById('pas');
    if (!fl) {
        pass.removeAttribute('type');
        pass.setAttribute('type', 'text');
        fl = true;
    }
    else{
        pass.removeAttribute('type');
        pass.setAttribute('type', 'password'); 
        fl = false; 
    }
}