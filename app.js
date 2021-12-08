const api = "7209c71f2b1f97bd1831ebf58065f4a2";

const image = document.getElementById('icon')
const cityName = document.getElementById('city')
const weather = document.getElementById('weather')
const temperature = document.getElementById('temp')

window.addEventListener('load', () => {
    let long;
    let lat;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=metric`;
            console.log(url)
            fetch(url)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    const temp = data.main.temp
                    const desc = data.weather[0].description
                    const icon = data.weather[0].icon
                    const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                    const city = data.name

                    image.src = iconUrl;
                    cityName.textContent = city;
                    weather.textContent = desc;
                    temperature.textContent = temp.toFixed(2) + '°C';
                });
        });
    }
});