const btn = document.querySelector(".dropdown");
const output = document.querySelector(".dropdown-content");

btn.addEventListener("click", (e) => {
  output.classList.toggle("show");
});
