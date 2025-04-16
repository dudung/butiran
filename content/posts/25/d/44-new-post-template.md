+++
title = 'new post template'
date = '2025-04-16T06:37:30+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = ['hugo', 'templates']
categories = ['butiran']
url = '25d44'
+++

<!-- more -->


## post template
Content of `default.md` in folder `archetypes` is as follow.

```go
{{- $words := split .Name "-" -}}
{{- $url := lower (index $words 0) -}}
{{- $title := delimit (after 1 $words) " " -}}
+++
title = '{{ $title }}'
date = '{{ .Date }}'
authors = ['viridi']
draft = true
type = 'notes'
tags = []
categories = []
url = '{{ $url }}'
+++

<!-- more -->

```


## usage
In a CLI perform following.

```bash
$ hugo new content/posts/25/d/44-new-post-template.md
Content "M:\\butiran\\content\\posts\\25\\d\\44-new-post-template.md" created
```

OS is Windows 11 version 10.0.26100 build 26100, CLI is Git Bash version 2.42.0.2.


## output
A post `44-new-post-template.md` in folder `content/posts/25/d` with following content is created.

```go
+++
title = 'new post template'
date = '2025-04-16T06:37:30+07:00'
authors = ['viridi']
draft = true
type = 'notes'
tags = []
categories = []
url = '44'
+++

<!-- more -->

```


## notes
+ It reduces the steps in editing the post, which is known as note here.
+ Remaining steps are add folder info to url, change draft to false, and add tags and categories.
+ This note is built with a help, but with many corrections, from AI [^gpt-4o_2025].


## refs
[^gpt-4o_2025]: GPT-4o, "Change default post template", ChatGPT, 16 Apr 2025, url https://chatgpt.com/share/67fef18e-0364-800a-bc6a-06d9c3a66f4b [20250416].
