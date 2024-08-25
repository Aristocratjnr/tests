window.onload = () => {
    // Retrieve the subtotal amount from local storage
    const subtotalAmount = localStorage.getItem('subtotalAmount');
    const amountInput = document.getElementById('amount');

    // Display the subtotal amount in the amount input field
    if (subtotalAmount) {
        amountInput.value = parseFloat(subtotalAmount).toFixed(2);
    } else {
        amountInput.value = "0.00"; // Default value if no subtotal found
    }
};

function payWithPaystack() {
    const amountInCedis = parseFloat(document.getElementById('amount').value);

    var handler = PaystackPop.setup({
        key: 'pk_test_36baf0a3f26aa4acc1993918bb494422b073b581', // This is just a test key
        email: document.getElementById('email').value,
        amount: amountInCedis * 100, // Convert to the smallest unit (kobo in GHS)
        currency: 'GHS',
        callback: function(response) {
            alert('Payment complete! Reference: ' + response.reference);
            // You can also send the reference to your server for further processing
        },
        onClose: function() {
            alert('Transaction was not completed');
        }
    });
    handler.openIframe();
}
