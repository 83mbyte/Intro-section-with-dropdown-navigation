function drawerFunc() {

    const drawerOpen = () => drawerContainer.classList.add('active');
    const drawerClose = () => drawerContainer.classList.remove('active');

    const menuBurger = document.getElementById('menuBurger');
    const drawerContainer = document.getElementById('drawerContainer');
    const drawerCloseBtn = document.getElementById('drawerClose');

    menuBurger.addEventListener('click', drawerOpen);
    drawerCloseBtn.addEventListener('click', drawerClose);

}

