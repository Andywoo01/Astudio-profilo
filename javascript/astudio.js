let whatisyourmajor="graphicdesign";


console.log("graphicdesign");

// Responsive navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navId = menuToggle && menuToggle.getAttribute('aria-controls');
    const navMenu = navId
        ? document.getElementById(navId)
        : menuToggle && menuToggle.parentElement.querySelector('nav');

    if (!menuToggle || !navMenu) {
        return;
    }

    const menuClose = navMenu.querySelector('.menu-close');
    const setMenuOpen = function(isOpen) {
        navMenu.classList.toggle('active', isOpen);
        navMenu.classList.toggle('open', isOpen);
        menuToggle.setAttribute('aria-expanded', isOpen.toString());
    };

    menuToggle.addEventListener('click', function() {
        setMenuOpen(!navMenu.classList.contains('active') && !navMenu.classList.contains('open'));
    });

    if (menuClose) {
        menuClose.addEventListener('click', function() {
            setMenuOpen(false);
            menuToggle.focus();
        });
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && (navMenu.classList.contains('active') || navMenu.classList.contains('open'))) {
            setMenuOpen(false);
            menuToggle.focus();
        }
    });

    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 767 && !navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            setMenuOpen(false);
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 767) {
            setMenuOpen(false);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.carousel-controls').forEach(function(controls) {
        const scrollButtons = controls.querySelectorAll('.carousel-scroll-button');
        const gridId = scrollButtons[0] && scrollButtons[0].getAttribute('aria-controls');
        const grid = gridId && document.getElementById(gridId);
        const card = grid && grid.querySelector('.work-item');

        if (!grid || !card || scrollButtons.length !== 2) {
            return;
        }

        const [scrollLeftButton, scrollRightButton] = scrollButtons;
        const updateScrollButtons = function() {
            scrollLeftButton.disabled = grid.scrollLeft <= 0;
            scrollRightButton.disabled =
                grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 1;
        };

        const scrollByCard = function(direction) {
            const gap = parseFloat(window.getComputedStyle(grid).columnGap) || 0;
            grid.scrollBy({
                left: direction * (card.getBoundingClientRect().width + gap),
                behavior: 'smooth'
            });
        };

        scrollLeftButton.addEventListener('click', function() {
            scrollByCard(-1);
        });
        scrollRightButton.addEventListener('click', function() {
            scrollByCard(1);
        });
        grid.addEventListener('scroll', updateScrollButtons);
        window.addEventListener('resize', updateScrollButtons);
        updateScrollButtons();
    });
});
