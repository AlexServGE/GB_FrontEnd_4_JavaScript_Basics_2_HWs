// Обязательное задание.

// Выполнить все задачи в теге script. Комментарии, в которых написаны задачи, не
// стирать, код с решением задачи пишем под комментарием.


// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const superLinkEl = document.getElementById('super_link');
console.log(superLinkEl);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const cardLinkEls = document.querySelectorAll('.card-link');
cardLinkEls.forEach(element => element.textContent = "ссылка");

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
const cardLinkElsByCardBody = document.querySelectorAll('.card-body .card-link');
console.log(cardLinkElsByCardBody);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

// const atrEl = document.querySelectorAll('[data-number="50"]');

console.log("startSearch");
function search(element = document.querySelector('body')) {
    if (element.dataset?.number === "50") {
        console.log(element);
    } else {
        element.childNodes.forEach(someElement => {
            search(someElement);
        })
    }
}
search();
console.log("endSearch");


// 5. Выведите содержимое тега title в консоль.
const cardTitleEl = document.querySelector('.card-title'); //в HTML не нашел тэг title
console.log(cardTitleEl);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
const cardTitleEl2 = document.querySelector('.card-title'); //в HTML не нашел тэг title
console.log(cardTitleEl2.parentElement);

// 7. Создайте тег p, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const cardEl = document.querySelector('.card');
const paragraphElement = document.createElement('p');
paragraphElement.textContent = 'Привет';
cardEl.appendChild(paragraphElement);


// 8. Удалите тег h6 на странице.
const h6El = document.querySelector('h6');
h6El.remove();