document.getElementById('search-panel').style.display = 'none';
document.getElementById('filter-btn').style.display = 'none';

function changetheme(th) {
    th.lastChild.onchange = function () {
        if (th.lastChild.checked){
            th.style.background = 'url(../resources/sun.png)';
            th.style.backgroundPosition = 'center';
            th.style.backgroundRepeat = 'no-repeat';
            document.querySelector('.light').classList.add('dark');
            document.querySelector('.light').classList.remove('light');
            theme = false;
            document.querySelectorAll('.menu-point').forEach(el =>{
                el.firstChild.style.filter = "grayscale(100%) invert()";
            });
        }
        else{
            th.style.background = 'url(../resources/moon.png)';
            th.style.backgroundPosition = 'center';
            th.style.backgroundRepeat = 'no-repeat';
            document.querySelector('.dark').classList.add('light');
            document.querySelector('.dark').classList.remove('dark');
            theme = true;
            document.querySelectorAll('.menu-point').forEach(el =>{
                el.firstChild.style.filter = "grayscale(100%)";
            });
        }

    }
}