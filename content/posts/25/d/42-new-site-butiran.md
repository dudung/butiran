+++
title = 'new site butiran'
date = '2025-04-15T17:18:35+07:00'
draft = true
type = 'notes'
authors = ['viridi', 'arimasen', 'renik', 'dasch']
tags = ['notes']
categories = ['butiran']
url = '25d42'
+++

<!--more-->

## create new repository
Visit https://github.com/new using any browsers.


## clone repository
In a CLI perform following.

```bash
Sparisoma Viridi@LAPTOP-FOL5T5OD MINGW64 /m
$ git clone https://github.com/dudung/butiran butiran
Cloning into 'butiran'...
remote: Enumerating objects: 7, done.
remote: Counting objects: 100% (7/7), done.
remote: Compressing objects: 100% (7/7), done.
remote: Total 7 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
Receiving objects: 100% (7/7), done.
Resolving deltas: 100% (1/1), done.
```


## download hugo installer
Visit https://github.com/gohugoio/hugo/releases/tag/v0.146.4 using any browsers.

```txt
hugo_extended_0.146.4_windows-amd64.zip
18.5 MB
20 hours ago

https://github.com/gohugoio/hugo/releases/download/v0.146.4/hugo_extended_0.146.4_windows-amd64.zip
```


## install hugo
In a CLI perform following.

```bash
Sparisoma Viridi@LAPTOP-FOL5T5OD MINGW64 /m/butiran (main)
$ hugo version
hugo v0.146.4-985af1c097fd6a7830ba1ab307dc0d959663e344+extended windows/amd64 BuildDate=2025-04-14T13:10:30Z VendorInfo=gohugoio
```


## create new site
In a CLI perform following.

```bash
Sparisoma Viridi@LAPTOP-FOL5T5OD MINGW64 /m
$ hugo new site butiran
Error: M:\butiran already exists and is not empty. See --force.

Sparisoma Viridi@LAPTOP-FOL5T5OD MINGW64 /m
$ hugo new site butiran --force
Congratulations! Your new Hugo site was created in M:\butiran.

Just a few more steps...

1. Change the current directory to M:\butiran.
2. Create or install a theme:
   - Create a new theme with the command "hugo new theme <THEMENAME>"
   - Or, install a theme from https://themes.gohugo.io/
3. Edit hugo.toml, setting the "theme" property to the theme name.
4. Create new content with the command "hugo new content <SECTIONNAME>\<FILENAME>.<FORMAT>".
5. Start the embedded web server with the command "hugo server --buildDrafts".

See documentation at https://gohugo.io/.
```


## create new theme
In a CLI perform following.

```bash
Sparisoma Viridi@LAPTOP-FOL5T5OD MINGW64 /m/butiran (main)
$ hugo new theme default
Creating new theme in M:\butiran\themes\default
```


## remove default content
In a CLI perform following.

```bash
Sparisoma Viridi@LAPTOP-FOL5T5OD MINGW64 /m/butiran (main)
$ rm -r themes/butiran/content/*
```


## edit hugo.toml
In a CLI perform following.

```bash
Sparisoma Viridi@LAPTOP-FOL5T5OD MINGW64 /m/butiran (main)
$ nano hugo.toml
```

Then, edit it to have following content.

```toml
baseURL = 'https://dudung.github.io/butiran'
languageCode = 'en-us'
title = 'butiran'
theme = 'butiran'

ignoreLogs = ['warning-goldmark-raw-html']
enableEmoji = true

[pagination]
pagerSize = 36

[taxonomies]
  author = "authors"
  tag = "tags"
  category = "categories"

[[menu.main]]
  name = 'Home'
  weight = 0
  identifier = 'home'
  url = '/'
```


## view hugo.toml
In a CLI perform following.

```bash
Sparisoma Viridi@LAPTOP-FOL5T5OD MINGW64 /m/butiran (main)
$ cat hugo.toml
baseURL = 'https://dudung.github.io/butiran'
languageCode = 'en-us'
title = 'butiran'
theme = 'butiran'

ignoreLogs = ['warning-goldmark-raw-html']
enableEmoji = true

[pagination]
pagerSize = 36

[taxonomies]
  author = "authors"
  tag = "tags"
  category = "categories"

[[menu.main]]
  name = 'Home'
  weight = 0
  identifier = 'home'
  url = '/'
```


## create new post
In a CLI perform following.

