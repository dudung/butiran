---
title: "add partials mermaid"
date: 2022-03-20T13:46:00+07:00
lastmod: 2022-03-20T13:53:00+0700
author: viridi
mathjax: false
mermaid: true
tags: ['hugo', 'partials', 'mermaid', 'draft']
url: "0004"
draft: false
---
[[1](#r01)].

<div class="mermaid">
  flowchart TD
		A([Mulai])
		B[/a, b, c/]
		C[D = bxb - 4ac]
		D{D >= 0}
		E[x1]
		F[x2]
		G[/x1, x2/]
		H([Selesai])
		A --> B --> C --> D
		D -- Ya --> E --> F --> G --> H
		D -- Tidak --> H
		style A fill:#f9f,stroke:#333,stroke-width:4px
		classDef decision stroke:#f88
		class D decision
</div>

## notes
1. <a name='r01'></a>
