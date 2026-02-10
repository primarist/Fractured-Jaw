---
location: _Bin/_Guides
created_dt: 2024-02-26
modified_dt: 2024-02-26
aliases: 
tags:
  - "#guide"
  - "#plugins"
private: false
---
#### Dependencies:
- Templater
- Buttons
- Tasks
- Note Refactor

#### Setup:
1. Install Templater, Note Refactor, and Buttons community plugins and enable the Tasks core plugin
2. Create three templates (1) one for single-line tasks, (2) another for sessions, and (3) for session links. For the first two, make sure to include the blank newline underneath the text, as this is required to correctly run the template.

```
- [ ] #task | (TASK HERE) | ⏳ 2026-01-10 | 🔼 

```
---
```
[[Sessions/2026/January/2026-Jan-10/Session Name]]

```
---
~~~ <-- delete these tildes after copying
---
location: _Bin/_Resources
created_dttm: 2026-01-10 01:15
modified_dttm: 2026-01-09 18:33
aliases: 
tags:
  - session
private: false
---
> [!INFO] Summary & Attendees

 <% tp.file.cursor(1) %>

> [!NOTE] Session Notes
```button
name Materialize Selected Note
class button_wide
type command
action Note Refactor: Extract selection to new note - content only
```




> [!abstract] Action Items
```button
name
class button_plus
type command
action Templater: Insert _Bin/_Templates/Single Task.md
templater true
```


~~~

3. Enable the ‘Automatic jump to cursor’ setting in Templater ![[Pasted image 20240226150027.png]]
5. Add the following Template Hotkeys in Templater wherever you store your templates![[Pasted image 20240226150120.png]]
7. Add the following Folder Template ![[Pasted image 20240226150318.png]]
8. Wherever you would like your ‘New Task’ button, add the following block

~~~ <-- delete these tildes after copying
```button
name
class button_plus
type command
action Templater: Insert _Bin/_Templates/Single Task.md
templater true
```
~~~

8. Do the same for the ‘New Session’ button
~~~ <-- delete these tildes after copying
```button
name
class button_plus
type command
action Templater: Insert _Bin/_Templates/Single Session.md
templater true
```
~~~

9. Style your buttons by adding the following .css file to your ‘\VAULT_NAME\.obsidian\snippets’ directory
```css
.button_plus {
	border: 1px solid lightgrey;
	background-color: #ECF8F8;
	color: #ECF8F8;
	font-size: 8px;
	height: 2.5em;
	width: 100%;
	border-radius: 4px;
	position: relative;
	
	&:after,
	&:before {
		content: "";
		display: block;
		background-color: grey;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	
	&:before {
		height: 1em;
		width: 0.2em;
	}

	&:after {
		height: 0.2em;
		width: 1em;
	}
}

.button_plus:hover:before,
.button_plus:hover:after {
  background: grey;
  transition: 0.2s;
}

.button_plus:hover {
  background-color: #d0f2f2;
  transition: 0.2s;
}

.button_wide {
	border: 1px solid lightgrey;
	background-color: #ECF8F8;
	color: grey;
	font-size: 11px;
	font-weight: 700;
	height: 2.5em;
	width: 100%;
	border-radius: 4px;
	position: relative;
}

.button_wide:hover:before,
.button_wide:hover:after {
  background: grey;
  transition: 0.2s;
}

.button_wide:hover {
  background-color: #d0f2f2;
  transition: 0.2s;
}
```

10. If all goes smoothly the expected workflows are:

	**Sessions**
	- New session button is clicked
	- This runs the new session Template Hotkey action wherever the cursor is placed
	- This inserts a link (plus a newline) using the ‘Single Session’ template
	- When this link is clicked, it initializes a new note in the ‘Sessions’ directory, which triggers the Templater folder template and populates the new session note as it is accessed

	**Tasks**
	- New task button is clicked
	- This runs the new task Template Hotkey action wherever the cursor is placed
	- This inserts a task with the defined formatting in the ‘Single Task’ template

	**Materialize Note**
	- Materialize note button is clicked
	- This triggers the Note Refactor: Extract selection to new note action
	- User is prompted for new note title
	- New note with extracted content is materialized in root directory