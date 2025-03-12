const productCard = document.querySelector('.product-card');
const modal = document.getElementById('orderModal');
const orderButton = document.querySelector('.order-button');
const orderSound = document.getElementById('orderSound');

productCard.addEventListener('click', () => {
    modal.style.display = 'block';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

orderButton.addEventListener('click', () => {
    orderSound.currentTime = 0; // Reset sound to start
    orderSound.volume = 1.0;    // Set full volume
    orderSound.play();
});
