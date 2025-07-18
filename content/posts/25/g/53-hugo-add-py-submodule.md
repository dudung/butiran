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


## notes
+ There is a discussion about it [^gpt-4o_2025a].
+ The first and simplest code is on [^viridi_2025a].
+ For butiran it is a second submodule proceeding the first one [^viridi_2025b].


## refs
[^gpt-4o_2025a]: GPT-4o, "Submodule for Backend Integration", ChatGPT, 19 Jul 2025, url https://chatgpt.com/share/687ad4b5-1ad0-800a-abf9-c995609b4066 [20250719].
[^viridi_2025a]: Sparisoma Viridi, "butiran pythonanywhere", butiran, 18 Jul 2025, url [https://dudung.github.io/butiran/25g51/](/butiran/25g51/) [20250719].
[^viridi_2025b]: Sparisoma Viridi, "hugo add js submodule", butiran, 18 Jul 2025, url [https://dudung.github.io/butiran/25g50/](/butiran/25g50/) [20250719].
