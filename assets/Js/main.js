// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.getElementById('fullscreenMenu');
        const bsCollapse = new bootstrap.Collapse(menu, {toggle: false});
        if (menu.classList.contains('show')) {
            bsCollapse.hide();
        }
    });
});

/**
 * ESTHSY BAKES - ORDERING LOGIC
 */

// 1. Function to open the modal and set the item name
function openOrderModal(itemName) {
    // Set the heading inside the modal
    document.getElementById('itemTitle').innerText = `Order ${itemName}`;
    
    // Trigger the Bootstrap Modal
    const myModal = new bootstrap.Modal(document.getElementById('orderModal'));
    myModal.show();
}

// 2. Function to collect data and send to WhatsApp
function sendOrder() {
    const phoneNumber = "2349136477515";
    
    // Get values from the modal inputs
    const item = document.getElementById('itemTitle').innerText.replace('Order ', '');
    const quantity = document.getElementById('qty').value;
    const preference = document.getElementById('pref').value;
    
    // Create the "Stunning" message template
    const message = `Hello Esthsy! 🍪
I'm ordering from your website:
    
✨ *Product:* ${item}
📦 *Quantity:* ${quantity}
📝 *My Preference:* ${preference || "Standard (Baker's Choice)"}
    
Please let me know the total price and delivery schedule!`;

    // Encode for URL and open WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}
