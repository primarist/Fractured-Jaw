
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
   │  │  ├─ 2026
   │  │  │  └─ 01-January
   │  │  │     └─ 2026-01-10.md
   │  │  ├─ 2026 2
   │  │  │  └─ 01-January
   │  │  │     └─ 2026-01-10
   │  │  │        └─ unti.md
   │  │  ├─ 2026 3
   │  │  │  └─ 01-January
   │  │  │     └─ 2026-01-10
   │  │  │        └─ init.md
   │  │  ├─ 23_1205_Americas_BU_Territory Overview_2020-2023.pdf
   │  │  ├─ assets
   │  │  │  ├─ fonts
   │  │  │  └─ images
   │  │  ├─ Automated Looker Docs.md
   │  │  ├─ bullhorn-variant-custom.png
   │  │  ├─ Content
   │  │  │  └─ Test
   │  │  │     ├─ Hello Level 2.md
   │  │  │     └─ Subtest
   │  │  │        └─ Hello Level 3.md
   │  │  ├─ Daily Journal Prompts.md
   │  │  ├─ Data Health Table Spec.md
   │  │  ├─ favicon.16ad1cb0c51aba659ad0148fb49ba647.png
   │  │  ├─ filter-custom_white.png
   │  │  ├─ flag-variant-plus-custom_white.png
   │  │  ├─ Gantt Chart.md
   │  │  ├─ gauge-custom_white.png
   │  │  ├─ Geocoding & Georouting v2.md
   │  │  ├─ hand-heart-custom_white.png
   │  │  ├─ Hello World.md
   │  │  ├─ icons
   │  │  ├─ Jira Task Creation Automation.md
   │  │  ├─ logo.d52ef0c93f623f2c195aff15f360762b.png
   │  │  ├─ Next-Gen Outreach Request.md
   │  │  ├─ Operations Dashboards Mockups.pdf
   │  │  ├─ Pasted image 20240226150027.png
   │  │  ├─ Pasted image 20240226150120.png
   │  │  ├─ Pasted image 20240226150318.png
   │  │  ├─ Pasted image 20240411120800.png
   │  │  ├─ Pasted image 20240411120903.png
   │  │  ├─ Pasted image 20240411120927.png
   │  │  ├─ Pasted image 20240411121014.png
   │  │  ├─ Pasted image 20240411130323.png
   │  │  ├─ Pasted image 20240411141306.png
   │  │  ├─ Pasted image 20240411162007.png
   │  │  ├─ Pasted image 20240411163914.png
   │  │  ├─ Pasted image 20240429155734.png
   │  │  ├─ Pasted image 20240429155931.png
   │  │  ├─ Pasted image 20240502111234.png
   │  │  ├─ Pasted image 20240503110042.png
   │  │  ├─ Pasted image 20240503160816.png
   │  │  ├─ Pasted image 20240503160906.png
   │  │  ├─ Pasted image 20240503161337.png
   │  │  ├─ Pasted image 20240503161433.png
   │  │  ├─ Pasted image 20240801150419.png
   │  │  ├─ Pasted image 20240801150512.png
   │  │  ├─ Pasted image 20240801153059.png
   │  │  ├─ Pasted image 20240801153853.png
   │  │  ├─ Pasted image 20240801154412.png
   │  │  ├─ Pasted image 20240801155035.png
   │  │  ├─ Pasted image 20240801180147.png
   │  │  ├─ Pasted image 20240801180528.png
   │  │  ├─ Pasted image 20240801181022.png
   │  │  ├─ Pasted image 20240801183555.png
   │  │  ├─ Pasted image 20240814130703.png
   │  │  ├─ Pasted image 20241015161049.png
   │  │  ├─ Pasted image 20241018123954.png
   │  │  ├─ Pasted image 20241023155414.png
   │  │  ├─ Pasted image 20241029131720.png
   │  │  ├─ Pasted image 20241030150928.png
   │  │  ├─ Pasted image 20241031160724.png
   │  │  ├─ Pasted image 20241031161750.png
   │  │  ├─ Pasted image 20241031161753.png
   │  │  ├─ Pasted image 20241031162846.png
   │  │  ├─ Pasted image 20241031163552.png
   │  │  ├─ Pasted image 20241031163951.png
   │  │  ├─ Pasted image 20241031164306.png
   │  │  ├─ Pasted image 20241111153859.png
   │  │  ├─ Pasted image 20241209155702.png
   │  │  ├─ Pasted image 20241209160204.png
   │  │  ├─ Pasted image 20241209160242.png
   │  │  ├─ Pasted image 20241209162255.png
   │  │  ├─ Pasted image 20241212100933.png
   │  │  ├─ Pasted image 20241212103331.png
   │  │  ├─ Pasted image 20241212121138.png
   │  │  ├─ Pasted image 20241212121253.png
   │  │  ├─ Pasted image 20241212121329.png
   │  │  ├─ Pasted image 20241212121416.png
   │  │  ├─ Pasted image 20241212121520.png
   │  │  ├─ Pasted image 20241212121715.png
   │  │  ├─ Pasted image 20241212121738.png
   │  │  ├─ Pasted image 20241212121756.png
   │  │  ├─ Pasted image 20241212121832.png
   │  │  ├─ Pasted image 20241213131953.png
   │  │  ├─ Pasted image 20250102093338.png
   │  │  ├─ Pasted image 20250102093403.png
   │  │  ├─ Pasted image 20250103113934.png
   │  │  ├─ Pasted image 20250103114135.png
   │  │  ├─ Pasted image 20250114112020.png
   │  │  ├─ Pasted image 20250114112133.png
   │  │  ├─ Pasted image 20250115142045.png
   │  │  ├─ Pasted image 20250115142330.png
   │  │  ├─ Pasted image 20250626153331.png
   │  │  ├─ Pasted image 20250627083757.png
   │  │  ├─ Pasted image 20250627084309.png
   │  │  ├─ Pasted image 20250627090236.png
   │  │  ├─ Pasted image 20250721165554.png
   │  │  ├─ Pasted image 20250721165650.png
   │  │  ├─ Pasted image 20250722101543.png
   │  │  ├─ Pasted image 20250722103913.png
   │  │  ├─ Pasted image 20250722103935.png
   │  │  ├─ Pasted image 20250722103956.png
   │  │  ├─ Pasted image 20250910112715.png
   │  │  ├─ Pasted image 20250925094805.png
   │  │  ├─ Pasted image 20250925094929.png
   │  │  ├─ Pasted image 20250925094939.png
   │  │  ├─ Pasted image 20250925095046.png
   │  │  ├─ Pasted image 20250925095531.png
   │  │  ├─ Pasted image 20250925095744.png
   │  │  ├─ Pasted image 20250925101417.png
   │  │  ├─ Pasted image 20251114140806.png
   │  │  ├─ Pasted image 20251118153810.png
   │  │  ├─ Pasted image 20251120140309.png
   │  │  ├─ Pasted image 20251209152354.png
   │  │  ├─ Pasted image 20251209152536.png
   │  │  ├─ Pasted image 20251209152707.png
   │  │  ├─ Pasted image 20251209152958.png
   │  │  ├─ Pasted image 20251209153825.png
   │  │  ├─ Paylocity & Production Wireframes 1.pdf
   │  │  ├─ Paylocity & Production Wireframes.pdf
   │  │  ├─ PioneerRx Pipeline Spec.md
   │  │  ├─ Render v0.1.png
   │  │  ├─ render_Bg_final 1.pdf
   │  │  ├─ render_Bg_final.pdf
   │  │  ├─ Sample Text.md
   │  │  ├─ scripts
   │  │  ├─ Simple Data Health Dashboard.md
   │  │  ├─ Single Task version 1.md
   │  │  ├─ styles
   │  │  ├─ Testing.md
   │  │  ├─ Untitled 2 2.md
   │  │  ├─ Untitled 2.md
   │  │  ├─ Untitled 3.md
   │  │  ├─ Untitled.md
   │  │  ├─ web-box-custom-white.png
   │  │  ├─ Welcome 2.md
   │  │  ├─ Welcome.md
   │  │  └─ _Resources
   │  │     ├─ Fonts
   │  │     ├─ Icons
   │  │     │  ├─ favicons
   │  │     │  │  └─ favicon-32x32.png
   │  │     │  ├─ remix-icons
   │  │     │  │  ├─ Archive2Fill.svg
   │  │     │  │  ├─ BookOpenFill.svg
   │  │     │  │  ├─ BracesFill.svg
   │  │     │  │  ├─ Briefcase4Fill.svg
   │  │     │  │  ├─ CalendarTodoFill.svg
   │  │     │  │  ├─ ChatQuoteFill.svg
   │  │     │  │  ├─ CodeBoxFill.svg
   │  │     │  │  ├─ Folder2Fill.svg
   │  │     │  │  ├─ PaletteFill.svg
   │  │     │  │  ├─ PlaneFill.svg
   │  │     │  │  ├─ QuestionFill.svg
   │  │     │  │  ├─ StackFill.svg
   │  │     │  │  ├─ StickyNoteFill.svg
   │  │     │  │  └─ User3Fill.svg
   │  │     │  ├─ remix-icons.zip
   │  │     │  ├─ rpg-awesome
   │  │     │  │  ├─ CogWheel.svg
   │  │     │  │  └─ Sun.svg
   │  │     │  └─ rpg-awesome.zip
   │  │     ├─ Images
   │  │     │  ├─ render_pbi_theme_v0.json
   │  │     │  └─ render_pbi_theme_v0.txt
   │  │     └─ style-settings.json
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
   │  │  ├─ 2026
   │  │  │  └─ 01-January
   │  │  │     └─ 2026-01-10.md
   │  │  ├─ 2026 2
   │  │  │  └─ 01-January
   │  │  │     └─ 2026-01-10
   │  │  │        └─ unti.md
   │  │  ├─ 2026 3
   │  │  │  └─ 01-January
   │  │  │     └─ 2026-01-10
   │  │  │        └─ init.md
   │  │  ├─ 23_1205_Americas_BU_Territory Overview_2020-2023.pdf
   │  │  ├─ assets
   │  │  │  ├─ fonts
   │  │  │  └─ images
   │  │  ├─ Automated Looker Docs.md
   │  │  ├─ bullhorn-variant-custom.png
   │  │  ├─ Content
   │  │  │  └─ Test
   │  │  │     ├─ Hello Level 2.md
   │  │  │     └─ Subtest
   │  │  │        └─ Hello Level 3.md
   │  │  ├─ Daily Journal Prompts.md
   │  │  ├─ Data Health Table Spec.md
   │  │  ├─ favicon.16ad1cb0c51aba659ad0148fb49ba647.png
   │  │  ├─ filter-custom_white.png
   │  │  ├─ flag-variant-plus-custom_white.png
   │  │  ├─ Gantt Chart.md
   │  │  ├─ gauge-custom_white.png
   │  │  ├─ Geocoding & Georouting v2.md
   │  │  ├─ hand-heart-custom_white.png
   │  │  ├─ Hello World.md
   │  │  ├─ icons
   │  │  ├─ Jira Task Creation Automation.md
   │  │  ├─ logo.d52ef0c93f623f2c195aff15f360762b.png
   │  │  ├─ Next-Gen Outreach Request.md
   │  │  ├─ Operations Dashboards Mockups.pdf
   │  │  ├─ Pasted image 20240226150027.png
   │  │  ├─ Pasted image 20240226150120.png
   │  │  ├─ Pasted image 20240226150318.png
   │  │  ├─ Pasted image 20240411120800.png
   │  │  ├─ Pasted image 20240411120903.png
   │  │  ├─ Pasted image 20240411120927.png
   │  │  ├─ Pasted image 20240411121014.png
   │  │  ├─ Pasted image 20240411130323.png
   │  │  ├─ Pasted image 20240411141306.png
   │  │  ├─ Pasted image 20240411162007.png
   │  │  ├─ Pasted image 20240411163914.png
   │  │  ├─ Pasted image 20240429155734.png
   │  │  ├─ Pasted image 20240429155931.png
   │  │  ├─ Pasted image 20240502111234.png
   │  │  ├─ Pasted image 20240503110042.png
   │  │  ├─ Pasted image 20240503160816.png
   │  │  ├─ Pasted image 20240503160906.png
   │  │  ├─ Pasted image 20240503161337.png
   │  │  ├─ Pasted image 20240503161433.png
   │  │  ├─ Pasted image 20240801150419.png
   │  │  ├─ Pasted image 20240801150512.png
   │  │  ├─ Pasted image 20240801153059.png
   │  │  ├─ Pasted image 20240801153853.png
   │  │  ├─ Pasted image 20240801154412.png
   │  │  ├─ Pasted image 20240801155035.png
   │  │  ├─ Pasted image 20240801180147.png
   │  │  ├─ Pasted image 20240801180528.png
   │  │  ├─ Pasted image 20240801181022.png
   │  │  ├─ Pasted image 20240801183555.png
   │  │  ├─ Pasted image 20240814130703.png
   │  │  ├─ Pasted image 20241015161049.png
   │  │  ├─ Pasted image 20241018123954.png
   │  │  ├─ Pasted image 20241023155414.png
   │  │  ├─ Pasted image 20241029131720.png
   │  │  ├─ Pasted image 20241030150928.png
   │  │  ├─ Pasted image 20241031160724.png
   │  │  ├─ Pasted image 20241031161750.png
   │  │  ├─ Pasted image 20241031161753.png
   │  │  ├─ Pasted image 20241031162846.png
   │  │  ├─ Pasted image 20241031163552.png
   │  │  ├─ Pasted image 20241031163951.png
   │  │  ├─ Pasted image 20241031164306.png
   │  │  ├─ Pasted image 20241111153859.png
   │  │  ├─ Pasted image 20241209155702.png
   │  │  ├─ Pasted image 20241209160204.png
   │  │  ├─ Pasted image 20241209160242.png
   │  │  ├─ Pasted image 20241209162255.png
   │  │  ├─ Pasted image 20241212100933.png
   │  │  ├─ Pasted image 20241212103331.png
   │  │  ├─ Pasted image 20241212121138.png
   │  │  ├─ Pasted image 20241212121253.png
   │  │  ├─ Pasted image 20241212121329.png
   │  │  ├─ Pasted image 20241212121416.png
   │  │  ├─ Pasted image 20241212121520.png
   │  │  ├─ Pasted image 20241212121715.png
   │  │  ├─ Pasted image 20241212121738.png
   │  │  ├─ Pasted image 20241212121756.png
   │  │  ├─ Pasted image 20241212121832.png
   │  │  ├─ Pasted image 20241213131953.png
   │  │  ├─ Pasted image 20250102093338.png
   │  │  ├─ Pasted image 20250102093403.png
   │  │  ├─ Pasted image 20250103113934.png
   │  │  ├─ Pasted image 20250103114135.png
   │  │  ├─ Pasted image 20250114112020.png
   │  │  ├─ Pasted image 20250114112133.png
   │  │  ├─ Pasted image 20250115142045.png
   │  │  ├─ Pasted image 20250115142330.png
   │  │  ├─ Pasted image 20250626153331.png
   │  │  ├─ Pasted image 20250627083757.png
   │  │  ├─ Pasted image 20250627084309.png
   │  │  ├─ Pasted image 20250627090236.png
   │  │  ├─ Pasted image 20250721165554.png
   │  │  ├─ Pasted image 20250721165650.png
   │  │  ├─ Pasted image 20250722101543.png
   │  │  ├─ Pasted image 20250722103913.png
   │  │  ├─ Pasted image 20250722103935.png
   │  │  ├─ Pasted image 20250722103956.png
   │  │  ├─ Pasted image 20250910112715.png
   │  │  ├─ Pasted image 20250925094805.png
   │  │  ├─ Pasted image 20250925094929.png
   │  │  ├─ Pasted image 20250925094939.png
   │  │  ├─ Pasted image 20250925095046.png
   │  │  ├─ Pasted image 20250925095531.png
   │  │  ├─ Pasted image 20250925095744.png
   │  │  ├─ Pasted image 20250925101417.png
   │  │  ├─ Pasted image 20251114140806.png
   │  │  ├─ Pasted image 20251118153810.png
   │  │  ├─ Pasted image 20251120140309.png
   │  │  ├─ Pasted image 20251209152354.png
   │  │  ├─ Pasted image 20251209152536.png
   │  │  ├─ Pasted image 20251209152707.png
   │  │  ├─ Pasted image 20251209152958.png
   │  │  ├─ Pasted image 20251209153825.png
   │  │  ├─ Paylocity & Production Wireframes 1.pdf
   │  │  ├─ Paylocity & Production Wireframes.pdf
   │  │  ├─ PioneerRx Pipeline Spec.md
   │  │  ├─ Render v0.1.png
   │  │  ├─ render_Bg_final 1.pdf
   │  │  ├─ render_Bg_final.pdf
   │  │  ├─ Sample Text.md
   │  │  ├─ scripts
   │  │  ├─ Simple Data Health Dashboard.md
   │  │  ├─ Single Task version 1.md
   │  │  ├─ styles
   │  │  ├─ Testing.md
   │  │  ├─ Untitled 2 2.md
   │  │  ├─ Untitled 2.md
   │  │  ├─ Untitled 3.md
   │  │  ├─ Untitled.md
   │  │  ├─ web-box-custom-white.png
   │  │  ├─ Welcome 2.md
   │  │  ├─ Welcome.md
   │  │  └─ _Resources
   │  │     ├─ Fonts
   │  │     ├─ Icons
   │  │     │  ├─ favicons
   │  │     │  │  └─ favicon-32x32.png
   │  │     │  ├─ remix-icons
   │  │     │  │  ├─ Archive2Fill.svg
   │  │     │  │  ├─ BookOpenFill.svg
   │  │     │  │  ├─ BracesFill.svg
   │  │     │  │  ├─ Briefcase4Fill.svg
   │  │     │  │  ├─ CalendarTodoFill.svg
   │  │     │  │  ├─ ChatQuoteFill.svg
   │  │     │  │  ├─ CodeBoxFill.svg
   │  │     │  │  ├─ Folder2Fill.svg
   │  │     │  │  ├─ PaletteFill.svg
   │  │     │  │  ├─ PlaneFill.svg
   │  │     │  │  ├─ QuestionFill.svg
   │  │     │  │  ├─ StackFill.svg
   │  │     │  │  ├─ StickyNoteFill.svg
   │  │     │  │  └─ User3Fill.svg
   │  │     │  ├─ remix-icons.zip
   │  │     │  ├─ rpg-awesome
   │  │     │  │  ├─ CogWheel.svg
   │  │     │  │  └─ Sun.svg
   │  │     │  └─ rpg-awesome.zip
   │  │     ├─ Images
   │  │     │  ├─ render_pbi_theme_v0.json
   │  │     │  └─ render_pbi_theme_v0.txt
   │  │     └─ style-settings.json
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