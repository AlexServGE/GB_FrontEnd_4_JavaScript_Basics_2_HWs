"use strict";

// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

const inputElFrom = document.querySelector('#from');
const spanElement = document.querySelector('span');

const putTextIntoSpan = (event) => {
    spanElement.textContent = event.target.value;
};

inputElFrom.addEventListener('input', putTextIntoSpan);

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const messageBtnElement = document.querySelector('.messageBtn');
const messageElement = document.querySelector('.message');

const addStyleToMessageElement = (event) => {
    messageElement.classList.add("animate_animated", "animate_fadeInLeftBig");
    messageElement.style.visibility = "visible";
};

messageBtnElement.addEventListener('click', addStyleToMessageElement);

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const formEl = document.querySelector('form');
const inputEl1 = formEl.querySelector('input.form-control');
const inputEl2 = formEl.querySelector('select.form-control');

const buttonEl = formEl.querySelector('button');

const checkInputFilledOnClick = (event) => {
    if (inputEl1.value === "") {
        event.preventDefault();
        inputEl1.classList.add("error");
    } else {
        inputEl1.classList.remove("error");
    }
    if (inputEl2.value === "") {
        event.preventDefault();
        inputEl2.classList.add("error");
    } else {
        inputEl2.classList.remove("error");
    }
};


const checkInputFilledOnInput = (event) => {
    if (event.target.value === "") {
        event.target.classList.add("error");
    } else {
        event.target.classList.remove("error");
    }
};

buttonEl.addEventListener('click', checkInputFilledOnClick);
inputEl1.addEventListener('input', checkInputFilledOnInput);
inputEl2.addEventListener('input', checkInputFilledOnInput);