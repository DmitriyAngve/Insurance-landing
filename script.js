const buttons = document.querySelectorAll(".que-btn");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
  });
});
