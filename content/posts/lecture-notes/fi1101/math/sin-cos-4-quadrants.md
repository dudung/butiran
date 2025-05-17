---
title: "sin cos 4 quadrants"
date: 2023-10-23T16:06:00+07:00
authors: ['Sparisoma Viridi']
tags: ['fi1101']
math: true
draft: false
url: "0110"
---
{{< toc >}}


## trigonometric identities
Thera identities in 1st - 4th quadrants, map sine and cosine function to 1st quadrant.

### 1st quadrant
$$\tag{4.Q1.1}
\cos (2\pi + \beta) = \cos \beta
$$
$$\tag{4.Q1.2}
\sin (2\pi + \beta) = \sin \beta
$$
$$\tag{4.Q1.3}
\cos (\tfrac12 \pi - \beta) = \sin \beta
$$
$$\tag{4.Q1.4}
\sin (\tfrac12 \pi - \beta) = \cos \beta
$$

### 2nd quadrant
$$\tag{4.Q2.1}
\cos (\pi - \beta) = -\cos \beta
$$
$$\tag{4.Q2.2}
\sin (\pi - \beta) = \sin \beta
$$
$$\tag{4.Q2.3}
\cos (\tfrac12 \pi + \beta) = -\sin \beta
$$
$$\tag{4.Q2.4}
\sin (\tfrac12 \pi + \beta) = \cos \beta
$$

### 3rd quadrant
$$\tag{4.Q3.1}
\cos (\pi + \beta) = -\cos \beta
$$
$$\tag{4.Q3.1}
\sin (\pi + \beta) = -\sin \beta
$$
$$\tag{4.Q3.3}
\cos (\tfrac32 \pi - \beta) = -\sin \beta
$$
$$\tag{4.Q3.4}
\sin (\tfrac32 \pi - \beta) = -\cos \beta
$$

### 4th quadrant
$$\tag{4.Q4.1}
\cos (2\pi - \beta) = \cos \beta
$$
$$\tag{4.Q4.1}
\sin (2\pi - \beta) = -\sin \beta
$$
$$\tag{4.Q4.3}
\cos (\tfrac32 \pi + \beta) = \sin \beta
$$
$$\tag{4.Q4.4}
\sin (\tfrac32 \pi + \beta) = -\cos \beta
$$

The two Eqns (4.Q4.1) and (4.Q4.2) also mean that
+ $\cos (-\beta) = \cos \beta$,
+ $\sin (-\beta) = -\sin \beta$.


## examples
### $\sin 60 \degree$
```
sin 60 = sin (90 - 30) = cos 30
```

{{< mermaid >}}
flowchart LR
  A --> B --> C --> D --> A
  A(["sin 60"])
  B(["sin (90 - 30)"])
  C(["cos 30"])
  D(["cos (90 - 60)"])
{{< /mermaid >}}

### $\cos 120 \degree$
```
cos 120 = cos (180 - 60) = - cos 60
cos 120 = cos (90 + 30) =  - sin 30 = - cos 60
```

{{< mermaid >}}
flowchart LR
  A --> B --> C
  A --> D --> E --> C
  A(["cos 120"])
  B(["cos (180 &mdash; 60)"])
  C(["&mdash; cos 60"])
  D(["cos (90 + 30) "])
  E(["&mdash; sin 30"])
{{< /mermaid >}}

### $\cos 210 \degree$
```
cos 210 = cos (180 + 30) = - cos 30
cos 210 = cos (270 - 60) = - sin 60 = - cos 30
```

{{< mermaid >}}
flowchart LR
  A --> B --> C
  A --> D --> E --> C
  A(["cos 210"])
  B(["cos (180 + 30)"])
  C(["&mdash; cos 30"])
  D(["cos (270 &mdash; 60) "])
  E(["&mdash; sin 60"])
{{< /mermaid >}}

### $\sin (-330 \degree)$
```
sin(-330) = sin(-360 + 30) = sin(30)
sin(-330) = -sin(330) = -sin(360-30) = sin(30)
sin(-330) = -sin(330) = -sin(270+60) = cos(60) 
```
{{< mermaid >}}
flowchart LR
  A --> B --> C
  A --> D --> E --> C
  D --> F --> G --> C
  A(["sin (&mdash;330)"])
  B(["sin (&mdash;360 + 30)"])
  C(["sin 30"])
  D(["&mdash;sin 330 "])
  E(["&mdash;sin (360 &mdash; 30)"])
  F(["&mdash;sin (270 + 60)"])
  G(["cos 60"])
{{< /mermaid >}}

### $\sin (-150 \degree)$
```
sin (-150) = -sin 150 = -sin (180 - 30) = -sin 30
sin (-150) = -sin 150 = -sin (90 + 60) = -cos 60 = -sin 30
sin (-150) = sin (360-210) = sin (-210) = -sin 210 = -sin (180 + 30) = -sin 30
sin (-150) = sin (360-210) = sin (-210) = -sin 210 = -sin (270-60) = -cos 60 = -sin 30
```
{{< mermaid >}}
flowchart LR
  A --> B --> C --> D
  B --> E --> F --> D
  A --> G --> H --> I --> D
  H --> J --> K --> D
  A(["sin (&mdash;150)"])
  B(["&mdash; sin 150"])
  C(["&mdash; sin (180 &mdash; 30)"])
  D(["&mdash; sin 30"])
  E(["&mdash; sin (90 + 60)"])
  F(["&mdash; cos 60"])
  G(["sin (&mdash;360 + 210)"])
  H(["sin 210"])
  I(["sin (180 + 30)"])
  J(["sin (270 - 60)"])
  K(["&mdash; cos 60"])
{{< /mermaid >}}

Test results
```bash
sin(-150) = -0.5000
-sin(150) = -0.5000
-sin(180-30) = -0.5000
-sin(30) = -0.5000
-sin(90+60) = -0.5000
-cos(60) = -0.5000
sin(-360+210) = -0.5000
sin(210) = -0.5000
sin(180+30) = -0.5000
sin(270-60) = -0.5000
```

Python code https://onecompiler.com/python/3zrb5qd5e
```python
import math

def sin(x):
  return math.sin(x*math.pi/180);

def cos(x):
  return math.cos(x*math.pi/180);

s = [
  "sin(-150)", 
  "-sin(150)",
  "-sin(180-30)",
  "-sin(30)",
  "-sin(90+60)",
  "-cos(60)",
  "sin(-360+210)",
  "sin(210)",
  "sin(180+30)",
  "sin(270-60)"
]

for e in s:
  print(e, "=", f'{eval(e):.4f}')
```


## challenges
+ Try your own expression, e.g. represent $\cos (\theta + \tfrac14 \pi)$ in 2nd, 3rd, and 4th quadrants.
