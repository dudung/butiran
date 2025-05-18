+++
title = 'KaTeX support'
date = 2024-01-11T05:18:51+07:00
draft = false
math = true
tags = ['hugo']
+++
Add support for displaying LaTeX equations with [KaTeX](https://katex.org/).
<!--more-->


## partials
Copy `math.html` from `themes\hugo-coder\layouts\partials\posts` to `layouts\partials\posts` folder.

Copy `single.html` from `themes\default\layouts\posts` to `layouts\posts`.

Insert following line from [Hugo Coder](https://themes.gohugo.io/themes/hugo-coder/) to `single.html`

```
 {{ partial "posts/math.html" . }}
```

before `{{ end }}`.


## create post
Create a new post with CLI
```
D:\blank>hugo new content posts\katex-support.md
Content "D:\\blank\\content\\posts\\katex-support.md" created
```

Edit the post and add `math = true` in front matter of a post in order to get KaTeX support for displaying LaTeX equations.


## write latex equations
```
D:\blank>"C:\Program Files\Notepad++\notepad++.exe" content\posts\katex-support.md
```

This is an equation $y = ax^2 + bx + c$ with inline mode. And the following

$$\tag{1}
y = \frac{\alpha x^2 + \beta x^2 + \gamma}{\sqrt{1 - \sin e^x}}
$$

is with display mode.

Inline mode `$y = ax^2 + bx + c$`


Displaymode

```
$$\tag{1}
y = \frac{\alpha x^2 + \beta x^2 + \gamma}{\sqrt{1 - \sin e^x}}
$$
```
