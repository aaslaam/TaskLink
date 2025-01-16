document.addEventListener('DOMContentLoaded', function() {
    fetch('data/Type.json')
        .then(response => response.json())
        .then(data => {
            const servicesSelect = document.getElementById('services');
            data.forEach(service => {
                const option = document.createElement('option');
                option.value = service.id;
                option.textContent = service.title;
                servicesSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error loading services:', error));
});