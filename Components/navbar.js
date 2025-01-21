window.addEventListener('scroll', () => {
    const navbar = document.getElementById('main-nav-div');
    const navlist = document.getElementById('nav-list')
    if (window.scrollY > 50) { // Adjust the scroll position threshold as needed
      navbar.classList.add('scrolled');
      navlist.classList.add('a');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  