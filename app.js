const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.nav-links');
const logo = document.querySelector('.logo');
const links = document.querySelectorAll('a');
const dropdownMenu = document.querySelector('.dropdown-menu');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        logo.style.marginTop = '.55rem';
    }
    else {
        logo.style.marginTop = '0';
    }
});


document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]');
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active');
    });
});