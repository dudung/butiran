+++
title = 'sd cooling coffee'
date = '2025-02-26T20:33:24+07:00'
draft = false
authors = ['viridi']
type = 'slides'
layout = 'columns'
math = true
tags = ['exponential','cooling']
categories = ['system-dynamics']
url = '25b95'
[ref]
title = 'System Dynamics Feedback Loops'
author = 'GPT-4o'
source = 'ChatGPT, 26 Feb 2025'
updated = '-'
url = 'https://chatgpt.com/share/67beed0b-370c-800a-8573-555e0c3b2424'
accessed = '20250226'
+++

{{< columns >}}
+ Example: Cooling a hot cup of coffee.
+ Stock: Coffee temperature $T$.
+ Flow: Heat loss to the environment $kT$.
+ Behavior: Temperature decreases towards room temperature $T_{\rm room}$.
{{< /columns >}}

{{< columns raw="yes" >}}
<li>Equation:</li>
$$\tag{SD3}
\frac{dT}{dt} = -k(T - T_{\rm room}),
$$
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;where $k$ is the cooling rate.
<li>Diagram:</li>
{{< mermaid >}}
graph LR;
  Coffee -->|Loses Heat| Environment
  Environment -->|Gains Heat| Coffee
{{< /mermaid >}}
{{< /columns >}}
