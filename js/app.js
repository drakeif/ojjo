const btn = document.querySelector('.header__btn'),
      menu = document.querySelector('.menu'),
      closeMenu = document.querySelectorAll('.menu__nav');

btn.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
    menu.classList.toggle('active');
});

closeMenu.forEach(el => el.addEventListener('click', () => {
    btn.classList.remove('active');
    menu.classList.remove('active');
}));


