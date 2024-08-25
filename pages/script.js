// Countdown Timer
const countdownDate = new Date("Aug 30, 2024 15:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + " DAYS";
    document.getElementById("hours").innerHTML = hours + " HRS";
    document.getElementById("minutes").innerHTML = minutes + " MINS";
    document.getElementById("seconds").innerHTML = seconds + " SECS";

    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".timer").innerHTML = "EXPIRED";
    }
}, 1000);
document.querySelectorAll('.accordion-header').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        parent.classList.toggle('active');

        document.querySelectorAll('.accordion-item').forEach(otherItem => {
            if (otherItem !== parent) {
                otherItem.classList.remove('active');
            }
        });
    });
});
// Function to handle clicks on the entry buttons
document.querySelectorAll('.entry-button').forEach(button => {
    button.addEventListener('click', function() {
        if (button.classList.contains('online')) {
            window.location.href = 'online-entry-url.html'; // Replace with actual URL
        } else if (button.classList.contains('postal')) {
            window.location.href = 'postal-entry-url.html'; // Replace with actual URL
        }
    });
});

// Function to handle clicks on the answers
document.querySelectorAll('.answers .answer').forEach(answer => {
    answer.addEventListener('click', function() {
        document.querySelectorAll('.answers .answer').forEach(ans => ans.classList.remove('selected'));
        answer.classList.add('selected');

        // Optionally, you can handle the answer selection logic here
        console.log("Selected answer: " + answer.textContent);
    });
});


// Ticket Quantity Slider
const slider = document.getElementById("ticketSlider");
const output = document.getElementById("ticketCount");
const quantityInput = document.getElementById("quantity");

output.innerHTML = slider.value; // Display the default slider value

slider.oninput = function() {
    output.innerHTML = this.value;
    quantityInput.value = this.value;
};

quantityInput.oninput = function() {
    slider.value = this.value;
    output.innerHTML = this.value;
};

// Ticket Quantity Increment/Decrement Buttons
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

incrementButton.addEventListener("click", function() {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue < slider.max) {
        currentValue += 1;
        quantityInput.value = currentValue;
        slider.value = currentValue;
        output.innerHTML = currentValue;
    }
});

decrementButton.addEventListener("click", function() {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > slider.min) {
        currentValue -= 1;
        quantityInput.value = currentValue;
        slider.value = currentValue;
        output.innerHTML = currentValue;
    }
}); 