function changeActiveColorFromNavItem(navItem) {
  const navItems = document.getElementsByClassName('nav-item');

  for (let i = 0; i < navItems.length; i++) {
    if (navItem.id != navItems[i].id && navItems[i].classList.length > 1) {
      navItems[i].classList.remove("active");
    }
  }

  if (navItem && navItem.alt != 'Fellipe Profile Picture') {
    navItem.classList.add("active");
  }

  if (navItem && navItem.alt == 'Fellipe Profile Picture') {
    navItems[0].classList.add("active");
  }
}
