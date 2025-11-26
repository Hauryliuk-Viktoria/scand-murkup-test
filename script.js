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

        // Визуальная обратная связь для конкретного пункта
        // if (this.checked) {
        //   this.parentElement.style.fontWeight = "500";
        // } else {
        //   this.parentElement.style.color = "#495057";
        //   this.parentElement.style.fontWeight = "normal";
        // }
      });
    });
  });

  // Демо-функции для тестирования
  //   window.checkAll = function (levelId) {
  //     const card = document.getElementById(levelId);
  //     const checkboxes = card.querySelectorAll(".requirement-checkbox");

  //     checkboxes.forEach((checkbox) => {
  //       checkbox.checked = true;
  //       checkbox.parentElement.style.color = "#4CAF50";
  //       checkbox.parentElement.style.fontWeight = "500";
  //     });

  //     updateCardStyle(card);
  //   };

  //   window.uncheckAll = function (levelId) {
  //     const card = document.getElementById(levelId);
  //     const checkboxes = card.querySelectorAll(".requirement-checkbox");

  //     checkboxes.forEach((checkbox) => {
  //       checkbox.checked = false;
  //       checkbox.parentElement.style.color = "#495057";
  //       checkbox.parentElement.style.fontWeight = "normal";
  //     });

  //     updateCardStyle(card);
  //   };

  // Функция для проверки одного чекбокса (для теста)
  //   window.checkOne = function (levelId, index) {
  //     const card = document.getElementById(levelId);
  //     const checkboxes = card.querySelectorAll(".requirement-checkbox");

  //     if (checkboxes[index]) {
  //       checkboxes[index].checked = !checkboxes[index].checked;
  //       checkboxes[index].dispatchEvent(new Event("change"));
  //     }
  //   };

  // Добавляем демо-кнопки
  //   function setupDemoButtons() {
  //     const demoHTML = `
  //             <div style="text-align: center; margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
  //                 <h3 style="margin-bottom: 15px; color: #2c3e50;">Тестовые кнопки:</h3>
  //                 <div style="margin-bottom: 15px;">
  //                     <strong>Level 1:</strong>
  //                     <button onclick="checkAll('level1')" style="margin: 5px; padding: 8px 16px; background: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">Все ✓</button>
  //                     <button onclick="uncheckAll('level1')" style="margin: 5px; padding: 8px 16px; background: #f44336; color: white; border: none; border-radius: 4px; cursor: pointer;">Все ✗</button>
  //                     <button onclick="checkOne('level1', 0)" style="margin: 2px; padding: 6px 12px; background: #2196F3; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">1</button>
  //                     <button onclick="checkOne('level1', 1)" style="margin: 2px; padding: 6px 12px; background: #2196F3; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">2</button>
  //                     <button onclick="checkOne('level1', 2)" style="margin: 2px; padding: 6px 12px; background: #2196F3; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">3</button>
  //                 </div>
  //                 <div>
  //                     <strong>Level 2:</strong>
  //                     <button onclick="checkAll('level2')" style="margin: 5px; padding: 8px 16px; background: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">Все ✓</button>
  //                     <button onclick="uncheckAll('level2')" style="margin: 5px; padding: 8px 16px; background: #f44336; color: white; border: none; border-radius: 4px; cursor: pointer;">Все ✗</button>
  //                     <button onclick="checkOne('level2', 0)" style="margin: 2px; padding: 6px 12px; background: #2196F3; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">1</button>
  //                     <button onclick="checkOne('level2', 1)" style="margin: 2px; padding: 6px 12px; background: #2196F3; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">2</button>
  //                 </div>
  //             </div>
  //         `;
  //     document.body.insertAdjacentHTML("beforeend", demoHTML);
  //   }

  // Инициализируем демо-кнопки
  //   setupDemoButtons();

  // Выводим начальный статус в консоль
  //   levelCards.forEach((card) => {
  //     console.log(
  //       `Начальный статус ${card.id}:`,
  //       areAllCheckboxesChecked(card) ? "АКТИВНА" : "НЕ АКТИВНА"
  //     );
  //   });
});
