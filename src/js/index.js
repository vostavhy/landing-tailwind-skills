window.onload = () => {
  // Burger menu
  addBurgerMenu();

  // Window resize
  addWindowResize();

  // Toggle tabs
  addToggleTabs();
};

const toggleBurgerMenu = () => {
  const burger = document.querySelector("#burger");
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    toggleMobileMenu();
    console.log("toggleBurger");
  });
};

const addBurgerMenu = () => {
  toggleBurgerMenu();
};

const toggleMobileMenu = () => {
  const mobileMenu = document.querySelector("#mobile-menu");
  const body = document.querySelector("body");
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");
  body.classList.toggle("overflow-hidden");
};

const windowResize = () => {
  const mobileMenu = document.querySelector("#mobile-menu");
  const body = document.querySelector("body");
  const burger = document.querySelector("#burger");
  if (window.innerWidth > 768) {
    mobileMenu.classList.remove("flex");
    mobileMenu.classList.add("hidden");
    body.classList.remove("overflow-hidden");
    burger.classList.remove("active");
  }
};

const addWindowResize = () => {
  window.addEventListener("resize", windowResize);
};

const toggleTabs = () => {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tab.classList.add("active");
      console.log(tab.innerText);
      filteredCards(tab.innerText);
    });
  });
};

const addToggleTabs = () => {
  toggleTabs();
};

// Filter cards by tag
const filteredCards = (tagName) => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.classList.remove("hidden");
    const tags = card.querySelectorAll(".tag");
    if (tagName !== "Top Rated") {
      let isHidden = true;
      tags.forEach((tag) => {
        if (tag.innerText.includes(tagName)) {
          isHidden = false;
        }
      });
      if (isHidden) {
        card.classList.add("hidden");
      }
    }
  });
};
