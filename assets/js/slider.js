const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    autoHeight: true,
    slidesPerView: 4,
    spaceBetween: 10,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.container__product-container-slider-ico-up',
        prevEl: '.container__product-container-slider-ico-down',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


console.log("тест потключения Slider.js")

