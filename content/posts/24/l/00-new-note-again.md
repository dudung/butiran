+++
title = 'new note again'
date = 2024-12-01T06:43:06+07:00
draft = false
tags = ['note']
authors = ['viridi']
url = '24l00'
+++
Create a new note again in a new static blog with Hugo.

<!--more-->

Today, I am aged oficially and get uncomfortable again, which triggers me  to create a new blog for my future notes.


## lessons learned
Following are the lessons learned from [pasir](https://dudung.github.io/pasir).

1. Filename naming convention is `yy/m/nn-note-abbrv-name.md` and link to this note is `24k00`, where `yy=24` for `2024`, `m=k` for `Dec`, and `00` for the first note. \
`a=Jan`, `b=Feb`, `c=Mar`, `d=Apr`, `e=May`, `f=Jun`, `g=Jul`, `h=Aug`, `i=Sep`, `j=Oct`, `k=Nov`, `l=Dec`.
2. Previous notes to move to new note or blog is listed in https://github.com/dudung/pasir/issues/1.
3. Copy content from [pasir](https://dudung.github.io/pasir) to [rust](https://dudung.github.io/rust).
4. Transfer issue to https://github.com/dudung/rust/issues/1.
5. Change landing page CSS with help of GPT-4o [`674c42d8-7298-800a-9d2f-57af4c77c925`](https://chatgpt.com/share/674c42d8-7298-800a-9d2f-57af4c77c925).
6. Consider for [bug](https://dudung.github.io/bug), wheter change note filename or preserve the original, before new convention. Not yet decided.

## create new hugo site
Following steps are performed.

### create repository
1. Visit https://github.com/new.
2. Fill Repository name, e.g. rust.
3. Fill Descrition, e.g. raw, unstructured, spontaneous thoughts.
4. Choose Public.
5. Check Add a README file.
6. Add .gitignore, .gitignore template: None.
7. Choose a license, License: MIT License.
8. Finalize with click green button on the lower right Create repository.

### clone repository
1. Use Git Bash as follow.
```
$ git clone https://github.com/dudung/rust
Cloning into 'rust'...
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (4/4), done.
remote: Total 4 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
Receiving objects: 100% (4/4), done.

$ cd rust

$ ls
LICENSE  README.md
```
2. Create a .gitinore file with following content.
```
# Shortcuts
cmd.lnk

# Folders
public
```
3. Synchronize changes with the remote repository
```
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore

nothing added to commit but untracked files present (use "git add" to track)

$ git add .gitignore

$ git commit -a -m "new"
[main a1a90fa] new
 1 file changed, 5 insertions(+)
 create mode 100644 .gitignore

$ git push
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 16 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 345 bytes | 345.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/dudung/rust
   5827f43..a1a90fa  main -> main
```
4. Visit https://github.com/dudung/rust to see the change.

### create site
1. Assure the `rust` folder exists.
```
$ ls rust
LICENSE    archetypes/  content/  hugo.toml  layouts/  themes/
README.md  assets/      data/     i18n/      static/
```
2. Create Hugo new site.
```
$ hugo new site rust --force
Congratulations! Your new Hugo site was created in M:\rust.

Just a few more steps...

1. Change the current directory to M:\rust.
2. Create or install a theme:
   - Create a new theme with the command "hugo new theme <THEMENAME>"
   - Or, install a theme from https://themes.gohugo.io/
3. Edit hugo.toml, setting the "theme" property to the theme name.
4. Create new content with the command "hugo new content <SECTIONNAME>\<FILENAME>.<FORMAT>".
5. Start the embedded web server with the command "hugo server --buildDrafts".

See documentation at https://gohugo.io/.
```
3. Create template.
```
$ cd rust

$ hugo new theme default
Creating new theme in M:\rust\themes\default
```
4. Synchronize changes with remote repository.
```
$ git add
archetypes/ hugo.toml   themes/

$ git add .
warning: in the working copy of 'archetypes/default.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'hugo.toml', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'themes/default/LICENSE', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'themes/default/README.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'themes/default/archetypes/default.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'themes/default/assets/css/main.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'themes/default/assets/js/main.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'themes/default/content/_index.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'themes/default/content/posts/_index.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'themes/default/content/posts/post-1.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'themes/default/content/posts/post-2.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'themes/default/content/posts/post-3/index.md', LF will be replaced by CRLF the next time Git touches it
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

$ git commit -a -m "new hugo site"
[main 8b51e6f] new hugo site
 27 files changed, 311 insertions(+)
 create mode 100644 archetypes/default.md
 create mode 100644 hugo.toml
 create mode 100644 themes/default/LICENSE
 create mode 100644 themes/default/README.md
 create mode 100644 themes/default/archetypes/default.md
 create mode 100644 themes/default/assets/css/main.css
 create mode 100644 themes/default/assets/js/main.js
 create mode 100644 themes/default/content/_index.md
 create mode 100644 themes/default/content/posts/_index.md
 create mode 100644 themes/default/content/posts/post-1.md
 create mode 100644 themes/default/content/posts/post-2.md
 create mode 100644 themes/default/content/posts/post-3/bryce-canyon.jpg
 create mode 100644 themes/default/content/posts/post-3/index.md
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
Enumerating objects: 45, done.
Counting objects: 100% (45/45), done.
Delta compression using up to 16 threads
Compressing objects: 100% (37/37), done.
Writing objects: 100% (44/44), 27.31 KiB | 2.73 MiB/s, done.
Total 44 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), done.
To https://github.com/dudung/rust
   a1a90fa..8b51e6f  main -> main
```
5. Visit https://github.com/dudung/rust to see the changes.

### copy layouts
1. Open https://github.com/dudung/pasir/tree/main/blog/layouts.
2. Create `layouts` folder in `rust` folder.
3. Copy all files and folder from pasir to rust.
4. Synchronize changes with remote repository.
```
$ git add layouts

$ git commit -a -m "copy layouts from pasir"
[main 2d1feb8] copy layouts from pasir
 12 files changed, 326 insertions(+)
 create mode 100644 layouts/_default/_markup/render-blockquote.html
 create mode 100644 layouts/_default/_markup/render-codeblock-mermaid.html
 create mode 100644 layouts/_default/_markup/render-link.html
 create mode 100644 layouts/_default/baseof.html
 create mode 100644 layouts/index.html
 create mode 100644 layouts/partials/footer.html
 create mode 100644 layouts/partials/posts/math.html
 create mode 100644 layouts/partials/reading-time.html
 create mode 100644 layouts/partials/script/chartjs.html
 create mode 100644 layouts/partials/script/inner.html
 create mode 100644 layouts/posts/single.html
 create mode 100644 layouts/shortcodes/scatter.html

$ git push
Enumerating objects: 23, done.
Counting objects: 100% (23/23), done.
Delta compression using up to 16 threads
Compressing objects: 100% (19/19), done.
Writing objects: 100% (22/22), 5.02 KiB | 856.00 KiB/s, done.
Total 22 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/dudung/rust
   8b51e6f..2d1feb8  main -> main
```
5. Visit https://github.com/dudung/rust to see the changes.

### edit setting
1. Open `hugo.toml`.
2. Edit the content to have following lines.
```
baseURL = 'https://dudung.github.io/rust'
languageCode = 'en-us'
title = 'rust'
theme = 'default'

ignoreErrors = ['error-missing-instagram-accesstoken']

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
```
3. Save and close tht file.
4. Synchronize changes with remote repository.
```
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   hugo.toml

no changes added to commit (use "git add" and/or "git commit -a")

$ git commit -a -m "edit toml"
warning: in the working copy of 'hugo.toml', LF will be replaced by CRLF the next time Git touches it
[main 70294bd] edit toml
 1 file changed, 22 insertions(+), 2 deletions(-)

$ git push
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 16 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 481 bytes | 481.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/dudung/rust
   791196c..70294bd  main -> main
```
5. Visit https://github.com/dudung/rust to see the changes.

### copy content
1. Create folder `content/posts/24/l`.
1. Open https://github.com/dudung/pasir/tree/main/blog/content/posts/24/l.
2. Copy `00-new-note-again.md` to `content/posts/24/l`.
4. Synchronize changes with remote repository.
```
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        content/

nothing added to commit but untracked files present (use "git add" to track)

$ git add content/posts/24/l/00-new-note-again.md

$ git commit -a -m "new note"
[main 11fcf71] new note
 1 file changed, 304 insertions(+)
 create mode 100644 content/posts/24/l/00-new-note-again.md

$ git push
Enumerating objects: 8, done.
Counting objects: 100% (8/8), done.
Delta compression using up to 16 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (7/7), 3.29 KiB | 1.64 MiB/s, done.
Total 7 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/dudung/rust
   70294bd..11fcf71  main -> main
```
5. Visit https://github.com/dudung/rust to see the changes.

### copy others
1. Copy also from `content` folder, `authors` folder, and `_index.md`.
2. Change content of `_index.md` as follow.
```
raw, unstructured, spontaneous thoughts
```
3. Synchronize changes with remote repository.
```
$ git add content/authors content/_index.md

$ git commit -a -m "update authors and others"
[main a575dfe] update authors and others
 3 files changed, 20 insertions(+)
 create mode 100644 content/_index.md
 create mode 100644 content/authors/viridi/_index.md

$ git push
Enumerating objects: 17, done.
Counting objects: 100% (17/17), done.
Delta compression using up to 16 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (11/11), 940 bytes | 470.00 KiB/s, done.
Total 11 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/dudung/rust
   ca5d1b1..a575dfe  main -> main
```
4. Visit https://github.com/dudung/rust to see the changes.

### copy assets
1. Open https://github.com/dudung/pasir/tree/main/blog/assets/.
2. Copy all files and folders to `assets` folder.
3. Synchronize changes with remote repository.
```
$ git add assets/css/main.css

$ git commit -a -m "copy css"
[main ccf7891] copy css
 1 file changed, 187 insertions(+)
 create mode 100644 assets/css/main.css

$ git push
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 16 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (5/5), 1.32 KiB | 1.32 MiB/s, done.
Total 5 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/dudung/rust
   85490f2..ccf7891  main -> main
```

### delete content examples
1. Open `themes\default\content`.
2. Delete files and folder.
3. Synchronize changes with remote repository.
```
$ git commit -a -m "detele content examples"
[main 92c9587] detele content examples
 6 files changed, 48 deletions(-)
 delete mode 100644 themes/default/content/_index.md
 delete mode 100644 themes/default/content/posts/_index.md
 delete mode 100644 themes/default/content/posts/post-1.md
 delete mode 100644 themes/default/content/posts/post-2.md
 delete mode 100644 themes/default/content/posts/post-3/bryce-canyon.jpg
 delete mode 100644 themes/default/content/posts/post-3/index.md

$ git commit -a -m "detele content examples"
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean

$ git push
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 16 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (4/4), 336 bytes | 336.00 KiB/s, done.
Total 4 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/dudung/rust
   c104bf8..92c9587  main -> main
```

### start server
1. Open cmd or console.
```
Microsoft Windows [Version 10.0.22631.4460]
(c) Microsoft Corporation. All rights reserved.

M:\rust>hugo server
Watching for changes in M:\rust\{archetypes,assets,content,data,i18n,layouts,static,themes}
Watching for config changes in M:\rust\hugo.toml, M:\rust\themes\default\hugo.toml
Start building sites …
hugo v0.139.3-2f6864387cd31b975914e8373d4bf38bddbd47bc+extended windows/amd64 BuildDate=2024-11-29T15:36:56Z VendorInfo=gohugoio


                   | EN
-------------------+-----
  Pages            | 25
  Paginator pages  |  0
  Non-page files   |  1
  Static files     |  1
  Processed images |  0
  Aliases          |  0
  Cleaned          |  0

Built in 128 ms
Environment: "development"
Serving pages from disk
Running in Fast Render Mode. For full rebuilds on change: hugo server --disableFastRender
Web Server is available at http://localhost:1313/rust/ (bind address 127.0.0.1)
Press Ctrl+C to stop
```
2. Open http://localhost:1313/rust/ to see the result.
3. Stop the server or continue working.

### copy from pasir
```
$ git add content/posts/24/k

$ git commit -a -m "copy content from pasir"
[main 0c7a844] copy content from pasir
 19 files changed, 1036 insertions(+), 15 deletions(-)
 create mode 100644 content/posts/24/k/00-intro-to-pasir.md
 create mode 100644 content/posts/24/k/01-random-walk-intro.md
 create mode 100644 content/posts/24/k/02-md-pa6-cf-compos.md
 create mode 100644 content/posts/24/k/03-rbl-refine-sk5010-2024-1.md
 create mode 100644 content/posts/24/k/04-short-intro-to-ml.md
 create mode 100644 content/posts/24/k/05-perceptron-intro.md
 create mode 100644 content/posts/24/k/06-rbl-progress-sk5010-2024-1.md
 create mode 100644 content/posts/24/k/07-model-short-intro.md
 create mode 100644 content/posts/24/k/08-sk5010-rbl-w-report-1.md
 create mode 100644 content/posts/24/k/09-reasons-to-write.md
 create mode 100644 content/posts/24/k/10-rand-walk-msd-prob.md
 create mode 100644 content/posts/24/k/11-futher-intro-perceptron.md
 create mode 100644 content/posts/24/k/12-stat-mech-complex-sys.md
 create mode 100644 content/posts/24/k/13-fi2151-2024-1.md
 create mode 100644 content/posts/24/k/14-binary-and-plot2-pasir.md
 create mode 100644 content/posts/24/k/15-list-of-slides.md
 create mode 100644 content/posts/24/k/16-stu-sem-24-1.md
 create mode 100644 content/posts/24/k/17-grit-ikigai-etc.md

$ git push
Enumerating objects: 32, done.
Counting objects: 100% (32/32), done.
Delta compression using up to 16 threads
Compressing objects: 100% (24/24), done.
Writing objects: 100% (26/26), 24.50 KiB | 2.45 MiB/s, done.
Total 26 (delta 3), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
To https://github.com/dudung/rust
   92c9587..0c7a844  main -> main
```

### set github action
1. Go to https://github.com/dudung/rust/settings/pages.
2. Under Build and deployment, change Source to GitHub Actions.
3. Click browser all workflows.1. Visit https://github.com/dudung/rust/actions/new.
4. Type hugo and press enter.
5. Choose Hugo By GitHub Actions, Package a Hugo site.
6. Click Configure.
7. Click Commit changes..., the green button on upper right.
8. Click Commit changes.
9. Visit https://dudung.github.io/rust/.
10. Update local files.
```
$ git pull
remote: Enumerating objects: 6, done.
remote: Counting objects: 100% (6/6), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 5 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
Unpacking objects: 100% (5/5), 1.91 KiB | 102.00 KiB/s, done.
From https://github.com/dudung/rust
   c64dccb..6f05888  main       -> origin/main
Merge made by the 'ort' strategy.
 .github/workflows/hugo.yml | 74 ++++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 74 insertions(+)
 create mode 100644 .github/workflows/hugo.yml
```

### add website to repository page
1. Visit https://github.com/dudung/rust.
2. Click icon on the far right on About.
3. Check Use your GitHub Pages website.
4. Add topics, e.g. thoughts, ideas, blogs, or other related topics.
5. Uncheck Releases, Packages, Deployments, or keep them checked.
6. Click Save changes, green button on the lower right.
