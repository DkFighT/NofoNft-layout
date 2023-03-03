document.getElementById('search-panel').style.display = 'none';
document.getElementById('filter-btn').style.display = 'none';

function changetheme(th) {
    th.lastChild.onchange = function () {
        if (th.lastChild.checked) {
            th.style.background = 'url(../resources/sun.png)';
            th.style.backgroundPosition = 'center';
            th.style.backgroundRepeat = 'no-repeat';
            document.querySelector('.light').classList.add('dark');
            document.querySelector('.light').classList.remove('light');
            theme = false;
            document.querySelectorAll('.menu-point').forEach(el => {
                el.firstChild.style.filter = "grayscale(100%) invert()";
            });
            document.querySelectorAll('.coins').forEach((element) => { element.classList.add('light-coins') });
        }
        else {
            th.style.background = 'url(../resources/moon.png)';
            th.style.backgroundPosition = 'center';
            th.style.backgroundRepeat = 'no-repeat';
            document.querySelector('.dark').classList.add('light');
            document.querySelector('.dark').classList.remove('dark');
            theme = true;
            document.querySelectorAll('.menu-point').forEach(el => {
                el.firstChild.style.filter = "grayscale(100%)";
            });
            document.querySelectorAll('.coins').forEach((element) => { element.classList.remove('light-coins') });
        }

    }
}

navigator.getBattery().then((battery) => {
    function updateAllBatteryInfo() {
        updateChargeInfo();
        updateLevelInfo();
        updateDischargingInfo();
    }
    updateAllBatteryInfo();

    battery.addEventListener("chargingchange", () => {
        updateChargeInfo();
    });
    function updateChargeInfo() {
        let charge = document.getElementById('charge');
        let persents = document.getElementById('persent');
        if (battery.charging) {
            charge.style.display = 'flex';
            persents.style.display = 'none';
        }
        else {
            charge.style.display = 'none';
            persents.style.display = 'block';
        }
    }

    battery.addEventListener("levelchange", () => {
        updateLevelInfo();
    });

    function updateLevelInfo() {
        let batary_level = document.getElementById('lvlbtry');
        let persents = document.getElementById('persent');
        if (battery.level * 100 < 20) {
            batary_level.style.backgroundColor = '#cc0000';
        }
        else {
            batary_level.style.backgroundColor = '#00cc77';
        }
        batary_level.style.height = `${battery.level * 100}%`;
        batary_level.style.top = `${100 - battery.level * 100}%`;
        persents.textContent = `${battery.level * 100}%`;

    }

    battery.addEventListener("dischargingtimechange", () => {
        updateDischargingInfo();
    });
    function updateDischargingInfo() {
        let chargtime = document.getElementById('chargtime');
        if (battery.dischargingTime != 'Infinity') {
            chargtime.textContent = `Left time: ${Math.floor(battery.dischargingTime / 60 / 60)}h : ${Math.floor(battery.dischargingTime % 60)}m`;
        }
        else {
            chargtime.textContent = `Left time: Charging`;
        }
    }
});

function checkcoins(elem) {
    let checks = [document.getElementById('normal'), document.getElementById('normal1'), document.getElementById('normal2'), document.getElementById('normal3'), document.getElementById('normal4')];

    for (let i = 0; i < checks.length; i++) {
        if (elem.id != checks[i].id) {
            checks[i].checked = false;
            coin[i] = false;
        }
        else {
            coin[i] = true;
            console.log(coin[i]);
        }
    }
}

function repeats() {
    let checks = [document.getElementById('normal'), document.getElementById('normal1'), document.getElementById('normal2'), document.getElementById('normal3'), document.getElementById('normal4')];
    for (let i = 0; i < checks.length; i++) {
        if (coin[i]) {
            checks[i].checked = true;
        }
    }
}