---
location: src/content/tmp/_Guides/Detailed Guides
created_dt: 2026-01-10
modified_dt: 2026-01-10
aliases: 
tags:
  - journal
private: true
---

>[!custom-weather-icon] Weather for Portland, ME on 2026-02-09 
 **Condition:** Clear <img src="https://openweathermap.org/img/wn/01n.png"> 
 **Avg Temp:** 19°F, **Real Feel:** 10°F 
 **Humidity:** 41%, **Wind:** 7 mph → NW 
 **Sunrise:** 5:46, **Sunset:** 16:03.

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
