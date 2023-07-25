'use strict';

const faqItemHideClass = "faq__item--hide";

const hideAllFaq = (items) => {
  items.forEach((item) => {
    if (!item.classList.contains(faqItemHideClass)) {
      item.classList.add(faqItemHideClass);
    }
  })
};

const faqToggleButtonClickHAndler = (evt) => {
  if (evt.target.closest('button')) {
    evt.target.parentElement.classList.toggle(faqItemHideClass);
  }
};

const initAccordeon = () => {
  const faq = document.querySelector(".faq");

  if (faq) {
    const faqAllItems = faq.querySelectorAll(".faq__item");

    hideAllFaq(faqAllItems);

    faq.addEventListener('click', faqToggleButtonClickHAndler);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  initAccordeon();
});
