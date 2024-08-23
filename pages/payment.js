function payWithPaystack() {
    var handler = PaystackPop.setup({
        key: 'pk_test_36baf0a3f26aa4acc1993918bb494422b073b581', //This is jusr a tesk key.
        email: document.getElementById('email').value,
        amount: document.getElementById('amount').value * 100, // Amount in cedis
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
