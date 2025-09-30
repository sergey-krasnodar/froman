const dropDownMenu = document.querySelector('.drop-down-menu');
const btnBurgerMenu = document.querySelector('.header__burger-menu');
const backdrop = document.querySelector('.backdrop');

btnBurgerMenu.addEventListener('click', ()=>{
  dropDownMenu.classList.toggle('drop-down-menu--active');
  backdrop.classList.toggle('hidden');
})

dropDownMenu.addEventListener('click', (e) => {
  if (e.target === dropDownMenu) {
    backdrop.classList.remove('hidden');
  }
})