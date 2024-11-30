import { displayList } from './display.js';

// Функция для поиска по списку
export function searchItems(inputElement, list, container) {
    const query = inputElement.value.toLowerCase(); // Приводим к нижнему регистру
    const filteredList = list.filter(item => item.toLowerCase().includes(query)); // Фильтруем
    displayList(filteredList, container); // Отображаем отфильтрованный список
}
