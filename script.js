// Sticky navigation shadow and scroll-driven hero motion.
const navbar = document.getElementById('navbar');
const heroBurst = document.querySelector('#home .nova-burst');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let scrollFrame;

function updateScrollEffects() {
    const scrollY = window.scrollY;
    navbar.classList.toggle('shadow-sm', scrollY > 10);

    if (heroBurst && !prefersReducedMotion) {
        heroBurst.style.transform = `translate3d(0, ${Math.min(scrollY * 0.12, 90)}px, 0)`;
    }

    scrollFrame = null;
}

window.addEventListener('scroll', () => {
    if (!scrollFrame) {
        scrollFrame = requestAnimationFrame(updateScrollEffects);
    }
}, { passive: true });
updateScrollEffects();

// Mobile menu.
const mobileToggle = document.getElementById('mobileToggle');
const mobilePanel = document.getElementById('mobilePanel');

mobileToggle.addEventListener('click', () => {
    const isHidden = mobilePanel.classList.toggle('hidden');
    mobileToggle.setAttribute('aria-expanded', String(!isHidden));
});

mobilePanel.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobilePanel.classList.add('hidden'));
});

// Category filtering.
const catButtons = document.querySelectorAll('.cat-pill');
const productCards = document.querySelectorAll('.product-card');
const resultCount = document.getElementById('resultCount');
const emptyState = document.getElementById('emptyState');

catButtons.forEach(button => {
    button.addEventListener('click', () => {
        catButtons.forEach(item => item.classList.remove('active'));
        button.classList.add('active');

        const category = button.dataset.cat;
        let visible = 0;

        productCards.forEach(card => {
            const matches = category === 'all' || card.dataset.cat === category;
            card.style.display = matches ? '' : 'none';
            if (matches) visible++;
        });

        resultCount.textContent = visible;
        emptyState.classList.toggle('hidden', visible !== 0);
    });
});

// Cart counter and toast.
let cartCount = 0;
const cartCountElement = document.getElementById('cartCount');
const toast = document.getElementById('toast');
const toastText = document.getElementById('toastText');
let toastTimer;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCountElement.textContent = cartCount;
        const productName = button.closest('.product-card').querySelector('h3').textContent;
        toastText.textContent = `Added "${productName}" to cart`;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
    });
});

// Wishlist toggle.
document.querySelectorAll('.wishlist-btn').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        const icon = button.querySelector('i');
        icon.classList.toggle('fa-regular');
        icon.classList.toggle('fa-solid');
    });
});

// Countdown timer.
let totalSeconds = 8 * 3600 + 42 * 60 + 17;
const hoursElement = document.getElementById('cd-hours');
const minutesElement = document.getElementById('cd-mins');
const secondsElement = document.getElementById('cd-secs');

setInterval(() => {
    if (totalSeconds <= 0) totalSeconds = 8 * 3600;
    totalSeconds--;

    hoursElement.textContent = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    minutesElement.textContent = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    secondsElement.textContent = String(totalSeconds % 60).padStart(2, '0');
}, 1000);

// Newsletter form.
document.getElementById('newsletterForm').addEventListener('submit', event => {
    event.preventDefault();
    const message = document.getElementById('newsletterMsg');
    const email = document.getElementById('newsletterEmail').value;
    message.textContent = `You're on the list — confirmation sent to ${email}.`;
    message.classList.remove('hidden');
    event.target.reset();
});

// Custom scroll reveal with a small stagger for cards and trust items.
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

revealElements.forEach((element, index) => {
    if (!prefersReducedMotion) {
        element.style.transitionDelay = `${Math.min(index * 55, 330)}ms`;
    }
    revealObserver.observe(element);
});
