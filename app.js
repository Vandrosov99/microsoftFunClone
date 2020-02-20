const menu = document.getElementById('#drop')
console.log(menu)
document.querySelector(".special").addEventListener('click', function (e) {
    // menu = document.getElementById('#drop')
    if (menu.style.display === 'none') {
        menu.style.display = "flex";
        // alert("asdas")
    } else {
        menu.style.display = "none";
    }
    e.preventDefault();
})