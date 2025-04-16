+++
title = 'check katex mermaid abc 3dmol'
date = '2025-04-16T09:16:06+07:00'
authors = ['viridi']
draft = true
math = true
type = 'notes'
tags = ['katex', 'mermaid']
categories = ['butiran']
url = '25d47'
+++

<!-- more -->


## katex
Example of inline equation is $y = ax^2 + bx + c$, and

$$\tag{1}
x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

is example of block equation.


## mermaid
Common flowchart with begin, input, condition, process, output, and end.

{{< mermaid >}}
flowchart LR
%% link elements
B --> I --> C
C --"Y"--> P1
C --"N"--> P2
P1 & P2 --> O --> E
%% define elements
B(["Begin"])
I[/"Input"/]
C{"Condition"}
P1["Process 1"]
P2["Process 2"]
O[/"Output"/]
E(["End"])
{{< /mermaid >}}


## abcjs
Twinkle-twinkle litle star.

{{< abcjs >}}
X:1
K:C
L:1/4
CC GG | AA G2 | CC GG | AA G2 |
w:Twin- kle, twin- kle, lit- tle star how I won- der what you are!
GG FF | EE D2 | GG FF | EE D2 |
w:Up a- bove the world so high, like a dia- mond in the sky.
CC GG | AA G2 | FF EE | DD C2 ||
w:Twin- kle, twin- kle, lit- tle star, how I won- der what you are!
{{< /abcjs >}}


## 3dmoljs
Aspirin molecule.

{{< 3dmoljs ty=5 ang=45 ax="y" >}}
21
Aspirin
O    1.2333    0.5540    0.7792
O   -0.6952   -2.7148   -0.7502
O    0.7958   -2.1843    0.8685
O    1.7813    0.8105   -1.4821
C   -0.0857    0.6088    0.4403
C   -0.7927   -0.5515    0.1244
C   -0.7288    1.8464    0.4133
C   -2.1426   -0.4741   -0.2184
C   -2.0787    1.9238    0.0706
C   -2.7855    0.7636   -0.2453
C   -0.1409   -1.8536    0.1477
C    2.1094    0.6715   -0.3113
C    3.5305    0.5996    0.1635
H   -0.1851    2.7545    0.6593
H   -2.7247   -1.3605   -0.4564
H   -2.5797    2.8872    0.0506
H   -3.8374    0.8238   -0.5090
H    3.7290    1.4184    0.8593
H    4.2045    0.6969   -0.6924
H    3.7105   -0.3659    0.6426
H   -0.2555   -3.5916   -0.7337
{{< /3dmoljs >}}

