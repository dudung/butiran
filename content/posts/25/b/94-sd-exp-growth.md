+++
title = 'sd exponential growth'
date = '2025-02-26T19:12:01+07:00'
draft = false
authors = ['viridi']
type = 'slides'
layout = 'columns'
math = true
tags = ['exponential', 'growth']
categories = ['system-dynamics']
url = '25b94'
[ref]
title = 'System Dynamics Feedback Loops'
author = 'GPT-4o'
source = 'ChatGPT, 26 Feb 2025'
updated = '-'
url = 'https://chatgpt.com/share/67beed0b-370c-800a-8573-555e0c3b2424'
accessed = '20250226'
+++

{{< columns >}}
+ Example: Population growth with feedback.
+ Stock: Population $P$
+ Flow: Birth rate proportional to population, where $r$ is the growth rate, then more people lead to more births, reinforcing growth.
+ Behavior: Exponential growth.
{{< /columns >}}

{{< columns raw="yes" >}}
<li>Equation:</li>
$$\tag{SD2}
\frac{dP}{dt} = rP.
$$
<li>Diagram:</li>
{{< mermaid >}}
graph LR;
  Population -->|Influences| BirthRate
  BirthRate -->|Increases| Population
{{< /mermaid >}}
{{< /columns >}}
