function toggleFAQ(element) {
            const faqItem = element.parentElement;
            faqItem.classList.toggle('active');
        }

        function sendMessageWhatsApp() {
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
        }