+++
title = 'Modify footer.html'
date = 2024-01-11T11:34:25+07:00
draft = false
tags = ['hugo']
+++
Modify `footer.html` and observe the result.
<!--more-->


## footer.html
Copy `footer.html` from `themes\default\layouts\partials` to `layouts\partials`.

Change from current content

```
<p>Copyright {{ now.Year }}. All rights reserved.</p>
```

to

```
<p>Copyright Sparisoma Viridi {{ now.Year }}. All rights reserved.</p>
```

and observe at the bottom the every page.
