+++
title = 'init rusn'
date = '2025-01-05T16:10:52+07:00'
draft = false
authors = ['viridi']
tags = ['rusn']
categories = ['notes']
url = '25a10'
+++
Initialize a raw, unstructured, spontaneous note system.
<!--more-->

+ Create a GitHub repository with name `rusn`. \
  e.g. https://github.com/dudung/rusn.
+ Clone it to local computer.
  ```
  $ git clone https://github.com/dudung/rusn
  Cloning into 'rusn'...
  remote: Enumerating objects: 4, done.
  remote: Counting objects: 100% (4/4), done.
  remote: Compressing objects: 100% (3/3), done.
  remote: Total 4 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
  Receiving objects: 100% (4/4), done.
  ```
+ Create a new Hugo site.
  ```
  $ hugo new site rusn -f
  Congratulations! Your new Hugo site was created in M:\rusn.

  Just a few more steps...

  1. Change the current directory to M:\rusn.
  2. Create or install a theme:
     - Create a new theme with the command "hugo new theme <THEMENAME>"
     - Or, install a theme from https://themes.gohugo.io/
  3. Edit hugo.toml, setting the "theme" property to the theme name.
  4. Create new content with the command "hugo new content <SECTIONNAME>\<FILENAME>.<FORMAT>".
  5. Start the embedded web server with the command "hugo server --buildDrafts".

  See documentation at https://gohugo.io/.
  ```
+ Create new Hugo theme with name `default`.
  ```
  $ hugo new theme default
  Creating new theme in M:\rusn\themes\default
  ```
+ Change current directory to `rusn`.
  ```
  $ cd rusn
  ```
+ Delete examples posts.
  ```
  $ rm -r themes/default/content/*
  ```
+ Open `hugo.toml` with nano.
  ```
  $ nano hugo.toml
  ```
+ Modify it to have following content.
  ```
  baseURL = 'https://dudung.github.io/rusn'
  languageCode = 'en-us'
  title = 'rusn'
  theme = 'default'
  
  enableEmoji = true
  
  [pagination]
  pagerSize = 20
  
  [taxonomies]
    author = "authors"
    tag = "tags"
    category = "categories"

  [[menu.main]]
    name = 'Home'
    weight = 2
    identifier = 'home'
    url = '/'

  [[menu.main]]
    name = 'Tags'
    weight = 1
    identifier = 'tags'
    url = '/tags'

  [[menu.main]]
    name = 'Cats'
    weight = 0
    identifier = 'cats'
    url = '/categories'
  ```
+ Add `_index.md` under `content/authors/auser`, where `auser` will be used in a post front matter as an author.
+ Copy `_default`, `partials`, `shortcodes` folders and their content from https://github.com/dudung/rust/tree/main/layouts to `layouts` folder.
+ Copy `footer.css` and `header.css` from https://github.com/dudung/rust/tree/main/static/css to `static/css` folder.
+ Modify `baseof.html` in `layouts/_default` to point top the previous CSS files.
+ Copy `index.html` from https://github.com/dudung/rust/tree/main/layouts to `layouts`.
+ Copy `main.css` from https://github.com/dudung/rust/tree/main/assets/css to `assets/css`.
+ Create notes in `content/notes` folder.
+ Test it and fix it as necessary.
  ```
  hugo server
  Watching for changes in M:\rusn\{archetypes,assets,content,data,i18n,layouts,static,themes}
  Watching for config changes in M:\rusn\hugo.toml, M:\rusn\themes\default\hugo.toml
  Start building sites …
  hugo v0.139.3-2f6864387cd31b975914e8373d4bf38bddbd47bc+extended windows/amd64 BuildDate=2024-11-29T15:36:56Z VendorInfo=gohugoio


                     | EN
  -------------------+-----
    Pages            | 17
    Paginator pages  |  0
    Non-page files   |  0
    Static files     |  1
    Processed images |  0
    Aliases          |  0
    Cleaned          |  0

  Built in 112 ms
  Environment: "development"
  Serving pages from disk
  Running in Fast Render Mode. For full rebuilds on change: hugo server --disableFastRender
  Web Server is available at http://localhost:1313/rusn/ (bind address 127.0.0.1)
  Press Ctrl+C to stop

  Change detected, rebuilding site (#1).
  2025-01-05 16:35:33.754 +0700
  Template added /index.html
  Web Server is available at http://localhost:1313/rusn/ (bind address 127.0.0.1)
  Total in 64 ms
  ```
