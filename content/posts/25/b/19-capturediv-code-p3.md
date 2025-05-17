+++
title = 'capturediv code p3'
date = '2025-02-15T16:47:00+07:00'
draft = false
type = 'slides'
authors = ['viridi']
tags = ['shortcodes']
url = '25b19'
+++

+ Code (3/3)
```html
<script> function captureDiv() {
  let btn = document.getElementById("btn");
  let grandParent = btn.parentElement?.parentElement; // console.log(grandParent);
  html2canvas(grandParent, { scale: 3 }).then(canvas => {
    let link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "{{- .Page.File.BaseFileName -}}";
    link.click(); }); }
</script>
```


