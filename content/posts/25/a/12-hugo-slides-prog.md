+++
title = 'hugo slides progress and others'
date = '2025-01-06T04:55:08+07:00'
draft = false
type = 'slides'
authors = ['viridi']
tags = ['rusn', 'hugo']
categories = ['slides']
math = true
url = '25a12'
[ref]
author = 'Sparisoma Viridi' 
title = 'hugo slides prog and others'
source = 'rusn'
created = '6 Jan 2025'
updated = ''
url = 'https://dudung.github.io/rusn/25a12/'
accessed = '20250106'
+++
<!--more-->

+ Progress of Hugo slides template (and it is a short setence example).
+ In general, slide layout is changed, e.g. two the rectangles are not used instead of only one previously (and this is a long sentence example that populates three lines). 
+ For equation $y = ax^2 + bx + c$.
$$\tag{1}
x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}.
$$
+ The roots of $y$ are obtained from Eqn (1).
+ There is also disciminant $D = b^2 - 4ac$.

- Comparison of Hugo, Astro, and Gatsby.
Tech | Built with | Performance | License
:- | :- | :- | :-
Hugo   | Go          | 98/100 | Apache 2.0
Astro  | TypeScript  | 92/100 | MIT
Gatsby | React       | 6/100 | MIT
- Focus on content of the article instead of coding.

+ A simple flowchart can be as follow.
{{< mermaid >}}
flowchart LR
  B --> I --> C
  C --"Y"--> P1
  C --"N"--> P2
  P1 & P2 --> O --> E
  B(["Begin"])
  I[/"Input"/]
  C{"Condition"}
  P1["Process 1"]
  P2["Process 2"]
  O[/"Output"/]
  E(["End"])
{{< /mermaid >}}
+ Shapes are begin/end, I/O, condition, process.

- Quadratic curve.
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

+ Aspirin molecule.
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

- Code
```py
x = []
y = []
a = 1
x1 = 3
x2 = 7
for xi in range(2, 9):
  yi = a * (xi - x1) * (xi - x2)
  x.append(xi)
  y.append(yi)
print(x)
print(y)
```

+ Score music.
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

- In general all features can be shown in a note with vertical srcoll bar, where only fine tuning necessary but not so urgent right know.
- I can say that this progress is very good.
- Only mouse scroll that affect the 3dmoljs zoom, which is the reason why there is not any image at the beginning, that are already zoomed in or out while I am scrolling the container.
