---
location: src/content/tmp/_Guides/Detailed Guides
created_dt: 2026-01-10
modified_dt: 2026-01-10
aliases: 
tags:
  - dailynote
private: false
---

> [!quote] When you realize there is nothing lacking, the whole world belongs to you.
> — Lao Tzu

> [!todo] To Do
```dataview
TASK
WHERE !completed
AND due != null
AND (date(this.file.cday) <= due)
AND (due <= date(this.file.cday) + dur(6 day))
AND !econtains(tags, "#backlog")
SORT due DESC, priority DESC
```

> [!success] Completed
```dataview
TASK
WHERE completed
AND status != "-"
AND due != null
AND completion != null
AND (completion = date(this.file.cday))
SORT due DESC, priority DESC
```

> [!warning] Overdue
```dataview
TASK
WHERE !completed
AND status != "-"
AND due != null
AND (date(this.file.cday) > due)
AND !econtains(tags, "#backlog")
SORT due ASC, priority DESC
```

> [!abstract] Create Tasks
```button
name
class button_plus
type command
action Templater: Insert Single Task
templater true
```

 

> [!important] Sessions
```button
name
class button_plus
type command
action Templater: Insert Single Session
templater true
```



> [!NOTE] Ephemeral Notes
```button
name Materialize Selected Note
class button_wide
type command
action Note Refactor: Extract selection to new note - content only
```

<% tp.file.cursor(1) %>

> [!example] Today's Notes

```dataview
table without id
file.link as Note,
file.folder as Folder,
file.mtime as "Last Modified"
FROM -"Daily Notes"
where date(file.mday) = (date(this.file.cday))
sort file.mtime desc
```
