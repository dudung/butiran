+++
title = 'style shortcode'
date = '2025-04-16T07:02:52+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = ['hugo', 'shortcodes']
categories = ['butiran']
url = '25d45'
+++

<!-- more -->

## shortcode
Content of `style.html` in `layouts/shortcodes` is as follow.

```html
{{ $class := .Get "class" }}
{{ $css := printf "%s.css" $class }}

<link rel="stylesheet" href="/butiran/css/{{ $css }}?v={{ now.Unix }}">

<div class="{{ $class }}">
{{ .Inner | markdownify }}
</div>
```

## css
Content of `table-1.css` in `atatic/css` is as follow.

```css
/* table-0.css */

table {
  border-collapse: collapse;
  border-spacing: 0;
}

table th {
  padding: 0.1em 0.2em;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  background-color: #f2f2f2;
}

table td {
  padding: 0 1em;
}

table tr:last-child td {
  border-bottom: 1px solid #000;
}

table tr:nth-child(odd) {
  /* White for even rows */
  background-color: #ffffff;
}

table tr:nth-child(even) {
  /* Light gray for odd rows */
  background-color: #f2f2f2;
}
```

## usage
In a post use following lines.

```go
{{</* style class="table-0" */>}}
x | y | z
:-: | :-: | :-:
1 | 2 | 3
4 | 5 | 6
7 | 8 | 9
{{</* /style */>}}
```

## result

{{< style class="table-0" >}}
x | y | z
:-: | :-: | :-:
1 | 2 | 3
4 | 5 | 6
7 | 8 | 9
{{< /style >}}


## markdown only
Table in markdown 

```md
x | y | z
:-: | :-: | :-:
1 | 2 | 3
4 | 5 | 6
7 | 8 | 9
```

will only produce

x | y | z
:-: | :-: | :-:
1 | 2 | 3
4 | 5 | 6
7 | 8 | 9


## notes
+ This shortcode provides general style inside a div element with class name.
+ Theoretically, it can style any nested elements as long the style defined properly in the related CSS file.
