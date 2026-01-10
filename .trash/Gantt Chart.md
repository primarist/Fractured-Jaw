---
location: _Bin/_Development
created_dt: 2024-03-05
modified_dt: 2024-03-05
aliases: 
tags: 
private: false
---

>[!example]- Gantt Config
>axis_format:: %m-%d-%y
>tickAmount:: 6  
>tickScale:: month

```dataviewjs
function textParser(taskText) {

    //input text,return object
    const emojis = ["📅", "⏳", "🛫", "➕", "✅", "⏫", "🔼", "🔽"];
    let du = taskText.indexOf("⏱️")
    let durText = "";
    if (du > 0) {
        let i = taskText.slice(du).search(/\d+(d|w|m)/);
        durText = taskText.substr(du + i, 3)
    }

    let miletext = taskText.indexOf("🚩") > -1 ? 1 : 0;
    let d = taskText.indexOf("📅");
    let DueText = "";
    if (d >= 0) {
        let i = taskText.slice(d).search(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/);
        DueText = taskText.substr(d + i, 10);
    }

    let sch = taskText.indexOf("⏳");
    let scheduledText = "";
    if (sch > 0) {
        let i = taskText.slice(sch).search(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/);
        scheduledText = taskText.substr(sch + i, 10);
    }

    let st = taskText.indexOf("🛫");
    let startText = "";
    if (st > 0) {
        let i = taskText.slice(st).search(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/);
        startText = taskText.substr(st + i, 10);
    }

    let h = taskText.indexOf("⏫");
    let m = taskText.indexOf("🔼");
    let l = taskText.indexOf("🔽");
    let PriorityText = "";
    if (h > 0) {
        PriorityText = "High";
    }
    if (m > 0) {
        PriorityText = "Medium";
    }
    if (l > 0) {
        PriorityText = "Low";
    }

    const emojisIndex = emojis.map(emoji => taskText.indexOf(emoji)).filter(index => index >= 0);

    let words;
    if (emojisIndex.length > 0) {
        words = taskText.slice(0, Math.min(...emojisIndex)).split(" ");
    } else {
        words = taskText.split(" ");
    }

    //rjenn logging
    console.log(`wordsInit: ${words}`);

    // Remove the #task tag
    words = words.filter((word) => (word) !== "#task");

    //rjenn logging
    console.log(`wordsFilter: ${words}`);

    // Put subsequent tags in []
    let newWords = words.map(
        (word) => word.startsWith("#") ? `[${word.slice(1)}]` : word);

    // Join the words back together
    let nameText = newWords.join(" ");

    //rjenn logging
    console.log(`newWords: ${nameText}`);
    console.log(`nameText: ${nameText}`);

    //let nameText = taskText.slice(0, Math.min(...presentEmojiIndex)).trim();
    //console.log(taskText,Math.min(...presentEmojiIndex))

    return {
        name: nameText,
        due: DueText,
        start: startText,
        scheduled: scheduledText,
        priority: PriorityText,
        duration: durText,
        miletext: miletext
    }
} 

function loopGantt(pageArray) {
	let querySections = ``;
	let today = new Date().toISOString().slice(0, 10)
	for (let i = 0; i < pageArray.length; i++) {
		let taskQuery = ``;
		var taskArray = pageArray[i].file.tasks;

		//parse name, due, start, completion, scheduled,priority from task text to objects
		var compObjs = pageArray[i].file.tasks.completed
		var completionArray = [];
		for (let s = 0; s < compObjs.length; s++) {
			completionArray[s] = compObjs[s]
		}

		var taskObjs = [];
		for (let j = 0; j < taskArray.length; j++) {
			taskObjs[j] = textParser(taskArray[j].text)

		}

		//determine the mermaid task parameters
		for (let j = 0; j < taskObjs.length; j++) {
			let theTask = taskObjs[j];

			// create stats variable 
			function getLastLesserIndex(arr, currentIndex) {
				let currentValue = arr[currentIndex];
				for (let i = currentIndex - 1; i >= 0; i--) {
					if (arr[i] < currentValue) {
						return i;
					}
				}
				return -1;
			}

			let SecNum = "sect" + (i + 1) + "-"
			let taskNum = "task" + (j + 1) + ", "
			let Ind = pageArray[i].file.tasks.position.start.col
			let IndUp = getLastLesserIndex(Ind, j)

			let aft = ""
			if ((taskArray[j].parent != null) && (IndUp > 0)) {
				aft += "after " + SecNum + "task" + (IndUp + 1)
			} else if (taskArray[j].parent != null) {
				aft += "after " + SecNum + "task" + (j)
			} else {
				aft += ""
			}

			var stats = ""
			if (completionArray[j] == true) {
				stats += "done, "
			} else {
				stats += "active, "
			}

			// test stuff
			var critStat = ""
			if (theTask.priority === "High") {
				critStat = "crit" + ", "
			} else {
				critStat = ""
			}

			var start = ""
			if (taskArray[j].parent != null) {
				start += aft + ","
			} else {
				start += theTask.start + ","
			}

			var end = ""
			if (taskArray[j].duration = null) {
				end += theTask.duration
			} else {
				end += theTask.due
			}

			let mile = ""
			if (taskObjs[j].miletext > 0) {
				mile += "milestone, "
			}

			taskQuery += theTask.name + `    : ` + mile + critStat + stats + SecNum + taskNum + start + end + theTask.duration + `\n\n`;
		};
		querySections += `section  ` + pageArray[i].file.name + `\n\n` + taskQuery;
	};
	return querySections
}

let tick1 = dv.current().tickAmount // define first part of tick interval (number)
let tick2 = dv.current().tickScale // define the scale of axis tick (day, week, month, year) 

const Mermaid = `gantt

    title Gannt Charts (v0.5.5)
    
   
    
 \n ` + `dateFormat YYYY-MM-DD` + ` \n ` +
	`axisFormat  ` + dv.current().axis_format + ` \n ` + `tickInterval ` + tick1 + tick2 +


	`\n `;

// set the path of your project folder below
dv.paragraph('```mermaid\n' + Mermaid + loopGantt(dv.pages('#gannt and #task')) + '\n```');
//digonstic rendiering. uncomment to get a render of the merimaid text and otehr diagnostic stuff
//dv.paragraph('~~~\n```mermaid\n' + Mermaid + loopGantt(dv.pages('#task and #gannt')) + '\n ```\n~~~');
```

```dataviewjs
dv.paragraph(dv.current())
```

- [x] #task/t-2 #testing #gannt #work/verstand/cssolutions THIS IS A TEST  ⏳ 2024-03-05  🔼 🛫 2024-03-05 📅 2024-03-30 [completion:: 2024-04-08]