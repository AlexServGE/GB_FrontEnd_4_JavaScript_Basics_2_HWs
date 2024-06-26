"use strict";

const resource = "/data.json";
const getData = async (someResource) => {
    try {
        const data = await fetch(someResource);
        const object = await data.json();
        return object;
    } catch (error) {
        console.log(error.message);
    }
};

document.addEventListener("DOMContentLoaded", async () => {

    const object = await getData(resource);

    const boxesElement = document.querySelector('.bottom__boxes');

    object.forEach(box => {
        boxesElement.insertAdjacentHTML("beforeend", `
            <figure class="bottom__box cart__add">
                <img src="${box.image}" alt="" class="bottom__box__image">
                <figcaption class="bottom__box__title">${box.title}</figcaption>
                <p class="bottom__box__content">${box.content}</p>
                <p class="bottom__box__price">${box.price}</p>
            </figure>
            `)
    })
});