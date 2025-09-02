+++
title = 'hugo-flag clear cache'
date = '2025-08-18T07:56:56+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = ['hugo']
categories = ['butiran']
url = '25h47'
+++

<!-- more -->

Some notes while running hugo for butiran.


## notes
+ To run hugo sever for draft posts with a completely fresh build [^gpt-5_2025a].
  ```cmd
  hugo -D --ignoreCache --cleanDestinationDir
  ```
  The short flag `-D` has a long form `--buildDrafts`.
+ Start to document clean from 02-sep-2025 due to noticable slowness.
{{< style class="table-0" >}}
Date | Site | Clean (ms) | Build (ms)
:-: | :-: | :-: | :-:
02-sep-2025 | home |  9649 |  7419
02-sep-2025 | home | -     |  7112
02-sep-2025 | work | 11723 | 27720
02-sep-2025 | work | -     | 10658
{{< /style >}}



## refs
[^gpt-5_2025a]: GPT-5, "Clear Hugo cache", ChatGPT, 18 Aug 2025, url https://chatgpt.com/share/68a27c4a-1edc-800a-a22a-0f964050e5f5 [20250818].

