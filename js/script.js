document.addEventListener('DOMContentLoaded', () => {
    // 1. 부드러운 스크롤 (내비게이션 링크용)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('.sticky-nav') ? document.querySelector('.sticky-nav').offsetHeight : 0;
                window.scrollTo({
                    top: targetElement.offsetTop - navHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Top 버튼 기능
    const topBtn = document.getElementById('go-top');

    // 스크롤하면 버튼 보여주기/숨기기
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            topBtn.style.display = 'block';
        } else {
            topBtn.style.display = 'none';
        }
    });

    // 클릭하면 맨 위로 이동
    topBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 3. 스크롤 애니메이션 (나타나는 효과)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // 스킬 섹션이면 게이지 애니메이션 실행
                if (entry.target.id === 'skills') {
                    document.querySelectorAll('.skill-progress').forEach(bar => {
                        bar.style.width = bar.getAttribute('data-percent') + '%';
                    });
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section, .about-card, .project-card, .creation-card, .folder-container').forEach(el => {
        observer.observe(el);
    });

    // 4. 전광판 효과 (Marquee) 무한 반복
    document.querySelectorAll('.marquee-content').forEach(marquee => {
        marquee.innerHTML += marquee.innerHTML + marquee.innerHTML;
    });
});
