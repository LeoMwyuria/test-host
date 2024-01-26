let isRoundMoved = false;

function moveRound() {
    let roundDiv = document.getElementById('round');

    
    let currentLeft = parseFloat(window.getComputedStyle(roundDiv).left);

   
    let newLeft = isRoundMoved ? 5 : currentLeft + 50;

    
    roundDiv.style.left = newLeft + 'px';


    isRoundMoved = !isRoundMoved;
  

}
const sabadiv = document.getElementById('saba-div');

async function fetchdata() {
    try {
        const res = await fetch("info.json");
        const data = await res.json();

        sabadiv.innerText = '';

        const hourlyForecast = data.hourly_forecast;

        hourlyForecast.forEach(hour => {
            const hourDiv = document.createElement('div');

            hourDiv.innerHTML = `  <img src="${hour.condition === 'Sunny' ? 'Pictures/Group 258.png' :
            hour.condition === 'Partly cloudy' ? 'Pictures/Group 258.png' :
            hour.condition === 'Cloudy' ? 'Pictures/Group 159.png' : 'defaultImage.png'}" alt=""> <p> ${hour.hour}</p><p> ${hour.temperature}</p><p>${hour.condition}</p>`;
            hourDiv.classList.add('hourdiv');

            sabadiv.appendChild(hourDiv);

            const tbilisi = document.getElementById('tbilisi')
            tbilisi.innerText = data.city
        });
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}
async function datucha(){
    try {
        const res = await fetch("info.json");
        const data = await res.json();

        

            const tbilisi = document.getElementById('tbilisi')
            tbilisi.innerText = data.city

            const index = document.getElementById('index')
            index.innerText = data.current_weather.uv_index

            const am1 = document.getElementById('am1')
            am1.innerText = data.current_weather.sunrise

            const am2 = document.getElementById('am2')
            am2.innerText = data.current_weather.sunset

            const humidity = document.getElementById('Humidity')
            humidity.innerText = data.current_weather.humidity
            
            const km = document.getElementById('km')
            km.innerText = data.current_weather.visibility

            const celcius = document.getElementById('celcius')
            celcius.innerText = data.current_weather.feels_like

            


        
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }

}
datucha()
    


let day7 = document.getElementById('day7');
let firstText = day7.innerText;
let secondText = '24 Hours';
let Forecast = document.getElementById('nikusha')

async function levanuuu() {
    if (day7.innerText === firstText) {
        day7.innerText = secondText;
        sabadiv.style.display = 'none';
        await fetchdata(); // Wait for the data to be fetched
        sabadiv.style.display = 'block'; // Show the sabadiv after fetching data
        Forecast.innerText = '24 Hour Forcast'
    } else {
        day7.innerText = "7 day";
        sabadiv.style.display = 'block';
        window.location.reload()
    }
}

day7.addEventListener('click', levanuuu);
