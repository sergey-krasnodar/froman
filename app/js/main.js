const dropDownMenu = document.querySelector('.drop-down-menu');
const btnBurgerMenu = document.querySelector('.header__burger-menu');
const backdrop = document.querySelector('.backdrop');

btnBurgerMenu.addEventListener('click', () => {
  dropDownMenu.classList.add('drop-down-menu--active');
  backdrop.classList.remove('hidden');
  document.body.style.overflow = "hidden";
})

backdrop.addEventListener('click', () => {
  dropDownMenu.classList.remove('drop-down-menu--active');
  backdrop.classList.add('hidden');
  document.body.style.overflow = "";
})