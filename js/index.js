

document.addEventListener("DOMContentLoaded", () => {


    const cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', (e) => {
        if (cursor) {
            cursor.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 8}px)`;
        }
    });


    const aboutSection = document.querySelector("#about");
    const navbar = document.querySelector("#navbar");

    if (aboutSection && navbar) {
        const navbarObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                navbar.classList.toggle(
                    "navbar-text-white",
                    entry.intersectionRatio >= 0.6
                );
            });
        }, { threshold: 0.6 });

        navbarObserver.observe(aboutSection);
    }

    const emailLink = document.getElementById('email-link');
    if (emailLink) {
        emailLink.addEventListener('click', (e) => {
            e.preventDefault();
            const email = "alanisestrela30@gmail.com";

            navigator.clipboard.writeText(email).then(() => {
                showNotification("Email copiado!");
            }).catch(err => {
                console.error('Erro ao copiar email: ', err);
            });
        });
    }

    function showNotification(message) {
        let notification = document.querySelector('.copy-notification');
        if (!notification) {
            notification = document.createElement('div');
            notification.className = 'copy-notification';
            document.body.appendChild(notification);
        }

        notification.textContent = message;
        notification.classList.add('show');

        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
});



