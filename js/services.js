// Services page specific JavaScript

document.addEventListener('DOMContentLoaded', () => {
    renderPackageBundles();
    renderWaxingPackages();
    renderIndividualTreatments();
});

function renderPackageBundles() {
    const container = document.getElementById('package-bundles');
    if (container && typeof services !== 'undefined') {
        container.innerHTML = services.packages.map(service => createServiceCard(service)).join('');
    }
}

function renderWaxingPackages() {
    const container = document.getElementById('waxing-packages');
    if (container && typeof services !== 'undefined') {
        container.innerHTML = services.waxing.map(service => createServiceCard(service)).join('');
    }
}

function renderIndividualTreatments() {
    const container = document.getElementById('individual-treatments');
    if (container && typeof services !== 'undefined') {
        const allIndividual = [...services.massage, ...services.facial];
        container.innerHTML = allIndividual.map(service => createServiceCard(service)).join('');
    }
}
