+++
title = 'post assets/js'
date = '2025-02-21T19:32:36+07:00'
draft = true
type = 'slides'
authors = ['viridi']
tags = ['partials', 'footer']
categories = ['hugo']
url = '25b73'
+++

{{</* hello "Human" */>}} -- This shortcode is deleted on 20-mar-2025 0611.
+ Usage
```js
{{</* hello "Human" */>}}
```
+ `assets/js/hello.js`
```js
function hello(str) {
  let parent = document.getElementsByClassName("slide-content")[0];
  let div = document.createElement("div");
  parent.appendChild(div);
  div.innerHTML = "Hello, " + str + "!";
}
```
+ `layouts/shortcodes/hello.html`
```html
{{ $myscript := resources.Get "js/hello.js" | resources.Minify | fingerprint | resources.ExecuteAsTemplate "js/hello.js" . }}
{{ $str := .Get 0 | default "you" }}
<script src="{{ $myscript.RelPermalink }}" integrity="{{ $myscript.Data.Integrity }}"></script>
<script>
hello({{$str}});
</script>
```
+ Rendered HTML
```html
..
<div class="slide-content">
      
<script src="/notes/js/hello.min.5f760f386c4be9fe9592a645c275fd0c1e6868e3272599326bbcc3d83a463140.js" integrity="sha256-X3YPOGxL6f6VkqZFwnX9DB5oaOMnJZkya7zD2DpGMUA="></script>
<script>
hello("Human");
</script>

..
```