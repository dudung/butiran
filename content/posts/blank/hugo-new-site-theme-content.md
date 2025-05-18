+++
title = 'Hugo new site, theme, content'
date = 2024-01-10T20:38:58+07:00
draft = false
tags = ['hugo']
+++
Create Hugo new site, theme and content using cmd and git bash on Windows 11.
<!--more-->


## clone github repo
```
$ git clone https://github.com/dudung/blank
Cloning into 'blank'...
remote: Enumerating objects: 7, done.
remote: Counting objects: 100% (7/7), done.
remote: Compressing objects: 100% (5/5), done.
remote: Total 7 (delta 0), reused 0 (delta 0), pack-reused 0
Receiving objects: 100% (7/7), done.
```


## force to create hugo new site
```
D:\>hugo new site blank -f
Congratulations! Your new Hugo site was created in D:\blank.

Just a few more steps...

1. Change the current directory to D:\blank.
2. Create or install a theme:
   - Create a new theme with the command "hugo new theme <THEMENAME>"
   - Install a theme from https://themes.gohugo.io/
3. Edit hugo.toml, setting the "theme" property to the theme name.
4. Create new content with the command "hugo new content <SECTIONNAME>\<FILENAME>.<FORMAT>".
5. Start the embedded web server with the command "hugo server --buildDrafts".

See documentation at https://gohugo.io/.
```


## create default theme
```
D:\>cd blank

D:\blank>hugo new theme default
Creating new theme in D:\blank\themes\default
```


## modify hugo.toml
```
D:\blank>notepad hugo.toml
```

```
baseURL = 'https://dudung.github.io/blank'
languageCode = 'en-us'
title = 'blank'
theme = 'default'
```


## delete generated posts
```
D:\blank>del themes\default\content\_index.md

D:\blank>del themes\default\content\posts\*.*
D:\blank\themes\default\content\posts\*.*, Are you sure (Y/N)? y

D:\blank>del themes\default\content\posts\post-3\*
D:\blank\themes\default\content\posts\post-3\*, Are you sure (Y/N)? y

D:\blank>rmdir themes\default\content\posts\post-3

D:\blank>rmdir themes\default\content\posts

D:\blank>rmdir themes\default\content
```


## create new post
```
D:\blank>hugo new content posts\hugo-new-site-theme-content.md
Content "D:\\blank\\content\\posts\\hugo-new-site-theme-content.md" created
```

```
D:\blank>notepad content\posts\hugo-new-site-theme-content.md
```


## run hugo server
```
D:\blank>hugo server
Watching for changes in D:\blank\{archetypes,assets,content,data,i18n,layouts,static,themes}
Watching for config changes in D:\blank\hugo.toml, D:\blank\themes\default\hugo.toml
Start building sites …
hugo v0.118.2-da7983ac4b94d97d776d7c2405040de97e95c03d+extended windows/amd64 BuildDate=2023-08-31T11:23:51Z VendorInfo=gohugoio


                   | EN
-------------------+-----
  Pages            |  9
  Paginator pages  |  0
  Non-page files   |  0
  Static files     |  1
  Processed images |  0
  Aliases          |  0
  Sitemaps         |  1
  Cleaned          |  0

Built in 10 ms
Environment: "development"
Serving pages from memory
Running in Fast Render Mode. For full rebuilds on change: hugo server --disableFastRender
Web Server is available at http://localhost:1313/blank/ (bind address 127.0.0.1)
Press Ctrl+C to stop
```


## commit changes
```
$ cd blank

$ git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .hugo_build.lock
        archetypes/
        content/
        hugo.toml
        themes/

nothing added to commit but untracked files present (use "git add" to track)

$ git add .
warning: in the working copy of 'archetypes/default.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'content/posts/hugo-new-site-theme-content.md', LF will be replaced by CRLF the next time Git touches it
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

$ git commit -a -m "new files and folders"
[main 5e8c91a] new files and folders
 23 files changed, 378 insertions(+)
 create mode 100644 .hugo_build.lock
 create mode 100644 archetypes/default.md
 create mode 100644 content/posts/hugo-new-site-theme-content.md
 create mode 100644 hugo.toml
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
 
$ git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean

$ git push
Enumerating objects: 38, done.
Counting objects: 100% (38/38), done.
Delta compression using up to 16 threads
Compressing objects: 100% (29/29), done.
Writing objects: 100% (37/37), 7.81 KiB | 2.60 MiB/s, done.
Total 37 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), done.
To https://github.com/dudung/blank
   01833f5..5e8c91a  main -> main
```

## visit repo and create github actions
1. https://github.com/dudung/blank
2. https://github.com/dudung/blank/settings
3. https://github.com/dudung/blank/settings/pages
4. Source --> GitHub Actions
5. Browse all workflows --> https://github.com/dudung/blank/actions/new
6. Pages --> Hugo --> Configure
7. hugo.yml --> Commit changes... --> Commit changes
8. https://github.com/dudung/blank
9. https://dudung.github.io/blank/


## git
```
$ git pull
remote: Enumerating objects: 6, done.
remote: Counting objects: 100% (6/6), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 5 (delta 1), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (5/5), 1.66 KiB | 284.00 KiB/s, done.
From https://github.com/dudung/blank
   fe64fb3..ca9f9bb  main       -> origin/main
Merge made by the 'ort' strategy.
 .github/workflows/hugo.yml | 75 ++++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 75 insertions(+)
 create mode 100644 .github/workflows/hugo.yml
```

```
$ git commit -a -m "update the post"
warning: in the working copy of 'content/posts/hugo-new-site-theme-content.md', LF will be replaced by CRLF the next time Git touches it
[main 20be65f] update the post
 1 file changed, 21 insertions(+)

$ git push
Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 16 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (5/5), 668 bytes | 668.00 KiB/s, done.
Total 5 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/dudung/blank
   a7a95c7..20be65f  main -> main
```
