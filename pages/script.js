document.getElementById('ticketSlider').addEventListener('input', function() {
    document.getElementById('quantity').value = this.value;
});

document.getElementById('quantity').addEventListener('input', function() {
    let value = this.value;
    if(value < 1) value = 1;
    if(value > 24) value = 24;
    this.value = value;
    document.getElementById('ticketSlider').value = value;
});

document.getElementById('addTicket').addEventListener('click', function() {
    let quantity = parseInt(document.getElementById('quantity').value);
    if(quantity < 24) {
        quantity++;
        document.getElementById('quantity').value = quantity;
        document.getElementById('ticketSlider').value = quantity;
    }
});

document.getElementById('subtractTicket').addEventListener('click', function() {
    let quantity = parseInt(document.getElementById('quantity').value);
    if(quantity > 1) {
        quantity--;
        document.getElementById('quantity').value = quantity;
        document.getElementById('ticketSlider').value = quantity;
    }
});
