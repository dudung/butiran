---
title: "domain-boundary notation"
date: 2023-10-28T21:00:00+07:00
authors: ['Sparisoma Viridi']
tags: ['fi4002']
draft: false
math: true
url: "0124"
---
{{< toc >}}


## notation
+ Domain $\Omega$ in $\mathbb{R}^n$ will have bounday $\partial \Omega$ in $\mathbb{R}^{n-1}$ ([Newbie, 2017](https://math.stackexchange.com/q/2402843/645927)).
+ Domain $\Omega$ might have narrow band $\\~\Omega$ along Dirichlet boundary ([Kang et al., 2021](https://doi.org/10.3934/mbe.2021193)).
+ Domain $\Omega$ might have difference boundaries $\partial \Omega$, e.g Dirichled $\Gamma_D$, Neumann $\Gamma_N$, and absorbing $\Gamma_A$ ([Antonietti et al., 2022](http://dx.doi.org/10.1007/s10013-022-00566-3)).
+ Domain $\Omega$ might have difference boundaries $\partial \Omega$, e.g Dirichled $\partial\Omega_D$, Neumann $\partial\Omega_N$ ([You et al., 2021](http://dx.doi.org/10.1051/m2an/2020058)).


## illustration
{{< html >}}
<svg
  version="1.1" xmlns="http://www.w3.org/2000/svg"
  width="350" height="320"
  style="background: #eee;">
    <path 
      d="
        M 50 150
        Q 50 50 150 50
        T 300 150
        T 200 250
        T 50 150
      "
      stroke="#f88" stroke-width="3" fill="#fcc" />
    <text x="65" y="235" text-anchor="middle" alignment-baseline="middle">&part;&Omega;</text>
    <text x="170" y="150" text-anchor="middle" alignment-baseline="middle">&Omega;</text>
</svg>
{{< /html >}}


## refs
+ Path ([MDN, 2023]( https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths)]
