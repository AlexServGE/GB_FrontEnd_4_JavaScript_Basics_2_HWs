"use strict";

// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

const announceAllTagsLoaded = (event) => {
    console.log("All tags loaded");
};
document.addEventListener("DOMContentLoaded", announceAllTagsLoaded);

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
const announceAllResourcesLoaded = (event) => {
    console.log("Page loaded");
};
window.addEventListener("loaded", announceAllResourcesLoaded);

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

const isSuperElementClass = (event) => {
    const tagSimpleNameClicked = event.target.tagName.toLowerCase();
    if (event.target.classList.contains("super_element")) {
        console.log(`Класс "super_element" присутствует в элементе "${tagSimpleNameClicked}"`);
    } else {
        console.log(`Тэг, по которому был произведен клик - ${tagSimpleNameClicked}`);
    }
}
document.body.addEventListener('click', isSuperElementClass);


// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
const textAreaElement = document.querySelector('textarea');

const textAreaElementMouseOver = (event) => {
    console.log(`Вы навели на ${event.target.tagName.toLowerCase()}.`);
}
textAreaElement.addEventListener("mouseover", textAreaElementMouseOver);


// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.
const ulElement = document.querySelector('ul');
const ulButtons = [...document.querySelectorAll('li button')];

const isUlButtonClicked = (event) => {
    event.stopImmediatePropagation();
    if (ulButtons.includes(event.target)) {
        console.log(event.target.textContent);
    }
};
ulElement.addEventListener("click", isUlButtonClicked);
// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.
"Потому что при возникновении события на одном из тэгов, все обработчики, подключенные к родителям этого тэга также отработают во время всплытия. Чтобы отключить всплытие можно использовать event.stopImmediatePropagation()"
// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
const listElements = [...ulElement.children];
for (let index in listElements) {
    if (index % 2 === 0) {
        listElements[index].style.backgroundColor = "green";
    }
}