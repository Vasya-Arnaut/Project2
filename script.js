new Splide('.splide').mount();

var splide = new Splide('.splide1', {
    type: 'loop',
    perPage: 1,
    breakpoints: {
        768: {
            perPage: 1,
        }
    }
});

splide.mount();

(function () {
    const burgerItem = document.querySelector('.burger')
    const menu = document.querySelector('.header_nav')
    const menuCloseItem = document.querySelector('.header_nav-close')
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav_active')
    })
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header_nav_active')
    })
}());

(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 40) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    }
}());
