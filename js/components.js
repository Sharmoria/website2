// Reusable component functions

// Toast notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) {
        const newToast = document.createElement('div');
        newToast.id = 'toast';
        newToast.className = 'toast';
        document.body.appendChild(newToast);
    }

    const toastEl = document.getElementById('toast');
    toastEl.textContent = message;
    toastEl.className = `toast ${type}`;
    toastEl.classList.add('show');

    setTimeout(() => {
        toastEl.classList.remove('show');
    }, 3000);
}

// Create service card HTML
function createServiceCard(service) {
    const price = service.priceRange || `R${service.price}`;
    return `
        <div class="service-card">
            <img src="${service.image}" alt="${service.name}" class="service-image">
            <div class="service-content">
                <h3 class="service-title">${service.name}</h3>
                <div class="service-details">
                    <span>${service.duration}</span>
                    <span class="service-price">${price}</span>
                </div>
                <p class="service-description">${service.description}</p>
                <a href="booking.html?service=${encodeURIComponent(service.name)}" class="btn btn-primary btn-block">Book Now</a>
            </div>
        </div>
    `;
}

// Render header
function renderHeader() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const isActive = (page) => currentPage === page || (currentPage === '' && page === 'index.html') ? 'active' : '';

    const user = JSON.parse(localStorage.getItem('sharmoria_current_user') || 'null');

    const authButton = user
        ? `<button class="btn btn-outline-primary" onclick="handleSignOut()">Sign Out</button>`
        : `<a href="login.html" class="btn btn-outline-primary">Sign In</a>`;

    const header = document.getElementById('header');
    if (header) {
        header.innerHTML = `
            <div class="header-container">
                <a href="index.html" class="logo">
                    <img src="logo.png" alt="SHARMORIA">
                </a>

                <nav>
                    <a href="index.html" class="${isActive('index.html')}">Home</a>
                    <a href="services.html" class="${isActive('services.html')}">Services</a>
                    <a href="about.html" class="${isActive('about.html')}">About</a>
                    <a href="contact.html" class="${isActive('contact.html')}">Contact</a>
                    <a href="booking.html" class="btn btn-primary">Book Now</a>
                    ${authButton}
                </nav>

                <button class="mobile-menu-btn" onclick="toggleMobileMenu()">☰</button>
            </div>
            <div class="mobile-nav" id="mobile-nav">
                <a href="index.html" class="${isActive('index.html')}">Home</a>
                <a href="services.html" class="${isActive('services.html')}">Services</a>
                <a href="about.html" class="${isActive('about.html')}">About</a>
                <a href="contact.html" class="${isActive('contact.html')}">Contact</a>
                <a href="booking.html" class="btn btn-primary">Book Now</a>
                ${authButton}
            </div>
        `;
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav) {
        mobileNav.classList.toggle('active');
    }
}

// Handle sign out
function handleSignOut() {
    localStorage.removeItem('sharmoria_current_user');
    showToast('Signed out successfully', 'success');
    setTimeout(() => {
        window.location.reload();
    }, 1000);
}

