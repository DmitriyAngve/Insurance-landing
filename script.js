const buttons = document.querySelectorAll(".que-btn");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;
