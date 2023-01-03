(function(){
    const headerBurgerBtn = document.querySelector('.header__burger');
    const headerNavigation = document.querySelector('.header__nav');
    const headerButtonClose = document.querySelector('.header__nav-close');

    headerBurgerBtn.addEventListener('click', e => {
        headerNavigation.classList.add('active');
    });

    headerButtonClose.addEventListener('click', e => {
        headerNavigation.classList.remove('active');
    });

})();



function tabs(evt, services) {
    var i, tabsDisc, tabsBtn;
    tabsDisc = document.getElementsByClassName("tabs__disc");
    for (i = 0; i < tabsDisc.length; i++) {
        tabsDisc[i].style.display = "none";
    }
    tabsBtn = document.getElementsByClassName("tabs__box-button");
    for (i = 0; i < tabsBtn.length; i++) {
        tabsBtn[i].className = tabsBtn[i].className.replace(" active", "");
    }
    document.getElementById(services).style.display = "block";
    evt.currentTarget.className += " active";
}

const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    grabCursor: true,
    loop: true,
});

