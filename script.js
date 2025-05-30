// Gece-Gündüz Modu
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Gündüz Modu' : 'Gece Modu';
});

// İnteraktif Harita
function initMap() {
    const ankara = { lat: 39.9334, lng: 32.8597 };
    const map = new google.maps.Map(document.getElementById('map-container'), {
        zoom: 12,
        center: ankara,
    });
    new google.maps.Marker({
        position: ankara,
        map: map,
        title: 'Ankara',
    });
}

// Canlı Hava Durumu
fetch('https://api.openweathermap.org/data/2.5/weather?q=Ankara&appid=YOUR_API_KEY&units=metric')
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `
            <p>${data.weather[0].description}</p>
            <p>Sıcaklık: ${data.main.temp}°C</p>
        `;
    });