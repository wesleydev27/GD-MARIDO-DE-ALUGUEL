//MENU MOBILE
let btnMob = document.querySelector('#menu-button');
let menu = document.querySelector('#menu');

btnMob.addEventListener('click', () => {
    menu.classList.toggle('show');
});


// SCRIPT VOLTA PARA O TOPO
const backToTopBtn = document.getElementById('back-to-top-btn');
let ticking = false;

function checkScroll() {
    if (!ticking) {
        requestAnimationFrame(() => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPosition = window.pageYOffset;

            backToTopBtn.classList.toggle('opacity-0', scrollPosition <= totalHeight / 2);
            backToTopBtn.classList.toggle('opacity-100', scrollPosition > totalHeight / 2);

            ticking = false;
        });
        ticking = true;
    }
}

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

window.addEventListener('scroll', checkScroll, { passive: true });
backToTopBtn.addEventListener('click', scrollToTop);
