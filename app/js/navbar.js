// Mobile Burger Menu
function burgerMenu() {
    let burger = document.querySelector('.burger')
    let menu = document.querySelector('.menu__list')
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        burger.classList.add('active-burger')
      } else {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
      }
    })
    // This is where we set the navbar breakpoint.
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
          menu.classList.remove('active')
          burger.classList.remove('active-burger')
      }
    })
}
burgerMenu()


// We call this function if we need to fix the menu when scrolling.
function fixedNav() {
  const nav = document.querySelector('nav')

  // Here we indicate in pixels how much we need to scroll so that our menu becomes fixed
  const breakpoint = 500 
  if ( window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
// window.addEventListener('scroll', fixedNav)
