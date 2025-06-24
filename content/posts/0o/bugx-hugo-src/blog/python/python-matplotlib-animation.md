---
title: "python matplotlib animation"
date: 2022-03-24T17:46:00+07:00
lastmod: 2022-03-31T22:17:00+07:00
author: viridi
mathjax: false
mermaid: false
chartjs: false
tags: ['python', 'matplotlib', 'numpy', 'animation', 'draft']
url: "0019"
draft: false
---
Animasi adalah suatu metode dalam merekam gambar, model, atau bahkan boneka secara berurutan, dalam rangka menciptakan ilusi gerak, di mana hal ini dapat terjadi karena mata manusia hanya dapat mempertahankan suatu citra selama kira-kira 1/10 detik, sehingga ketika sejumlah gambar muncul berurutan secara cepat, otak memadukannya menjadi suatu gambar bergerak tunggal [[1](#r01)]. Grafik telah dapat menjelaskan data, animasi dapat menolong lebih jauh dengan memberikan pehamanan bagaimana keadaan berubah dengan waktu [[2](#r02)]. Matplotlib pada Python dapat dimanfaatkan untuk mengambarkan grafik data yang dianimasikan dengan menunda waktu penggambaran pada setiap titik data atau dengan fungsi terkait animasi yang telah disediakan [[3](#r03)], misalnya untuk menampilkan data bacaan potensiometer secara live [[4](#r04)], data multi-dimensi penduduk negara-negara yang berubah dengan tahun [[5](#r05)], sistem fisis seperti kurva gelombang, pendulum ganda, dan partikel-partikel dalam kotak yang saling bertumbukan [[6](#r06)], serta pola titik-titik air hujan yang jatuh pada suatu permukaan [[7](#r07)].


## information
Penelusuran dilakukan untuk mendapatkan informasi menghasilkan berkas mp4 dengan Python. Terdapat pertanyaan mengapa berkas mp4 yang dihasilkan tidak berisi animasi [[8](#r08)], video berdurasi 0 s [[9](#r09)], sampai ekstensi berkas .mp4 tidak dikenal [[10](#r10)]. Contoh pada Matplotlib mengenai hal ini juga tidak terlalu jelas [[11](#r11)]. Hal ini dikarenakan terdapat asumsi bahwa terdapat aplikasi FFmpeg yang telah terinstal dengan tepat.

Instalasi berbagai paket Python seperti ffmpeg 1.4 [[12](#r12)], ffmpeg-win64 0.0.2 [[13](#r13)], dan static-ffmpeg 2.2.0 [[14](#r14)] juga tidak memberikan perubahan pesan kesalahan yang diperoleh.

Solusi diperoleh dengan menginstal versi terkini FFmpeg 2022-03-28 builds [[15](#r15)] dan menambahkan lokasi instalasi FFmpeg ke path Windows 10 [[16](#r16)].


## working example
Kode berikut dapat diperoleh pula di [sine_wave.py versi 525b2ff4](https://github.com/dudung/python/blob/525b2ffe6ef44ee45b8c167196b3422011e53e94/animation/sine_wave.py).

```python
#
# sine_wave.py
# Animate a sine wave and save it as MP4 file
# Sparisoma Viridi | https://github.com/dudung/cookbook
# 20220331 Create this program by modifying original one [1].
# 
# 1. marlise23, "Python unknown file extension .mp4",
#    Stack Overflow, 20 Oct 2019,
#    url https://stackoverflow.com/q/58469357/9475509
#    [20220331].
#

# url https://realpython.com/python-import/
# Make code in one module available in anothe
import numpy as np

# url https://www.w3schools.com/python/ref_keyword_from.asp
# Import only certain section from a module
from matplotlib import pyplot as plt
from matplotlib import animation

# url https://matplotlib.org/3.5.1/api/_as_gen/matplotlib.pyplot.figure.html
# Create a new figure, or activate an existing figure
fig = plt.figure()

# url https://matplotlib.org/3.5.0/api/_as_gen/matplotlib.pyplot.axes.html
# Add an axes to the current figure and make it the current axes
ax = plt.axes(xlim=(0, 2), ylim=(-2, 2))

# url https://matplotlib.org/3.5.0/api/_as_gen/matplotlib.axes.Axes.plot.html
# Plot y versus x as lines and/or markers
line, = ax.plot([], [], lw=2)

# url https://stackoverflow.com/q/58469357/9475509
# Initialize each frame by plotting the background
def init():
  # url https://matplotlib.org/3.5.0/api/_as_gen/matplotlib.lines.Line2D.html#matplotlib.lines.Line2D.set_data
	# Set the x and y data
  line.set_data([], [])
  return line,

# url https://stackoverflow.com/q/58469357/9475509
# Call sequentially plotted function
def animate(i):
  # url https://numpy.org/doc/stable/reference/generated/numpy.linspace.html
	# Return evenly spaced numbers over a specified interval
  x = np.linspace(0, 2, 1000)

  # url https://numpy.org/doc/stable/reference/generated/numpy.sin.html
  # Trigonometric sine, element-wise
  y = np.sin(2 * np.pi * (x - 0.01 * i))

  # url https://matplotlib.org/3.5.0/api/_as_gen/matplotlib.lines.Line2D.html#matplotlib.lines.Line2D.set_data
  line.set_data(x, y)
  return line,

# url https://matplotlib.org/3.5.1/api/_as_gen/matplotlib.animation.FuncAnimation.html
# Makes an animation by repeatedly calling a function func
anim = animation.FuncAnimation(fig, animate, init_func=init, frames=200, interval=20, blit=True)

# url https://matplotlib.org/2.0.2/api/_as_gen/matplotlib.animation.Animation.save.html
# Saves a movie file by drawing every frame
anim.save('sine_wave_animation.mp4', fps=30, extra_args=['-vcodec', 'libx264'])

# url https://matplotlib.org/3.5.0/api/_as_gen/matplotlib.pyplot.show.html
# Display all open figures
plt.show()
```

Hasil kode di atas dapat dilihat pada video berikut ini.

{{< youtube id="jGS5ys1XtSw" autoplay="true" >}} \
Video <a name='vid1'>1</a>. Animasi gelombang sinusoidal beramplitudo 1.0 yang merambat ke kanan.

Video [1](#vid1) di atas terdapat di <https://www.youtube.com/watch?v=jGS5ys1XtSw>.


## notes
1. <a name='r01'></a>Alyssa Maio, "What is Animation? Definition and Types of Animation", StudioBinder, Inc., 18 Nov 2020, url <https://www.studiobinder.com/blog/what-is-animation-definition/> [20220324].
2. <a name='r02'></a>Artturi Jalli, "Python Animations With Matplotlib", Better Programming, 15 Jun 2021, url <https://betterprogramming.pub/python-animations-with-matplotlib-e8e8037f4df7> [20220324].
3. <a name='r03'></a>"How to Create Animations in Python?", GeeksforGeeks, 14 Sep 2021, url <https://www.geeksforgeeks.org/how-to-create-animations-in-python/> [20220324].
4. <a name='r04'></a>Peter D. Kazarinoff, "How to make animated plots with Matplotlib and Python", Python for Undergraduate Engineers, 2 May 2021, url <https://pythonforundergradengineers.com/live-plotting-with-matplotlib.html> [20220324].
5. <a name='r05'></a>Ander Fernández Jaurequi, "How to create animations in Python", Data Scientist & Business Intelligence, 4 Aug 2021, url <https://anderfernandez.com/en/blog/how-to-create-animations-python/> [20220324].
6. <a name='r06'></a>Jake VanderPlas, "Matplotlib Animation Tutorial", Pythonic Perambulations, 18 Aug 2012, url <https://jakevdp.github.io/blog/2012/08/18/matplotlib-animation-tutorial/> [20220324].
7. <a name='r07'></a>Parul Pandey, "Animations with Matplotlib", Towards Data Science, 14 Apr 2019, url <https://towardsdatascience.com/animations-with-matplotlib-d96375c5442c> [20220324].
8. <a name='r08'></a>Eular, "saving matplotlib animation as mp4", Stack Overflow, 10 May 2016, url <https://stackoverflow.com/q/37146420/9475509> [20220331].
9. <a name='r09'></a>Andy Baldacchino, "Saving matplotlib.animation outputs a 0 second video", Stack Overflow, 15 Feb 2017, url <https://stackoverflow.com/q/42258439/9475509> [20220331].
10. <a name='r10'></a>marlise23, "Python unknown file extension .mp4", Stack Overflow, 20 Oct 2019, url <https://stackoverflow.com/q/58469357/9475509> [20220331].
11. <a name='r11'></a>John Hunter, Darren Dale, Eric Firing, Michael Droettboom and the Matplotlib development team, "Animated line plot", Matplotlib, 2021, url <https://matplotlib.org/stable/gallery/animation/simple_anim.html> [20220331].
12. <a name='r12'></a>SkeyJIA, "ffmpeg 1.4", PyPI,  Python Software Foundation, 8 Oct 2018, url <https://pypi.org/project/ffmpeg/1.4/> [20220331].
13. <a name='r13'></a>hyansuper, "ffmpeg-win64 0.0.2", PyPI,  Python Software Foundation, 4 Mar 2021, url <https://pypi.org/project/ffmpeg-win64/0.0.2/> [20220331].
14. <a name='r14'></a>Zach Vorhies, "static-ffmpeg 2.2.0", PyPI,  Python Software Foundation, 20 Mar 2022, url <https://pypi.org/project/static-ffmpeg/2.2.0/> [20220331].
15. <a name='r15'></a>GyanD, "ffmpeg git 2022-03-28 builds", GitHub, 28 Mar 2022, url <https://github.com/GyanD/codexffmpeg/releases/tag/2022-03-28-git-5ee198f9aa> [20220331].
16. <a name='r16'></a>Ryan Hoffman, "Add to the PATH on Windows 10" Architect Ryan, 17 Mar 2018, url <https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/> [20220331].

{{< citeas >}}
