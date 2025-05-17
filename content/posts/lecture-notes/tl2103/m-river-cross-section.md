---
title: "m river cross-section"
date: 2023-09-27T19:34:00+07:00
authors: ['Sparisoma Viridi']
tags: ['tl2103']
draft: false
math: true
url: "0070"
---
{{< toc >}}


## direction
+ To model river flow, an analysis of the river
cross-section is required. To obtain this, it is
necessary to measure several points of depth
along the river cross-section.
+ Create a program that can receive input for
the river's width, the number of measurement
segments, and the measurement results
conducted. Then display the obtained river
cross-section.
+ Result
```
River width = 4
Number of segment = 2
Depth measurement at x=0 m is ..
Depth measurement at x=2 m is ..
Depth measurement at x=4 m is ..
```
Plot also the curve with data
+ 10
+ 6
+ 0.5, 1.2, 1.4, 1.56, 1.53, 1.17, 0.61

## code
```matlab
w = input("River width =");
N = input("Number of segment = ");
dx = w / N;
x = [];
h = [];
for i = 0:N
    xi = i * dx;
    x = [x xi];
    fprintf("Depth measurement at x=%0.3f m:", xi);
    hi = input("");
    h = [h -hi];
end

disp(x);
disp(h);
plot(x, h)
```

## result
```bash
River width =
10
Number of segment = 
6
Depth measurement at x=0.000 m:
0.5
Depth measurement at x=1.667 m:
1.2
Depth measurement at x=3.333 m:
1.4
Depth measurement at x=5.000 m:
1.56
Depth measurement at x=6.667 m:
1.53
Depth measurement at x=8.333 m:
1.17
Depth measurement at x=10.000 m:
0.61
         0    1.6667    3.3333    5.0000    6.6667    8.3333   10.0000

   -0.5000   -1.2000   -1.4000   -1.5600   -1.5300   -1.1700   -0.6100
```

{{< svg "img/tl2103/river-cross-section.svg" >}}