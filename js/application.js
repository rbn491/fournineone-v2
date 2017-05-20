function init()
{
    var pageSwiper;
    var swiperContainer = document.querySelector('.swiper-container');
    var swiperPagination = document.querySelector('.page-controller .swiper-pagination');
    var options = {
        speed: 400,
        pagination: swiperPagination,
        paginationClickable: true,
        direction: 'vertical'
    };

    pageSwiper = new Swiper(swiperContainer, options);
}

window.onload = init;