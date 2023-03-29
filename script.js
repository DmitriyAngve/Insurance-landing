const buttons = document.querySelectorAll(".que-btn");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

// Make actuall year
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
