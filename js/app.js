const btn = document.querySelector('.header__btn'),
      menu = document.querySelector('.menu'),
      closeMenu = document.querySelectorAll('.menu__nav'),
      body = document.querySelector('#body');

btn.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('active');
});

closeMenu.forEach(el => el.addEventListener('click', () => {
    btn.classList.remove('active');
    menu.classList.remove('active');
    body.classList.remove('active');
}));


