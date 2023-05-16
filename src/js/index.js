window.onload = () => {
  // Burger menu
  addBurgerMenu();

  // Window resize
  addWindowResize();
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
