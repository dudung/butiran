+++
title = 'check katex mermaid abc 3dmol scatter features'
date = '2025-04-16T09:16:06+07:00'
authors = ['viridi']
draft = false
math = true
type = 'notes'
tags = ['katex', 'mermaid', '3dmoljs', 'abcjs', 'scatter']
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


## scatter
Using chartJS a scatter plot can be drawn as follow.

{{< scatter >}}
B_XLABEL x
B_YLABEL y
B_SLABEL Data-1,Data-2,Data-3
B_PCOLOR #f88,#88f,#8f8
B_PRADII 4,6,0
B_LVISIB false,true,true
B_LCOLOR #f88,#88f,#8f8

5.000,3.000
4.902,3.618
4.618,4.176
4.176,4.618
3.618,4.902
3.000,5.000
2.382,4.902
1.824,4.618
1.382,4.176
1.098,3.618
1.000,3.000
1.098,2.382
1.382,1.824
1.824,1.382
2.382,1.098
3.000,1.000
3.618,1.098
4.176,1.382
4.618,1.824
4.902,2.382

12.000,3.000
11.934,3.624
11.741,4.220
11.427,4.763
11.007,5.229
10.500,5.598
9.927,5.853
9.314,5.984
8.686,5.984
8.073,5.853
7.500,5.598
6.993,5.229
6.573,4.763
6.259,4.220
6.066,3.624
6.000,3.000
6.066,2.376
6.259,1.780
6.573,1.237
6.993,0.771
7.500,0.402
8.073,0.147
8.686,0.016
9.314,0.016
9.927,0.147
10.500,0.402
11.007,0.771
11.427,1.237
11.741,1.780
11.934,2.376

9.000,2.000
8.809,2.588
8.309,2.951
7.691,2.951
7.191,2.588
7.000,2.000
7.191,1.412
7.691,1.049
8.309,1.049
8.809,1.412
{{< /scatter >}}


## notes
+ All are working but not really smooth.
+ For 3dmoljs there is warning as follow.

```go
[GroupMarkerNotSet(crbug.com/242999)!:
A0A02C008C540000]Automatic fallback to 
software WebGL has been deprecated. 
Please use the --enable-unsafe-swiftshader 
flag to opt in to lower security guarantees 
for trusted content.
```
