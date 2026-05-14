let whatisyourmajor="graphicdesign";


console.log("graphicdesign");

// Responsive navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (!menuToggle || !navMenu) {
        return;
    }

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const isOpen = navMenu.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isOpen.toString());
    });
});
