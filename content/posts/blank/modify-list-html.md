+++
title = 'Modify list.html'
date = 2024-01-11T06:58:48+07:00
draft = false
tags = ['hugo']
+++
Remove summary from list of posts.
<!--more-->


## create post
Create a new post
```
$ hugo new content posts/modify-list-html.md
Content "D:\\blank\\content\\posts\\modify-list-html.md" created
```

## list.html
Copy `list.html` from `themes\default\layouts\_default` to `layouts\_default`.

Modify from a line from

```
    {{ .Summary }}
```

to

```
    <!--{{ .Summary }}-->
```

which removes posts summary in `/blank/posts/` but not yet in `/blank/`.