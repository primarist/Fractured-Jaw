---
location: <% tp.file.folder(true) %>
created_dt: <% tp.file.creation_date("yyyy-MM-DD") %>
modified_dt: <% tp.file.last_modified_date("yyyy-MM-DD") %>
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
action Templater: Insert Single Task
templater true
```
