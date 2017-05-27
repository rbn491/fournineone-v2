function init()
{
    // var pageSwiper;
    // var swiperContainer = document.querySelector('.swiper-container');
    // var swiperPagination = document.querySelector('.page-controller .swiper-pagination');
    // var options = {
    //     speed: 400,
    //     pagination: swiperPagination,
    //     paginationClickable: false,
    //     direction: 'vertical'
    // };

    // pageSwiper = new Swiper(swiperContainer, options);

    var navContainer = document.querySelector('#navigation-container');
    var navController = navContainer.querySelector('.burger-button');
    var navListWrapper = navContainer.querySelector('.nav-list-wrapper');
    var navItems = navContainer.querySelectorAll('.nav-list-item');
    var items = navContainer.querySelectorAll('.nav-list-item a');

    navController.addEventListener('click', function(e)
    {
        var btn = e.currentTarget.parentNode;
        var isActive = btn.classList.contains('active');
        var isWrapperOpen = navListWrapper.classList.contains('open');

        isActive ? btn.classList.remove('active') : btn.classList.add('active');

        if(!isWrapperOpen)
        {
            navListWrapper.classList.add('open');

            showNavList();
            handleNavigationClick();
        }
        else
        {
            navListWrapper.classList.remove('open');

            hideNavList();
        }
    });

    function handleNavigationClick()
    {
        for(var i = 0; i < items.length; i++)
        {
            items[i].addEventListener('click', function(e)
            {
                var clickedItem = e.currentTarget;
                var target = clickedItem.dataset.targetId;

                // pageSwiper.slideTo(target);
                navListWrapper.classList.remove('open');
            });
        }
    }

    function showNavList()
    {
        var tween = TweenMax.staggerFrom(navItems, .8,
        {
            delay: .18,
            x: -390,
            opacity: 0
        }, .2);
    }

    function hideNavList()
    {
        var tween = TweenMax.to(navItems, .08,
        {
            x: 0,
            opacity: 1
        });
    }
}

window.onload = init;