function preload() {
    console.log('preload');
    setTimeout(() => {
        let preloader = document.getElementById('preloader');
        preloader.style.display = 'none';
        console.log('hide');
    }, 1000);
}