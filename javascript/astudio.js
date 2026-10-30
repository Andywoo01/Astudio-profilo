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
    const tutorialGrid = document.querySelector('.tutorials-grid');
    const scrollButtons = document.querySelectorAll('.tutorials-scroll-button');
    const tutorialCard = tutorialGrid && tutorialGrid.querySelector('.work-item');

    if (!tutorialGrid || !tutorialCard || scrollButtons.length !== 2) {
        return;
    }

    const [scrollLeftButton, scrollRightButton] = scrollButtons;
    const updateScrollButtons = function() {
        scrollLeftButton.disabled = tutorialGrid.scrollLeft <= 0;
        scrollRightButton.disabled =
            tutorialGrid.scrollLeft + tutorialGrid.clientWidth >= tutorialGrid.scrollWidth - 1;
    };

    const scrollByCard = function(direction) {
        const gap = parseFloat(window.getComputedStyle(tutorialGrid).columnGap) || 0;
        tutorialGrid.scrollBy({
            left: direction * (tutorialCard.getBoundingClientRect().width + gap),
            behavior: 'smooth'
        });
    };

    scrollLeftButton.addEventListener('click', function() {
        scrollByCard(-1);
    });
    scrollRightButton.addEventListener('click', function() {
        scrollByCard(1);
    });
    tutorialGrid.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);
    updateScrollButtons();
});
