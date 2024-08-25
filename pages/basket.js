// Function to update the quantity and subtotal
function updateBasket() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const pricePerTicket = 2;
    const subtotal = (quantity * pricePerTicket).toFixed(2);

    // Update the subtotal display
    document.getElementById('subtotal').textContent = `₵${subtotal}`;
    document.getElementById('total-tickets').textContent = quantity;
    document.getElementById('total-spend').textContent = `₵${subtotal}`;

    // Save to local storage
    localStorage.setItem('ticketQuantity', quantity);
    localStorage.setItem('subtotalAmount', subtotal); // Save the subtotal amount
}

// Event listeners for increment and decrement buttons
document.getElementById('increment').addEventListener('click', () => {
    let quantity = parseInt(document.getElementById('quantity').value);
    document.getElementById('quantity').value = ++quantity;
    updateBasket();
});

document.getElementById('decrement').addEventListener('click', () => {
    let quantity = parseInt(document.getElementById('quantity').value);
    if (quantity > 1) {
        document.getElementById('quantity').value = --quantity;
        updateBasket();
    }
});

// Load quantity from local storage on page load
window.onload = () => {
    const savedQuantity = localStorage.getItem('ticketQuantity');
    if (savedQuantity) {
        document.getElementById('quantity').value = savedQuantity;
        updateBasket();
    }
};
