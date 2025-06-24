---
title: "maxwell's equation"
date: 2022-03-22T17:37:00+07:00
lastmod: 2022-03-23T06:40:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['physics', 'electromagnetic', 'maxwell', 'equation', 'draft']
url: "0014"
draft: false
---
Terdapat persamaan-persamaan Maxwell baik dalam bentuk integral maupun diferensial [[1](#r01)].


## integral form
Persamaan-persamaan Maxwell dalam bentuk integral adalah

\begin{equation}\label{eqn:gauss-law-electricity-integral}
\oint \vec{E} \cdot d\vec{A} = \frac{q}{\varepsilon_0},
\end{equation}

\begin{equation}\label{eqn:gauss-law-magnetism-integral}
\oint \vec{B} \cdot d\vec{A} = 0,
\end{equation}

\begin{equation}\label{eqn:faraday-law-integral}
\oint \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt},
\end{equation}

\begin{equation}\label{eqn:ampere-law-integral}
\oint \vec{B} \cdot d\vec{l} = \mu_o I + \frac{1}{c^2} \frac{d\Phi_E}{dt}.
\end{equation}

Persamaan \eqref{eqn:gauss-law-electricity-integral} merupakan hukum Gauss untuk kelistrikan, Persamaan \eqref{eqn:gauss-law-magnetism-integral} merupakan hukum Gauss untuk kemagnetan, Persamaan \eqref{eqn:faraday-law-integral} merupakan hukum induksi Faraday, dan Persamaan \eqref{eqn:ampere-law-integral} merupakan hukum Ampere.


## differential form
Persamaan-persamaan Maxwell dalam bentuk diferensial adalah

\begin{equation}\label{eqn:gauss-law-electricity-differential}
\vec{\nabla} \cdot \vec{E} = \frac{\rho}{\varepsilon_0},
\end{equation}

\begin{equation}\label{eqn:gauss-law-magnetism-differential}
\vec{\nabla} \cdot \vec{B} = 0,
\end{equation}

\begin{equation}\label{eqn:faraday-law-differential}
\vec{\nabla} \times \vec{E} = -\frac{d\vec{B}}{dt},
\end{equation}

\begin{equation}\label{eqn:ampere-law-differential}
\vec{\nabla} \times \vec{B} = \mu_o \vec{J} + \frac{1}{c^2} \frac{d\vec{E}}{dt}.
\end{equation}

Persamaan \eqref{eqn:gauss-law-electricity-differential} merupakan hukum Gauss untuk kelistrikan, Persamaan \eqref{eqn:gauss-law-magnetism-differential} merupakan hukum Gauss untuk kemagnetan, Persamaan \eqref{eqn:faraday-law-differential} merupakan hukum induksi Faraday, dan Persamaan \eqref{eqn:ampere-law-differential} merupakan hukum Ampere.


## e-b relation
Deskripsi lengkap dari produksi dan interelasi antara medan listrik $\vec{E}$ dan medan magnetik $\vec{B}$ dibentuk oleh keempat persamaan Maxwell [[2](#r02)].


## notes
1. <a name='r01'></a>Carl Rod Nave, "http://hyperphysics.phy-astr.gsu.edu/hbase/electric/maxeq.html", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/electric/maxeq.html> [20220323].
2. <a name='r02'></a>The Editors of Encyclopaedia Britannica, Aakanksha Gaur, Erik Gregersen, Gloria Lotha, "Maxwell’s equations", Encyclopedia Britannica, 28 Apr 2021, url <https://www.britannica.com/science/Maxwells-equations> [20220323].

{{< citeas >}}