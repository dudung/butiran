+++
title = 'Scatter plot with Chart.js'
date = 2024-01-12T08:18:18+07:00
draft = false
url = '1810'
+++
Create shortcode for scatter plot with [Chart.js](https://www.chartjs.org/).
<!--more-->


## create post
```
$ hugo new content tests/scatter-plot-with-chart-js.md
Content "D:\\blank\\content\\tests\\scatter-plot-with-chart-js.md" created
```

It is placed in `content/tests` folder while the shortcode being developed.


## tests 1
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

## test 2
{{< scatter 80 360 >}}
B_XLABEL x-y
B_YLABEL x+y
B_SLABEL A,B,C
B_PCOLOR #22a,#2a2,#a22
B_PRADII 0,4,8
B_LVISIB true,false,false
B_LCOLOR #22a,#dfd,#fdd

0,0
1,0
1,1
0,1

3,0
3,2
5,2
5,0
4,1

7,0
8,4
9,7
10,9
11,9.5
12,9
13,7
14,4
15,0
{{< /scatter >}}

```
{{</* blank/scatter 80 360 */>}}
B_XLABEL x-y
B_YLABEL x+y
B_SLABEL A,B,C
B_PCOLOR #22a,#2a2,#a22
B_PRADII 0,4,8
B_LVISIB true,false,false
B_LCOLOR #22a,#dfd,#fdd

0,0
1,0
1,1
0,1

3,0
3,2
5,2
5,0
4,1

7,0
8,4
9,7
10,9
11,9.5
12,9
13,7
14,4
15,0
{{</* /blank/scatter */>}}
```

## version 1
+ Features
  - Multi series with label,
  - Point, line, line-point,
  - Color for point and line,
  - Axis label.
+ Problems
  - hoverRadius seems wierd.