Array.from(document.querySelectorAll('.product__quantity-control_dec')).forEach(element => {
    element.onclick = () => {
        
        productQuantity = element.closest('.product__quantity-controls').querySelector('.product__quantity-value');
        if (productQuantity.innerText > 1) {
            productQuantity.innerText-- ;
        } 

        return false;
    }
})

Array.from(document.querySelectorAll('.product__quantity-control_inc')).forEach(element => {
    element.onclick = () => { 
        productQuantity = element.closest('.product__quantity-controls').querySelector('.product__quantity-value');
        productQuantity.innerText++ ;
       
        return false;
    }
})

Array.from(document.querySelectorAll('.product__add')).forEach(element => {
    element.onclick = () => { 

        cartProducts = document.querySelector('.cart__products');

        productQuantity = element.closest('.product__quantity').querySelector('.product__quantity-value').innerText;
        product = element.closest('.product');
        productImageSrc = product.querySelector('.product__image').getAttribute('src');

        findProduct = cartProducts.querySelector('.cart__product[data-id="' + product.getAttribute('data-id') +'"]');
        if (findProduct == null) {
            cartProducts.innerHTML += `
                <div class="cart__product" data-id=` + product.getAttribute('data-id') + `>
                    <img class="cart__product-image" src="` + productImageSrc + `">
                    <div class="cart__product-count">` + productQuantity + `</div>
                </div>
            `;
        } else {
            findProductQuantity = findProduct.querySelector('.cart__product-count');
            findProductQuantity.innerText = Number(findProductQuantity.innerText) + Number(productQuantity);
        };
       
        return false;
    }
})
