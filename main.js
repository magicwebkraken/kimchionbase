// Main JS for Kimchi Website

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    
    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // CA Copier Logic
    const copyBtn = document.getElementById('copy-ca');
    const caText = document.getElementById('ca-text').innerText;
    const toast = document.getElementById('copy-toast');

    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(caText).then(() => {
            copyBtn.classList.add('success');
            toast.classList.add('show');
            setTimeout(() => {
                copyBtn.classList.remove('success');
                toast.classList.remove('show');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy CA: ', err);
        });
    });

    console.log('🐾 Kimchi: The Nasdaq Shibe is live and ready to copy!');
});
