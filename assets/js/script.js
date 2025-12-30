const headerTop = document.querySelector(".headerTop");
const headerBottom = document.querySelector(".headerBottom");
const boutonMenu = document.querySelector(".boutonMenu");
const navbar2 = document.querySelector(".navbar2");

window.addEventListener("scroll", () => {
    headerBottom.classList.toggle("changeBG", window.scrollY > 0);
});

boutonMenu.addEventListener("click", () => {
    navbar2.classList.toggle("active");
});

// Système de commande WhatsApp
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-commander');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            const card = button.closest('.prodCard');
            const ref = card.getAttribute('data-ref');

            const message = `Bonjour, je suis intéressé par le costume (Réf: ${ref}). Pouvez-vous me donner plus d'informations ?`;
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/243818295660?text=${encodedMessage}`;

            window.open(whatsappUrl, '_blank');
        });
    });

    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Récupération des valeurs
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validation simple
            if (!name || !email || !subject || !message) {
                alert('Veuillez remplir tous les champs.');
                return;
            }

            // Construction du message WhatsApp
            const whatsappMessage = `👤 Bonjour, je m'appelle ${name}.\n📧 Email: ${email}\n📌 Sujet: ${subject}\n💬 Message: ${message}`;
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappUrl = `https://wa.me/243818295660?text=${encodedMessage}`;

            // Alerte et redirection
            alert('Redirection vers WhatsApp...');
            window.open(whatsappUrl, '_blank');
        });
    }
});