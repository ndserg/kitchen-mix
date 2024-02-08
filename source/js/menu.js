'use strict';

const VEWPORTS = {
  desktop: 1140
}

const mediaQueryList = window.matchMedia(`(min-width: ${VEWPORTS.desktop}px)`);
const burgerButtonCloseClass = "burger-button--close";
const headerMainMenuHideClass = "header-main__menu--hide";
const burgerButton = document.querySelector(".header-main__menu-button");
const menu = document.querySelector(".header-main__menu");

let isSettedListener = false;

const mouseUpHandler = (evt) => {
  if (evt.target.closest('a') || evt.target.closest('button')) {
    evt.preventDefault();

    burgerButton.classList.remove(burgerButtonCloseClass);
    menu.classList.add(headerMainMenuHideClass);
  }
};

const burgerButtonClickHandler = (evt) => {
  evt.preventDefault();
  burgerButton.classList.toggle(burgerButtonCloseClass);
  menu.classList.toggle(headerMainMenuHideClass);
};

const removeMainNavListener = () => {
  menu.removeEventListener('mouseup', mouseUpHandler);
};

const addMainNavListener = () => {
  menu.addEventListener('mouseup', mouseUpHandler);
};

const addBurgerButtonListener = () => {
  if (!isSettedListener) {
    burgerButton.addEventListener('click', burgerButtonClickHandler);
    addMainNavListener();
    menu.classList.add(headerMainMenuHideClass);
    isSettedListener = true;
  }
};

const removeBurgerButtonListener = () => {
  if (isSettedListener) {
    burgerButton.removeEventListener('click', burgerButtonClickHandler);
    removeMainNavListener();
    burgerButton.classList.remove(burgerButtonCloseClass);
    menu.classList.remove(headerMainMenuHideClass);
    isSettedListener = false;
  }
};

const screenSizeChangeHandler = (mql) => {
  if (mql.matches) {
    removeBurgerButtonListener();
  } else {
    addBurgerButtonListener();
  }
};

const init = () => {
  burgerButton.classList.contains(burgerButtonCloseClass) ? burgerButton.classList.remove(burgerButtonCloseClass) : "";
  menu.classList.contains(headerMainMenuHideClass) ? "" : menu.classList.add(headerMainMenuHideClass);

  addBurgerButtonListener();

  screenSizeChangeHandler(mediaQueryList);

  mediaQueryList.addEventListener("change", screenSizeChangeHandler);
}

window.addEventListener("DOMContentLoaded", () => {
  init();
});
