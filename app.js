const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.nav-links');
const logo = document.querySelector('.logo');
const pages = document.querySelectorAll('.page');
const links = document.querySelectorAll('.page-link');

for (let page of pages) {
    if (!page.classList.contains('home')) {
        page.style.display = 'none';
    }
}

links.forEach( link => {
    link.addEventListener('click', e => {
        let target_class;
        for (let c of e.target.classList) {   
            if (c !== 'page-link' && c !== 'logo') {
                target_class = c;
            }
        }
        for (let page of pages) {
            if (!page.classList.contains(target_class)) {
                page.style.display = 'none';
            }
            else {
                page.style.display = 'block';
            }
        }
    });
});

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
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