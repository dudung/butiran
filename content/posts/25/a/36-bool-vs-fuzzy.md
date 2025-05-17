+++
date = '2025-01-14T20:05:20+07:00'
title = 'boolean logic vs fuzzy logic'
draft = false
type = 'slides'
layout = 'columns'
authors = ['viridi']
tags = ['fuzzy-logic']
url = '25a36'
[ref]
author = 'Wesley Chai'
title = 'fuzzy logic'
source = 'TechTarget'
created = '8 Jun 2021'
updated = ''
url = 'https://www.techtarget.com/searchenterpriseai/definition/fuzzy-logic'
accessed = '20250114'
+++

{{< columns raw="yes" >}}
Boolean logic
{{< vspace 1.5 >}}
{{< mermaid >}}
  flowchart LR
  C --> P1
  C --> P2
  C{Is it hot?}
  P1(["Yes/1"])
  P2(["No/0"])
{{< /mermaid >}}
{{< /columns >}}

{{< columns raw="yes" >}}
Fuzzy logic
{{< mermaid >}}
  flowchart LR
  C --> P1
  C --> P3
  C --> P5
  C{Is it hot?}
  P1(["Very much/0.9"])
  P3(["Moderate/0.5"])
  P5(["Verly little/0.1"])
{{< /mermaid >}}
{{< /columns >}}
