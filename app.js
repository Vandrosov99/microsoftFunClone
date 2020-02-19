document.querySelector(".special").addEventListener('click', function (e) {
    const menu = document.querySelector('.drop')
    if (menu.style.display === 'none') {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
    e.preventDefault();
})