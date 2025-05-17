+++
title = '2c flowchart md'
date = '2024-12-28T07:43:27+07:00'
draft = false
type = 'slides'
layout = 'columns'
tags = ['shortcode', 'two-col']
authors = ['viridi']
math = true
url = '24l40'
+++
<!--more-->

{{< columns raw="yes" >}}
{{< mermaid >}}
flowchart LR
  B --> I --> C
  C --"Y"--> o1a
  C --"N"--> o2a
  o1b --> P1
  o2b --> P2
  P1 & P2 --> O --> E
  B(["Begin"])
  I[/"Input"/]
  C{"Condition"}
  P1["Process 1"]
  P2["Process 2"]
  O[/"Output"/]
  E(["End"])
  o1a(("1"))
  o2a(("2"))
  o1b(("1"))
  o2b(("2"))
{{< /mermaid >}}
{{< /columns >}}

{{< columns >}}
+ Shapes are
  - begin / end,
  - input / output,
  - condition,
  - processes,
  - 0 1 2 3 4 5 6 7 8 9 a b c d e f.
{{< /columns >}}

{{< ref >}}
Maciej Duraj, "Basic overview of creating flowcharts using Mermaid", CKEditor, 8 Mar 2000, {{< url "https://ckeditor.com/blog/basic-overview-of-creating-flowcharts-using-mermaid/" >}} [20241222].
{{< /ref >}}
