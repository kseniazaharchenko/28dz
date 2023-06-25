// отримуємо елементи, до яких будемо виводити дані про погоду
var cityEl = document.getElementById('city');
var tempEl = document.getElementById('temp');
var pressureEl = document.getElementById('pressure');
var descriptionEl = document.getElementById('description');
var humidityEl = document.getElementById('humidity');
var speedEl = document.getElementById('speed');
var degEl = document.getElementById('deg');
var iconEl = document.getElementById('icon');

// виконуємо ajax-запит до API погоди
var xhr = new XMLHttpRequest();
// обробляємо результат запиту
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        // виводимо дані про погоду
        cityEl.textContent = response.name;
        tempEl.textContent = response.main.temp;
        pressureEl.textContent = response.main.pressure;
        descriptionEl.textContent = response.weather[0].description;
        humidityEl.textContent = response.main.humidity;
        speedEl.textContent = response.wind.speed;
        degEl.textContent = response.wind.deg;
        iconEl.src = 'http://openweathermap.org/img/w/' + response.weather[0].icon + '.png';
    }
};