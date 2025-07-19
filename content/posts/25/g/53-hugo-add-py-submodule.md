+++
title = 'hugo add py submodule'
date = '2025-07-19T05:51:00+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = ['py']
categories = ['butiran']
url = '25g53'
+++

<!-- more -->

## github
url https://github.com/dudung/butiran-backend


## git
```bash
$ git submodule add https://github.com/dudung/butiran-backend static/py
Cloning into 'M:/butiran/static/py'...
remote: Enumerating objects: 30, done.
remote: Counting objects: 100% (30/30), done.
remote: Compressing objects: 100% (20/20), done.
remote: Total 30 (delta 10), reused 24 (delta 8), pack-reused 0 (from 0)
Receiving objects: 100% (30/30), 6.04 KiB | 3.02 MiB/s, done.
Resolving deltas: 100% (10/10), done.
warning: in the working copy of '.gitmodules', LF will be replaced by CRLF the next time Git touches it
```

```bash
$ git add static/py
```

```bash
$ git commit -a -m "add py submodule"
[main 7a3986c] add py submodule
 2 files changed, 4 insertions(+)
 create mode 160000 static/py
```

```bash
$ git push
Enumerating objects: 18, done.
Counting objects: 100% (18/18), done.
Delta compression using up to 16 threads
Compressing objects: 100% (11/11), done.
Writing objects: 100% (11/11), 3.19 KiB | 1.60 MiB/s, done.
Total 11 (delta 6), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (6/6), completed with 5 local objects.
To https://github.com/dudung/butiran
   37b9ad2..7a3986c  main -> main
```

## submodule
```bash
$ git submodule update --remote
Submodule path 'static/js': checked out '65b01d43c5442a6575cf69fac320221bf7eb3a59'
remote: Enumerating objects: 16, done.
remote: Counting objects: 100% (16/16), done.
remote: Compressing objects: 100% (9/9), done.
remote: Total 13 (delta 8), reused 9 (delta 4), pack-reused 0 (from 0)
Unpacking objects: 100% (13/13), 1.29 KiB | 29.00 KiB/s, done.
From https://github.com/dudung/butiran-backend
   05b9363..7bdd4b7  main       -> origin/main
Submodule path 'static/py': checked out '7bdd4b780733ee0fdc0fbaec4d8142fc99791a75'

$ git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   static/js (new commits)
        modified:   static/py (new commits)

no changes added to commit (use "git add" and/or "git commit -a")

$ git commit -a -m "update submodule"
[main d986d7d] update submodule
 2 files changed, 2 insertions(+), 2 deletions(-)

$ git status
On branch main
Your branch is ahead of 'origin/main' by 2 commits.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean

$ git push
Enumerating objects: 18, done.
Counting objects: 100% (18/18), done.
Delta compression using up to 16 threads
Compressing objects: 100% (11/11), done.
Writing objects: 100% (11/11), 1.19 KiB | 1.19 MiB/s, done.
Total 11 (delta 8), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (8/8), completed with 7 local objects.
To https://github.com/dudung/butiran
   893313e..d986d7d  main -> main
```

## notes
+ There is a discussion about it [^gpt-4o_2025a].
+ The first and simplest code is on [^viridi_2025a].
+ For butiran it is a second submodule proceeding the first one [^viridi_2025b].


## refs
[^gpt-4o_2025a]: GPT-4o, "Submodule for Backend Integration", ChatGPT, 19 Jul 2025, url https://chatgpt.com/share/687ad4b5-1ad0-800a-abf9-c995609b4066 [20250719].
[^viridi_2025a]: Sparisoma Viridi, "butiran pythonanywhere", butiran, 18 Jul 2025, url [https://dudung.github.io/butiran/25g51/](/butiran/25g51/) [20250719].
[^viridi_2025b]: Sparisoma Viridi, "hugo add js submodule", butiran, 18 Jul 2025, url [https://dudung.github.io/butiran/25g50/](/butiran/25g50/) [20250719].
