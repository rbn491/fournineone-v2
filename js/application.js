function init()
{
    var body = document.body;
    var overlay = body.querySelector('#overlay');
    var navContainer = document.querySelector('#mobile-navigation-container');
    var navController = navContainer.querySelector('.burger-button');
    var navListWrapper = navContainer.querySelector('.nav-list-wrapper');
    var navItems = navContainer.querySelectorAll('.nav-list-item');
    var items = navContainer.querySelectorAll('.nav-list-item a');

    var isOverlayActive = overlay.classList.contains('visible');

    overlay.addEventListener('click', function(e)
    {
        e.preventDefault();

        navListWrapper.classList.remove('open');
        overlay.classList.remove('visible');
        navController.parentNode.classList.remove('active');
    });

    navController.addEventListener('click', function(e)
    {
        e.preventDefault();

        var btn = e.currentTarget.parentNode;
        var isActive = btn.classList.contains('active');
        var isWrapperOpen = navListWrapper.classList.contains('open');

        isActive ? btn.classList.remove('active') : btn.classList.add('active');

        if(!isWrapperOpen)
        {
            body.classList.add('hidden');
            overlay.classList.add('visible');
            navListWrapper.classList.add('open');

            for(var i = 0; i < items.length; i++)
            {
                items[i].addEventListener('click', function(e)
                {
                    e.preventDefault();

                    var clickedItem = e.currentTarget;
                    var target = clickedItem.dataset.targetId;

                    btn.classList.remove('active');
                    overlay.classList.remove('visible');
                    navListWrapper.classList.remove('open');

                    var scrollToSection = TweenMax.to(window, 2,
                    {
                        scrollTo: '#' + target
                    });
                });
            }
        }
        else
        {
            body.classList.remove('hidden');
            overlay.classList.remove('visible');
            navListWrapper.classList.remove('open');
        }
    });
}

window.onload = init;