+++
title = '2c scatter flowchart'
date = '2024-12-28T08:54:42+07:00'
draft = false
type = 'slides'
layout = 'columns'
tags = ['shortcode', 'two-col']
authors = ['viridi']
math = true
url = '24l41'
+++
<!--more-->

{{< columns raw="yes" >}}
{{< scatter >}}
B_XLABEL x
B_YLABEL y
B_SLABEL Data-1
B_PCOLOR #68c
B_PRADII 7
B_LVISIB true
B_LCOLOR #ddf

2, 5
3, 0
4, -3
5, -4
6, -3
7, 0 
8, 5
{{< /scatter >}}
{{< /columns >}}

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

{{< ref >}}
Author, "Title", Source, Date, {{< url "https://url.com" >}} [20241124]
{{< /ref >}}
