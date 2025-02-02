
const toggleThemeBtn = document.getElementById('toggle-theme');
const body = document.body;

const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

if (isDarkMode) {
    body.classList.add('dark-mode');
    toggleThemeBtn.textContent = '☀️ Light Mode';
} else {
    toggleThemeBtn.textContent = '🌙 Dark Mode';
}

toggleThemeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        toggleThemeBtn.textContent = '☀️ Light Mode';
    } else {
        localStorage.setItem('darkMode', 'disabled');
        toggleThemeBtn.textContent = '🌙 Dark Mode';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector('.gallery-item')) {
        $('.gallery-item').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const formResponse = document.getElementById("form-response");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            formResponse.textContent = "Thank you! Your message has been sent.";
            contactForm.reset();
        });
    }
});
