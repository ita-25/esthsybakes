// Function to handle order clicks
function placeOrder(productName) {
    const phone = "2349136477515";
    const message = `Hello Esthsy! 🍪 I'm visiting your website and I'd like to order the *${productName}*. Please let me know the availability!`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-sm');
    } else {
        nav.classList.remove('shadow-sm');
    }
});
