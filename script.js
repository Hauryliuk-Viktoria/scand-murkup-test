document.addEventListener("DOMContentLoaded", function () {
  // Функция для проверки ВСЕХ чекбоксов в карточке
  function areAllCheckboxesChecked(card) {
    const checkboxes = card.querySelectorAll(".requirement-checkbox");
    // Проверяем, что все чекбоксы отмечены и что чекбоксы вообще есть
    return (
      checkboxes.length > 0 &&
      Array.from(checkboxes).every((checkbox) => checkbox.checked)
    );
  }

  // Функция для обновления стилей КОНКРЕТНОЙ карточки
  function updateCardStyle(card) {
    const allChecked = areAllCheckboxesChecked(card);

    if (allChecked) {
      card.classList.add("active");
      console.log(`Карточка ${card.id} активирована - все чекбоксы отмечены!`);
    } else {
      card.classList.remove("active");
      console.log(
        `Карточка ${card.id} деактивирована - не все чекбоксы отмечены`
      );
    }
  }

  // Добавляем обработчики для каждой карточки отдельно
  const levelCards = document.querySelectorAll(".verification-card");

  levelCards.forEach((card) => {
    const checkboxes = card.querySelectorAll(".requirement-checkbox");

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        // Обновляем только ту карточку, где изменился чекбокс
        updateCardStyle(card);
      });
    });
  });
});
