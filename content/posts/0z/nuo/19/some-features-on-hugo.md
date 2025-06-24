+++
title = 'some features on hugo'
date = 2024-03-01T16:14:00+07:00
draft = false
tags = ['if3110']
math = true
url = '1974'
+++
Some features on Hugo: JavaScript enhanced static web page.
<!--more--> 
Additional features on static web page using Hugo.

+ [some_features_on_hugo.pdf](https://osf.io/u9gkh)


## equation
$$\tag{255}
y = ax^2 + bx + c
$$
$$\tag{225}
x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

```
$$\tag{255}
y = ax^2 + bx + c
$$
$$\tag{225}
x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```


## matrix
$$\tag{1}
\mathbf{M} = \left[
\begin{array}{cccc}
x &  1 & 0.5 & 2 \newline
0 & -39 & y & 1 \newline
z & 2^x & \sqrt{x} & \frac{1}{z} \newline
0 & 0 & 0 & 1
\end{array}
\right]
$$

```
$$\tag{1}
\mathbf{M} = \left[
\begin{array}{cccc}
x &  1 & 0.5 & 2 \newline
0 & -39 & y & 1 \newline
z & 2^x & \sqrt{x} & \frac{1}{z} \newline
0 & 0 & 0 & 1
\end{array}
\right]
$$
```


## fraction
$$\tag{63}
y = \frac{\displaystyle 1 -
\frac{1 - \frac{\displaystyle 1 -
\frac{1}{x}}{\displaystyle x}}{x}}
{\displaystyle 1 +
\frac{1}{\displaystyle 1 +
\frac{1}{\displaystyle 1 +
\frac{1}{x}}}}
$$

```
$$\tag{63}
y = \frac{\displaystyle 1 -
\frac{1 - \frac{\displaystyle 1 -
\frac{1}{x}}{\displaystyle x}}{x}}
{\displaystyle 1 +
\frac{1}{\displaystyle 1 +
\frac{1}{\displaystyle 1 +
\frac{1}{x}}}}
$$
```


## flowchart
{{< mermaid >}}
flowchart LR
  B --> I --> C --"Y"--> P1
  C --"N"--> P2
  P1 & P2 --> O --> E
  B(["Begin"])
  I[/"Input"/]
  C{"If yes"}
  P1["Process 1"]
  P2["Process 2"]
  O[/"Output"/]
  E(["End"])
{{< /mermaid >}}

```
{{</* mermaid */>}}
flowchart LR
  B --> I --> C --"Y"--> P1
  C --"N"--> P2
  P1 & P2 --> O --> E
  B(["Begin"])
  I[/"Input"/]
  C{"If yes"}
  P1["Process 1"]
  P2["Process 2"]
  O[/"Output"/]
  E(["End"])
{{</* /mermaid */>}}
```


## scatter
{{< scatter 80 320 >}}
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

```
{{</* blank/scatter 80 320 */>}}
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
{{</* /blank/scatter */>}}
```


## music notation
{{< abcjs >}}
X:1
T:Twinkle Twinkle Little Star
K:C
L:1/4
CC GG | AA G2 | CC GG | AA G2 |
w:Twin- kle, twin- kle, lit- tle star how I won- der what you are!
GG FF | EE D2 | GG FF | EE D2 |
w:Up a- bove the world so high, like a dia- mond in the sky.
CC GG | AA G2 | FF EE | DD C2 ||
w:Twin- kle, twin- kle, lit- tle star, how I won- der what you are!
{{< /abcjs >}}

```
{{</* blank/abcjs */>}}
X:1
T:Twinkle Twinkle Little Star
K:C
L:1/4
CC GG | AA G2 | CC GG | AA G2 |
w:Twin- kle, twin- kle, lit- tle star how I won- der what you are!
GG FF | EE D2 | GG FF | EE D2 |
w:Up a- bove the world so high, like a dia- mond in the sky.
CC GG | AA G2 | FF EE | DD C2 ||
w:Twin- kle, twin- kle, lit- tle star, how I won- der what you are!
{{</* /blank/abcjs */>}}
```


## molecules
{{< 3dmoljs >}}
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

```
{{</* blank/3dmoljs */>}}
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
{{</* /blank/3dmoljs */>}}
```


## path
{{< svgpath width=200 height=200 border=0 >}}
B_STYLE red,3,none # resistor 1
M 40 30
l 40 0 l 2.5 10
l 5 -20 l 5 20 l 5 -20 l 5 20 l 5 -20 l 5 20 l 5 -20
l 2.5 10 l 40 0

B_STYLE green,3,none # resistor 2
M 160 30
l 0 40 l 10 2.5 
l -20 5  l 20 5 l -20 5 l 20 5 l -20 5 l 20 5 l -20 5
l 10 2.5 l 0 40

B_STYLE blue,3,none # resistor 3
M 160 150
l -40 0 l -2.5 10
l -5 -20 l -5 20 l -5 -20 l -5 20 l -5 -20 l -5 20 l -5 -20
l -2.5 10 l -40 0

B_STYLE cyan,3,none # battery 1
M 40 150
l 0 -50
m -8 0 l 16 0
m -8 -10 l -20 0 l 40 0
m 0 -10 l 0 -10 m -5 5 l 10 0
m -25 15 l 0 -60 
{{< /svgpath >}}

```
{{</* blank/svgpath width=200 height=200 border=0 */>}}
B_STYLE red,3,none # resistor 1
M 40 30
l 40 0 l 2.5 10
l 5 -20 l 5 20 l 5 -20 l 5 20 l 5 -20 l 5 20 l 5 -20
l 2.5 10 l 40 0

B_STYLE green,3,none # resistor 2
M 160 30
l 0 40 l 10 2.5 
l -20 5  l 20 5 l -20 5 l 20 5 l -20 5 l 20 5 l -20 5
l 10 2.5 l 0 40

B_STYLE blue,3,none # resistor 3
M 160 150
l -40 0 l -2.5 10
l -5 -20 l -5 20 l -5 -20 l -5 20 l -5 -20 l -5 20 l -5 -20
l -2.5 10 l -40 0

B_STYLE cyan,3,none # battery 1
M 40 150
l 0 -50
m -8 0 l 16 0
m -8 -10 l -20 0 l 40 0
m 0 -10 l 0 -10 m -5 5 l 10 0
m -25 15 l 0 -60 
{{</* /blank/svgpath */>}}
```


## data block
{{< datablock >}}
1
2
3

1,4,16
2,32,64

10,100
20,200
30,300
40,400

1,2,3,4,5,6
7,8,9,0,9,8
7,6,5,4,3,2
1,0,1,2,3,4
5,6,7,8,9,0
{{< /datablock >}}

```
{{</* blank/datablock */>}}
1
2
3

1,4,16
2,32,64

10,100
20,200
30,300
40,400

1,2,3,4,5,6
7,8,9,0,9,8
7,6,5,4,3,2
1,0,1,2,3,4
5,6,7,8,9,0
{{</* /blank/datablock */>}}
```
