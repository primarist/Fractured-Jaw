---
location: <% tp.file.folder(true) %>
created_dt: <% tp.file.creation_date("yyyy-MM-DD") %>
modified_dt: <% tp.file.last_modified_date("yyyy-MM-DD") %>
aliases: 
tags:
  - journal
private: true
---

<%*
let qcFileName = "Entry "
let titleName = qcFileName + tp.date.now("yyyy-MMM-DD")
await tp.file.rename(titleName)
let baseFolder = "/Personal/Journal/"
let year = tp.date.now('YYYY')
let month = tp.date.now('MMMM')
let newFolder = `${baseFolder}${year}/${month}/`
await tp.file.move(newFolder + titleName);
-%>
<%*
async function getCoordinates() {
 const city = 'Portland'
 const state = 'ME'
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

> [!success] One Sentence Check In

<% tp.file.cursor(1) %>

> [!hint] Today I…

**Meals Eaten:** (mealct::)
**Minutes Meditated:** (medct::)
**Minutes Walked:** (walkct::)
**Hours Slept:** (sleepct::)

*Bonus!*
**Gym Session:** (gymct::)

> [!custom-brain-icon] Mood Tracker
###### Mind: Thoughts, Mental Formations, Rumination → (mindscore::)
---


---
###### Body: Sensation, Pain, Emotion → (bodyscore::)
---


---
###### Spirit: Awareness, Insight, Intuition → (spiritscore::)
---


---

> [!custom-food-icon] Nutriments
###### [[The Four Nutriments#The First Nutriment Edible Food|Food]]: Literally just Food → (foodscore::)
---


---
###### [[The Four Nutriments#The Second Nutriment Sensory Impressions|Sense]]: Consumption of the Senses, Media → (sensescore::)
---


---
###### [[The Four Nutriments#The Third Nutriment Volition|Volition]]: Aspirations, Desires → (volscore::)
---


---
###### [[The Four Nutriments#The Fourth Nutriment Consciousness|Consciousness]]: Collective Attitudes, Social Influences → (conscore::)
---


---

> [!summary] Brain Dump



> [!example] Data Points

###### Healthy Habits Tracking

```dataview
TABLE
mealct AS Meals, medct AS Meditation, walkct AS Walks, sleepct AS Sleep
FROM "Personal/Journal"
WHERE created <= date(this.file.cday) + dur(6 day)
```

###### Mood Tracking

```dataview
TABLE
mindscore AS Mind, bodyscore AS Body, spiritscore AS Spirit
FROM "Personal/Journal"
WHERE created <= date(this.file.cday) + dur(6 day)
```

###### Nutriment Tracking

```dataview
TABLE
foodscore AS Food, sensescore AS Sense, volscore AS Volition, conscore AS Consciousness
FROM "Personal/Journal"
WHERE created <= date(this.file.cday) + dur(6 day)
```
