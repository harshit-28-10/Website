// Assuming you're using a data layer library like Google Tag Manager (GTM)
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const purchaseButton = document.getElementById('purchase-button');

    // Add to Cart event listener
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const productId = button.getAttribute('data-product-id');
            // Trigger the data layer event
            dataLayer.push({
                'event': 'addToCart',
                'productId': productId,
                'productName': 'Product ' + productId, // Replace with actual product name
                'price': 19.99, // Replace with actual product price
                'quantity': 1
            });
        });
    });

    // Purchase event listener
    purchaseButton.addEventListener('click', function() {
        // Assuming you have a cart object with products
        const cart = [
            { id: 1, name: 'Product 1', price: 19.99, quantity: 2 },
            { id: 2, name: 'Product 2', price: 9.99, quantity: 1 }
        ];

        // Trigger the data layer event
        dataLayer.push({
            'event': 'purchase',
            'transactionId': 'TXN001', // Replace with actual transaction ID
            'transactionTotal': 39.97, // Replace with actual transaction total
            'products': cart
        });
    });
});
// Contact form functionality
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message, ' + document.getElementById('name').value + '!');
});
