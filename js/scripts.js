window.onload = function() {
    const navHolder = document.querySelector('.nav__holder');
    const navToggle = document.querySelector('.nav__toggle');
    const navToggleIcon = document.querySelector('.nav__toggle-icon');

    navToggle.addEventListener('click', (e) => {
        e.preventDefault();

        if (navToggleIcon.classList.contains('fa-bars')) {
            navToggleIcon.classList.add('fa-times');
            navToggleIcon.classList.remove('fa-bars');
            navHolder.classList.add('nav__holder--opened');
        } else {
            navToggleIcon.classList.add('fa-bars');
            navToggleIcon.classList.remove('fa-times');
            navHolder.classList.remove('nav__holder--opened');
        }
    });
}
