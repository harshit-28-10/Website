// Add to Cart functionality
const cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement.querySelector('h2').innerText;
        cart.push(product);
        alert(product + ' added to cart.');
    });
});


// Purchase functionality
document.getElementById('purchase-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        alert('Thank you for purchasing: ' + cart.join(', '));
        cart.length = 0; // Empty the cart after purchase
    }
});

// Contact form functionality
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message, ' + document.getElementById('name').value + '!');
});
