
```
Fractured Jaw
├─ .eleventy.js
├─ CNAME
├─ index.html
├─ package.json
├─ README.md
└─ src
   ├─ admin
   ├─ assets
   │  ├─ css
   │  │  ├─ brutalist.css
   │  │  └─ site.css
   │  ├─ fonts
   │  ├─ images
   │  └─ js
   │     ├─ embeds.js
   │     ├─ graph.js
   │     ├─ main.js
   │     └─ theme.js
   ├─ collections
   │  ├─ blog.js
   │  ├─ media.js
   │  ├─ notes.js
   │  ├─ tag-pages.njk
   │  └─ tags.js
   ├─ content
   │  ├─ .obsidian
   │  │  ├─ app.json
   │  │  ├─ appearance.json
   │  │  ├─ bookmarks.json
   │  │  ├─ community-plugins.json
   │  │  ├─ core-plugins-migration.json
   │  │  ├─ core-plugins.json
   │  │  ├─ daily-notes.json
   │  │  ├─ graph.json
   │  │  ├─ hotkeys.json
   │  │  ├─ icons
   │  │  ├─ plugins
   │  │  │  ├─ buttons
   │  │  │  │  ├─ main.js
   │  │  │  │  ├─ manifest.json
   │  │  │  │  └─ styles.css
   │  │  │  ├─ calendar
   │  │  │  │  ├─ data.json
   │  │  │  │  ├─ main.js
   │  │  │  │  └─ manifest.json
   │  │  │  ├─ cm-editor-syntax-highlight-obsidian
   │  │  │  │  ├─ main.js
   │  │  │  │  ├─ manifest.json
   │  │  │  │  └─ styles.css
   │  │  │  ├─ cmdr
   │  │  │  │  ├─ data.json
   │  │  │  │  ├─ main.js
   │  │  │  │  ├─ manifest.json
   │  │  │  │  └─ styles.css
   │  │  │  ├─ code-styler
   │  │  │  │  ├─ data.json
   │  │  │  │  ├─ main.js
   │  │  │  │  ├─ manifest.json
   │  │  │  │  ├─ reference-files
   │  │  │  │  │  └─ cache.json
   │  │  │  │  └─ styles.css
   │  │  │  ├─ dataview
   │  │  │  │  ├─ data.json
   │  │  │  │  ├─ main.js
   │  │  │  │  ├─ manifest.json
   │  │  │  │  └─ styles.css
   │  │  │  ├─ editing-toolbar
   │  │  │  │  ├─ data.json
   │  │  │  │  ├─ main.js
   │  │  │  │  ├─ manifest.json
   │  │  │  │  └─ styles.css
   │  │  │  ├─ graph-nested-tags
   │  │  │  │  ├─ main.js
   │  │  │  │  └─ manifest.json
   │  │  │  ├─ note-refactor-obsidian
   │  │  │  │  ├─ data.json
   │  │  │  │  ├─ main.js
   │  │  │  │  ├─ manifest.json
   │  │  │  │  └─ styles.css
   │  │  │  ├─ obsidian-auto-link-title
   │  │  │  │  ├─ data.json
   │  │  │  │  ├─ main.js
   │  │  │  │  ├─ manifest.json
   │  │  │  │  └─ styles.css
   │  │  │  ├─ obsidian-charts
   │  │  │  │  ├─ main.js
   │  │  │  │  ├─ manifest.json
   │  │  │  │  └─ styles.css
   │  │  │  ├─ obsidian-excalidraw-plugin
   │  │  │  │  ├─ data.json
   │  │  │  │  ├─ main.js
   │  │  │  │  ├─ manifest.json
   │  │  │  │  └─ styles.css
   │  │  │  ├─ obsidian-git
   │  │  │  │  ├─ main.js
   │  │  │  │  ├─ manifest.json
   │  │  │  │  ├─ obsidian_askpass.sh
   │  │  │  │  └─ styles.css
   │  │  │  ├─ obsidian-icon-folder
   │  │  │  │  ├─ data.json
   │  │  │  │  ├─ main.js
   │  │  │  │  ├─ manifest.json
   │  │  │  │  └─ styles.css
   │  │  │  ├─ obsidian-linter
   │  │  │  │  ├─ data.json
   │  │  │  │  ├─ main.js
   │  │  │  │  ├─ manifest.json
   │  │  │  │  └─ styles.css
   │  │  │  ├─ obsidian-map-view
   │  │  │  │  ├─ main.js
   │  │  │  │  ├─ manifest.json
   │  │  │  │  └─ styles.css
   │  │  │  ├─ obsidian-minimal-settings
   │  │  │  │  ├─ data.json
   │  │  │  │  ├─ main.js
   │  │  │  │  ├─ manifest.json
   │  │  │  │  └─ styles.css
   │  │  │  ├─ obsidian-smart-typography
   │  │  │  │  ├─ main.js
   │  │  │  │  └─ manifest.json
   │  │  │  ├─ obsidian-style-settings
   │  │  │  │  ├─ data.json
   │  │  │  │  ├─ main.js
   │  │  │  │  ├─ manifest.json
   │  │  │  │  └─ styles.css
   │  │  │  ├─ obsidian-tagfolder
   │  │  │  │  ├─ data.json
   │  │  │  │  ├─ main.js
   │  │  │  │  ├─ manifest.json
   │  │  │  │  └─ styles.css
   │  │  │  ├─ obsidian-tasks-plugin
   │  │  │  │  ├─ data.json
   │  │  │  │  ├─ main.js
   │  │  │  │  ├─ manifest.json
   │  │  │  │  └─ styles.css
   │  │  │  ├─ recent-files-obsidian
   │  │  │  │  ├─ data.json
   │  │  │  │  ├─ main.js
   │  │  │  │  ├─ manifest.json
   │  │  │  │  └─ styles.css
   │  │  │  ├─ table-editor-obsidian
   │  │  │  │  ├─ data.json
   │  │  │  │  ├─ main.js
   │  │  │  │  ├─ manifest.json
   │  │  │  │  └─ styles.css
   │  │  │  ├─ tag-wrangler
   │  │  │  │  ├─ main.js
   │  │  │  │  ├─ manifest.json
   │  │  │  │  └─ styles.css
   │  │  │  ├─ templater-obsidian
   │  │  │  │  ├─ data.json
   │  │  │  │  ├─ main.js
   │  │  │  │  ├─ manifest.json
   │  │  │  │  └─ styles.css
   │  │  │  └─ url-into-selection
   │  │  │     ├─ main.js
   │  │  │     └─ manifest.json
   │  │  ├─ publish.json
   │  │  ├─ snippets
   │  │  │  ├─ custom_buttons.css
   │  │  │  ├─ custom_callouts.css
   │  │  │  ├─ custom_tables.css
   │  │  │  ├─ graph_styling.css
   │  │  │  └─ task_styles.css
   │  │  ├─ switcher.json
   │  │  ├─ templates.json
   │  │  ├─ themes
   │  │  │  └─ Minimal
   │  │  │     ├─ manifest.json
   │  │  │     └─ theme.css
   │  │  ├─ types.json
   │  │  ├─ webviewer.json
   │  │  └─ workspace.json
   │  ├─ .trash
   │  ├─ blog
   │  │  ├─ 2026-02-09-my-first-post.md
   │  │  └─ _blog.json
   │  ├─ drafts
   │  ├─ essays
   │  ├─ fragments
   │  ├─ media
   │  │  ├─ books
   │  │  ├─ film
   │  │  └─ music
   │  ├─ notes
   │  ├─ pages
   │  │  ├─ about.md
   │  │  └─ index.md
   │  ├─ projects
   │  ├─ talks
   │  ├─ wiki
   │  ├─ _archive
   │  │  ├─ blog
   │  │  ├─ drafts
   │  │  ├─ essays
   │  │  ├─ fragments
   │  │  ├─ media
   │  │  │  ├─ books
   │  │  │  ├─ film
   │  │  │  └─ music
   │  │  ├─ notes
   │  │  ├─ pages
   │  │  ├─ projects
   │  │  ├─ talks
   │  │  └─ wiki
   │  └─ _bin
   │     ├─ guides
   │     │  ├─ Button Setup.md
   │     │  ├─ Detailed Guides
   │     │  │  ├─ Blockquote.md
   │     │  │  ├─ Callout.md
   │     │  │  ├─ Code Block.md
   │     │  │  ├─ Comment.md
   │     │  │  ├─ Diagram.md
   │     │  │  ├─ Embeds.md
   │     │  │  ├─ Emphasis.md
   │     │  │  ├─ Footnote.md
   │     │  │  ├─ Heading.md
   │     │  │  ├─ Highlighting.md
   │     │  │  ├─ Horizontal Divider.md
   │     │  │  ├─ Images.md
   │     │  │  ├─ Inline Code.md
   │     │  │  ├─ Internal Link.md
   │     │  │  ├─ Links.md
   │     │  │  ├─ Lists.md
   │     │  │  ├─ Math.md
   │     │  │  ├─ Strikethrough.md
   │     │  │  ├─ Table.md
   │     │  │  └─ Task.md
   │     │  └─ Quick Guide.md
   │     ├─ resources
   │     │  ├─ icons
   │     │  │  ├─ favicons
   │     │  │  │  └─ favicon-32x32.png
   │     │  │  ├─ remix-icons
   │     │  │  │  ├─ Archive2Fill.svg
   │     │  │  │  ├─ BookOpenFill.svg
   │     │  │  │  ├─ BracesFill.svg
   │     │  │  │  ├─ Briefcase4Fill.svg
   │     │  │  │  ├─ CalendarTodoFill.svg
   │     │  │  │  ├─ ChatQuoteFill.svg
   │     │  │  │  ├─ CodeBoxFill.svg
   │     │  │  │  ├─ Folder2Fill.svg
   │     │  │  │  ├─ PaletteFill.svg
   │     │  │  │  ├─ PlaneFill.svg
   │     │  │  │  ├─ QuestionFill.svg
   │     │  │  │  ├─ StackFill.svg
   │     │  │  │  ├─ StickyNoteFill.svg
   │     │  │  │  └─ User3Fill.svg
   │     │  │  ├─ remix-icons.zip
   │     │  │  ├─ rpg-awesome
   │     │  │  │  ├─ CogWheel.svg
   │     │  │  │  └─ Sun.svg
   │     │  │  └─ rpg-awesome.zip
   │     │  └─ style-settings.json
   │     ├─ scripts
   │     └─ templates
   │        ├─ Daily Note.md
   │        ├─ Doc to Table.md
   │        ├─ General Note.md
   │        ├─ Journal Entry.md
   │        ├─ Quote.md
   │        ├─ Session.md
   │        ├─ Single Session.md
   │        ├─ Single Task.md
   │        └─ Weather Widget.md
   ├─ scripts
   │  ├─ build-graph-data.js
   │  ├─ generate-tag-pages.js
   │  └─ obsidian-link-fix.js
   ├─ utils
   │  ├─ filters.js
   │  ├─ markdown.js
   │  └─ shortcodes.js
   ├─ _data
   │  ├─ generated
   │  │  ├─ backlinks.json
   │  │  ├─ graph.json
   │  │  └─ tags.json
   │  ├─ navigation.json
   │  └─ site.json
   ├─ _includes
   │  ├─ layouts
   │  │  ├─ base.njk
   │  │  ├─ note.njk
   │  │  ├─ page.njk
   │  │  └─ post.njk
   │  └─ partials
   │     ├─ footer.njk
   │     ├─ giscus.njk
   │     ├─ head.njk
   │     └─ header.njk
   └─ _site

```