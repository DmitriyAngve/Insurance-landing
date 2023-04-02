const buttonsQue = document.querySelectorAll(".que-btn");

// Перебираем все кнопки
buttonsQue.forEach((button) => {
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
