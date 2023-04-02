const buttonsQue = document.querySelectorAll(".que-btn");

buttonsQue.forEach((button) => {
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
