'use strict';

const productTabActiveClass = "product__info-tab--active";

const productBlockDisableClasses = {
  description: "product__description--disabled",
  characteristics: "product__characteristics--disabled"
};

const tabNames = {
  description: "description",
  characteristics: "characteristics"
};

const tabs = {
  description: null,
  characteristics: null
};

const productBlocks = {
  description: null,
  characteristics: null
};

const setActiveTab = (tab) => {
  tabs.description.classList.remove(productTabActiveClass);
  tabs.characteristics.classList.remove(productTabActiveClass);
  productBlocks.description.classList.contains(productBlockDisableClasses.description) ? "" : productBlocks.description.classList.add(productBlockDisableClasses.description);
  productBlocks.characteristics.classList.contains(productBlockDisableClasses.characteristics) ? "" : productBlocks.characteristics.classList.add(productBlockDisableClasses.characteristics);

  tabs[tab].classList.add(productTabActiveClass);
  productBlocks[tab].classList.remove(productBlockDisableClasses[tab]);
};

const productTabsClickHAndler = (evt) => {
  if (evt.target.closest('button')) {
    setActiveTab(evt.target.dataset.tab);
  }
};

const initProductTabs = () => {
  const productInfo = document.querySelector(".product__info");

  if (productInfo) {
    const productTabs = productInfo.querySelector(".product__tabs");
    tabs.description = productTabs.querySelector(`[data-tab="${tabNames.description}"]`);
    tabs.characteristics = productTabs.querySelector(`[data-tab="${tabNames.characteristics}"]`);
    productBlocks.description = document.querySelector(".product__description");
    productBlocks.characteristics = document.querySelector(".product__characteristics");

    setActiveTab(tabNames.description);

    productTabs.addEventListener('click', productTabsClickHAndler);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  initProductTabs();
});
