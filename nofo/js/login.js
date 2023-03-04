function registration() {
    let content = document.querySelector('.content');
    content.innerHTML = `<div class="form-block">
    <h1>Registration</h1>
    <form onsubmit="return false" name="login" class="login-form">
        <input type="text" name="log" placeholder="Login" pattern="[a-zA-Z0-9]{5,}" required>
        <input type="text" name="name" placeholder="Name" pattern="[a-zA-Z0-9]{5,}" required>
        <input type="text" name="password" placeholder="Password" pattern="[a-zA-Z0-9]{3,}" required>
        <input type="text" name="onepassword" placeholder="One more password" pattern="[a-zA-Z0-9]{3,}" required>
        <button class="blue-button account-btn" type="button" onclick="create_new_acc()">Registration</button>
    </form>
    <a href="javascript:login();">Sign In</a>
</div>`;
}

function login() {
    let content = document.querySelector('.content');
    content.innerHTML = `<div class="form-block">
    <h1>Login</h1>
    <form onsubmit="return false;" name="login" class="login-form">
        <input type="text" name="log" placeholder="Login" pattern="[a-zA-Z0-9]{5,}" required>
        <input type="text" name="password" placeholder="Password" pattern="[a-zA-Z0-9]{3,}" required>
        <button class="blue-button account-btn" type="button" onclick="check_acc()">Login</button>
    </form>
    <a href="javascript:registration();">No account? Registaration</a>
</div>`;
}

let serv = 'https://64022bef302b5d671c34bef5.mockapi.io/api/v1/users';


// отправка данных
function sendRequest(method, url, data = null) {
    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    });
}
function getRequest(url) {
    return fetch(url).then(response => { return response.json(); });
}

function create_new_acc() {
    let log = document.login.log.value;
    let us_name = document.login.name.value;
    let f_password = document.login.password.value;
    let s_password = document.login.onepassword.value;

    if (f_password == s_password) {
        getRequest(serv).then(data => {
            let flag = true;
            if (data.length != 0){
                for (let i = 0; i < data.length; i++) {
                    if (log == data[i]['login']) {
                        alert('Данный логин уже существует');
                        flag = true;
                        break;
                    }
                    else {
                        flag = false;
                    }
                }
                if (!flag) {
                    let body = {
                        login: log,
                        name: us_name,
                        password: f_password
                    }
                    sendRequest('POST', serv, body);
                    window.location.replace(`../html/index.html?login=${log}&user_name=${us_name}`);
                }
            }
            else{
                let body = {
                    login: log,
                    name: us_name,
                    password: f_password
                }
                sendRequest('POST', serv, body);
                window.location.replace(`../html/index.html?login=${log}&user_name=${us_name}`);
            }
        });
    }
    else {
        alert('Пароли не совпаают');
    }
    return false;
}

function check_acc() {

    getRequest(serv).then(data => {
        let login = document.login.log.value;
        for (let i = 0; i < data.length; i++) {
            if (login == data[i]['login']) {
                let password = document.login.password.value;
                if (password == data[i]['password']) {
                    window.location.replace(`../html/index.html?login=${login}`);
                }
                else {
                    alert('Неверный пароль')
                }
                break;
            }
        }
    });
    return false;
}