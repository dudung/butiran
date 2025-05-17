---
layout: butir
authors: [viridi]
title: simple linear regression least square
permalink: pages/0210
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: mathematics
tags: ["simple linear regression", "least square"]
date: 2021-12-02 21:20:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/21/2021-12-01-simple-linear-regression-least-square.md
twitter_username: 6unpnp
nodes: []
---
Model simple linear regression (SLR) dikatakan sederhana karena hanya memiliki satu prediktor, linier karena menggunakan fungsi linier dengan dua parameter, dan regresi karena model menghasilkan satu variabel respons sebagai fungsi dari satu variabel prediktor [[1](#r01)]. Model ini terkait dengan titik sampel dua-dimensi dengan satu variabel bebas dan satu variabel terikat, yang secara konvensional menggunakan $x$ dan $y$ [[2](#r02)]. Kedua parameter dalam SLR dapat diestimasi menggunakan least square (LR), yang penurunannya perlu meggunakan kalkulus ataupun tidak [[3](#r03)]. LR yang merupakan prosedur matematika untuk mendapatkan kurva terbaik yang cocok untuk data yang diberikan, yang dilakukan dengan meminimumkan kuadrat dari offset atau residual dari titik data ke kurva, umumnya dicontohkan dengan model linier [[4](#r04)]. Dalam proses penentuan kedua parameter fungsi linier, bila digunakan kalkulus, langkah meminimumkan dilakukan dengan menggunakan turunan terhadap kedua parameter tersebut [[5](#r05)]. LS atau lebih tepatnya yang dimaksud adalah OLS, suatu ordinary LS [[6](#r06)], tak diragukan merupakan salah satu algoritma pembelajaran mesin yang fundamental [[7](#r07)]. Perlu ditekankan bahwa LR (SLR dalam hal ini dan LS merupakan dua hal yang berbeda akan tetapi sering disampaikan secara terkait sehingga kadang membingungkan [[8](#r08)].


## slr model
Model regresi linier sederhana atau SLR memiliki bentuk [[1](#r01)]

\begin{equation}\label{eqn:slr-model}
y_i = b_0 + b_1 x_i + e_i,
\end{equation}

untuk $i \in \\{1, \dots, n \\}$, dengan $y_i \in \mathbb{R}$ nilai riil respons observasi ke-$i$, $b_0 \in \mathbb{R}$ intersep regresi atau titik potong pada sumbu $y$, $b_1 \in \mathbb{R}$ kemiringan regresi, $x_i \in \mathbb{R}$ prediktor untuk oberservasi ke-$i$, dan $e_i \stackrel{\rm iid}{\sim} N(0, \sigma^2)$ suatu suku kesalahan Gaussian.

Terdapat ssumsi mendasar dari model SLR pada Persamaan \eqref{eqn:slr-model}, yaitu
+ hubungan antara $X$ dan $Y$ linier,
+ $x_i$ dan $y_i$ merupakan variabel acak terobservasi (suatu nilai konstan yang diketahui),
+ $e_i \stackrel{\rm iid}{\sim} N(0, \sigma^2)$ adalah variabel acak tak-teramati,
+ $b_0$ dan $b_1$ merupakan konstanta yang tidak diketahui,
+ $(y_i \| x_i) \stackrel{\rm ind}{\sim} N(b_0 + b_1 x_i, \sigma^2)$, homogenitas variansi.

Perlu dicatat bahwaa $b_1$ diharapkan bertambah dalam $Y$ sebesar satu satuan saat bertambahnya $X$.

### terms
Simbol $\rm iid$ merupakan kependekan dari independent and identically distributed, dengan terdistribusi identik (identically distributed) berarti tidak terdapat tren secara keseluruhan atau distribusi tidak berfluktuasi dan semua bagian sampel diambil dari distribusi probabilitas yang sama, dan terdistribusi bebas (independent distributed) berarti semua bagian sampel merupakan kejadian bebas, yang tidak terkait satu sama lain [[9](#r09)].

Simbol $\rm ind$, dengan mengambil pola yang sama dengan $\rm iid$, mungkin berarti independent but not identically distributed, yang istilahnya tidak terlalu mudah dicari, akan tetapi ada [[10](#r10), [11](#r11)].

Homogenitas variansi, yang merupakan asumsi penting yang dimiliki bersama oleh berbagai metode statistik parametrik, membutuhkan bahwa variansi dalam tiap populasi sama bagi semua populasi [[12](#r12)] atau berarti bahwa rata-rata kuadrat jarak suatu nilai terhadap mean adalah sama meliputi semua kelompok dalam suatu studi [[13](#r13)]. Atau secara sederhana memiliki sebaran yang sama, yang saat digambarkan terlihat lebih jelas [[14](#r14)].


## statistics of fit
Terdapat beberapa statistik kecocokan yang dapat digunakan dengan $n$ jumlah pengamatan yang tak-hilang dan $k$ jumlah parameter dalam model [[15](#r15)]. Dengan model $y = f(x)$ maka $\hat{y}_i$ adalah nilai prediksi satu-langkah dari data $x_i$ mengunakan model, sedangkan $y_i$ adalah data respons yang teramati bersama-sama dengan $x_i$.

### mean
\begin{equation}\label{eqn:mean}
\overline{y} = \frac{1}{n} \sum_{i = 1}^n y_i.
\end{equation}

### total sum of squares (uncorrected)
\begin{equation}\label{eqn:sst0}
{\rm SST} = \sum_{i = 1}^n y_i^2.
\end{equation}

### total sum of squares (corrected)
\begin{equation}\label{eqn:sst1}
{\rm SST} = \sum_{i = 1}^n (y_i - \overline{y})^2.
\end{equation}

### sum of square errors
\begin{equation}\label{eqn:sse}
{\rm SSE} = \sum_{i = 1}^n (y_i - \hat{y}_i)^2.
\end{equation}

### mean square error
\begin{equation}\label{eqn:mse}
{\rm MSE} = \frac{1}{n} \sum_{i = 1}^n (y_i - \hat{y}_i)^2.
\end{equation}

### root mean square error
\begin{equation}\label{eqn:rmse}
{\rm RMSE} = \sqrt{\frac{1}{n} \sum_{i = 1}^n (y_i - \hat{y}_i)^2}.
\end{equation}

### mean absolute percent error
\begin{equation}\label{eqn:mape}
{\rm MAPE} = \frac{100}{n} \sum_{i = 1}^n \left\| \frac{(y_i - \hat{y}_i)}{y_i} \right\|.
\end{equation}

### mean absolute error
\begin{equation}\label{eqn:mae}
{\rm MAE} = \frac{1}{n} \sum_{i = 1}^n \left\| y_i - \hat{y}_i \right\|.
\end{equation}

### r-square
\begin{equation}\label{eqn:r2}
R^2 = 1 - \frac{\rm SSE}{\rm SST}.
\end{equation}

### adjusted r-square
\begin{equation}\label{eqn:r2-adjusted}
R_{\rm adj}^2 = 1 - \left( \frac{n - 1}{n - k} \right) (1 - R^2).
\end{equation}

### mean percent error
\begin{equation}\label{eqn:mpe}
{\rm MPE} = \frac{100}{n} \sum_{i = 1}^n \frac{(y_i - \hat{y}_i)}{y_i}.
\end{equation}

### mean error
\begin{equation}\label{eqn:me}
{\rm MAE} = \frac{1}{n} \sum_{i = 1}^n (y_i - \hat{y}_i).
\end{equation}

### adjusted r-squared (other version)
Untuk adjusted $R^2$ terdapat formula yang sedikit berbeda [[16](#r16)]

\begin{equation}\label{eqn:r2-adjusted-other-version}
\begin{array}{rcl} 
R _{\rm adj}^2 & = & \displaystyle 1 - \frac{ {\rm SSE} / (n - k - 1) }{ {\rm SST} / (n - 1) } \newline
& = & \displaystyle 1 - \left( \frac{n - 1}{n - k - 1} \right) (1 - R^2),
\end{array}
\end{equation}

pada bagian penyebut suku kedua ruas paling kanan.


## least square
Kuadrat terkecil digunanakan untuk terjemahan LR, di mana kuadrat yang dimasuka adalah kuadrat dari selisih antara prediksi model dengan pengamatan [[4](#r04)]

\begin{equation}\label{eqn:lr}
R^2 = \sum_{i = 1}^n [y_i - f(x_i, {\rm coeffs})]^2,
\end{equation}

dengan $\rm coeffs$ adalah koefisien dari model, misalnya $b_0$ dan $b_1$ pada Persamaan \eqref{eqn:slr-model}. Arti dari $R^2$ ini adalah deviasi pada arah vertikal. Selanjutnya adalah mencari nilai terkecil atau minimum dari $R^2$ yang diperoleh dengan menurunkan mencari turunan dari $R^2$ terhadap semua koefisien model yang sama dengan nol, seperti

$$
\frac{\partial R^2}{\partial b_0} = 0
$$

dan

$$
\frac{\partial R^2}{\partial b_1} = 0
$$

untuk Persamaan \eqref{eqn:slr-model}.


## derivation
Suatu model linier, mirip dengan Persamaan \eqref{eqn:slr-model}, dengan hanya satu variabel bebas dapat dituliskan sebagai

\begin{equation}\label{eqn:linear-model-1-ind-var}
y = c_0 + c_1 x,
\end{equation}

yang dapat dituliskan untuk $p$ variabel bebas dalam bentuk vektor $c = (c_1, \dots, c_p)$ dengan $c_0$ ada titik potong$ [[17](#r17)], akan tetapi untuk saat ini hanya akan digunakan skalar karena $c = (c_1)$. Penerapan Persamaan \eqref{eqn:sse} pada Persamaan \eqref{eqn:linear-model-1-ind-var} akan memberikan

\begin{equation}\label{eqn:sse-linear-model-1-ind-var}
{\rm SSE} = \sum_{i = 1}^n (y_i - c_0 - c_1 x_i)^2
\end{equation}

untuk data $\\{(x_i, y_i), i = 1, \dots, n\\}$ dengan $n$ adalah jumlah pasangan data yang teramati [[2](#r02)]. Selanjutnya LS diterapkan untuk mencari $c_0$ dan $c_1$ yang membuat $\rm SSE$ minimum melalui

\begin{equation}\label{eqn:sse-lin-mod-min-c0}
\frac{\partial {\rm SSE}}{\partial c_0} = 0
\end{equation}

dan

\begin{equation}\label{eqn:sse-lin-mod-min-c1}
\frac{\partial {\rm SSE}}{\partial c_1} = 0.
\end{equation}

Penerapan Persamaan \eqref{eqn:sse-lin-mod-min-c0} pada Persamaan \eqref{eqn:sse-linear-model-1-ind-var} akan memberikan

\begin{equation}\label{eqn:sse-min-c0=0}
\begin{array}{rcl}
\displaystyle \sum_{i = 1}^n 2 \cdot (y_i - c_0 - c_1 x_i) \cdot -1 & = & 0 \newline
\displaystyle \sum_{i = 1}^n (y_i - c_0 - c_1 x_i) & = & 0 \newline
\displaystyle \sum_{i = 1}^n y_i -  c_0 \sum_{i = 1}^n 1 - c_1 \sum_{i = 1}^n x_i & = & 0,
\end{array}
\end{equation}

sedang penerapan Persamaan \eqref{eqn:sse-lin-mod-min-c1} pada Persamaan \eqref{eqn:sse-linear-model-1-ind-var} akan menghasilkan

\begin{equation}\label{eqn:sse-min-c1=0}
\begin{array}{rcl}
\displaystyle \sum_{i = 1}^n 2 \cdot (y_i - c_0 - c_1 x_i) \cdot -x_i & = & 0 \newline
\displaystyle \sum_{i = 1}^n (y_i - c_0 - c_1 x_i) \cdot x_i & = & 0 \newline
\displaystyle \sum_{i = 1}^n (x_i y_i - c_0 x_i - c_1 x_i^2) & = & 0 \newline
\displaystyle \sum_{i = 1}^n x_i y_i -  c_0 \sum_{i = 1}^n x_i - c_1 \sum_{i = 1}^n x_i^2 & = & 0.
\end{array}
\end{equation}

Kalikan Persamaan \eqref{eqn:sse-min-c0=0} dengan $\sum_{i = 1}^n x_i^2$ dan kurangi dengan Persamaan \eqref{eqn:sse-min-c1=0} yang telah dikalikan dengan $\sum_{i = 1}^n x_i$ akan menghasilkan

\begin{equation}\label{eqn:sse-min-find-c0}
\begin{array}{rcl}
\displaystyle \sum_{i = 1}^n x_i^2 \sum_{i = 1}^n y_i -  c_0 \sum_{i = 1}^n x_i^2 \sum_{i = 1}^n 1 && \newline
\displaystyle - \sum_{i = 1}^n x_i \sum_{i = 1}^n x_i y_i + c_0 \sum_{i = 1}^n x_i \sum_{i = 1}^n x_i & = & 0 \newline
\displaystyle c_0 \left( \sum_{i = 1}^n x_i \sum_{i = 1}^n x_i - \sum_{i = 1}^n x_i^2 \sum_{i = 1}^n 1 \right) & = & \newline
\displaystyle \sum_{i = 1}^n x_i \sum_{i = 1}^n x_i y_i - \sum_{i = 1}^n x_i^2 \sum_{i = 1}^n y_i \newline
c_0 = \frac{\displaystyle \sum_{i = 1}^n x_i \sum_{i = 1}^n x_i y_i - \sum_{i = 1}^n x_i^2 \sum_{i = 1}^n y_i}{\displaystyle \sum_{i = 1}^n x_i \sum_{i = 1}^n x_i - \sum_{i = 1}^n x_i^2 \sum_{i = 1}^n 1}. &&
\end{array}
\end{equation}

Selanjutnya, kalikan Persamaan \eqref{eqn:sse-min-c0=0} dengan $\sum_{i = 1}^n x_i$ dan kurangi dengan Persamaan \eqref{eqn:sse-min-c1=0} yang telah dikalikan dengan $\sum_{i = 1}^n 1$ akan menghasilkan

\begin{equation}\label{eqn:sse-min-find-c1}
\begin{array}{rcl}
\displaystyle \sum_{i = 1}^n x_i \sum_{i = 1}^n y_i -  c_1 \sum_{i = 1}^n x_i \sum_{i = 1}^n x_1 && \newline
\displaystyle - \sum_{i = 1}^n 1 \sum_{i = 1}^n x_i y_i + c_1 \sum_{i = 1}^n 1 \sum_{i = 1}^n x_i^2 & = & 0 \newline
\displaystyle c_1 \left( \sum_{i = 1}^n 1 \sum_{i = 1}^n x_i^2 - \sum_{i = 1}^n x_i \sum_{i = 1}^n x_i \right) & = & \newline
\displaystyle \sum_{i = 1}^n 1 \sum_{i = 1}^n x_i y_i - \sum_{i = 1}^n x_i \sum_{i = 1}^n y_i \newline
c_1 = \frac{\displaystyle \sum_{i = 1}^n 1 \sum_{i = 1}^n x_i y_i - \sum_{i = 1}^n x_i \sum_{i = 1}^n y_i}{\displaystyle \sum_{i = 1}^n 1 \sum_{i = 1}^n x_i^2 - \sum_{i = 1}^n x_i \sum_{i = 1}^n x_1}. &&
\end{array}
\end{equation}

Dari Persamaan \eqref{eqn:sse-min-find-c0} dan \eqref{eqn:sse-min-find-c1} telah diperoleh nilai $c_0$ dan $c_1$. 

Kemudian, dapat didefinisikan beberapa simbol [[18](#r18)]

\begin{equation}\label{eqn:s1=n}
n = \sum_{i = 1}^n 1,
\end{equation}

\begin{equation}\label{eqn:sx}
{\rm Sx} =  \sum _{i = 1}^n x_i,
\end{equation}

\begin{equation}\label{eqn:sy}
{\rm Sy} =  \sum _{i = 1}^n y_i,
\end{equation}

\begin{equation}\label{eqn:sxx}
{\rm Sxx} =  \sum _{i = 1}^n x_i^2,
\end{equation}

\begin{equation}\label{eqn:syy}
{\rm Syy} =  \sum _{i = 1}^n y_i^2,
\end{equation}

\begin{equation}\label{eqn:sxy}
{\rm Sxy} =  \sum _{i = 1}^n x_i y_i,
\end{equation}

\begin{equation}\label{eqn:syx}
{\rm Syx} =  \sum _{i = 1}^n y_i x_i,
\end{equation}

dengan dua persamaan terakhir memiliki nilai yang sama. Dengan menggunakan Persamaan \eqref{eqn:s1=n} - \eqref{eqn:syx}, Persamaan \eqref{eqn:sse-min-find-c0} dan \eqref{eqn:sse-min-find-c1} dapat disederhanakan menjadi

\begin{equation}\label{eqn:slr-ols-c0}
c_0 = \frac{ {\rm Sx} \ {\rm Sxy} - {\rm Sxx} \ {\rm Sy} }{ {\rm Sx} \ {\rm Sx} - {\rm Sxx} \ n}
\end{equation}

dan

\begin{equation}\label{eqn:slr-ols-c1}
c_1 = \frac{n \ {\rm Sxy} - {\rm Sx} \ {\rm Sy} }{n \ {\rm Sxx} - {\rm Sx} \ {\rm Sx} }.
\end{equation}

Persamaan \eqref{eqn:sse-min-find-c0} dan \eqref{eqn:sse-min-find-c1} dapat dituliskan juga, dengan menyederhanakan somasinya

$$
c_0 = \frac{ \sum x_i \sum x_i y_i - \sum x_i^2 \sum y_i }{ \sum x_i \sum x_i - \sum x_i^2 \sum 1}
$$

dan

$$
c_1 = - \frac{ \sum 1 \sum x_i y_i - \sum x_i \sum y_i }{\sum x_i \sum x_i - \sum x_i^2 \sum 1},
$$

yang dapat disatukan menjadi

\begin{equation}\label{eqn:slr-ols-c0-c1}
c_j = (-1)^j \ \ \frac{ \sum x_i^{1-j} \sum x_i y_i - \sum x_i^{2-j} \sum y_i }{\sum x_i \sum x_i - \sum x_i^2 \sum 1},
\end{equation}

dengan $j = 0, 1$. Lalu, apakah bentuk terakhir ini dapat dibuat lebih sederhana? Misalnya dengan Einstein summation notation atau ESN [[19](#r19)]?


## exer
1. Tunjukkan bagian yang berbeda dari formula adjusted r-square atau adjusted r-squared dari Persamaan \eqref{eqn:r2-adjusted} dan \eqref{eqn:r2-adjusted-other-version}.
2. Apa perbedaan Persaman \eqref{eqn:lr} dan \eqref{eqn:linear-model-1-ind-var}?


## note
1. <a name="r01"></a>Nathaniel E. Helwig, "Simple Linear Regression", Psychology and Statistics, University of Minnesota (Twin Cities), 4 Jan 2017, url <http://users.stat.umn.edu/~helwig/notes/slr-Notes.pdf> [20211201].
2. <a name="r02"></a>Wikipedia contributors, "Simple linear regression", Wikipedia, The Free Encyclopedia, 15 November 2021, 03:35 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1055308884> [20211201].
3. <a name="r03"></a>"Simple Linear Regression Least Squares Estimates of β0 and β1", Amherst College, Amherst, Massachusetts, 29 Nov 2011, url <https://www.amherst.edu/system/files/media/1287/SLR_Leastsquares.pdf> [20211201].
4. <a name="r04"></a>Eric W. Weisstein, "Least Squares Fitting", from MathWorld--A Wolfram Web Resource, url <https://mathworld.wolfram.com/LeastSquaresFitting.html> [20211201].
5. <a name="r05"></a>Steven J. Miller, "The Method of Least Squares", Mathematics Department, Brown University, 22 Jul 2006, url <https://web.williams.edu/Mathematics/sjmiller/public_html/BrownClasses/54/handouts/MethodLeastSquares.pdf> [20211201].
6. <a name="r06"></a>gunes, "Answer to 'Least Squares Estimator Vs Ordinary Least Squares Estimator'", Cross Validated, 21 Feb 2019, url <https://stats.stackexchange.com/a/393612> [20211201].
7. <a name="r07"></a>Essam Amin, "Deriving the Normal Equation for Ordinary Least Squares", Towards Data Science, 13 Jul 2021, url <https://towardsdatascience.com/8da168d740c>[20211201].
8. <a name="r08"></a>SmallChess, "Answer to '\"Least Squares\" and \"Linear Regression\", are they synonyms?'", Cross Validated, 2 Feb 2017, edited by Firebug at 2 Feb 2017, url <https://stats.stackexchange.com/a/259528> [20211201].
9. <a name="r09"></a>Stephanie Glen, "IID Statistics: Independent and Identically Distributed Definition and Examples", from StatisticsHowTo.com: Elementary Statistics for the rest of us!, 11 May 2016, url <https://www.statisticshowto.com/iid-statistics/> [20211201].
10. <a name="r10"></a>Michael R. Kosorok, "Bootstraps of sums of independent but not identically distributed stochastic processes", Journal of Multivariate Analysis [J Multivar Anal], vol 84, no 2, p 299-318, Feb 2003, url <https://doi.org/10.1016/S0047-259X(02)00040-4>.
11. <a name="r11"></a>Galen R. Shorack, Jon A. Wellner, "Independent But Not Identically Distributed Random Variables, in Empirical Processes with Applications to Statistics, Ch 25, Classics in Applied Mathematics series, no 59, SIAM (Society for Industrial and Applied Mathematics), Revised edition, Dec 2009, url <https://doi.org/10.1137/1.9780898719017.ch25>.
12. <a name="r12"></a>Nataša Erjavec, "Tests for Homogeneity of Variance", in International Encyclopedia of Statistical Science, Miodrag Lovric (ed), Springer, Berlin, Heidelberg, 2011 edition, 2011, url <https://doi.org/10.1007/978-3-642-04898-2_590>.
13. <a name="r13"></a>"homogeneity of variance", Dictionary, American Psychological Association (APA), 2020, url <https://dictionary.apa.org/homogeneity-of-variance> [20211201].
14. <a name="r14"></a>Stephanie Glen, "Homoscedasticity / Homogeneity of Variance/ Assumption of Equal Variance", from StatisticsHowTo.com: Elementary Statistics for the rest of us!, 25 Apr 2021, url <https://www.statisticshowto.com/homoscedasticity/> [20211201].
15. <a name="r15"></a>"Statistics of Fit", SAS Institute Inc., SAS OnlineDoc®, Version 8, Cary, NC: SAS Institute Inc., Sep 1999, url <https://www.sfu.ca/sasdoc/sashtml/ets/chap30/sect19.htm> [20211201].
16. <a name="r16"></a>Deepanshu Bhalla, "Difference between Adjusted R-squared and R-squared", Listen Data, Aug 2014, url <https://www.listendata.com/2014/08/adjusted-r-squared.html> [20211201].
17. <a name="r17"></a>"1.1. Linear Models", Scikit Learn, 2021, url <https://scikit-learn.org/stable/modules/linear_model.html> [20211202].
18. <a name="r18"></a>Colin McGrath, "How to Calculate Linearity", Sciencing, 25 Apr 2017, url <https://sciencing.com/calculate-linearity-7560898.html> [20211202].
18. <a name="r18"></a>Wikipedia contributors, "Einstein notation", Wikipedia, The Free Encyclopedia, 15 October 2021, 02:03 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1049981313> [20211202].

### comments
<blockquote class="twitter-tweet" data-lang="en" data-theme="light" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0210?src=hash&amp;ref_src=twsrc%5Etfw">#bug0210</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1466991256165249027?ref_src=twsrc%5Etfw">December 4, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


## &nbsp;
[slr ls line](0211.html) &bull; [slr ls gradient descent](0212.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) yang pertama terdapat penyebut $(n - k)$ dan yang kedua $(n - k - 1)$; &nbsp;
2) untuk model linier satu variabel bebas keduanya sama, untuk yang lain persamaan pertama lebih umum dari yang kedua; &nbsp;
</ans>
