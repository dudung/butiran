+++
title = 'script loader and runner'
date = '2025-04-16T16:26:38+07:00'
authors = ['viridi']
draft = true
type = 'notes'
tags = ['hugo', 'shortcode', 'js']
categories = ['butiran']
url = '25d48'
+++

<!-- more -->

## purpose
+ The loader loads JavaScript files sfiles from the `static/js` folder.
+ The runner runs JavaScript within a Hugo post or note.


## script loader
It is saved as `loader.html` in folder `layouts/shortcodes/script`.

```html
{{ $baseURL := site.BaseURL }}
{{ range split .Inner "\n" }}
  {{- $script := trim . " \r" -}} <!-- Trim spaces and possible trailing \r -->
  {{- if ne $script "" -}}
    <script src="{{ printf "%sjs/%s?v=1" $baseURL $script | relURL }}"></script>
  {{- end -}}
{{ end }}
```


## script runner
It is saved as `runner.html` in folder `layouts/shortcodes/script`.

```html
{{ $id := .Get "id" | default "script-container" }}

<div id="{{ $id }}"></div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    {{ .Inner | safeJS }}
  });
</script>
```

## result
Following is an example.

{{< script/loader >}}
tests.js
{{< /script/loader >}}

{{< script/runner id="script-0" >}}
const el = document.getElementById("script-0");
with(el.style) {
  width = "180px";
  height = "60px";
  border = "2px #ccc solid";
  background = "#eee";
  textAlign = "center";
  color = "blue";
  fontWeight = "bold";
  fontSize = "150%";
}
el.innerHTML = hello("World");
{{< /script/runner >}}

And the code to produce it is as follow.

```go
{{</* script/loader */>}}
tests.js
{{</* /script/loader */>}}

{{</* script/runner id="script-0" */>}}
const el = document.getElementById("script-0");
with(el.style) {
  width = "180px";
  height = "60px";
  border = "2px #ccc solid";
  background = "#eee";
  textAlign = "center";
  color = "blue";
  fontWeight = "bold";
  fontSize = "150%";
}
el.innerHTML = hello("World");
{{</* /script/runner */>}}
```

And content of `tests.js` saved in `static/js` folder is as follow.

```js
/* tests.js */

function hello(name) {
  return "Hello, " + name + "!";
}
```

Notice that the runner can access the `hello()` function, which is previously loaded by the loader.


## notes
+ In the future, development of JS code in a note will use these shortcodes.
