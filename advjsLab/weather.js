const cityName = document.getElementById("city");
cityName.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        getWeatherInfo(e.target.value);
        e.target.value = '';
    }
});
const payload = {
    token: "8ac735174f682ced0253995c1cb22ba0"
}


function getWeatherInfo(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${payload.token}&unit=metric`;
    fetch(url)
        .then(response => {

            if (response.ok) {
                return response.json();
            } else {
                console.log('Invalid city');
            }
        }).then((res) => {
            if (res === undefined) {
                alert('Error');
            } else {
                displayData(res);
            }
        })
};

function displayData(res) {
    let city = document.getElementById('loacation');
    city.innerText = `${res.name}, ${res.sys.country}`;

    let date = document.getElementById('curr-time');
    date.innerText = formateDate();

    let temprature = document.getElementById('temp');
    temp.innerText = `${(res.main.temp - 273.15).toFixed(2) }°C`;

    let weatherDetails = document.getElementById('weather');
    weatherDetails.innerText = res.weather[0].description;

    let lowHigh = document.getElementById('high-low');
    lowHigh.innerText = `${math.floor(res.main.temp_min - 273)}/${math.floor(res.main.temp_max - 273)}°C`
}


function formateDate() {
    let date = new Date();
    return date.toDateString();
}