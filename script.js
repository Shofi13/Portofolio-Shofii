document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Hapus class 'active' dari semua link navbar
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });

            // Tambahkan class 'active' ke link yang diklik
            this.classList.add('active');

            const targetId = this.getAttribute('href');

            // Scroll ke section yang sesuai dengan link yang diklik
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});