+ Add files.
  ```
  $ git add .
  warning: in the working copy of 'archetypes/default.md', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'content/notes/25/a/00-wed-010125.md', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'content/notes/25/a/01-thu-020125.md', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'content/notes/25/a/03-sat-040125.md', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'content/notes/25/a/04-sun-050125.md', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'content/notes/25/a/05-hugo-tips.md', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'content/notes/25/a/06-hugo-intro.md', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'content/notes/25/a/07-hugo-sites-key-features.md', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'content/notes/25/a/08-hugo-perform-score.md', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'content/notes/25/a/09-static-site.md', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'content/notes/25/a/10-init-rusn.md', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'hugo.toml', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'themes/default/LICENSE', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'themes/default/README.md', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'themes/default/archetypes/default.md', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'themes/default/assets/css/main.css', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'themes/default/assets/js/main.js', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'themes/default/hugo.toml', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'themes/default/layouts/_default/baseof.html', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'themes/default/layouts/_default/home.html', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'themes/default/layouts/_default/list.html', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'themes/default/layouts/_default/single.html', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'themes/default/layouts/partials/footer.html', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'themes/default/layouts/partials/head.html', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'themes/default/layouts/partials/head/css.html', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'themes/default/layouts/partials/head/js.html', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'themes/default/layouts/partials/header.html', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'themes/default/layouts/partials/menu.html', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'themes/default/layouts/partials/terms.html', LF will be replaced by CRLF the next time Git touches it
  warning: in the working copy of 'themes/default/theme.toml', LF will be replaced by CRLF the next time Git touches it
  ```
+ Commit changes.
  ```
  $ git commit -a -m "new files and folder"
  [main 4d7f56b] new files and folder
   58 files changed, 1067 insertions(+)
   create mode 100644 .gitignore
   create mode 100644 archetypes/default.md
   create mode 100644 content/_index.md
   create mode 100644 content/authors/arimasen/_index.md
   create mode 100644 content/authors/dasch/_index.md
   create mode 100644 content/authors/renik/_index.md
   create mode 100644 content/authors/viridi/_index.md
   create mode 100644 content/notes/25/a/00-wed-010125.md
   create mode 100644 content/notes/25/a/01-thu-020125.md
   create mode 100644 content/notes/25/a/02-fri-030125.md
   create mode 100644 content/notes/25/a/03-sat-040125.md
   create mode 100644 content/notes/25/a/04-sun-050125.md
   create mode 100644 content/notes/25/a/05-hugo-tips.md
   create mode 100644 content/notes/25/a/06-hugo-intro.md
   create mode 100644 content/notes/25/a/07-hugo-sites-key-features.md
   create mode 100644 content/notes/25/a/08-hugo-perform-score.md
   create mode 100644 content/notes/25/a/09-static-site.md
   create mode 100644 content/notes/25/a/10-init-rusn.md
   create mode 100644 hugo.toml
   create mode 100644 layouts/_default/_markup/render-blockquote.html
   create mode 100644 layouts/_default/_markup/render-codeblock-mermaid.html
   create mode 100644 layouts/_default/_markup/render-link.html
   create mode 100644 layouts/_default/all-regular-pages.html
   create mode 100644 layouts/_default/baseof.html
   create mode 100644 layouts/notes/single.html
   create mode 100644 layouts/partials/footer.html
   create mode 100644 layouts/partials/notes/math.html
   create mode 100644 layouts/partials/reading-time.html
   create mode 100644 layouts/partials/script/chartjs.html
   create mode 100644 layouts/partials/script/inner.html
   create mode 100644 layouts/shortcodes/3dmoljs.html
   create mode 100644 layouts/shortcodes/abcjs.html
   create mode 100644 layouts/shortcodes/mermaid.html
   create mode 100644 layouts/shortcodes/ref.html
   create mode 100644 layouts/shortcodes/scatter.html
   create mode 100644 layouts/shortcodes/twocolumn.html
   create mode 100644 layouts/shortcodes/url.html
   create mode 100644 static/css/footer.css
   create mode 100644 static/css/header.css
   create mode 100644 themes/default/LICENSE
   create mode 100644 themes/default/README.md
   create mode 100644 themes/default/archetypes/default.md
   create mode 100644 themes/default/assets/css/main.css
   create mode 100644 themes/default/assets/js/main.js
   create mode 100644 themes/default/hugo.toml
   create mode 100644 themes/default/layouts/_default/baseof.html
   create mode 100644 themes/default/layouts/_default/home.html
   create mode 100644 themes/default/layouts/_default/list.html
   create mode 100644 themes/default/layouts/_default/single.html
   create mode 100644 themes/default/layouts/partials/footer.html
   create mode 100644 themes/default/layouts/partials/head.html
   create mode 100644 themes/default/layouts/partials/head/css.html
   create mode 100644 themes/default/layouts/partials/head/js.html
   create mode 100644 themes/default/layouts/partials/header.html
   create mode 100644 themes/default/layouts/partials/menu.html
   create mode 100644 themes/default/layouts/partials/terms.html
   create mode 100644 themes/default/static/favicon.ico
   create mode 100644 themes/default/theme.toml
  ```
