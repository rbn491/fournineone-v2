function init()
{
    var body = document.body;
    var overlay = body.querySelector('#overlay');
    var navContainer = document.querySelector('#navigation-container');
    var navController = navContainer.querySelector('.burger-button');
    var navListWrapper = navContainer.querySelector('.nav-list-wrapper');
    var navItems = navContainer.querySelectorAll('.nav-list-item');
    var items = navContainer.querySelectorAll('.nav-list-item a');

    var isOverlayActive = overlay.classList.contains('visible');

    overlay.addEventListener('click', function(e)
    {
        // e.preventDefault();

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
            showNavList();

            for(var i = 0; i < items.length; i++)
            {
                items[i].addEventListener('click', function(e)
                {
                    e.preventDefault();

                    var clickedItem = e.currentTarget;
                    var target = clickedItem.dataset.targetId;

                    console.log(target);

                    btn.classList.remove('active');
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
            // hideNavList();
        }
    });

    function showNavList()
    {
        var tween = TweenMax.staggerFrom(navItems, .4,
        {
            delay: .015,
            x: 390,
            opacity: 0,
            ease: Sine.easeIn
        }, .15);
    }

    function hideNavList()
    {
        var tween = TweenMax.to(navItems, .04,
        {
            x: 390
        });
    }
}

window.onload = init;