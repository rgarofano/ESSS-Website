const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.nav-links');
const logo = document.querySelector('.logo');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        logo.style.marginTop = '.55rem';
    }
    else {
        logo.style.marginTop = '0';
    }
});