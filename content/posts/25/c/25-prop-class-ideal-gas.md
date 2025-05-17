+++
title = 'prop class ideal gas'
date = '2025-03-10T03:35:23+07:00'
draft = false
math = true
type = 'notes'
authors = ['viridi']
tags = ['ideal-gas']
url = '25c25'
[ref]
author = 'Sparisoma Viridi'
title = 'prop class ideal gas'
source = 'notes, 10 Mar 2025'
updated = 'not yet'
url = 'https://dudung.github.io/notes/25c25/'
accessed = '20250310'
+++

{{< columns >}}
+ ideal gas law
+ state
+ process
+ cycle
{{< /columns >}}

{{< columns >}}
+ refs
{{< /columns >}}

<!--more-->

This note is a continuation of previous idea [^viridi_2025], where part of its to-do list is further discussed. A class that can accomodate state, process, and cycle of ideal gas. Ideally, any cycles with infinite variations of states and processes can be supported. And from that the heat, work, and change of internal energy can be obtained. Before that, the table of states variable can also be calculated from uncomplete one. It might be sort of like a sudoku [^kaufman_2022]. Then for simplicity only monatomic ideal gas, which has $c_V = \tfrac32 R$ and $c_P = \tfrac52 R$, is considered here [^tschoegl_2000], where *R* = 8.31 446 261 815 324 J/K&middot;mol is universal gas constant [^britannica_2025].


## ideal gas law
Combining Charles's, Avogadro's, Amonton's, and Boyle--Gay-Lussac laws will lead to

$$\tag{1}
pV = nRT,
$$

where $p$ in $\rm Pa$ or $\rm N/m^2$, $V$ in $\rm m^3$, $n$ in $\rm mol$, and $T$ in $K$.

```
p = 101325     # Pa or 1 atm
V = 22.414E-3  # m^3 or 22.414 l
n = 1          # mol
T = 273.15     # K or 0 °C, 32 °F

R = (p * V) / (n * T)
print(R)

# 8.314473915431083
```

url https://onecompiler.com/python/43bdmcy7b [20250310].


## refs
[^britannica_2025]: The Editors of Encyclopaedia Britannica, "universal gas constant", Encyclopedia Britannica, 14 Jan 2025, url  https://www.britannica.com/science/universal-gas-constant [20250310].
[^kaufman_2022]: Anna Kaufman, "What is sudoku? Here's how to play the math puzzle and some tips to solve one.", USA Today, 12 Aug 2022 (24 Feb 2023), url https://www.usatoday.com/story/life/2022/08/12/what-is-sudoku-solve-puzzle/10299742002/ [20250310].
[^tschoegl_2000]: Nicholas W. Tschoegl, "The Monatomic Ideal Gas", in Fundamentals of Equilibrium and Steady-State Thermodynamics, 2000, pp 83-88, url https://doi.org/10.1016/B978-044450426-5/50013-6.
[^viridi_2025]: Sparisoma Viridi, "ideal gas from bugx", notes, 9 Mar 2025, url https://dudung.github.io/notes/25c23/ [20250310].
