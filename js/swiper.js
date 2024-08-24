document.addEventListener('DOMContentLoaded', function () {
    const swiper = new swiper('.swiper-container', {
        slidePerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: 'swiper-button-next',
            prevEl: 'swiper-button-pre',
        },

        breakpoints: {
            640: {
                slidePerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidePerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidePerView: 3,
                spaceBetween: 50,
            },
        }
    });
});