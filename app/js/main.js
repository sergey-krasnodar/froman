const dropDownMenu = document.querySelector('.drop-down-menu');
const btnBurgerMenu = document.querySelector('.header__burger-menu');
const backdrop = document.querySelector('.backdrop');
const btnCloseMenu = document.querySelector('.header__close-menu');

btnBurgerMenu.addEventListener('click', () => {
  dropDownMenu.classList.add('drop-down-menu--active');
  backdrop.classList.remove('hidden');
  document.body.style.overflow = "hidden";
  btnBurgerMenu.classList.add('hidden-menu');
  btnCloseMenu.classList.remove('hidden-menu');
})

backdrop.addEventListener('click', () => {
  dropDownMenu.classList.remove('drop-down-menu--active');
  backdrop.classList.add('hidden');
  btnBurgerMenu.classList.remove('hidden-menu');
  btnCloseMenu.classList.add('hidden-menu');
  document.body.style.overflow = "";
})

btnCloseMenu.addEventListener('click', () => {
  dropDownMenu.classList.remove('drop-down-menu--active');
  backdrop.classList.add('hidden');
  btnBurgerMenu.classList.remove('hidden-menu');
  btnCloseMenu.classList.add('hidden-menu');
  document.body.style.overflow = "";
})