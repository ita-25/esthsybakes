// Ensure mobile menu link clicks close the overlay
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.getElementById('menuOverlay');
        const bsCollapse = bootstrap.Collapse.getInstance(menu);
        if (bsCollapse) {
            bsCollapse.hide();
        }
    });
});

// Toggle "open" class for animation
const toggler = document.querySelector('.navbar-toggler');
toggler.addEventListener('click', function() {
    this.classList.toggle('active');
});
