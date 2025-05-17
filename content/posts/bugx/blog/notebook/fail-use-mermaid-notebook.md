---
title: "fail use mermaid notebook"
date: 2022-04-14T12:41:01+07:00
lastmod: 2022-04-14T13:46:00+07:00
author: viridi
mathjax: false
mermaid: false
chartjs: false
tags: ['python', 'notebook', 'mermaid', 'fail']
url: "0056"
draft: false
---
Ketertarikan untuk menggunakan fitur diagram Mermaid dalam IPython Notebook telah membawa pada paket `nb-mermaid` dengan satu-satunya versi 0.1.0 dirilis pada 28 Juli 2015  [[1](#r01)] dan paket yang mendukung diagram Mermaid dalam Jupyter Notebook ini ternyata telah deprecated [[2](#r02)]. Upaya instalasi telah dilakukan dan menemui masalah tanpa jawaban [[3](#r03)].

Terdapat alternatif lain untuk menggunakan Mermaid dalam Python, seperti melaui penyisipan kode HTML dan memanggil CDN JavaScript Mermaid dan melakukan
inisialisasinya dengan memanfaatkan suatu fungsi JavaScript, `setTimeout()`  [[4](#r04)] atau tanpanya [[5](#r05)]. Alternatif lain adalah dengan merender asset dalam Jupyter Notebook yang dihasilkan oleh JavaScript menggunakan IFrame yang terembedkan dan bekerja tidak hanya untuk [Mermaid](https://mermaid-js.github.io/) akan tetapi juga untuk [WaveDrom](https://github.com/wavedrom/wavedrom), [flowchart.js](https://flowchart.js.org/), dan [wavesurfer.js](https://wavesurfer-js.org/)  [[6](#r06)], yang sayangnya masih sulit dipahami untuk saat ini.


## notes
1. <a name='r01'></a>Nicholas Bollweg, "nb-mermaid 0.1.0", PuPI, Python Software Foundation, 28 Jul 2015, url <https://pypi.org/project/nb-mermaid/0.1.0/> [20220414].
2. <a name='r01'></a>Nicholas Bollweg, "nb-mermaid", Openbase, Inc., 2015, url <https://openbase.com/python/nb-mermaid> [20220414].
3. <a name='r01'></a>dudung, "ipython version conflict while installing mermaid and ipykernel using pip", Stack Overflow, 14 Apr 2022, url <https://stackoverflow.com/q/71865814/9475509> [20220414].
4. <a name='r01'></a>bollwyvl, "Embedded Mermaid diagrams in the IPython Notebook.ipynb", GitHub Gist, 10 Mar 2015, url <https://gist.github.com/bollwyvl/e51b4e724f0b82669c84> [20220414].
5. <a name='r01'></a>Tony Fast, "Using Mermaid in Ipython Notebook with Presentation in NBViewer", bl.ocks.org, 29 Aug 2015, url <http://bl.ocks.org/tonyfast/d6cbe7a0b46ced424fc7> [20220414].
6. <a name='r01'></a>Tony Hirst, "A Simple Pattern for Embedding Third Party Javascript Generated Graphics in Jupyter Notebooks", OUseful.Info, 30 Sep 2021, url <https://blog.ouseful.info/2021/09/30/a-simple-pattern-for-embedding-third-party-javascript-generated-graphics-in-jupyter-notebools/> [20220414].

{{< citeas >}}
