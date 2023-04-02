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

// const buttons2 = document.querySelectorAll(".que-btn");

// buttons.forEach(function (button) {
//   const content = button.nextElementSibling; // Получаем следующий элемент после кнопки

//   button.addEventListener("click", function () {
//     content.classList.toggle("show"); // Переключаем класс show у элемента
//   });
// });
// Получаем все кнопки
const buttons2 = document.querySelectorAll(".que-btn");

// Перебираем все кнопки
buttons.forEach((button) => {
  // Получаем соответствующий текст
  const content = button.nextElementSibling;

  // Добавляем обработчик клика
  button.addEventListener("click", () => {
    // Проверяем, отображается ли текст
    const isContentVisible = content.classList.contains("show");

    // Если текст уже отображается, скрываем его
    if (isContentVisible) {
      content.classList.remove("show");
    } else {
      // Если текст не отображается, показываем его и скрываем все остальные
      document.querySelectorAll(".content").forEach((otherContent) => {
        otherContent.classList.remove("show");
      });
      content.classList.add("show");
    }
  });
});
