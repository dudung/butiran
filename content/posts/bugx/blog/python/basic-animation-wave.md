---
title: "basic animation wave"
date: 2022-03-29T07:43:00+07:00
lastmod: 2022-03-29T08:10:51+07:00
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['python', 'matplotlib', 'numpy', 'animation', 'wave', 'draft']
url: "0026"
draft: false
---
Solusi dari persamaan gelombang [[1](#r01)] dalam bentuk $y(x, t)$ dapat dianimasikan dengan menggunakan Python berbantuan Matplotlib [[2](#r02)]. Di sini dibahas gelombang yang berosilasi pada arah tegak lurus sumbu $x$ dan merambat pada sumbu $x$ dengan arah positif adalah ke kanan.


## to the right
Gelombang yang merambat ke kanan pada pada sumbu $x$ memiliki fungsi berbentuk

\begin{equation}\label{eqn:wave-to-right}
y(x, t) = A \sin (kx - \omega t + \phi)
\end{equation}

yang implementasinya dapat seperti berikut ini

```python
    y = np.sin(2 * np.pi * (x - 0.01 * i))
```

dalam Python dengan menggunakan paket Numpy. Di sini dipilih $\phi = 0$.

<p>
<img src="/bugx/img/wave/basic-anim-wave-to-right.gif" />
Gambar <a name='fig1'>1</a>. Gelombang merambant ke kanan.
</p>

Hasil potongan kode sebelumnya dapat menghasilkan Gambar [1](#fig1) yang merupakan implementasi Persamaan \eqref{eqn:wave-to-right}.


## to the left
Gelombang yang merambat ke kanan pada pada sumbu $x$ memiliki fungsi berbentuk

\begin{equation}\label{eqn:wave-to-left}
y(x, t) = A \sin (kx + \omega t - \phi)
\end{equation}

yang implementasinya dapat seperti berikut ini

```python
    y = np.sin(2 * np.pi * (x + 0.01 * i))
```

dalam Python dengan menggunakan paket Numpy. Di sini dipilih $\phi = 0$.

<p>
<img src="/bugx/img/wave/basic-anim-wave-to-left.gif" />
Gambar <a name='fig2'>2</a>. Gelombang merambant ke kiri.
</p>

Hasil potongan kode sebelumnya dapat menghasilkan Gambar [2](#fig2) yang merupakan implementasi Persamaan \eqref{eqn:wave-to-left}.


## stationary
Gelombang stasioner yang tidak merambat memiliki fungsi berbentuk

\begin{equation}\label{eqn:wave-stationary}
y(x, t) = B \sin (kx) \cos (\omega t - \phi)
\end{equation}

yang implementasinya dapat seperti berikut ini

```python
    y = np.sin(2 * np.pi * x) * np.cos(2 * np.pi * 0.01 * i)
```

dalam Python dengan menggunakan paket Numpy. Di sini dipilih $\phi = 0$.

<p>
<img src="/bugx/img/wave/basic-anim-wave-stationary.gif" />
Gambar <a name='fig1'>1</a>. Gelombang stasioner yang tidak merambat.
</p>

Hasil potongan kode sebelumnya dapat menghasilkan Gambar [3](#fig3) yang merupakan implementasi Persamaan \eqref{eqn:wave-stationary}.


## code
Kode berikut ini bersumber dari Jake VanderPlas [[2](#r02)] yang kemudian dimodifikasi dengan menggunakan paket Pillow [[3](#r03)], yang dapat juga menghasilkan berkas mp4 [[4](#r04)].

```python
"""
Matplotlib Animation Example

author: Jake Vanderplas
email: vanderplas@astro.washington.edu
website: http://jakevdp.github.com
license: BSD
Please feel free to use and modify this, but keep the above information. Thanks!
"""

import numpy as np
from matplotlib import pyplot as plt
from matplotlib import animation

# First set up the figure, the axis, and the plot element we want to animate
fig = plt.figure()
ax = plt.axes(xlim=(0, 2), ylim=(-2, 2))
line, = ax.plot([], [], lw=2)

# initialization function: plot the background of each frame
def init():
    line.set_data([], [])
    return line,

# animation function.  This is called sequentially
def animate(i):
    x = np.linspace(0, 2, 1000)
		
		# ---- equation of y ----
		
		# -----------------------
		
    line.set_data(x, y)
    return line,

# call the animator.  blit=True means only re-draw the parts that have changed.
anim = animation.FuncAnimation(fig, animate, init_func=init,
                               frames=200, interval=20, blit=True)

# save the animation as an mp4.  This requires ffmpeg or mencoder to be
# installed.  The extra_args ensure that the x264 codec is used, so that
# the video can be embedded in html5.  You may need to adjust this for
# your system: for more information, see
# http://matplotlib.sourceforge.net/api/animation_api.html
#anim.save('basic_animation.mp4', fps=30, extra_args=['-vcodec', 'libx264'])

#plt.show()


# lines above this line is the original code from Jake Vanderplas
# url https://jakevdp.github.io/downloads/code/basic_animation.py

# modification from Sparisoma Viridi 2022-03-29
option = 0

if option == 0:
	writergif = animation.PillowWriter(fps=30)
	anim.save('basic_animation.gif', writer=writergif)
# anim.save('basic_animation.mp4', fps=30, extra_args=['-vcodec', 'libx264'])
else:
	plt.show()
```

Bagian dengan `# ---- equation of y ----` pada program lengkap di atas perlu diisi dengan potongan kode setelah persamaan terkaitnya yaitu Persamaan \eqref{eqn:wave-to-right}, \eqref{eqn:wave-to-left}, dan \eqref{eqn:wave-stationary}.


## exer
1. Modifikasi program lengkap yang diberikan sehingga dapat menghasilkan berkas gif seperti pada Gambar [1](#fig1). Dapat dilihat contoh pertanyaannya di [fi3201-01-2021-2 assignment 04 question 2](https://github.com/dudung/fi3201-01-2021-2/tree/main/assignments/04#question-2).
2. Modifikasi program lengkap yang diberikan sehingga dapat menghasilkan berkas gif seperti pada Gambar [2](#fig2). Dapat dilihat contoh pertanyaannya di [fi3201-01-2021-2 assignment 04 question 3](https://github.com/dudung/fi3201-01-2021-2/tree/main/assignments/04#question-3).
3. Modifikasi program lengkap yang diberikan sehingga dapat menghasilkan berkas gif seperti pada Gambar [3](#fig3). Dapat dilihat contoh pertanyaannya di [fi3201-01-2021-2 assignment 04 question 4](https://github.com/dudung/fi3201-01-2021-2/tree/main/assignments/04#question-4).


## notes
1. <a name='r01'></a>Eric W. Weisstein, "Wave Equation", from MathWorld--A Wolfram Web Resource, Wolfram Research, Inc., Sat Mar 26 2022, url <https://mathworld.wolfram.com/WaveEquation.html> [20220329].
2. <a name='r02'></a>Jake VanderPlas, "Matplotlib Animation Tutorial", Pythonic Perambulations, 18 Aug 2012, url <https://jakevdp.github.io/blog/2012/08/18/matplotlib-animation-tutorial/> [20220324].
3. <a name='r03'></a>user13680325, tripleee, "Answer to 'Python unknown file extension .mp4'", Stack Overflow, Jun 4, 2020, url <https://stackoverflow.com/a/62196206/9475509> [20220329].
4. <a name='r04'></a>John Hunter, Darren Dale, Eric Firing, Michael Droettboom and the Matplotlib development team, "Animated line plot", Matplotlib, 2021, url <https://matplotlib.org/stable/gallery/animation/simple_anim.html> [20220329].

{{< citeas >}}