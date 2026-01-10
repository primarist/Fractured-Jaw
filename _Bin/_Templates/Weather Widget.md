<%*
async function getCoordinates() {
 const city = 'Nashville'
 const state = 'TN'
 const country = 'US'
 const limit = 1
 const key = '0c08938d500425571bc3bf1054c407fc'
 const urlVal = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=${limit}&appid=${key}`
 const response = await fetch(urlVal).then(res => res.json())
 const out = [response[0].lat,response[0].lon,city,state,country]
 return out
}
async function currentWeather() {
let date = tp.date.now("yyyy-MM-DD")
const key = '0c08938d500425571bc3bf1054c407fc'
const lang = 'en'
let input = await getCoordinates()
const lat = input[0]
const lon = input[1]
const city = input[2]
const state = input[3]
const country = input[4]
console.log(`LAT: ${lat}, LON: ${lon}`)
const urlVal = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`;
const response = await fetch(urlVal).then(res => res.json())
console.log(response)

const condition = await response.weather[0].main
const icon = await response.weather[0].icon
const temp = await Math.round(response.main.temp)
const tempMin = await Math.round(response.main.temp_min)
const tempMax = await Math.round(response.main.temp_max)
const realFeel = await Math.round(response.main.feels_like)
const humidity = await Math.round(response.main.humidity) + '%'
const windSpeed = await Math.round(response.wind.speed)
const windDir = await Math.round(response.wind.deg)

let windBearing
if (windDir>=0 && windDir<11.25){
windBearing = "N"
} else if (windDir>=11.25 && windDir<33.75){
windBearing = "NNE"
} else if (windDir>=33.75 && windDir<56.25){
windBearing = "NE"
} else if (windDir>=56.25 && windDir<78.75){
windBearing = "ENE"
} else if (windDir>=78.75 && windDir<101.25){
windBearing = "E"
} else if (windDir>=101.25 && windDir<123.75){
windBearing = "ESE"
} else if (windDir>=123.75 && windDir<146.25){
windBearing = "SE"
} else if (windDir>=146.25 && windDir<168.75){
windBearing = "SSE"
} else if (windDir>=168.75 && windDir<191.25){
windBearing = "S"
} else if (windDir>=191.25 && windDir<213.75){
windBearing = "SSW"
} else if (windDir>=213.75 && windDir<236.25){
windBearing = "SW"
} else if (windDir>=236.25 && windDir<258.75){
windBearing = "WSW"
} else if (windDir>=258.75 && windDir<281.25){
windBearing = "W"
} else if (windDir>=281.25 && windDir<303.75){
windBearing = "WNW"
} else if (windDir>=303.75 && windDir<326.25){
windBearing = "NW"
} else if (windDir>=326.25 && windDir<348.75){
windBearing = "NNW"
} else if (windDir>=348.75 && windDir<=360){
windBearing = "N"
} else{
windBearing = "Error"
}

const sunrise = await response.sys.sunrise
let sr_dttm = new Date(sunrise * 1000);
let sr_hours = sr_dttm.getHours();
let sr_minutes = "0" + sr_dttm.getMinutes();
let formattedSunrise = sr_hours + ':' + sr_minutes.substr(-2)

const sunset = await response.sys.sunset
let ss_dttm = new Date(sunset * 1000);
let ss_hours = ss_dttm.getHours();
let ss_minutes = "0" + ss_dttm.getMinutes();
let formattedSunset = ss_hours + ':' + ss_minutes.substr(-2)

const out = `>[!custom-weather-icon] Weather for ${city}, ${state} on ${date} \n **Condition:** ${condition} <img src="https://openweathermap.org/img/wn/${icon}.png"> \n **Avg Temp:** ${temp}°F, **Real Feel:** ${realFeel}°F \n **Humidity:** ${humidity}, **Wind:** ${windSpeed} mph → ${windBearing} \n **Sunrise:** ${formattedSunrise}, **Sunset:** ${formattedSunset}.`

console.log(out)
return out
}

tR += await currentWeather()
%>
