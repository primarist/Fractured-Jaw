---
location: _Bin/_Development
created_dt: 2024-03-20
modified_dt: 2024-03-20
aliases: 
tags: 
private: false
---

<%*
const dv = app.plugins.plugins.dataview.api;
const res = dv.pages().file
	.where(t => {
		if(t.folder.substring(0,4) == "_Bin") || (t.ext != "md") {
			return false;
		} else {
			return true;
		};
	});
let maxID = [];
let ct = 0;
for (const el of res) {
	for (const tag of el.tags) {
		if ((tag.substring(0,5) == "#task") && (tag.substring(5,6) == "/")) {
			arrID = tag.split("-");
			maxID.push(arrID[1]);
		};
	};
	ct = ++ct;
};
let newID = 1;
let maxIDNum = maxID.sort(function(a, b){return b - a})[0]*1;
console.log(maxIDNum);
if (typeof maxIDNum === 'number' && (maxIDNum > 0)) {
	newID = (maxID.sort(function(a, b){return b - a})[0]*1) + 1;
} else {
	newID = 1;
};

console.log(res,ct,maxIDNum,newID);
tR += `#note/n-${newID}`;
%>