---
layout: post
authors: [viridi]
title: boundary condition
permalink: pages/0533
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: mathematics
tags: ["differential equation", "boundary condition", "boundary value"]
date: 2022-03-16T11:00:00+07:00
src: https://github.com/dudung/bug/commits/main/_posts/0/53/2022-03-16-boundary-condition.md
twitter_username: 6unpnp
nodes: []
---
Nilai batas merupakan kondisi yang mengikuti suatu persamaan diferensial dalam solusi dari suatu permasalahan fisis, hal ini karena masalah matematika yang muncul dari suatu situasi fisis perlu melibatkan dua pertimbangan saat mencari suatu solusi, yaitu solusi dan turunannya harus memenuhi persamaan diferensial (yang menggambarkan bagaimana kuantitas tersebut berlaku dalam suatu daerah) dan solusi dan turunannya harus memenuhi kondisi pendukung yang menjelaskan pengaruh dari luar daerah (nilai batas) atau memberikan informasi mengenai solusi pada suatu waktu tertentu (nilai awal), yang menggambarkan sejarah sistem yang akan mempengaruhi kelakuannya di masa depan [[1](#r01)]. Syarat batas (boundary condition, b.c.) yang merupakan kendala bagi solusi dari suatu masalah nilai batas [[2](#r02)]. Terdapat kajian yang menarik bahwa nomenklatur penggunakan b.c. ini tidak standar sehingga cukup membingungkan dalam bidang air tanah [[3](#r03)].


## symbols
Domain atau daerah (region) tempat persamaan diferensial berlaku dapat disimbolkan dengan $D$ [[4](#r04)] ataupun $\Omega$ [[5](#r05)], di mana batasnya dapat menggunakan $\Gamma$ ataupun $\partial\Omega$ [[5](#r05)]. Terdapat makna mengapa digunakan simbol $\partial$ yang terkait dengan turunan pada arah normal batas [[6](#r06)].

![]({{ site.baseurl }}/assets/img/0/53/0533-a.png) \
Gambar <a name='fig1'>1</a>. Domain $D$ dengan batasnya $\Gamma$ (kiri) atau doman $\Omega$ dengan batasnya $\partial\Omega$ (kiri).

Bila domain merupakan suatu luas, maka batasnya merupakan garis keliling, akan tetapi bila domain merupakan volume maka batasnya merupakan suatu permukaan tertutup. Pada Gambar [1](#fig1) domain diberi warna merah muda ($\color{#fee}{\blacksquare}$) dan batasnya berwarna biru ($\color{#07c}{\blacksquare}$).


## types of b.c.
Terdapat persamaan diferensial yang melibatkan $u$ dan turunannya $u'$ pada titik-titik di dalam domain $\Omega$ dengan batasnya adalah $\partial\Omega$. Untuk memberikan ilustrasi yang lebih sederhana, misalnya persoalannya menjadi persoalan 1-D dengan persaamaan diferensialnya, sebagai contoh, adalah

\begin{equation}\label{eqn:ode-1st-order}
\frac{du}{dx} + u = 0
\end{equation}

yang berlaku dalam domain $x \in [a, b]$. Dengan menggunakan Persamaan \eqref{eqn:ode-1st-order} akan diilustrasikan kelima syarat batas (s.b.) yang meliputi Dirichlet, Neumann, Robin, mixed, dan Cauchy [[7](#r07)].

### dirichlet b.c.
Syarat batas Dirichlet berbentuk

\begin{equation}\label{eqn:bc-dirichlet}
\begin{array}{c}
u(a) = A, \newline
u(b) = B
\end{array}
\end{equation}

yang membutuhkan nilai fungsi pada kedua batas.

### neumann b.c.
Syarat batas Neumann berbentuk

\begin{equation}\label{eqn:bc-neumann}
\begin{array}{c}
u'(a) = \alpha, \newline
u'(b) = \beta
\end{array}
\end{equation}

yang membutuhkan nilai turunan fungsi pada kedua batas.

### robin b.c.
Syarat batas Robin berbentuk

\begin{equation}\label{eqn:bc-robin}
\begin{array}{c}
u(a) = \chi_1 u(a) + \chi_2 u'(a) = A_\alpha, \newline
u(b) = \chi_1 u(b) + \chi_2 u'(b) = B_\beta
\end{array}
\end{equation}

yang membutuhkan nilai fungsi dan turuannnya pada kedua batas, dengan masing-masing akan diberi bobot $\chi_1$ dan $\chi_2$.

### mixed b.c.
Syarat batas campuran dapat berbentuk

\begin{equation}\label{eqn:bc-mixed}
\begin{array}{c}
u(a) = A, \newline
u'(b) = \beta,
\end{array}
\end{equation}

atau

\begin{equation}\nonumber
\begin{array}{c}
u'(a) = \alpha, \newline
u(b) = B,
\end{array}
\end{equation}

yang merupakan syarat batas Dirichlet di satu sisi dan syarat batas Neuman di sisi lainnya.

### cauchy b.c.
Syarat batas Cauchy berbentuk

\begin{equation}\label{eqn:bc-cauchy}
\begin{array}{c}
u(a) = A, \newline
u'(a) = \alpha,
\end{array}
\end{equation}

atau

\begin{equation}\nonumber
\begin{array}{c}
u(b) = B, \newline
u'(b) = \beta.
\end{array}
\end{equation}

Walaupun jarang, syarat batas ini digunakan pada persamaan diferensial orde kedua, yang menerapkan secara bersama-sama syarat batas Dirichlet dan Neumann pada satu titik.


## note
1. <a name="r01"></a>The Editors of Encyclopaedia Britannica, Swati Chopra, William L. Hosch, "boundary value", Encyclopaedia Britannica, 24 Oct 2011, url <https://www.britannica.com/science/boundary-value> [20220316].
2. <a name="r02"></a>"What Are Boundary Conditions?", SimScale, 3 Sep 2021, url <https://www.simscale.com/docs/simwiki/numerics-background/what-are-boundary-conditions/> [20220316].
3. <a name="r03"></a>Amir Jazayeri, Adrian D. Werner,  "Boundary Condition Nomenclature Confusion in Groundwater Flow Modeling", Groundwater [], vol 57, no 5, p 664-668, Sep-Oct 2019, url <https://doi.org/10.1111/gwat.12893>.
4. <a name="r04"></a>Fiaz Ur Rehman, Mathematics Lectures, "Different Types of Boundary Conditions", YouTube, 06.04.2020, url <https://www.youtube.com/watch?v=-n3jHwmNejg> [20220316].
5. <a name="r05"></a>Ian, "Answer to 'Difference between Gamma and partial Omega to describe a domain boundary'", Mathematics Stack Exchange, 20 Jan 2016, url <https://math.stackexchange.com/a/1619820/645927> [20220316].
6. <a name="r06"></a>Terry Tao, kjo, "Answer to 'Is the boundary ∂S analogous to a derivative?'", MathOverflow, 16 Nov 2010, 7 Apr 2014, url <https://mathoverflow.net/a/46285> [20220316].
7. <a name="r07"></a>Zhen (Leo) Liu, "Boundary Conditions", 13 Jun 2018, url <https://multiphysics.us/BC.html> [20220316].

### comments
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>
