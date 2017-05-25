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

    navController.addEventListener('click', function(e)
    {
        var btn = e.currentTarget.parentNode;
        var isActive = btn.classList.contains('active');
        var isWrapperOpen = navListWrapper.classList.contains('open');

        isActive ? btn.classList.remove('active') : btn.classList.add('active');

        if(!isWrapperOpen)
        {
            navListWrapper.classList.add('open');

            animateNavigationItems();
        }
        else
        {
            navListWrapper.classList.remove('open');
        }
    });

    function animateNavigationItems()
    {
        TweenMax.staggerFrom(navItems, .8,
        {
            delay: .18,
            x: -390,
            opacity: 0
        }, .2);
    }

    pageSwiper = new Swiper(swiperContainer, options);
}

window.onload = init;