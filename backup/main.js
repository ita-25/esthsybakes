// Function to prepare the order modal
function openOrderModal(name, price) {
    document.getElementById('cookieNameDisplay').innerText = name;
    var myModal = new bootstrap.Modal(document.getElementById('orderModal'));
    myModal.show();
}

// Function to send formatted WhatsApp message
function sendWhatsAppOrder() {
    const phone = "2349136477515";
    const item = document.getElementById('cookieNameDisplay').innerText;
    const qty = document.getElementById('quantity').value;
    const pref = document.getElementById('preference').value;
    const loc = document.getElementById('location').value;

    const message = `Hello Esthsy! 🍪 I'd like to order:
- *Product:* ${item}
- *Quantity:* ${qty}
- *Preference:* ${pref}
- *Delivery to:* ${loc}

Please confirm total price!`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}
