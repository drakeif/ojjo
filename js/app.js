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


const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.tabs__item');

    tabsBtn.forEach(function(item) {
        item.addEventListener('click', function() {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute('data-tab');
            let currentTab = document.querySelector(tabId);

            if(!currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
                currentBtn.classList.add('active');
                currentTab.classList.add('active');
            } 
        });
    });
        
    document.querySelector('.tabs__nav-btn:nth-child(3)').click();

// WAYPOINT
let waypoint = new Waypoint({
    element: document.getElementById('goods'),
    handler: function(direction) {
      let header = document.getElementById('header');
      if(direction === 'down') {
        header.classList.add('active');
        document.querySelector('.header__nav_logo').classList.add('active');
      } else {
        header.classList.remove('active');
        document.querySelector('.header__nav_logo').classList.remove('active');
      }
    }
  });