// Contact page specific JavaScript

document.addEventListener('DOMContentLoaded', () => {
    setupContactForm();
});

function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value,
            createdAt: new Date().toISOString()
        };

        if (!formData.name.trim()) {
            showToast('Please enter your name', 'error');
            return;
        }

        if (!formData.email.trim() || !formData.email.includes('@')) {
            showToast('Please enter a valid email address', 'error');
            return;
        }

        if (!formData.message.trim()) {
            showToast('Please enter a message', 'error');
            return;
        }

        const existingContacts = JSON.parse(localStorage.getItem('sharmoria_contacts') || '[]');
        existingContacts.push(formData);
        localStorage.setItem('sharmoria_contacts', JSON.stringify(existingContacts));

        showToast('Message saved. We will reply within 24 hours.', 'success');

        form.reset();
    });
}
