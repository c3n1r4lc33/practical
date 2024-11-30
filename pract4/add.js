import { displayList } from './display.js';

// Функция для добавления нового элемента
export function addNewItem(inputElement, list, container) {
    const newItem = inputElement.value.trim(); // Очищаем значение
    if (newItem) {
        list.push(newItem); // Добавляем в массив
        displayList(list, container); // Обновляем список
        inputElement.value = ''; // Очищаем поле
    }
}
