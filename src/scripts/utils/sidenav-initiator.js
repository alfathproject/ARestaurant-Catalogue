const sidenavInitiator = {
  init({ buttonOpen, sidenav, buttonClose }) {
    buttonOpen.addEventListener('click', (event) => {
      this.openSidenav(sidenav, event);
    });

    buttonClose.addEventListener('click', (event) => {
      this.closeSidenav(sidenav, event);
    });
  },

  openSidenav(sidenav, event) {
    event.stopPropagation();
    sidenav.classList.toggle('open');
  },

  closeSidenav(sidenav, event) {
    event.stopPropagation();
    sidenav.classList.remove('open');
  },
};

export default sidenavInitiator;
