+++
title = 'Curved line with SVG path'
date = 2024-01-13T05:08:59+07:00
draft = false
url = '1812'
+++
Draw curved line using [path](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) element in [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG).
<!--more-->


## create post
```
D:\blank>hugo new content tests\curved-line-with-svg-path.md
Content "D:\\blank\\content\\tests\\curved-line-with-svg-path.md" created
```

Put it in `tests` folder first while re-develop `svgpath.html` from `layouts\shortcodes` in `plaintext` to `layouts\shortcodes\blank`.


## test 1
{{< svgpath >}}
B_STYLE red,3,#ccf
M 50 50 l 100 0
v 100 h -100 z

B_STYLE blue,10,#aaf
M 100 120 l 100 0
v 100 h -100 z
{{< /svgpath >}}

```
{{</* blank/svgpath */>}}
B_STYLE red,3,#ccf
M 50 50 l 100 0
v 100 h -100 z

B_STYLE blue,10,#aaf
M 100 120 l 100 0
v 100 h -100 z
{{</* /blank/svgpath */>}}
```


## test 2
{{< svgpath >}}
B_STYLE #f44,3,#fcc
M 150 100 l 50 0 l 0 -50 l -100 0 l 0 100 l 100 0 m 0 -25
m -25 0 l -50 0 l 0 -50 l 50 0

B_STYLE #080,4,none
M 50,50
A 100 100 0.0 0 1 200 150
Z
{{< /svgpath >}}

```
{{</* blank/svgpath */>}}
B_STYLE #f44,3,#fcc
M 150 100 l 50 0 l 0 -50 l -100 0 l 0 100 l 100 0 m 0 -25
m -25 0 l -50 0 l 0 -50 l 50 0

B_STYLE #080,4,none
M 50,50
A 100 100 0.0 0 1 200 150
Z
{{</* /blank/svgpath */>}}
```


## features
+ I can handle multiple blocks.
+ Each block begins with a line for style
  - stroke
  - stroke-width
  - fill
