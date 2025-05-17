+++
title = 'sd linear growth'
date = '2025-02-26T17:25:57+07:00'
draft = false
authors = ['viridi']
type = 'slides'
layout = 'columns'
math = true
tags = ['linear', 'growth']
categories = ['system-dynamics']
url = '25b93'
[ref]
title = 'System Dynamics Feedback Loops'
author = 'GPT-4o'
source = 'ChatGPT, 26 Feb 2025'
updated = '-'
url = 'https://chatgpt.com/share/67beed0b-370c-800a-8573-555e0c3b2424'
accessed = '20250226'
+++

{{< columns >}}
+ Example: Population growth without feedback.
+ Stock: Population $P$
+ Flow: Birth rate $b$ (constant).
+ Behavior: Population increases at a steady rate.
{{< /columns >}}

{{< columns raw="yes" >}}
<li>Equation:</li>
$$\tag{SD1}
\frac{dP}{dt} = b.
$$
<li>Diagram:</li>
{{< mermaid>}}
graph TD;
  Population -->|+ Constant Birth Rate| Population
{{< /mermaid >}}
{{< /columns >}}
