+++
title = 'columns shortcode css'
date = '2025-02-17T19:58:52+07:00'
draft = false
type = 'slides'
layout = 'columns'
authors = ['viridi']
tags = ['kinematics']
math = true
url = '25b48'
+++

{{< columns >}}
+ `static\css\slides.css`
```css
/* n-columns layout */

.columns {
  border: 0px blue solid;
  flex: 1;
  padding: 0.2em;
}
```
{{< /columns >}}

{{< columns >}}
$$
\\\\[1.5em]
$$
```css
.columns-container {
  display: flex;
  justify-content: space-evenly;
  gap: 0.2em;
  border: 0px blue solid;
  width: 100%;
}
```
{{< /columns >}}
