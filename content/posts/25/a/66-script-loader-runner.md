+++
title = 'shortcodes script loader and runner'
date = '2025-01-29T17:40:19+07:00'
draft = false
type = 'slides'
authors = ['viridi']
tags = ['shortcode', 'js']
url = '25a66'
+++

+ Shortcodes
```toml
{{</* script/loader */>}}
experimental.js
{{</* /script/loader */>}}

{{</* script/runner id="div1" */>}}
display("Hello, World!").on("div1");
{{</* /script/runner */>}}
```

{{< script/loader >}}
experimental.js
{{< /script/loader >}}

{{< script/runner id="div1" >}}
display("Hello, World!").on("div1");
{{< /script/runner >}}
