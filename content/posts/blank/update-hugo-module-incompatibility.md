+++
title = 'Update Hugo due to module incompatibility'
date = 2024-01-12T07:35:11+07:00
draft = false
tags = ['hugo']
+++
Update Hugo while creating `scatter.html` shortcode.
<!--more-->


## clone repo
```
$ git clone https://github.com/dudung/blank
Cloning into 'blank'...
remote: Enumerating objects: 212, done.
remote: Counting objects: 100% (212/212), done.
remote: Compressing objects: 100% (131/131), done.
remote: Total 212 (delta 73), reused 173 (delta 43), pack-reused 0
Receiving objects: 100% (212/212), 29.57 KiB | 4.93 MiB/s, done.
Resolving deltas: 100% (73/73), done.
```


## create post 
```
$ hugo new content tests/scatter-shortcodes-for-chart-js.md
WARN 2024/01/12 07:35:11 Module "default" is not compatible with this Hugo version; run "hugo mod graph" for more information.
Content "D:\\blank\\content\\tests\\scatter-shortcodes-for-chart-js.md" created
```

```
$ hugo mod graph
WARN 2024/01/12 07:36:33 Module "default" is not compatible with this Hugo version; run "hugo mod graph" for more information.
project default
```

```
$ hugo version
hugo v0.112.4-e285153d7f75d13bb062101c0a66b0138a90a71c+extended windows/amd64 BuildDate=2023-05-28T13:04:00Z VendorInfo=gohugoio
```

```
D:\blank>hugo version
hugo v0.121.2-6d5b44305eaa9d0a157946492a6f319da38de154+extended windows/amd64 BuildDate=2024-01-05T12:21:15Z VendorInfo=gohugoio
```


## update hugo
Download from https://github.com/gohugoio/hugo/releases/download/v0.121.2/hugo_extended_0.121.2_windows-amd64.zip

```
$ hugo version
hugo v0.121.2-6d5b44305eaa9d0a157946492a6f319da38de154+extended windows/amd64 BuildDate=2024-01-05T12:21:15Z VendorInfo=gohugoio
```

```
$ hugo mod graph
project default
```

Previous warning has disappeared.

While at home

```
$ hugo version
hugo v0.118.2-da7983ac4b94d97d776d7c2405040de97e95c03d+extended windows/amd64 BuildDate=2023-08-31T11:23:51Z VendorInfo=gohugoio
```

it is already without problem. It seem that `>= v0.118.2` works fine, but not `<= v0.112.4` for current module produced with `hugo new theme`.


## rename this post
```
$ mv content/tests/scatter-shortcodes-for-chart-js.md content/tests/update-hugo-module-incompatibility.md
```

It must be renamed since the purpose is changed from what it was intended to.
