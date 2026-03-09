document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor (Optional - if needed for Framer feel)
    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for Scroll Reveals
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // If the skills section is visible, animate progress bars
                if (entry.target.id === 'skills') {
                    animateSkills();
                }
            }
        });
    }, observerOptions);

    // Elements to observe
    document.querySelectorAll('section, .about-card, .project-card, .creation-card').forEach(el => {
        observer.observe(el);
    });

    // Skill Bar Animation Function
    function animateSkills() {
        const progressBars = document.querySelectorAll('.skill-progress');
        progressBars.forEach(bar => {
            const percent = bar.getAttribute('data-percent');
            bar.style.width = percent + '%';
            bar.classList.add('animate');
        });
    }

    // Marquee duplication for seamless loop (if not handled by CSS)
    const marquees = document.querySelectorAll('.marquee-content');
    marquees.forEach(marquee => {
        const content = marquee.innerHTML;
        marquee.innerHTML = content + content + content + content;
    });
});
