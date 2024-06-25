"use strict";

const myObj = JSON.parse(data);
console.log(myObj);

const productBoxesElement = document.querySelector('.product-boxes');

myObj.carts.forEach(cart => {
    const cartElement = document.createElement('div');
    productBoxesElement.append(cartElement);

    cart.products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `\
                    <p class="id">${product.id}</p> \
                    <p class="title">${product.title}</p> \
                    <p class="price">${product.price}</p>\
                    <p class="quantity">${product.quantity}</p>\
                    <p class="total">${product.total}</p>\
                    <p class="discountPercentage">${product.discountPercentage}</p>\
                    <p class="discountedTotal">${product.discountedTotal}</p>\
                    <img src="${product.thumbnail}" alt="" class="thumbnail"></img>\
            `;
        cartElement.append(productElement);
    })
})