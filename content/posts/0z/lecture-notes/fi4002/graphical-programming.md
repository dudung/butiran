---
title: "graphical programming"
date: 2023-08-23T05:31:00+07:00
authors: ['Sparisoma Viridi']
tags: ['fi4002']
draft: false
math: true
url: "0016"
---
The term graphical programming (id: pemrograman grafik) can refer to graphical programming language, where each subprogram and program structure are represented by icons ([Bolton, 2004](https://doi.org/10.1016/B978-075066432-5/50003-6)). This programming language provides a different method of coding, instead of high level statements in procedural and object-oriented languages, it is coded by selecting objects, connecting them, and adding functionality ([Christiano, 2015](https://www.allaboutcircuits.com/technical-articles/graphical-programming-languages-labview/)). This type of language can be designed to support only specific purpose, such as for Insect Intelligent Building platform ([Chen et al., 2020](https://doi.org/10.1155/2020/9634389)).

Other point of view considers that graphical programming is simply how to produce 2d and 3d graphics using computer, with the help of programming language, by understanding first the meaning of image, dimension, pixel, grid, color, RGB, platelet, shapes, and related terms ([Hussain, 2016](https://www.slideshare.net/umairsimjee/graphical-programming))


## world - screen coordinates
World coodinate system normally has different direction axes compared to computer screen coordinate system. The world uses to right as positive direction for $x$ and to top as positive direction for $y$ with the origin located at left bottom corner, while the screen uses the same direction for $x$ but opposite direction for $t$ with origin located at left top cornder.

It can be obtained that for $x$

$$\tag{1}
X = \left( \frac{X_{\max} - X_{\min}}{x_{\max} - x_{\min}} \right) (x - x_{\min}) + X_{\min}
$$

and for $y$

$$\tag{2}
Y = \left( \frac{Y_{\min} - Y_{\max}}{y_{\max} - y_{\min}} \right) (y - y_{\min}) + Y_{\max},
$$

which are $X = f(x)$ and $Y = g(y)$ for transforming real world coordinates $(x, y)$ to computer screen coordinate $(X, Y)$.

And to have $x = f^{-1}(X)$ and $y = g^{-1}(Y)$, just swap $x$ with $X$ and $y$ with $Y$ in Equation (1) and (2), which will produce

$$\tag{3}
x = \left( \frac{x_{\max} - x_{\min}}{X_{\max} - X_{\min}} \right) (X - X_{\min}) + y_{\min}
$$

and

$$\tag{4}
y = \left( \frac{y_{\max} - y_{\min}}{Y_{\min} - Y_{\max}} \right) (Y - Y_{\max}) + y_{\min}.
$$

Notice that Equations (1) - (4) hold for real world and computer screen systems in Figure 1.

{{< svg "img/fi4002/world_screen.svg" >}}
