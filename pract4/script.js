import { displayList } from './display.js';
import { addNewItem } from './add.js';
import { searchItems } from './search.js';

// Элементы интерфейса
const listContainer = document.getElementById('list-container');
const newItemInput = document.getElementById('new-item');
const addBtn = document.getElementById('add-btn');
const searchItemInput = document.getElementById('search-item');

// Исходный список
const initialList = ['Первый', 'Второй', 'Третий', 'Четвёртый', 'Пятый'];

// Инициализация
displayList(initialList, listContainer);

// Обработчики событий
addBtn.addEventListener('click', () => addNewItem(newItemInput, initialList, listContainer));
newItemInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addNewItem(newItemInput, initialList, listContainer);
    }
});
searchItemInput.addEventListener('input', () => searchItems(searchItemInput, initialList, listContainer));
