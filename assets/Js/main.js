const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-list a').forEach(n => n.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navMenu.classList.remove('open');
}));