// Render footer
function renderFooter() {
    const footer = document.getElementById('footer');
    if (footer) {
        footer.innerHTML = `
            <div class="container">
                <div class="footer-content">
                    <!-- Logo & Tagline -->
                    <div class="footer-section">
                        <img src="logo.png" alt="SHARMORIA" style="height: 60px; margin-bottom: 1rem;">
                        <p style="color: var(--text-muted);">Where elegance meets relaxation</p>
                    </div>

                    <!-- Quick Links -->
                    <div class="footer-section">
                        <h4>Quick Links</h4>
                        <div class="footer-links">
                            <a href="services.html">Services</a>
                            <a href="about.html">About</a>
                            <a href="booking.html">Book Appointment</a>
                            <a href="contact.html">Contact</a>
                        </div>
                    </div>

                    <!-- Contact Info -->
                    <div class="footer-section">
                        <h4>Contact</h4>
                        <div class="footer-links">
                            <a href="tel:+27612042804">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2"
                                     viewBox="0 0 24 24" width="18" height="18" class="icon">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2
                                             19.79 19.79 0 0 1-8.63-3.07
                                             19.5 19.5 0 0 1-6-6
                                             19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3
                                             a2 2 0 0 1 2 1.72
                                             12.44 12.44 0 0 0 .7 2.81
                                             2 2 0 0 1-.45 2.11L8.09 9.91
                                             a16 16 0 0 0 6 6l1.27-1.27
                                             a2 2 0 0 1 2.11-.45
                                             12.44 12.44 0 0 0 2.81.7
                                             A2 2 0 0 1 22 16.92z"/>
                                </svg>
                                +27 61 204 2804
                            </a>

                            <a href="https://wa.me/27612042804" target="_blank">
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <!-- Only keep the essential paths -->
        <path d="M6.014 8.006C6.128 7.102 7.303 5.874 8.235 6.01C9.141 6.182 9.859 7.743 10.264 8.445C10.55 8.954 10.364 9.47 10.097 9.688C9.736 9.979 9.171 10.38 9.289 10.783C9.5 11.5 12 14 13.23 14.711C13.695 14.98 14.033 14.27 14.321 13.907C14.53 13.627 15.047 13.46 15.555 13.736C16.314 14.178 17.029 14.692 17.69 15.27C18.02 15.546 18.098 15.954 17.869 16.385C17.466 17.144 16.3 18.146 15.454 17.942C13.976 17.587 8 15.27 6.08 8.558C5.972 8.24 5.999 8.12 6.014 8.006Z"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C10.776 23 10.099 22.869 9 22.5L6.894 23.553C5.565 24.218 4 23.251 4 21.764V19.5C1.847 17.492 1 15.177 1 12C1 5.925 5.925 1 12 1C18.075 1 23 5.925 23 12C23 18.075 18.075 23 12 23ZM6 18.63L5.364 18.037C3.691 16.477 3 14.733 3 12C3 7.029 7.029 3 12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21C11.014 21 10.552 20.911 9.636 20.604L8.848 20.34L6 21.764V18.63Z"/>
    </svg>
                                WhatsApp Chat
                            </a>

                            <p style="color: var(--text-muted); margin-top: 0.5rem;">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2"
                                     viewBox="0 0 24 24" width="18" height="18" class="icon">
                                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10
                                             a9 9 0 1 1 18 0z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                                Johannesburg & Pretoria
                            </p>
                        </div>
                    </div>

                    <!-- Legal + Social -->
                    <div class="footer-section">
                        <h4>Legal</h4>
                        <div class="footer-links">
                            <a href="privacy.html">Privacy Policy</a>
                            <a href="terms.html">Terms & Conditions</a>
                        </div>

                        <h4 style="margin-top: 1.5rem;">Follow Us</h4>
                        <div class="social-links">
                            <a href="https://www.facebook.com/profile.php?id=61583111694496" target="_blank" aria-label="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                                </svg>
                            </a>

                            <a href="https://www.instagram.com/sharmoriamassage/" target="_blank" aria-label="">
                                <svg  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="100px" height="100px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
<g>
	<path d="M50.3,29c-11.6,0-21.1,9.5-21.1,21.1s9.5,21.1,21.1,21.1c11.6,0,21-9.5,21-21.1S61.8,29,50.3,29z M50.3,66.2
		c-8.9,0-16.1-7.2-16.1-16.1c0-8.9,7.2-16.1,16.1-16.1c8.8,0,16,7.2,16,16.1C66.3,59,59.1,66.2,50.3,66.2z"/>
	<path d="M73.8,17.1c-2.2,0-4.2,0.8-5.7,2.3c-1.5,1.5-2.3,3.5-2.3,5.7c0,2.2,0.8,4.2,2.3,5.7c1.5,1.5,3.5,2.3,5.7,2.3
		s4.2-0.8,5.7-2.3v0c1.4-1.4,2.3-3.4,2.4-5.6l0-0.1c0-2.1-0.9-4.1-2.3-5.5C78.1,18,76,17.1,73.8,17.1z M75.9,27.2
		c-1.1,1.1-3.2,1.1-4.3,0c-0.6-0.6-0.9-1.3-0.9-2.1s0.3-1.6,0.9-2.1c0.6-0.6,1.3-0.9,2.1-0.9c0.8,0,1.6,0.3,2.2,0.9
		c0.5,0.5,0.9,1.3,0.9,2C76.8,25.9,76.5,26.7,75.9,27.2z"/>
	<path d="M67.8,7H32.7C18.6,7,7.2,18.4,7.2,32.5v35.2c0,14.1,11.4,25.5,25.5,25.5h35.2c14.1,0,25.5-11.4,25.5-25.5V32.5
		C93.3,18.4,81.9,7,67.8,7z M88.3,67.7c0,11.3-9.2,20.5-20.5,20.5H32.7c-11.3,0-20.5-9.2-20.5-20.5V32.5c0-11.3,9.2-20.5,20.5-20.5
		h35.2c11.3,0,20.5,9.2,20.5,20.5V67.7z"/>
</g>
                                </svg>
                            </a>

                            <a href="https://www.tiktok.com/@sharmoriamassage?lang=en" target="_blank" aria-label="TikTok">
                                <svg role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path d="m 4.9520184,12.936803 c -1.12784,-0.2039 -2.19411,-0.9875 -2.66789,-1.9606 -0.32895,-0.6757 -0.45541,-1.3901003 -0.37418,-2.1137003 0.15054,-1.3412 0.84482,-2.4395 1.92406,-3.0439 0.56899,-0.3186 1.38421,-0.4769 1.991,-0.3867 l 0.35091,0.052 9e-5,1.0725 9e-5,1.0725 -0.332,-0.014 c -0.79998,-0.033 -1.39595,0.3096 -1.70379,0.9784 -0.1473,0.32 -0.18461,0.8887 -0.081,1.2351 0.12773,0.4273003 0.50542,0.8132003 0.96145,0.9825003 0.15535,0.058 0.32344,0.08 0.61152,0.079 0.35862,-4e-4 0.42448,-0.013 0.67663,-0.1323 0.36505,-0.1726 0.63141,-0.4231 0.78797,-0.7411 0.10147,-0.2061003 0.13414,-0.3430003 0.16587,-0.6951003 0.0217,-0.2412 0.0401,-2.2122 0.0409,-4.38 l 10e-4,-3.94149998 0.68371,0 c 0.37605,0 0.8277,0.012 1.00368,0.027 l 0.31995,0.027 0,0.1584 c 0,0.3813 0.22299,1.1127 0.45156,1.4812 0.0571,0.092 0.2564996,0.3178 0.4431796,0.5018 0.36068,0.3555 0.66494,0.5352 1.13352,0.6692 0.138,0.04 0.28359,0.089 0.32353,0.109 0.0399,0.02 0.11522,0.038 0.16728,0.038 0.0521,4e-4 0.13701,0.012 0.18876,0.026 l 0.0941,0.025 0,0.9948 0,0.9948 -0.17773,-0.019 c -0.9611,-0.1037 -1.72925,-0.3601 -2.3423096,-0.782 -0.30468,-0.2096 -0.33102,-0.222 -0.30218,-0.1422 0.0104,0.029 0.003,1.1249 -0.0164,2.436 -0.0336,2.2728 -0.0396,2.3992 -0.12781,2.7173003 -0.33904,1.2222 -1.09994,2.1297 -2.10183,2.5068 -0.6126,0.2306 -1.39679,0.2932 -2.09405,0.1671 z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <p>&copy; ${new Date().getFullYear()} SHARMORIA. All rights reserved.</p>
                </div>
            </div>
        `;
    }
}

