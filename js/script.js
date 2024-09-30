// Add to Cart functionality
const cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement.querySelector('h2').innerText;
        cart.push(product);
        alert(product + ' added to cart.');
    });
});

<script>
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event': 'addToCart',
  'ecommerce': {
    'currencyCode': 'USD',  // Specify the currency
    'add': {                // 'add' actionFieldObject measures.
      'products': [{
        'name': 'T-shirt',    // Product name
        'id': '12345',        // Product ID
        'price': '25.99',     // Product price
        'brand': 'BrandName', // Product brand
        'category': 'Apparel',// Product category
        'quantity': 1         // Quantity
      }]
    }
  }
});
</script>


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
