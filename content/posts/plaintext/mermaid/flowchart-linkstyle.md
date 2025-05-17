---
title: "flowchart linkstyle"
date: 2023-12-13T08:45:00+08:00
authors: ['Sparisoma Viridi']
tags: ['mermaid']
draft: false
math: false
url: "0006"
---
{{< toc >}}


## intro
To create diagrams dynamically in an internet browser you can use Mermaid, which is a diagramming and charting tools based on JavaScript and inspired by Markdown text definitions (Woodward & Biagianti, 2022). It has default style, which should be sufficient. But if an adjustment is necessary, e.g. style of the link -- the line connecting two nodes, can be modified (Drago, 2023) and also the other features.



## flowchart
{{< mermaid >}}
flowchart LR
  B --> I --> P --> O --> E
  
  B(["Begin"])
  I[/"Input"/]
  P["Process"]
  O[/"Output"/]
  E(["End"])
  
  linkStyle default stroke:red
  linkStyle 1 stroke:blue
  linkStyle 3 stroke:green
{{< /mermaid >}}


## code
```
flowchart LR
  B --> I --> P --> O --> E
  
  B(["Begin"])
  I[/"Input"/]
  P["Process"]
  O[/"Output"/]
  E(["End"])
  
  linkStyle default stroke:red
  linkStyle 1 stroke:blue
  linkStyle 3 stroke:green
```

## linkstyle
+ `default` is for all lines between two nodes.
+ `n` is for (n+1)-th line, since it begins with `0`, and override `default` for the line.
+ `1` is for second line, the line beetween Input and Process elements.
+ `3` is for fourth line, the line between Process and End elements.


## limitation
+ The `linkSyle` can not change color of arrow head.
+ There is not any recent information available about it (Greywolf, 2020).


## refs
+ Drago R (2023) "Colouring Your Arrow / Link with `linkStyle` in Mermaid Markdown", DEV Community, url https://dev.to/ranggakd/coloring-your-arrow-link-with-linkstyle-in-mermaid-markdown-39kk.
+ Greywolf J (2020) "Custom arrowhead for mermaid class diagram", Stack Overflow, url https://stackoverflow.com/q/62165026/9475509.
+ Woodward M, Biagianti A (2022) "Include diagrams in your Markdown files with Mermaid", GitHub Blog, url https://github.blog/2022-02-14-include-diagrams-markdown-files-mermaid/.
