document.querySelectorAll('.nav-header ul li a').forEach (link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-header ul li a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {
        const slides = document.querySelectorAll('.slides_container img');
        if (slides.length > 0) {
            let slideAtual = 0;
            slides[slideAtual].classList.add("slide-active");
            setInterval(() => {
                slides[slideAtual].classList.remove("slide-active");
                slideAtual = (slideAtual + 1) % slides.length;
                slides[slideAtual].classList.add("slide-active");
            }, 3700);
        }
    })