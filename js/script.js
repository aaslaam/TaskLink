async function fetchJsonData() {
    const response = await fetch('data/Type.json');
    return await response.json();
}

function displayData(data) {
    const container = document.getElementById('data-container');
    const template = document.getElementById('service-template');

    data.forEach(item => {
        const serviceElement = template.content.cloneNode(true);
        
        serviceElement.querySelector('img').src = item.image;
        serviceElement.querySelector('img').alt = item.title;
        serviceElement.querySelector('h2').textContent = item.title;
        serviceElement.querySelector('p').textContent = item.description;
        serviceElement.querySelector('a').href = item.url;

        container.appendChild(serviceElement);
    });
}

async function loadData() {
    try {
        const data = await fetchJsonData();
        displayData(data);
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

window.addEventListener('load', loadData);

document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabs = document.querySelectorAll('.tab');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabs.forEach(tab => tab.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
});

