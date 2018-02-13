const bar = document.querySelector('.fa-bars');
const list = document.querySelector('.nav-list');
const home = document.querySelector('.arrow-home');

const showMenu = () => {
    let menu = document.getElementsByTagName('nav')[0];
    if (menu.style.left === '0vh') {
        menu.style.left = -200 + 'vh';
    } else {
        menu.style.left = 0 + 'vh';
    }

}

const scrollToY = (element, to, duration) => {
    let start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    let animateScroll = function () {
        currentTime += increment;
        let val = Math.easeInOutQuad(currentTime, start, change, duration);
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


const getChild = e => {
    let line = document.querySelector('.line');
    let lamp = document.querySelector('.lamp');
    let divide = document.querySelector('.divide');
    let face = document.querySelector('.profile');
    let contact = document.querySelector('.top-foot');
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

const goUp = () => {
    scrollToY(document.documentElement, 0, 1000);
}




home.addEventListener('click', goUp);
list.addEventListener('click', getChild);
bar.addEventListener('click', showMenu);


$('.slider-items').slick({
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: null,
    nextArrow: '<button type="button" class="slick-next">></button>',
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
    }
    ]

});
