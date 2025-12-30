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
            const name = card.getAttribute('data-name');

            const message = `Bonjour, je suis intéressé par le costume "${name}" (Réf: ${ref}). Pouvez-vous me donner plus d'informations ?`;
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/243818295660?text=${encodedMessage}`;

            window.open(whatsappUrl, '_blank');
        });
    });
});