```bash
Sparisoma Viridi@LAPTOP-FOL5T5OD MINGW64 /m/butiran (main)
$ hugo new content/posts/25/d/42-new-site-butiran.md
Content "M:\\butiran\\content\\posts\\25\\d\\42-new-site-butiran.md" created
```


## launch site
In a CLI perform following.

```bash
Sparisoma Viridi@LAPTOP-FOL5T5OD MINGW64 /m/butiran (main)
$ hugo server -D
Watching for changes in M:\butiran\{archetypes,assets,content,data,i18n,layouts,static,themes}
Watching for config changes in M:\butiran\hugo.toml, M:\butiran\themes\butiran\hugo.toml
Start building sites …
hugo v0.146.4-985af1c097fd6a7830ba1ab307dc0d959663e344+extended windows/amd64 BuildDate=2025-04-14T13:10:30Z VendorInfo=gohugoio


                   | EN
-------------------+-----
  Pages            |  9
  Paginator pages  |  0
  Non-page files   |  0
  Static files     |  1
  Processed images |  0
  Aliases          |  0
  Cleaned          |  0

Built in 18 ms
Environment: "development"
Serving pages from disk
Running in Fast Render Mode. For full rebuilds on change: hugo server --disableFastRender
Web Server is available at http://localhost:1313/butiran/ (bind address 127.0.0.1)
Press Ctrl+C to stop
```


## test site
Open http://localhost:1313/butiran/ in a browser or in a CLI perform following.

```bash
Sparisoma Viridi@LAPTOP-FOL5T5OD MINGW64 /m/butiran (main)
$ curl http://localhost:1313/butiran/
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   782  100   782    0     0   3763      0 --:--:-- --:--:-- --:--:--  3777<!DOCTYPE html>
<html lang="en-us" dir="ltr">
<head>
        <meta name="generator" content="Hugo 0.146.4"><script src="/butiran/livereload.js?mindelay=10&amp;v=2&amp;port=1313&amp;path=butiran/livereload" data-no-instant defer></script>
  <meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<title>butiran</title>

    <link rel="stylesheet" href="/butiran/css/main.css">


      <script src="/butiran/js/main.js"></script>


</head>
<body>
  <header>
    <h1>butiran</h1>

  <nav>
    <ul>
    <li>
      <a href="/butiran/">Home</a>
    </li>
    </ul>
  </nav>


  </header>
  <main>



    <h2><a href="/butiran/25d42/">new site butiran</a></h2>



  </main>
  <footer>
    <p>Copyright 2025. All rights reserved.</p>

  </footer>
</body>
</html>
```


## check changes
In a CLI perform following.

```bash
Sparisoma Viridi@LAPTOP-FOL5T5OD MINGW64 /m/butiran (main)
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .hugo_build.lock
        archetypes/
        content/
        hugo.toml
        public/
        themes/

nothing added to commit but untracked files present (use "git add" to track)
```


## stage changes
In a CLI perform following.

```bash
Sparisoma Viridi@LAPTOP-FOL5T5OD MINGW64 /m/butiran (main)
$ git add .
warning: in the working copy of 'archetypes/default.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'content/posts/25/d/42-new-site-butiran.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'hugo.toml', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/25d42/index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/authors/index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/authors/index.xml', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/authors/viridi/index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/authors/viridi/index.xml', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/categories/butiran/index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/categories/butiran/index.xml', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/categories/index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/categories/index.xml', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/css/main.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/index.xml', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/js/main.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/posts/index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/posts/index.xml', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/posts/post-1/index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/posts/post-2/index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/posts/post-3/index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/sitemap.xml', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/tags/blue/index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/tags/blue/index.xml', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/tags/green/index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/tags/green/index.xml', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/tags/index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/tags/index.xml', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/tags/notes/index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/tags/notes/index.xml', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/tags/red/index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/tags/red/index.xml', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'themes/butiran/archetypes/default.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'themes/butiran/assets/css/main.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'themes/butiran/assets/js/main.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'themes/butiran/hugo.toml', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'themes/butiran/layouts/_partials/footer.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'themes/butiran/layouts/_partials/head.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'themes/butiran/layouts/_partials/head/css.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'themes/butiran/layouts/_partials/head/js.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'themes/butiran/layouts/_partials/header.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'themes/butiran/layouts/_partials/menu.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'themes/butiran/layouts/_partials/terms.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'themes/butiran/layouts/baseof.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'themes/butiran/layouts/home.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'themes/butiran/layouts/list.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'themes/butiran/layouts/single.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'themes/butiran/layouts/taxonomy.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'themes/butiran/layouts/term.html', LF will be replaced by CRLF the next time Git touches it
```


