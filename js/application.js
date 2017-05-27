function init()
{
    var body = document.body;
    var navContainer = document.querySelector('#navigation-container');
    var navController = navContainer.querySelector('.burger-button');
    var navListWrapper = navContainer.querySelector('.nav-list-wrapper');
    var navItems = navContainer.querySelectorAll('.nav-list-item');
    var items = navContainer.querySelectorAll('.nav-list-item a');

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
            navListWrapper.classList.add('open');
            // showNavList();

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
            navListWrapper.classList.remove('open');
            // hideNavList();
        }
    });

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