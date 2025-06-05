+++
title = 'hugo build too slow'
date = '2025-06-02T06:59:44+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = ['hugo']
categories = ['butiran']
url = '25f34'
+++

<!-- more -->

This note lists steps take to have faster build of Hugo site.

+ `04-jun-2025` Change nothing, but with 1471 pages with `hugo server -D` command. Do not delete `public` folder.
  - Test at the office: 38040 ms build, 1031 ms a post update.
+ `04-jun-2025` Change nothing, but with 1467 pages with `hugo server -D` command. Do not delete `public` folder.
  - Test at home: 5688 ms, 5682 ms, 5638 ms, 6007 ms.
  - Test at the office: 21989 ms, 7864 ms, 10462 ms, 11555 ms.
+ `03-jun-2025` Change nothing, but with 1467 pages with `hugo server -D` command. Do not delete `public` folder.
  - Test at the office: 26936 ms, 10689 ms, 14335 ms, 9046 ms.
  - Test at home: 8228 ms, 5688 ms, 5856 ms, 5895 ms.
+ `02-jun-2025` Move `font-awesome.min.css` from `render-link.html` to `head.html` as suggested [^gpt-4o_2025a].
  - It reduces build time from 37690 ms to 8796 ms on i5-10210U CPU @ 1.60GHz 8 GB RAM at the office for 1465 pages, 47 paginator pages, 13 static files and 1 aliases.
  - With AMD Ryzen 7 5800HS with Radeon Graphics 3.20 GHz 16 GB RAM at home it requires from 5777 ms to 6068 to build ms after delete public folder where previously was about 10427 ms (tested day +1).


## refs
[^gpt-4o_2025a]: GPT-4o, "Hugo Build Optimization", ChatGPT, 2 Jun 2025, url https://chatgpt.com/share/683cea31-be54-800a-a5d3-1dfe6d7f8d75 [20250602].
