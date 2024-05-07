const products = [{name: "Шпатлевка масленно-клеевая 3кг Л-С", price: 212, available: true, supplier: "Аксон", delivery: "Доставка осуществляется курьерами поставщика или службой курьеров Достависта. Также товар можно забрать самостоятельно от поставщика"}];

const product = products[0]; 

const productNameElement = document.querySelector(".product-card h1");
const productPriceElement = document.querySelector(".product-price");
productNameElement.textContent = product.name;
productPriceElement.textContent = product.price + " ₽";

const productSupplierElement = document.querySelector(".product-supplier");
productSupplierElement.textContent = "Поставщик: " + product.supplier;

const productDeliveryElement = document.querySelector(".product-delivery");
productDeliveryElement.textContent = "Поставщик: " + product.delivery;

document.addEventListener('DOMContentLoaded', function() {
    const plusButton = document.querySelector('.plus');
    const minusButton = document.querySelector('.minus');
    const countElement = document.querySelector('.count p');

    plusButton.addEventListener('click', function() {
        let currentValue = parseInt(countElement.textContent);
        countElement.textContent = currentValue + 1;
    });

    minusButton.addEventListener('click', function() {
        let currentValue = parseInt(countElement.textContent);
        if (currentValue > 0) {
            countElement.textContent = currentValue - 1;
        }
    });
});

const plusButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');

plusButton.addEventListener('click', function() {
    product.price += 212;
    productPriceElement.textContent = product.price + ' ₽';
});

minusButton.addEventListener('click', function() {
    if (product.price > 0) {
        product.price -= 212;
        productPriceElement.textContent = product.price + ' ₽';
    }
});

const item = document.getElementById('item');
const cart = document.getElementById('cart');
const addToCartBtn = document.getElementById('addToCart');

addToCartBtn.addEventListener('click', () => {
  const itemRect = item.getBoundingClientRect();
  const itemClone = item.cloneNode(true); 

  itemClone.style.position = 'absolute';
  itemClone.style.left = `${itemRect.left}px`;
  itemClone.style.top = `${itemRect.top}px`;
  document.body.appendChild(itemClone); 

  const cartRect = cart.getBoundingClientRect();

  const deltaX = cartRect.left - itemRect.left;
  const deltaY = cartRect.top - itemRect.top;

  itemClone.style.transition = 'all 1s';
  itemClone.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.2)`;
  itemClone.style.opacity = 0;

  itemClone.addEventListener('transitionend', () => {
    itemClone.remove(); 
  });
});

function showConfirmation() {
    setTimeout(() => {
        document.getElementById('confirmation').style.display = 'block';
    }, 600); 
}


