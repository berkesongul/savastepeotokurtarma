document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animate elements on scroll
    const animatedElements = document.querySelectorAll('.service-card, .gallery-item, .faq-item');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInUp 0.5s ease-out forwards`;
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Add a subtle animation to the hero image
    const hero = document.querySelector('.hero');
    if(hero) {
        hero.style.backgroundAttachment = 'fixed';
    }

    // Dynamic year in footer
    const yearSpan = document.querySelector('footer p');
    if (yearSpan) {
        yearSpan.innerHTML = `&copy; ${new Date().getFullYear()} Çelik Oto Kurtarma. Tüm Hakları Saklıdır.`;
    }

    const sendWhatsAppButton = document.querySelector('.contact-form .btn-secondary');
    if (sendWhatsAppButton) {
        sendWhatsAppButton.addEventListener('click', function() {
            const form = document.querySelector('.contact-form');
            const inputs = form.querySelectorAll('input, textarea');
            
            const name = inputs[0].value;
            const email = inputs[1].value;
            const phone = inputs[2].value;
            const message = inputs[3].value;

            if (name && email && phone && message) {
                const whatsappMessage = `Merhaba Çelik Oto Kurtarma,%0AAd Soyad: ${name}%0AE-posta: ${email}%0ATelefon: ${phone}%0AMesaj: ${message}`;
                window.open(`https://wa.me/905459048318?text=${whatsappMessage}`);
            } else {
                alert('Lütfen tüm alanları doldurunuz.');
            }
        });
    }
});

function toggleFAQ(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle('active');
}



// Keyframes for animations
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`;
document.head.appendChild(styleSheet);