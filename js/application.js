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
    var navContainer = document.querySelector('#navigation-container');
    var navController = navContainer.querySelector('.burger-button');
    var navListWrapper = navContainer.querySelector('.nav-list-wrapper');
    var navItems = navContainer.querySelectorAll('.nav-list-item');

    TweenMax.staggerFrom(navItems, 2,
    {
        x: 0,
        force3D:true
    }, 0.2);

    navController.addEventListener('click', function(e)
    {
        var btn = e.currentTarget.parentNode;
        var isActive = btn.classList.contains('active');
        var isWrapperOpen = navListWrapper.classList.contains('open');


        isActive ? btn.classList.remove('active') : btn.classList.add('active');
        isWrapperOpen ? navListWrapper.classList.remove('open') : navListWrapper.classList.add('open');

        setTimeout(function()
        {
            TweenMax.staggerTo(navItems, 0.5,
            {
                x: -600
            }, 0.1);
        }, 350);
    });

    pageSwiper = new Swiper(swiperContainer, options);
}

window.onload = init;