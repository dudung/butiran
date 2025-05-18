+++
title = 'Generate data for circle'
date = 2024-01-12T16:38:01+07:00
draft = false
tags = ['js']
+++
Generate data points for circle using Vanilla JS.
<!--more-->


## create post
Using CLI create a new post
```
$ hugo new content tests/generate-data-for-circle.md
Content "D:\\blank\\content\\tests\\generate-data-for-circle.md" created
```
or simply copy and past older post, then modify its content.


## js code
```
import math

def circlePoints(xc, yc, R, N):
  M = round(360 / N);

  xx = []
  yy = []
  for i in range(N):
    q = i * (math.pi / 180) * M
    x = xc + R * math.cos(q)
    y = yc + R * math.sin(q)
    xx.append(x)
    yy.append(y)    
  
  return [xx, yy]

N1 = 20
[x1, y1] = circlePoints(3, 3, 2, N1)
for i in range(N1):
  print(
    f'{x1[i]:.3f}', 
    f'{y1[i]:.3f}',
    sep=','
  )

print()

N2 = 30
[x2, y2] = circlePoints(9, 3, 3, N2)
for i in range(N2):
  print(
    f'{x2[i]:.3f}', 
    f'{y2[i]:.3f}',
    sep=','
  )

print()

N3 = 10
[x3, y3] = circlePoints(8, 2, 1, N3)
for i in range(N3):
  print(
    f'{x3[i]:.3f}', 
    f'{y3[i]:.3f}',
    sep=','
  )

```
url https://onecompiler.com/python/3zz6tddvh


## output
Two adjacent datablocks are separated with one blank line.
```
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
```

This output will be used in designing ang testing a shortcode `scatter.html`.
