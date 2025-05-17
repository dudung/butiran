+++
title = 'first post again'
date = 2024-10-11T17:18:15+07:00
draft = false
tags = ['bug2', 'hugo']
authors = ['viridi']
url = '24j14'
+++
Create a new post for a new Hugo site (again) with minimum customization.

<!--more-->

To create a Hugo site and deploy it to GitHub following steps are for Windows 11.

1. Open File Explorer.
2. Navigate to a drive or folder.
3. Right click, Show more options, Open Git Bash here.
4. Clone new GitHub repository.
    ```
    $ git clone https://github.com/dudung/bug2 bug2
    Cloning into 'bug2'...
    remote: Enumerating objects: 4, done.
    remote: Counting objects: 100% (4/4), done.
    remote: Compressing objects: 100% (4/4), done.
    remote: Total 4 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
    Receiving objects: 100% (4/4), done.
    ```
5. Create a new Hugo site.
    ```
    $ hugo new site bug2 --force
    Congratulations! Your new Hugo site was created in M:\bug2.

    Just a few more steps...

    1. Change the current directory to M:\bug2.
    2. Create or install a theme:
       - Create a new theme with the command "hugo new theme <THEMENAME>"
       - Install a theme from https://themes.gohugo.io/
    3. Edit hugo.toml, setting the "theme" property to the theme name.
    4. Create new content with the command "hugo new content <SECTIONNAME>\<FILENAME>.<FORMAT>".
    5. Start the embedded web server with the command "hugo server --buildDrafts".

    See documentation at https://gohugo.io/.
    ```
6. Change active directory to the newly created folder.
    ```
    $ cd bug2
    ```
7. Create a new theme
    ```
    $ hugo new theme default
    Creating new theme in M:\bug2\themes\default
    ```
8. Edit `hugo.toml` as follow.
    ```
    baseURL = 'https://dudung.github.io/bug2'
    languageCode = 'en-us'
    title = 'bug 2'
    theme = 'default'

    enableEmoji = true

    ignoreErrors = ['error-missing-instagram-accesstoken']

    [taxonomies]
      author = "authors"
      tag = "tags"
      category = "categories"

    [[menu.main]]
      name = 'Home'
      weight = 1
      identifier = 'home'
      url = '/'
    ```
9. Create a new post.
    ```
    $ hugo new posts/00/first-post-again.md
    Content "M:\\bug2\\content\\posts\\00\\first-post-again.md" created
    ```
10. Edit the post, which is this one.
11. Remove sample posts in newly created theme.
    ```
    $ rm themes/default/content -r
    ```
12. Create `footer.html` file.
    ```
    $ mkdir layouts/partials

    $ cp themes/default/layouts/partials/footer.html layouts/partials
    ```
13. Edit the file.
    ```
    <p>
    Copyright Sparisoma Viridi {{ now.Year }}.
    All rights reserved.
    Unless stated otherwise in a post.
    </p>
    ```
14. Start Hugo server including draft posts.
    ```
    $ hugo server -D
    Watching for changes in M:\bug2\{archetypes,assets,content,data,i18n,layouts,static,themes}
    Watching for config changes in M:\bug2\hugo.toml, M:\bug2\themes\default\hugo.toml
    Start building sites …
    hugo v0.124.1-db083b05f16c945fec04f745f0ca8640560cf1ec+extended windows/amd64 BuildDate=2024-03-20T11:40:10Z VendorInfo=gohugoio


                       | EN
    -------------------+-----
      Pages            | 16
      Paginator pages  |  0
      Non-page files   |  0
      Static files     |  1
      Processed images |  0
      Aliases          |  0
      Cleaned          |  0

    Built in 9 ms
    Environment: "development"
    Serving pages from disk
    Running in Fast Render Mode. For full rebuilds on change: hugo server --disableFastRender
    Web Server is available at http://localhost:1313/bug2/ (bind address 127.0.0.1)
    Press Ctrl+C to stop
    ```
15. Open an internet browser and visit `http://localhost:1313/bug2/`.
16. Stop the server by pressing Ctrl+C.
17. Create .gitignore file.
    ```
    # shortcuts
    cmd.lnk

    # folders
    public
    slides
    ```
18. Update GitHub repository [`https://github.com/dudung/bug2`](https://github.com/dudung/bug2).
    ```
    $ git add .
    warning: in the working copy of 'archetypes/default.md', LF will be replaced by CRLF the next time Git touches it
    warning: in the working copy of 'content/posts/00/first-post-again.md', LF will be replaced by CRLF the next time Git touches it
    warning: in the working copy of 'hugo.toml', LF will be replaced by CRLF the next time Git touches it
    warning: in the working copy of 'layouts/partials/footer.html', LF will be replaced by CRLF the next time Git touches it
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

    $ git commit -a -m "new files"
    [main 0da303d] new files
     25 files changed, 299 insertions(+)
     create mode 100644 .gitignore
     create mode 100644 .hugo_build.lock
     create mode 100644 archetypes/default.md
     create mode 100644 content/posts/00/first-post-again.md
     create mode 100644 hugo.toml
     create mode 100644 layouts/partials/footer.html
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

    $ git push
    Enumerating objects: 43, done.
    Counting objects: 100% (43/43), done.
    Delta compression using up to 16 threads
    Compressing objects: 100% (29/29), done.
    Writing objects: 100% (42/42), 7.11 KiB | 2.37 MiB/s, done.
    Total 42 (delta 1), reused 0 (delta 0), pack-reused 0
    remote: Resolving deltas: 100% (1/1), done.
    To https://github.com/dudung/bug2
       6915531..0da303d  main -> main
    ```
19. Visit [`https://github.com/dudung/bug2/settings/pages`](https://github.com/dudung/bug2/settings/pages).
20. Change Source to GitHub Actions from previously Deploy from a branch to.
21. Visit [`https://github.com/dudung/bug2/actions/new`](https://github.com/dudung/bug2/actions/new).
22. Type \'hugo\' on Search workflows field.
23. Click Configure on Hugo workflow.
24. Edit as necessary and then click Commit changes..., the green button.
25. Visit GitHub Pages [`https://dudung.github.io/bug2/`](https://dudung.github.io/bug2/).

Futher information about customization Hugo template can be found [^lopez_2020].


[^lopez_2020]: Pedro Lopez, "Creating a Hugo Theme From Scratch", Retrolog.io, 25 Jan 2020, url https://retrolog.io/blog/creating-a-hugo-theme-from-scratch/ [20241011].
 