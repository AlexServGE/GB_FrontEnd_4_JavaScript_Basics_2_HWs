"use strict";

// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
const ddiElements = document.querySelectorAll('.dropdown-item');
ddiElements.forEach(element => element.classList.add("super-dropdown"));

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

const btnElement = document.querySelector('.btn');
btnElement.classList.toggle("btn-secondary");


// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
const menuElement = document.querySelector('.menu');
menuElement.classList.remove("dropdown-menu")


// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`
const divDdElement = document.querySelector('div.dropdown');
divDdElement.insertAdjacentHTML('afterEnd','<a href="#">link</a>');

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
const dDMBtnElement = document.querySelector('#dropdownMenuButton');
dDMBtnElement.id = "superDropdown"

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
const ariaLabelledElement = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
ariaLabelledElement.dataset.dd = 3;


// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
const dDTElement = document.querySelector('.dropdown-toggle');
dDTElement.removeAttribute("type");