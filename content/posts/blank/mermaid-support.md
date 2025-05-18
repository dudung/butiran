+++
title = 'Mermaid support'
date = 2024-01-11T06:09:07+07:00
draft = false
tags = ['hugo']
+++
Add support for drawing flowchart with [Mermaid](https://mermaid.js.org/).
<!--more-->


## shortcodes
Copy `mermaid.html` from `themes\hugo-coder\layouts\shortcodes` to `layouts\shortcodes`.


Copy `baseof.html` from `themes\default\layouts\_default` to `layouts\_default`.


Add following lines from [Hugo Coder](https://themes.gohugo.io/themes/hugo-coder/) to `baseof.html`

```
  {{ if .HasShortcode "mermaid" }}
  <script src="https://cdn.jsdelivr.net/npm/mermaid@9.3.0/dist/mermaid.min.js"
    integrity=[Hugo Coder](https://themes.gohugo.io/themes/hugo-coder/)"sha256-QdTG1YTLLTwD3b95jLqFxpQX9uYuJMNAtVZgwKX4oYU=" crossorigin="anonymous"></script>
  <script>
    mermaid.initialize({ startOnLoad: true });
  </script>
  {{ end }}
```

before `</body>`.


## create post
Create new post
```
$ hugo new content posts/mermaid-support.md
Content "D:\\blank\\content\\posts\\mermaid-support.md" created
```

And edit it.


## test mermaid
{{< mermaid >}}
flowchart LR
  A --> B
  A(("1"))
  B(("2"))
{{< /mermaid >}}

```
{{</* mermaid */>}}
flowchart LR
  A --> B
  A(("1"))
  B(("2"))
{{</* /mermaid */>}}
```

{{< mermaid >}}
flowchart TB
  A --> B
  A(("3"))
  B(("4"))
{{< /mermaid >}}

```
{{</* mermaid */>}}
flowchart TB
  A --> B
  A(("3"))
  B(("4"))
{{</* /mermaid */>}}
``