+ Push commits to GitHub.
  ```
  $ git push
  Enumerating objects: 92, done.
  Counting objects: 100% (92/92), done.
  Delta compression using up to 16 threads
  Compressing objects: 100% (73/73), done.
  Writing objects: 100% (91/91), 19.88 KiB | 496.00 KiB/s, done.
  Total 91 (delta 3), reused 0 (delta 0), pack-reused 0
  remote: Resolving deltas: 100% (3/3), done.
  To https://github.com/dudung/rusn
     a9c055c..4d7f56b  main -> main
  ```
+ Visit https://github.com/dudung/rusn/settings/pages.
+ Under Build and deployment change Source to GitHub Actions.
+ Choose browse all workflows.
+ Type `hugo` in the Search workflows field.
+ Click Configure.
+ Click Commit changes..., the green button on the right.
+ Click Commit changes, the green button on the bottom.
+ Wait a couple of minutes.
+ Visit https://dudung.github.io/rusn/.
+ Pull the last changes.
  ```
  $ git pull
  remote: Enumerating objects: 6, done.
  remote: Counting objects: 100% (6/6), done.
  remote: Compressing objects: 100% (3/3), done.
  remote: Total 5 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
  Unpacking objects: 100% (5/5), 1.91 KiB | 139.00 KiB/s, done.
  From https://github.com/dudung/rusn
     4d7f56b..36b0d2a  main       -> origin/main
  Updating 4d7f56b..36b0d2a
  Fast-forward
   .github/workflows/hugo.yml | 74 ++++++++++++++++++++++++++++++++++++++++++++++
   1 file changed, 74 insertions(+)
   create mode 100644 .github/workflows/hugo.yml
  ```
+ Commit last changes if any and push it.
  ```
  $ git commit -a -m "finish init rusn"
  warning: in the working copy of 'content/notes/25/a/10-init-rusn.md', LF will be replaced by CRLF the next time Git touches it
  [main 15b0424] finish init rusn
   1 file changed, 141 insertions(+), 1 deletion(-)

  $ git push
  Enumerating objects: 13, done.
  Counting objects: 100% (13/13), done.
  Delta compression using up to 16 threads
  Compressing objects: 100% (5/5), done.
  Writing objects: 100% (7/7), 2.89 KiB | 1.44 MiB/s, done.
  Total 7 (delta 3), reused 0 (delta 0), pack-reused 0
  remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
  To https://github.com/dudung/rusn
     36b0d2a..15b0424  main -> main
  ```
