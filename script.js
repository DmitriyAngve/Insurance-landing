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

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const buttons2 = document.querySelectorAll(".que-btn");

buttons.forEach((button) => {
  const content = button.nextElementSibling;

  button.addEventListener("click", () => {
    const isContentVisible = content.classList.contains("show");

    if (isContentVisible) {
      content.classList.remove("show");
    } else {
      document.querySelectorAll(".content").forEach((otherContent) => {
        otherContent.classList.remove("show");
      });
      content.classList.add("show");
    }
  });
});