## commit changes
In a CLI perform following.

```bash
Sparisoma Viridi@LAPTOP-FOL5T5OD MINGW64 /m/butiran (main)
$ git commit -a -m "new site, theme, post"
[main bb6c96f] new site, theme, post
 54 files changed, 1637 insertions(+)
 create mode 100644 .hugo_build.lock
 create mode 100644 archetypes/default.md
 create mode 100644 content/posts/25/d/42-new-site-butiran.md
 create mode 100644 hugo.toml
 create mode 100644 public/25d42/index.html
 create mode 100644 public/authors/index.html
 create mode 100644 public/authors/index.xml
 create mode 100644 public/authors/viridi/index.html
 create mode 100644 public/authors/viridi/index.xml
 create mode 100644 public/categories/butiran/index.html
 create mode 100644 public/categories/butiran/index.xml
 create mode 100644 public/categories/index.html
 create mode 100644 public/categories/index.xml
 create mode 100644 public/css/main.css
 create mode 100644 public/favicon.ico
 create mode 100644 public/index.html
 create mode 100644 public/index.xml
 create mode 100644 public/js/main.js
 create mode 100644 public/js/main.js.map
 create mode 100644 public/posts/index.html
 create mode 100644 public/posts/index.xml
 create mode 100644 public/posts/post-1/index.html
 create mode 100644 public/posts/post-2/index.html
 create mode 100644 public/posts/post-3/bryce-canyon.jpg
 create mode 100644 public/posts/post-3/index.html
 create mode 100644 public/sitemap.xml
 create mode 100644 public/tags/blue/index.html
 create mode 100644 public/tags/blue/index.xml
 create mode 100644 public/tags/green/index.html
 create mode 100644 public/tags/green/index.xml
 create mode 100644 public/tags/index.html
 create mode 100644 public/tags/index.xml
 create mode 100644 public/tags/notes/index.html
 create mode 100644 public/tags/notes/index.xml
 create mode 100644 public/tags/red/index.html
 create mode 100644 public/tags/red/index.xml
 create mode 100644 themes/butiran/archetypes/default.md
 create mode 100644 themes/butiran/assets/css/main.css
 create mode 100644 themes/butiran/assets/js/main.js
 create mode 100644 themes/butiran/hugo.toml
 create mode 100644 themes/butiran/layouts/_partials/footer.html
 create mode 100644 themes/butiran/layouts/_partials/head.html
 create mode 100644 themes/butiran/layouts/_partials/head/css.html
 create mode 100644 themes/butiran/layouts/_partials/head/js.html
 create mode 100644 themes/butiran/layouts/_partials/header.html
 create mode 100644 themes/butiran/layouts/_partials/menu.html
 create mode 100644 themes/butiran/layouts/_partials/terms.html
 create mode 100644 themes/butiran/layouts/baseof.html
 create mode 100644 themes/butiran/layouts/home.html
 create mode 100644 themes/butiran/layouts/list.html
 create mode 100644 themes/butiran/layouts/single.html
 create mode 100644 themes/butiran/layouts/taxonomy.html
 create mode 100644 themes/butiran/layouts/term.html
 create mode 100644 themes/butiran/static/favicon.ico
```


## push changes
In a CLI perform following.

```bash
Sparisoma Viridi@LAPTOP-FOL5T5OD MINGW64 /m/butiran (main)
$ git push
Enumerating objects: 90, done.
Counting objects: 100% (90/90), done.
Delta compression using up to 16 threads
Compressing objects: 100% (73/73), done.
Writing objects: 100% (89/89), 39.66 KiB | 1.28 MiB/s, done.
Total 89 (delta 19), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (19/19), done.
To https://github.com/dudung/butiran
   6f26540..5b442ce  main -> main
```


## view repository
Visit https://github.com/dudung/butiran to view the changes on the repository.

For example a point in the history is available on https://github.com/dudung/butiran/tree/bb6c96f85fd616849f56f615d180cd92a343d4ab.


## other actions
Copy authors
+ from notes: https://github.com/dudung/notes/tree/main/content/authors
+ to butiran: https://github.com/dudung/butiran/tree/main/content/authors

Add `.gitignore` with following content.

```txt
# Shortcuts
cmd.lnk

# Folders
public

# Hugo
.hugo_build.lock
```

## to-do
+ Change order of creating `.gitignore` file.
+ Delete information related to `.gitignore` content.
+ Rename `butiran` to `default` for themes.
+ Fix problem by rendering while change CSS and template.
