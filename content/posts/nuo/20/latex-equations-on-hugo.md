+++
title = 'latex equations on hugo'
date = 2024-04-12T07:12:00+07:00
draft = false
math = true
tags = ['latex', 'equation', 'katex', 'hugo', 'mhchem']
url = '2008'
authors = ['viridi']
+++
LaTex equations with KaTex and their code <!--more-->


## intro
I have just informed today that both MathJax and KateX provide support for chemical equations [^authorshugo_2024], but for KaTeX the [mhchem](https://mhchem.github.io/MathJax-mhchem/) extension should be enabled first [^authorskatex_2024]. This post showing LaTeX equations supported by KaTeX in a Hugo post.

## front matter
Following is front matter for this post

```
+++
title = 'latex equations on hugo'
date = 2024-04-12T07:12:00+07:00
draft = false
math = true
tags = ['latex', 'equation', 'katex', 'hugo', 'mhchem']
url = '0008'
authors = ['viridi']
+++
```

which is using TOML format. There are also two other formats supported by Hugo [^authorshugo_2024b]. The line

```
math = true
```

must be supplied in order to able to render LaTex equations using KaTex through `math` partial.


## partial
In my installed Hugo (v0.124.1-db083b05f16c945fec04f745f0ca8640560cf1ec+extended windows/amd64 BuildDate=2024-03-20T11:40:10Z VendorInfo=gohugoio) I put a partial `math.html` in `layouts\partials\posts` folder, where its contents is as follow

```
{{- if or (.Params.math) (.Site.Params.math) (.Params.katex) (.Site.Params.katex) -}}

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css"
    integrity="sha384-vKruj+a13U8yHIkAyGgK1J3ArTLzrFGBbBc0tDp4ad/EyewESeXE/Iv67Aj8gKZ0" crossorigin="anonymous">
  {{/* The loading of KaTeX is deferred to speed up page rendering */}}
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.js"
    integrity="sha384-PwRUT/YqbnEjkZO0zZxNqcxACrXe+j766U2amXcgMg5457rve2Y7I6ZJSm2A0mS4" crossorigin="anonymous"></script>
 
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/contrib/auto-render.min.js"
    integrity="sha384-+VBxd3r6XgURycqtZ117nYw44OOcIax56Z4dCRWbxyPt0Koah1uHoK0o4+/RRE05" crossorigin="anonymous"
    onload="renderMathInElement(document.body,
      {
        delimiters: [
          {left: '$$', right: '$$', display:true},
          {left: '$', right: '$', display:false},
          {left: '\\(', right: '\\)', display: false},
          {left: '\\[', right: '\\]', display: true}
        ]
      }
    );"></script>
{{- end -}}
```

And according to information obtained from mhchem extension on GitHub following lines

```
<!--
url https://github.com/KaTeX/KaTeX/tree/main/contrib/mhchem [20240412]
-->
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/contrib/mhchem.min.js" integrity="sha384-ifpG+NlgMq0kvOSGqGQxW1mJKpjjMDmZdpKGq3tbvD3WPhyshCEEYClriK/wRVU0"  crossorigin="anonymous"></script>
<!-- -->    
```

should be put it after the line that calls `katex.js`. And before the line that calls `auto-render.js`, if only you use it.


## mhchem
Example equation from GitHub

$$
C_p[\ce{H2O(l)}] = \pu{75.3 J // mol K}
$$

is obtained with

```tex
$$
C_p[\ce{H2O(l)}] = \pu{75.3 J // mol K}
$$
```

Other examples are also available [^hensel_2024], e.g.

$$
\ce{CH4 + 2 $\left( \ce{O2 + 79/21 N2} \right)$}
$$

using

```tex
$$
\ce{CH4 + 2 $\left( \ce{O2 + 79/21 N2} \right)$}
$$
```

$$
\ce{^234_90Th -> ^0_-1\beta{} + ^234_91Pa}
$$

using

```tex
$$
\ce{^234_90Th -> ^0_-1\beta{} + ^234_91Pa}
$$
```

$$
\ce{A-B=C#D}
$$

using

```tex
$$
\ce{A-B=C#D}
$$
```

and

$$
\ce{Zn^2+
<=>[+ 2OH-][+ 2H+]
$\underset{\text{amphoteres Hydroxid}}{\ce{Zn(OH)2 v}}$
<=>[+ 2OH-][+ 2H+]
$\underset{\text{Hydroxozikat}}{\ce{[Zn(OH)4]^2-}}$
}
$$

using

```tex
\ce{Zn^2+
<=>[+ 2OH-][+ 2H+]
$\underset{\text{amphoteres Hydroxid}}{\ce{Zn(OH)2 v}}$
<=>[+ 2OH-][+ 2H+]
$\underset{\text{Hydroxozikat}}{\ce{[Zn(OH)4]^2-}}$
}
```

## equation number
To have following result

$$\tag{10}
x
$$

following code

```tex
$$\tag{10}
x
$$
```

is required. Notice that the value `10` can be substituted with any string.


## fraction
To have following result

$$
x = \frac{y}{z}
$$

following code


```tex
$$
x = \frac{y}{z}
$$
```

is required. The `{y}` and `{z}` can be substituted with any LeTex expression, e.g. fractions as numerator and denominator

$$
x = \frac{1 + \frac{a}{b}}{1 - \frac{c}{d}}
$$

with

```tex
$$
x = \frac{1 + \frac{a}{b}}{1 - \frac{c}{d}}
$$
```

as the code. To have bigger font, as not in a fraction inline, use `\displaystyle` as follow

```tex
$$
x = \frac{\displaystyle 1 + \frac{\displaystyle 1 \times 
\frac{a + c}{a - c}}{b}}
{1 - \frac{c}{d}}
$$
```

to produce

$$
x = \frac{\displaystyle 1 + \frac{\displaystyle 1 \times 
\frac{a + c}{a - c}}{b}}
{1 - \frac{c}{1 + \frac{d}{e}}}
$$

Notice that the denominator does not use the feature and it still has smaller font. And use it in excesive way as in the numerator makes difficult to read the sub fraction, doesn't it?


## subscript
A subscript is obtained using `_` followed by the subscript symbol, e.g.

```tex
$$
x_1 + y_2 = z_3
$$
```

will produce

$$
x_1 + y_2 = z_3
$$

The subscript symbol can be any mathematical expression in LaTex inside surrounded by `{` and `}`, e.g.

```tex
$$
y_{f(x)} = f_2(x_{109}) + g_{a_{b + c}}
$$
```

will produce

$$
y_{f(x)} = f_2(x_{109}) + g_{a_{b + c}}
$$

Notice that there might be another subscript in an expression as subscript.


## superscript
It is similear with the subscript but it uses `^` followed by subscript symbol, e.g.

```tex
$$
y = ax^3 + bx^2 + cx + d
$$
```

will produce

$$
y = ax^3 + bx^2 + cx + d
$$

It is also similar to subscript, that the superscript symbol can be any mathematical expression in LaTeX surrounded by `{` and `}`, and it can be nested, e.g.

```tex
$$
y = x^{2x^2 + x} + x^{x^x}
$$
```

wil produce

$$
y = x^{2x^2 + x} + x^{x^x}
$$


## subscript and superscript
Both subscript and superscript can be used in any order, e.g.

```tex
$$
x_3^2 \equiv x^2_3
$$
```

will produce

$$
x_3^2 \equiv x^2_3
$$

where both sides produce the same result, even the order is `_` then followed by `^` in the left side of the equation and is `^` then followed by `_` in the right side of the equation.

Only one character after `_` or `^` considered as the subscript or superscript symbol. For more than multiple characters, put them inside `{}`, e.g.

```tex
$$\tag{15}
x^21_abc \ne x^{21}_{abc}
$$
```

gives

$$\tag{15}
x^21_abc \ne x^{21}_{abc}
$$

as the result. Notice that without `{}` the `x^21` is interpretated as `x^2 1`. Then the `_` is after `1` means that `1_a` instead of `abc` as subscript. To get the right expression for right side of equation (15) it should be `x^{21}_{abc}` which means that `21` is expression for superscript and `abc` is expression for subscript.


## greek letters
It is easy to memorize the Greek letter in LaTeX if you know how to write them in English [^adminunco_2022]. There are 24 Greek letters, where some of the capital letters are not available since their Roman counterparts are used instead [^blevins_2009].


Code | LaTex | &nbsp;&nbsp;&nbsp;&nbsp; | Code | HTML| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Code | LaTex | &nbsp;&nbsp;&nbsp;&nbsp; | Code | HTML
:-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-:
`\alpha` | $\alpha$ || `&alpha;` | &alpha; || `\Alpha` | $\Alpha$ || `&Alpha;` | &Alpha;
`\beta` | $\beta$ || `&beta;` | &beta; || `\Beta` | $\Beta$ || `&Beta;` | &Beta;
`\gamma` | $\gamma$ || `&gamma;` | &gamma; || `\Gamma` | $\Gamma$ || `&Gamma;` | &Gamma;
`\delta` | $\delta$ || `&delta;` | &delta; || `\Delta` | $\Delta$ || `&Delta;` | &Delta;
`\epsilon` | $\epsilon$ || `&epsilon;` | &Epsilon; || `\Epsilon` | $\Epsilon$ || `&Epsilon;` | &Epsilon;
`\zeta` | $\zeta$ || `&zeta;` | &zeta; || `\Zeta` | $\Zeta$ || `&Zeta;` | &Zeta;
`\eta` | $\eta$ || `&eta;` | &eta; || `\eta` | $\Eta$ || `&Eta;` | &Eta;
`\theta` | $\theta$ || `&theta;` | &theta; || `\Theta` | $\Theta$ || `&Theta;` | &Theta;
`\iota` | $\iota$ || `&iota;` | &iota; || `\Iota` | $\Iota$ || `&Iota;` | &Iota;
`\kappa` | $\kappa$ || `&kappa;` | &kappa; || `\Kappa` | $\Kappa$ || `&Kappa;` | &Kappa;
`\lambda` | $\lambda$ || `&lambda;` | &Lambda; || `\Lambda` | $\Lambda$ || `&Lambda;` | &Lambda;
`\mu` | $\mu$ || `&mu;` | &mu; || `\Mu` | $\Mu$ || `&Mu;` | &Mu;
`\nu` | $\nu$ || `&nu;` | &nu; || `\Nu` | $\Nu$ || `&Nu;` | &Nu;
`\xi` | $\xi$ || `&xi;` | &xi; || `\Xi` | $\Xi$ || `&Xi;` | &Xi;
`\omicron` | $\omicron$ || `&omicron;` | &Omicron; || `\Omicron` | $\Omicron$ || `&Omicron;` | &Omicron;
`\pi` | $\pi$ || `&pi;` | &pi; || `\Pi` | $\Pi$ || `&Pi;` | &Pi;
`\rho` | $\rho$ || `&rho;` | &rho; || `\Rho` | $\Rho$ || `&Rho;` | &Rho;
`\sigma` | $\sigma$ || `&sigma;` | &Sigma; || `\Sigma` | $\Sigma$ || `&Sigma;` | &Sigma;
`\tau` | $\tau$ || `&tau;` | &tau; || `\Tau` | $\Tau$ || `&Tau;` | &Tau;
`\upsilon` | $\upsilon$ || `&upsilon;` | &Upsilon; || `\Upsilon` | $\Upsilon$ || `&Upsilon;` | &Upsilon;
`\phi` | $\phi$ || `&phi;` | &phi; || `\Phi` | $\Phi$ || `&Phi;` | &Phi;
`\chi` | $\chi$ || `&chi;` | &chi; || `\Chi` | $\Chi$ || `&Chi;` | &Chi;
`\psi` | $\psi$ || `&psi;` | &psi; || `\Psi` | $\Psi$ || `&Psi;` | &Psi;
`\omega` | $\omega$ || `&omega;` | &omega; ||`\Omega` | $\Omega$ || `&Omega;` | &Omega;

The HTML counterpart characters are also shown to show that they have the same pattern in defining the entities [^girard_2019].


## matrices
There are at least to ways to display matrices in LaTex, where the first way is using `matrix` environment and the second is using `array` environment, and there is also other environments for matrix with various types of brackets and also for smaller size [^atulsaini2810_2023].

Let us firs use `array` environment to obtain

$$
\begin{array}{cccc}
1 & 2 & 3 & 4 \newline
5 & 6 & 7 & 8
\end{array}
$$

which using following code

```tex
$$
\begin{array}{cccc}
1 & 2 & 3 & 4 \newline
5 & 6 & 7 & 8
\end{array}
$$
```

Notice that it requires one argument for number of columns and also at the same time for columns alignment, that can have value `l` for left, `c` for center, and `r` for right. Following code

```tex
$$
\begin{array}{lcr}
1000 & 2000 & 3000  \newline
400 & 500 & 600 \newline
70 & 80 & 90 \newline
a & b & c
\end{array}
$$
```

would produce

$$
\begin{array}{lcr}
1000 & 2000 & 3000  \newline
400 & 500 & 600 \newline
70 & 80 & 90 \newline
a & b & c
\end{array}
$$

what hopefully give better understanding about columns alignment options `l`, `c`, and `r`.

If the columns alignment always `c` then consider to use `matrix` environment instead, e.g.

```tex
$$
\begin{matrix}
1000 & 2000 & 3000  \newline
400 & 500 & 600 \newline
70 & 80 & 90 \newline
a & b & c
\end{matrix}
$$
```

will produce

$$
\begin{matrix}
1000 & 2000 & 3000  \newline
400 & 500 & 600 \newline
70 & 80 & 90 \newline
a & b & c
\end{matrix}
$$

Or addtional argument can also be supplied when using the alternative `matrix*` environment but it holds for all columns, e.g.

```tex
$$
\begin{matrix*}[l]
1000 & 2000 & 3000  \newline
400 & 500 & 600 \newline
70 & 80 & 90 \newline
a & b & c
\end{matrix*}
$$
```

will produce

$$
\begin{matrix*}[l]
1000 & 2000 & 3000  \newline
400 & 500 & 600 \newline
70 & 80 & 90 \newline
a & b & c
\end{matrix*}
$$

where you can also use `[r]` and `[c]` other than `[l]` as the optional argument.  

Next is matrix with small size what can be used inline with text, following is for display mode

$$
\begin{smallmatrix}
1 & 2 & 3 & 4 \newline
5 & 6 & 7 & 8
\end{smallmatrix}
$$

and this is for inline mode $\begin{smallmatrix} 1 & 2 & 3 & 4 \newline 5 & 6 & 7 & 8 \end{smallmatrix}$, where the codes are

```tex
$$
\begin{smallmatrix}
1 & 2 & 3 & 4 \newline
5 & 6 & 7 & 8
\end{smallmatrix}
$$
```

and `$\begin{smallmatrix} 1 & 2 & 3 & 4 \newline 5 & 6 & 7 & 8 \end{smallmatrix}$`.

If brackets are required there are `bmatrix`, `pmatrix`, and `vmatrix` enviroment that provide `[]`, `()`, and `||` brackets types, respectively, as shown in following table.

Bracket type | &nbsp; Environment &nbsp; | Result
:-: | :-: | :-:
square `[]` | `bmatrix` | $\begin{bmatrix} 1 & 2 \newline 3 & 4 \end{bmatrix}$
&nbsp; | &nbsp; | &nbsp;
round `()` | `pmatrix` | $\begin{pmatrix} 1 & 2 \newline 3 & 4 \end{pmatrix}$
&nbsp; | &nbsp; | &nbsp;
vertical `\|\|` | `vmatrix` | $\begin{vmatrix} 1 & 2 \newline 3 & 4 \end{vmatrix}$

If other types of brackets required, use `\left` and `\right` macros followed by bracket characters or macro representing the characters, e.g.

$$
\left|
\left(
\left\lfloor
\begin{matrix}
11 & 12 & 13 & 14 \newline
21 & 22 & 23 & 24 \newline
31 & 32 & 33 & 34
\end{matrix}
\right\rceil
\right\rbrace
\right]
$$

Notice the pairs of `\left` and `\right` should be complete.


## root
Root of something can be obtained using `\sqrt[]{}`, e.g.

```tex
$$
\sqrt{x} + \sqrt[7]{1 + \frac{x}{1 - x^2}} = 0
$$
```

will produce

$$
\sqrt{x} + \sqrt[7]{1 + \frac{x}{1 - x^2}} = 0
$$

where inside `{}` can any LaTeX math expressions.


## functions
There are predefined functions, e.g. `\sin`, `\cos`, `\tan`, `\log`, `\ln`,`\exp` that can be used

$$
\exp x + \log y \ne exp x + ln y
$$

Notice that `\sin` is name of a function, while `sin` are three variables `s`, `i`, and `n`.


## notes
[^adminunco_2022]: UNCO Admin, "The Greek Alphabet", University of Northern Colorado, 10 Jun 2022, url https://www.unco.edu/fraternity-sorority/resources/greek-alphabet.aspx [20240412].
[^atulsaini2810_2023]: atulsaini2810, "matrices in LaTeX", GeeksforGeeks, 8 May 2023, url https://www.geeksforgeeks.org/matrices-in-latex/ [20240414].
[^authorshugo_2024]: Hugo Authors, "Mathematics in Markdown", hugoDocs -- GitHub, 20 Feb 2024, url https://github.com/gohugoio/hugoDocs/blob/c60cd20a/content/en/content-management/mathematics.md [20240412].
[^authorshugo_2024b]: Hugo Authros, "Front matter", hugoDocs, 8 Apr 2024, url https://gohugo.io/content-management/front-matter/ [20240412].
[^authorskatex_2024]: KaTeX Authors, "mhchem extension", KaTeX -- GitHub, 25 Mar 2024, url https://github.com/KaTeX/KaTeX/tree/ab323598f/contrib/mhchem [202404212].
[^blevins_2009]: Jason Blevins, "The Greek Alphabet in LaTeX", 5 Feb 2009, url https://jblevins.org/log/greek [20240412].
[^girard_2019]: Jeremy Girard, "How to Get HTML Codes for Greek Language Characters", ThoughtCo, 4 Aug 2019, url https://www.thoughtco.com/p-4062212 [20240412].
[^hensel_2024]: Martin Hensel, "The mhchem Bundle Documentation for the LATEX Packages mhchem v4.10, hpstatement v2.1.0 and rsphrase v3.11", url https://www.ctan.org/pkg/mhchem [20240412].
