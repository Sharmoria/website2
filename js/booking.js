// Booking page specific JavaScript

let selectedServices = [];

document.addEventListener('DOMContentLoaded', () => {
    renderBookingServices();
    setupBookingForm();
    checkPreselectedService();
});

function checkPreselectedService() {
    const urlParams = new URLSearchParams(window.location.search);
    const preselectedService = urlParams.get('service');

    if (preselectedService && typeof services !== 'undefined') {
        const allServices = [
            ...services.packages,
            ...services.massage,
            ...services.waxing,
            ...services.facial,
            ...services.waxingSingle
        ];

        const service = allServices.find(s => s.name === preselectedService);
        if (service) {
            toggleService(service);
        }
    }
}

function renderBookingServices() {
    if (typeof services === 'undefined') return;

    renderServiceCategory('booking-packages', services.packages);
    renderServiceCategory('booking-massages', services.massage);
    renderServiceCategory('booking-waxing', services.waxing);
    renderServiceCategory('booking-waxing-single', services.waxingSingle);
    renderServiceCategory('booking-facial', services.facial);
}

function renderServiceCategory(containerId, serviceList) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = serviceList.map(service => {
        const price = service.priceRange || `R${service.price}`;
        return `
            <div class="service-item" onclick="toggleServiceItem('${service.id}')">
                <input type="checkbox" id="service-${service.id}" onchange="toggleService(${JSON.stringify(service).replace(/"/g, '&quot;')})">
                <div class="service-item-info">
                    <div class="service-item-name">${service.name}</div>
                    <div class="service-item-duration">${service.duration}</div>
                </div>
                <div class="service-item-price">${price}</div>
            </div>
        `;
    }).join('');
}

function toggleServiceItem(serviceId) {
    const checkbox = document.getElementById(`service-${serviceId}`);
    if (checkbox) {
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(new Event('change'));
    }
}

function toggleService(service) {
    const index = selectedServices.findIndex(s => s.id === service.id);

    if (index > -1) {
        selectedServices.splice(index, 1);
    } else {
        selectedServices.push(service);
    }

    updateBookingSummary();
}

function updateBookingSummary() {
    const container = document.getElementById('selected-services');
    const totalEl = document.getElementById('total-amount');
    const minimumNotice = document.getElementById('minimum-notice');
    const formCard = document.getElementById('booking-form-card');
    const submitBtn = document.getElementById('submit-btn');

    if (!container || !totalEl) return;

    const totalAmount = selectedServices.reduce((sum, service) => sum + service.price, 0);
    const meetsMinimum = totalAmount >= MINIMUM_BOOKING_AMOUNT;
    const amountNeeded = MINIMUM_BOOKING_AMOUNT - totalAmount;

    if (selectedServices.length === 0) {
        container.innerHTML = '<p class="empty-state">No services selected yet</p>';
        formCard.style.display = 'none';
    } else {
        container.innerHTML = selectedServices.map(service => {
            const price = service.priceRange || `R${service.price}`;
            return `
                <div class="selected-service-item">
                    <div class="selected-service-info">
                        <div class="selected-service-name">${service.name}</div>
                        <div class="selected-service-duration">${service.duration}</div>
                    </div>
                    <div class="selected-service-price">${price}</div>
                    <button class="remove-service" onclick="removeService('${service.id}')">×</button>
                </div>
            `;
        }).join('');

        formCard.style.display = 'block';
    }

    totalEl.textContent = `R${totalAmount}`;

    if (minimumNotice) {
        if (!meetsMinimum && selectedServices.length > 0) {
            minimumNotice.innerHTML = `
                <div class="alert alert-warning">
                    <strong>Add R${amountNeeded} more</strong>
                    <p>to meet the R${MINIMUM_BOOKING_AMOUNT} minimum</p>
                </div>
            `;
        } else if (meetsMinimum) {
            minimumNotice.innerHTML = `
                <div class="alert alert-success">
                    <strong>✓ Minimum booking met!</strong>
                </div>
            `;
        } else {
            minimumNotice.innerHTML = '';
        }
    }

    if (submitBtn) {
        submitBtn.disabled = !meetsMinimum;
        submitBtn.textContent = meetsMinimum ? 'Confirm Booking' : `Add R${amountNeeded} More to Book`;
    }

    updateCheckboxes();
}

function updateCheckboxes() {
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"][id^="service-"]');
    allCheckboxes.forEach(checkbox => {
        const serviceId = checkbox.id.replace('service-', '');
        checkbox.checked = selectedServices.some(s => s.id === serviceId);
    });
}

function removeService(serviceId) {
    selectedServices = selectedServices.filter(s => s.id !== serviceId);
    updateBookingSummary();
}

function setupBookingForm() {
    const form = document.getElementById('booking-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (selectedServices.length === 0) {
            showToast('Please select at least one service', 'error');
            return;
        }

        const totalAmount = selectedServices.reduce((sum, service) => sum + service.price, 0);
        if (totalAmount < MINIMUM_BOOKING_AMOUNT) {
            showToast(`Minimum booking amount is R${MINIMUM_BOOKING_AMOUNT}. Please add more services.`, 'error');
            return;
        }

        const formData = {
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            idDocument: document.getElementById('idDocument').files[0]?.name,
            paymentMethod: document.querySelector('input[name="paymentMethod"]:checked').value
        };

        if (!formData.name.trim()) {
            showToast('Please enter your name', 'error');
            return;
        }

        if (!formData.email.trim() || !formData.email.includes('@')) {
            showToast('Please enter a valid email address', 'error');
            return;
        }

        if (!formData.phone.trim()) {
            showToast('Please enter your phone number', 'error');
            return;
        }

        if (!formData.address.trim()) {
            showToast('Please enter your service address', 'error');
            return;
        }

        if (!formData.date) {
            showToast('Please select a date', 'error');
            return;
        }

        if (!formData.time) {
            showToast('Please select a time', 'error');
            return;
        }

        if (!formData.idDocument) {
            showToast('Please upload your ID/Passport document', 'error');
            return;
        }

        const bookingData = {
            id: `bk_${Date.now()}`,
            services: selectedServices.map(s => ({ name: s.name, price: s.price })),
            totalAmount: totalAmount,
            ...formData,
            createdAt: new Date().toISOString()
        };

        const existingBookings = JSON.parse(localStorage.getItem('sharmoria_bookings') || '[]');
        existingBookings.push(bookingData);
        localStorage.setItem('sharmoria_bookings', JSON.stringify(existingBookings));

        showToast('Booking received! We will contact you to confirm. Thank you!', 'success');

        setTimeout(() => {
            form.reset();
            selectedServices = [];
            updateBookingSummary();
        }, 2000);
    });
}
