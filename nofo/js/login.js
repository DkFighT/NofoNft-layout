function registration() {
    let content = document.querySelector('.content');
    content.innerHTML = `<div class="form-block">
    <h1>Registration</h1>
    <form onsubmit="return create_new_acc();" name="login" class="login-form">
        <input type="text" name="log" placeholder="Login" pattern="[a-zA-Z0-9]{5,}" required>
        <input type="text" name="name" placeholder="Name" pattern="[a-zA-Z0-9]{5,}" required>
        <input type="text" name="password" placeholder="Password" pattern="[a-zA-Z0-9]{3,}" required>
        <input type="text" name="onepassword" placeholder="One more password" pattern="[a-zA-Z0-9]{3,}" required>
        <button class="blue-button account-btn" type="submit">Registration</button>
    </form>
    <a href="javascript:login();">Sign In</a>
</div>`;
}

function login() {
    let content = document.querySelector('.content');
    content.innerHTML = `<div class="form-block">
    <h1>Login</h1>
    <form onsubmit="return check_acc();" name="login" class="login-form">
        <input type="text" name="log" placeholder="Login" pattern="[a-zA-Z0-9]{5,}" required>
        <input type="text" name="password" placeholder="Password" pattern="[a-zA-Z0-9]{3,}" required>
        <button class="blue-button account-btn" type="submit">Login</button>
    </form>
    <a href="javascript:registration();">No account? Registaration</a>
</div>`;
}

function create_new_acc() {
    let login = document.login.log.value;
    let us_name = document.login.name.value;
    let f_password = document.login.password.value;
    let s_password = document.login.onepassword.value;

    if (f_password == s_password && login != 'В базе данных') {
        // записать в бд логин, имя и пароль
        window.location.replace(`../html/index.html?login=${login}&user_name=${us_name}`);
        return false;
    }
    else {
        alert('Пользователь с таким логином уже существует');
        return false;
    }
}

function check_acc() {
    let login = document.login.log.value;
    if (login == 'Есть в базе') {
        let password = document.login.password.value;
        if (password == 'как в базе') {
            let us_name = 'Получить имя из бд для этого логина';
            window.location.replace(`../html/index.html?login=${login}&user_name=${us_name}`);
            return false;
        }
        else {
            alert('неверный пароль');
            return false;
        }
    }
    else {
        alert('неверный логин или пароль');
        return false;
    }
}