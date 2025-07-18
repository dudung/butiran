+++
title = 'hugo add js submodule'
date = '2025-07-18T19:06:03+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = ['submodule', 'hugo']
categories = ['js']
url = '25g50'
+++

<!-- more -->

Add submodule for JS files of a Hugo site.

```bash
$ git submodule add https://github.com/dudung/butiran-frontend.git static/js
Cloning into 'M:/butiran/static/js'...
remote: Enumerating objects: 41, done.
remote: Counting objects: 100% (41/41), done.
remote: Compressing objects: 100% (35/35), done.
remote: Total 41 (delta 8), reused 0 (delta 0), pack-reused 0 (from 0)
Receiving objects: 100% (41/41), 111.98 KiB | 319.00 KiB/s, done.
Resolving deltas: 100% (8/8), done.
warning: in the working copy of '.gitmodules', LF will be replaced by CRLF the next time Git touches it
```

```bash
$ git add .gitmodules static/js
```

```bash
$ git commit -a -m "add js submodule"
[main a7d2cfc] add js submodule
 2 files changed, 4 insertions(+)
 create mode 100644 .gitmodules
 create mode 160000 static/js
```

```bash
$ git push
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 16 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 449 bytes | 449.00 KiB/s, done.
Total 4 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/dudung/butiran
   a3317d7..a7d2cfc  main -> main
```


## notes
+ Steps are according to a discussion for existing repository on GitHub [^gpt_4o_2025a].
+ When changed, main repo should update the submodule [^gpt_4o_2025b].


## refs
[^gpt_4o_2025a]: GPT-4o, "Move JS to Submodule", ChatGPT, 18 Jul 2025, url https://chatgpt.com/share/687a3a59-53e4-800a-ad77-65336a6a2551 [20250718].
[^gpt_4o_2025b]: GPT-4o, "Update Git Submodules", ChatGPT, 19 Jul 2025, url  https://chatgpt.com/share/687ad9f7-7c58-800a-860a-df4833820281 [20250719].
