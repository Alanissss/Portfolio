

const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 8}px)`;
});


 document.addEventListener("DOMContentLoaded", function () {
        const aboutSection = document.querySelector("#about");
        const navbar = document.querySelector("#navbar");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.intersectionRatio >= 0.6) {
                        navbar.classList.add("navbar-text-white");
                    } else {
                        navbar.classList.remove("navbar-text-white");
                    }
                });
            },
            {
                threshold: [0, 0.6, 1], 
            }
        );

        if (aboutSection) {
            observer.observe(aboutSection);
        }
    });