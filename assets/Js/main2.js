// Function to handle the Order Modal
function openOrderModal(itemName) {
    const titleElement = document.getElementById('itemTitle');
    if(titleElement) {
        titleElement.innerText = `Order ${itemName}`;
    }
    const myModal = new bootstrap.Modal(document.getElementById('orderModal'));
    myModal.show();
}

// Function for WhatsApp Redirect
function sendOrder() {
    const phone = "2349136477515";
    const item = document.getElementById('itemTitle').innerText;
    const qty = document.getElementById('qty').value;
    const pref = document.getElementById('pref').value;
    
    const text = `Hello Esthsy! 🍪\nI'd like to order: *${item}*\nQty: *${qty}*\nPreference: *${pref}*`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
}

// Ensure the Mobile Menu closes when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.getElementById('fullscreenMenu');
        if (menu.classList.contains('show')) {
            bootstrap.Collapse.getInstance(menu).hide();
        }
    });
});
