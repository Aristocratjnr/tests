function payWithPaystack() {
    var handler = PaystackPop.setup({
        key: '', // Replace with your Paystack public key
        email: document.getElementById('email').value,
        amount: document.getElementById('amount').value * 100, // Amount in kobo
        currency: 'NGN',
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
