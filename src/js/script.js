var bar = document.querySelector('.fa-bars');

function showMenu() {
    var menu = document.getElementsByTagName('nav')[0];
    if (menu.style.left === '0vh') {
        menu.style.left = -200 + 'vh';
    } else {
        menu.style.left = 0 + 'vh';
    }

}

bar.addEventListener('click', showMenu);
