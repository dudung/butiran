+++
title = 'new site butiran'
date = '2025-04-15T17:18:35+07:00'
draft = true
type = 'notes'
authors = ['viridi']
tags = ['notes']
categories = ['butiran']
url = '25d42'
+++


## create new repository
Visit https://github.com/new using any browsers.


## clone repository
In a CLI perform following.

```
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

```
hugo_extended_0.146.4_windows-amd64.zip
18.5 MB
20 hours ago

https://github.com/gohugoio/hugo/releases/download/v0.146.4/hugo_extended_0.146.4_windows-amd64.zip
```

## install hugo
In a CLI perform following.

```
Sparisoma Viridi@LAPTOP-FOL5T5OD MINGW64 /m/butiran (main)
$ hugo version
hugo v0.146.4-985af1c097fd6a7830ba1ab307dc0d959663e344+extended windows/amd64 BuildDate=2025-04-14T13:10:30Z VendorInfo=gohugoio
```

## create new site
In a CLI perform following.

```
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

```
Sparisoma Viridi@LAPTOP-FOL5T5OD MINGW64 /m/butiran (main)
$ hugo new theme butiran
Creating new theme in M:\butiran\themes\butiran
```

## remove default content
In a CLI perform following.

```
Sparisoma Viridi@LAPTOP-FOL5T5OD MINGW64 /m/butiran (main)
$ rm -r themes/butiran/content/*
```

## edit hugo.toml
In a CLI perform following.

```
Sparisoma Viridi@LAPTOP-FOL5T5OD MINGW64 /m/butiran (main)
$ nano hugo.toml
```

## view hugo.toml
In a CLI perform following.

```
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

```
Sparisoma Viridi@LAPTOP-FOL5T5OD MINGW64 /m/butiran (main)
$ hugo new content/posts/25/d/42-new-site-butiran.md
Content "M:\\butiran\\content\\posts\\25\\d\\42-new-site-butiran.md" created
```

## launch site
In a CLI perform following.

```
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

```
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

## commit changes