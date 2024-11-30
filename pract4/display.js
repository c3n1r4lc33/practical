// Функция для отображения списка
export function displayList(items, container) {
    container.innerHTML = ''; // Очищаем контейнер
    items.forEach(item => {
        const listItem = document.createElement('li'); // Создаём элемент списка
        listItem.innerText = item; // Добавляем текст
        container.appendChild(listItem); // Вставляем элемент в контейнер
    });
}
