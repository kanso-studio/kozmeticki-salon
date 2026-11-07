
    // Skrolovanje - Reveal Animacija
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Pokreni jednom na učitavanju
    revealOnScroll();

    // Accordion Logika
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;

            // Zatvori sve ostale
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-header i').className = 'fa-solid fa-plus';
                }
            });

            // Toggle trenutnog
            item.classList.toggle('active');

            // Promeni ikonicu
            const icon = header.querySelector('i');
            if (item.classList.contains('active')) {
                icon.className = 'fa-solid fa-minus';
            } else {
                icon.className = 'fa-solid fa-plus';
            }
        });
    });
