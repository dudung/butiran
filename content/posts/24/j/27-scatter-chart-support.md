+++
title = 'scatter chart.js'
date = 2024-10-15T08:22:11+07:00
draft = false
tags = ['bug2', 'hugo', 'shortcodes', 'scatter']
authors = ['viridi']
url = '24j27'
+++
Scatter chart support on a Hugo post using [Chart.js](https://www.chartjs.org/) library.

<!--more-->

Scatter plot can be displayed in a note (or Hugo post) as in Figure 1.

{{< scatter 80 200 >}}
B_XLABEL x
B_YLABEL y
B_SLABEL Data-1
B_PCOLOR #fcc
B_PRADII 10
B_LVISIB true
B_LCOLOR #f00

1,1
2,2
3,3
4,2
5,2
{{< /scatter >}}

Figure 1. Scatter plot of x against y for Data-1.

Following shortcodes is for Figure 1.

```
{{</* scatter 80 320 */>}}
B_XLABEL x
B_YLABEL y
B_SLABEL Data-1
B_PCOLOR #fcc
B_PRADII 10
B_LVISIB true
B_LCOLOR #f00

1,1
2,2
3,3
4,2
5,2
{{</* /scatter */>}}
```

Meaning of each paremeters in first block from previous code are given in Table 1.

Tabel 1. Parameters, values, meaning, and other features.

No | Parameters | Meaning | Value | Multiple | Separator
:-: | :-: | :-: | :-: | :-: | :-:
1 | `B_XLABEL` | x-axis label | string | no | -
2 | `B_YLABEL` | y-axis label | string | no | -
3 | `B_SLABEL` | series label | string | yes | comma
4 | `B_PCOLOR` | point color | hexadecimal | yes | comma
5 | `B_PRADII` | point radius | integer | yes | comma
6 | `B_LVISIB` | line visibility | boolean | yes | comma
7 | `B_LCOLOR` | line color | hexadecimal | yes | comma

Second block and other succeeding blocks are for data. One block for one series.

Let us have another scatter chart as follow.

{{< scatter 80 200 >}}
B_XLABEL x
B_YLABEL y
B_SLABEL Data-2
B_PCOLOR #ccf
B_PRADII 5
B_LVISIB true
B_LCOLOR #00f

5,1
6,1
7,3
8,5
9,5
{{< /scatter >}}

Figure 2. Scatter plot of x against y for Data-2.

Following shortcodes is for Figure 2.

```
{{</* scatter 80 320 */>}}
B_XLABEL x
B_YLABEL y
B_SLABEL Data-2
B_PCOLOR #ccf
B_PRADII 5
B_LVISIB true
B_LCOLOR #00f

5,1
6,1
7,3
8,5
9,5
{{</* /scatter */>}}
```

Both figures can be merge into one figure as follow.

{{< scatter 80 200 >}}
B_XLABEL x
B_YLABEL y
B_SLABEL Data-1,Data-2
B_PCOLOR #ccf,#fcc
B_PRADII 10,5
B_LVISIB true
B_LCOLOR #00f,#f00

1,1
2,2
3,3
4,2
5,2

5,1
6,1
7,3
8,5
9,5
{{< /scatter >}}

Figure 3. Scatter plot of x against y for Data-2.

Notice in Figure 3 that Data-1 series and Data-2 series have different range. The first is from1 to 5, whlie the second is from 5 to 9.

```
{{</* scatter 80 200 */>}}
B_XLABEL x
B_YLABEL y
B_SLABEL Data-1,Data-2
B_PCOLOR #ccf,#fcc
B_PRADII 10,5
B_LVISIB true
B_LCOLOR #00f,#f00

1,1
2,2
3,3
4,2
5,2

5,1
6,1
7,3
8,5
9,5
{{</* /scatter */>}}
```

Above is shortcodes for Figure 3, where it shows two blocks of data. The first

```
1,1
2,2
3,3
4,2
5,2
```

is for Data-1 series and

```
5,1
6,1
7,3
8,5
9,5
```

is for Data-2 series.

**Challenge 1**. Generate three data blocks and create a scatter plot with main color red, green, blue for each series.

**Challenge 2**. Draw series only with marker but without lines connecting two adjacent markes.
