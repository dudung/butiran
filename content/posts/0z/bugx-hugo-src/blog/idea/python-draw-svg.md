---
title: "python-draw-svg"
date: 2022-06-23T04:30:00+0700
lastmod: 2022-06-23T06:21:00+0700
author: viridi
mathjax: false
mermaid: false
chartjs: false
tags: ['idea', 'python', 'svg']
url: "0099"
draft: false
---
Berawal dari adanya fitur untuk menampilkan diagram Mermaid dalam IPython Notebook yang sayangnya hasilnya belum dapat dilihat saat berkas diunggah ke GitHub akan tetapi dapat dilihat di nbviewer [[1](#r01)]. Mermaid menggambarkan diagram alir dan grafik berbasis SVG menggunakan bentuk Markdown [[2](#r02)]. Menggambar di IPython Notebook agar hasilnya dapat dilihat saat berkasnya diunggah ke GitHub salah satunya adalah dengan menggunakan Matplotlib, di mana gambar dengan Matplotlib ini juga dapat disimpan juga dalam format SVG [[3](#r03)]. Untuk menggambar bentuk-bentuk yang lebih bebas dengan SVG dengan Python dapat digunakan paket PyCairo [[4](#r04)], yang saat digunakan dalam IPython Notebook menghasilkan berkas dalam format PNG agar dapat terlihat hasilnya di nbviewer [[5](#r05)], atau dapat pula dengan menyimpan hasilnya dalam format PNG dan SVG menggunakan inline display, yang sayangnya masih terdapat catatan bahwa hasil render SVG tidak didukung pada tempat yang sama [[6](#r06)], suatu informasi yang belum dipahami. Ada juga cara lain dengan menggunakan fungsi BytesIO [[7](#r07)]. Perlu dicoba untuk melihat pendekatan mana yang membuat hasil penggambarkan dengan format SVG dapat terlihat pada berkas yang diunggah ke GitHub. Hal ini yang menjadi tujuan tulisan ini.


## notes
1. <a name='r01'></a>Nicholas Bollweg, "Embedded Mermaid diagrams in the IPython Notebook", GitHub Gist, 10 Mar 2015, url <https://gist.github.com/bollwyvl/e51b4e724f0b82669c84> [20220623].
2. <a name='r02'></a>Pat Godfrey, "Mermaid,
Graph Building with Markdown", Learning Too, 1 Nov 2019, url <https://www.learningtoo.eu/articles/mermaid.htm> [20220623].
3. <a name='r03'></a>Maxim Maeder, "Save Plot as SVG File in Matplotlib", Delf Stack, 12 Apr 2022, url <https://www.delftstack.com/howto/matplotlib/save-plot-as-svg-file-in-matplotlib/> [20220623].
4. <a name='r04'></a>ayush12arora, "PyCairo – Drawing the outline", GeeksforGeeks, 12 Nov 2020, url <https://www.geeksforgeeks.org/pycairo-drawing-the-outline/> [20220623].
5. <a name='r05'></a>Synthetik, "Working with Cairo in your Jupyter Notebook", Haiku Tech Center, 28 Apr 2020, url <https://www.haikutechcenter.com/2020/04/working-with-cairo-in-your-jupyter.html> [20220623].
6. <a name='r06'></a>Nick Wan, "Make a simple inline display for your outputs", GitHub, 19 Sep 2018, url <https://nickwan.github.io/inline-display/> [20220623].
7. <a name='r07'></a>Ned Batchelder, "Drawing Cairo SVG in a Jupyter notebook", nedbatchelder, 27 Jan 2019, url <https://nedbatchelder.com/blog/201901/drawing_cairo_svg_in_a_jupyter_notebook.html> [20220623].

{{< citeas >}}

{{< todo >}}
[[8](#r08)]
Make an example
{{</ todo >}}