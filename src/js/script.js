var bar = document.querySelector('.fa-bars');
var list = document.querySelector('.nav-list');
var home = document.querySelector('.arrow-home');

function showMenu() {
    var menu = document.getElementsByTagName('nav')[0];
    if (menu.style.left === '0vh') {
        menu.style.left = -200 + 'vh';
    } else {
        menu.style.left = 0 + 'vh';
    }

}

function scrollToY(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function () {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};

function color() {

}

function getChild(e) {
    var line = document.querySelector('.line');
    var lamp = document.querySelector('.lamp');
    var divide = document.querySelector('.divide');
    var face = document.querySelector('.profile');
    var face = document.querySelector('.profile');
    var contact = document.querySelector('.top-foot');
    switch (e.target.className) {
        case 'home':
            scrollToY(document.documentElement, 0, 1000);
            break;
        case 'isama':
            scrollToY(document.documentElement, lamp.offsetTop, 1000);
            break;
        case 'what-do':
            scrollToY(document.documentElement, line.offsetTop, 1000);
            break;
        case 'our-projects':
            scrollToY(document.documentElement, divide.offsetTop, 1000);
            break;
        case 'team':
            scrollToY(document.documentElement, face.offsetTop, 1000);
            break;
        case 'contact':
            scrollToY(document.documentElement, contact.offsetTop, 1000);
            break;
    }
}

function goUp() {
    scrollToY(document.documentElement, 0, 1000);
}


home.addEventListener('click', goUp);
list.addEventListener('click', getChild);
bar.addEventListener('click', showMenu);
