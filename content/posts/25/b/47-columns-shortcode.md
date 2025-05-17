+++
title = 'columns shortcode'
date = '2025-02-17T19:43:18+07:00'
draft = false
type = 'slides'
layout = 'columns'
authors = ['viridi']
tags = ['kinematics']
math = true
url = '25b47'
+++

{{< columns >}}
+ `layouts\shortcodes\columns.html`
```html
{{ $raw := .Get "raw" }}
<div class="columns">
{{ if eq $raw "yes" }}
  {{ .Inner }}
{{ else }}
  {{ .Inner | markdownify }}
{{ end }}
</div>
```
{{< /columns >}}

{{< columns >}}
+ `layouts\slides\column.html`
```html
<div class="slide-content">
  <div class="columns-container">
    {{ .Content }}
  </div>
</div>
```
{{< /columns >}}
