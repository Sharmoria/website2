// Home page specific JavaScript

document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedServices();
});

function renderFeaturedServices() {
    const container = document.getElementById('featured-services');
    if (container && typeof services !== 'undefined') {
        const featuredServices = [
            services.packages[0],
            services.packages[2],
            services.packages[3]
        ];

        container.innerHTML = featuredServices.map(service => createServiceCard(service)).join('');
    }
}