// Render FAQ section
function renderFAQ() {
    const faqSection = document.getElementById('faq');
    if (faqSection && typeof faqData !== 'undefined') {
        let faqHTML = `
            <div class="container">
                <div class="section-header">
                    <h2>Frequently Asked Questions</h2>
                    <p>Everything you need to know about our mobile spa services</p>
                </div>
                <div class="faq-container">
        `;

        faqData.forEach((faq, index) => {
            faqHTML += `
                <div class="faq-item">
                    <button class="faq-question" onclick="toggleFAQ(${index})">
                        ${faq.question}
                        <span id="faq-icon-${index}">+</span>
                    </button>
                    <div class="faq-answer" id="faq-answer-${index}">
                        <p>${faq.answer}</p>
                    </div>
                </div>
            `;
        });

        faqHTML += `
                </div>
                <div class="text-center" style="margin-top: 3rem;">
                    <p style="color: var(--text-muted); margin-bottom: 1rem;">Still have questions?</p>
                    <a href="contact.html" style="color: var(--primary-color); font-weight: 600;">Contact us for more information</a>
                </div>
            </div>
        `;

        faqSection.innerHTML = faqHTML;
    }
}

// Toggle FAQ item
function toggleFAQ(index) {
    const answer = document.getElementById(`faq-answer-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);

    if (answer.classList.contains('active')) {
        answer.classList.remove('active');
        icon.textContent = '+';
    } else {
        document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('active'));
        document.querySelectorAll('[id^="faq-icon-"]').forEach(i => i.textContent = '+');

        answer.classList.add('active');
        icon.textContent = '−';
    }
}

// Initialize common components
document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderFooter();
    renderFAQ();

    // Set minimum date for date inputs
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
        const today = new Date().toISOString().split('T')[0];
        input.min = today;
    });
});
