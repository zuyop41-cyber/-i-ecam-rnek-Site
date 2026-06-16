document.addEventListener('DOMContentLoaded', () => {
    
    // HAMBURGER MENÜ
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // FORM KONTROLÜ (HOCA ŞARTI)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const fullname = document.getElementById('fullname').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();
            const kvkk = document.getElementById('kvkk').checked;

            if (fullname === "") { alert("Lütfen Ad Soyad alanını doldurunuz."); return; }
            if (subject === "") { alert("Lütfen iletişim konusunu seçiniz."); return; }
            if (message === "") { alert("Lütfen mesajınızı yazınız."); return; }
            if (!kvkk) { alert("KVKK aydınlatma metnini onaylamanız gerekmektedir."); return; }

            alert("Form başarıyla gönderildi. Katkılarınız için teşekkür ederiz.");
            contactForm.reset();
        });
    }
});