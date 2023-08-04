'use strict';
let catalogContainer = null;

const sortButton = {
  container: null,
  textContainer: null,
  asc: {
    buttonText: "Цены: по возрастанию",
    buttonClass: "page-catalog__sort-button--asc"
  },
  desc: {
    buttonText: "Цены: по убыванию",
    buttonClass: "page-catalog__sort-button--desc"
  }
};

const sortTypes = {
  asc: "asc",
  desc: "desc"
};

const sortElements = (sortType) => {
  const products = catalogContainer.querySelectorAll(".page-catalog__item");
  const sortedProducts = Array.from(products).sort((a, b) => sortType === sortTypes.asc ? a.dataset.price - b.dataset.price : b.dataset.price - a.dataset.price);
  const fragment = document.createDocumentFragment();

  sortedProducts.forEach(item => fragment.appendChild(item.cloneNode(true)));
  catalogContainer.innerHTML = "";
  catalogContainer.append(fragment);
};

const setSortType = (sortType) => {
  const newSortType = sortType === sortTypes.asc ? sortTypes.desc : sortTypes.asc;

  sortElements(newSortType);

  sortButton.container.dataset.sort = newSortType;

  if (sortButton.container.classList.contains(sortButton[sortType].buttonClass)) {
    sortButton.container.classList.remove(sortButton[sortType].buttonClass);
  }
  sortButton.textContainer.textContent = sortButton[newSortType].buttonText;
  sortButton.container.classList.add(sortButton[newSortType].buttonClass);
};

const sortButtonClickHandler = (evt) => {
  evt.preventDefault();

  const currentSortType = evt.target.tagName === "BUTTON" ? evt.target.dataset.sort : evt.target.closest("BUTTON").dataset.sort;

  setSortType(currentSortType);
};

const initFilter = () => {
  catalogContainer = document.querySelector(".page-catalog__list");

  if (catalogContainer) {
    sortButton.container = document.querySelector(".page-catalog__sort-button");
    sortButton.textContainer = sortButton.container.querySelector("span");

    sortElements(sortTypes.asc);

    sortButton.container.classList.contains(sortButton.asc.buttonClass) ? "" : sortButton.container.classList.add(sortButton.asc.buttonClass);
    sortButton.container.dataset.sort = sortTypes.asc;
    sortButton.textContainer.textContent = sortButton.asc.buttonText;

    sortButton.container.addEventListener("click", sortButtonClickHandler);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  initFilter();
});
