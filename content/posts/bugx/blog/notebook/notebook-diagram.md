---
title: "notebook diagram"
date: 2022-04-14T14:05:01+07:00
lastmod: 2022-04-15T11:07:00+07:00
author: viridi
mathjax: false
mermaid: false
chartjs: false
tags: ['python', 'notebook', 'diagram', 'draft']
url: "0057"
draft: false
---
Menarik untuk membaca ulasan mengenai sebagian paket Python dan R yang dapat digunakan untuk membuat keluaran berupa media kaya fitur dan interaktif sebagai bagian dari sepotong dokumen sistem publishing Jupyter, dan yang lebih menariknya adalah bahwa ulasan tersebut dibuat dengan sistem tersebut [[1](#r01)]. Sebagai langkah awal untuk mempelajari fitur-fitur Jupyter Notebooks tersebut akan disinggung mengenai paket Python `nb-js-diagrammers` yang rilis terbarunya bertanggal 9 Maret 2022 untuk versi 0.0.7 [[2](#r02)]. Dengan paket ini empat macam diagram JavaScript, meliputi [Mermaid.js](https://mermaid-js.github.io/mermaid/#/), [flowchart.js](http://flowchart.js.org/), [wavedrom](https://github.com/wavedrom/wavedrom), [waversurfer.js](https://wavesurfer-js.org/), dapat ditampilkan dalam berkas IPython Notebook dengan menggunakan cell magic.


## installation
Proses instalasi dilakukan menggunakan PowerShell 5.1.19041.1320 pada Windows 10 Home 19042.1586 dengan Python 3.10.4. dan PIP 22.0.4.

Langkah pertama adalah memeriksa keberadaan paket `nb_js_diagrammers`

```
PS L:\home\cookbook\notebook> pip show nb-js-diagrammers
WARNING: Package(s) not found: nb-js-diagrammers
```

yang memang tidak dapat ditemukan karena belum terinstal. Selanjuntnya adalah menggunakan `pip` untuk menginstal `nb-js-diagrammers`

```
PS L:\home\cookbook\notebook> pip install nb-js-diagrammers
Collecting nb-js-diagrammers
  Downloading nb_js_diagrammers-0.0.7-py3-none-any.whl (8.8 kB)
Collecting pyflowchart
  Downloading pyflowchart-0.2.3-py3-none-any.whl (18 kB)
Collecting chardet
  Downloading chardet-4.0.0-py2.py3-none-any.whl (178 kB)
     ---------------------------------------- 178.7/178.7 KB 308.0 kB/s eta 0:00:00
Collecting astunparse
  Downloading astunparse-1.6.3-py2.py3-none-any.whl (12 kB)
Requirement already satisfied: wheel<1.0,>=0.23.0 in c:\users\your name\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from astunparse->pyflowchart->nb-js-diagrammers) (0.37.1)
Requirement already satisfied: six<2.0,>=1.6.1 in c:\users\your name\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from astunparse->pyflowchart->nb-js-diagrammers) (1.16.0)
Installing collected packages: chardet, astunparse, pyflowchart, nb-js-diagrammers
Successfully installed astunparse-1.6.3 chardet-4.0.0 nb-js-diagrammers-0.0.7 pyflowchart-0.2.3
```
yang meliputi koleksi paket `chardet`, `astunparse`, `pyflowchart`, dan `nb-js-diagrammers`. Dan

```
PS L:\home\cookbook\notebook> pip check
No broken requirements found.
```

tidak terdapat kebergantungan paket yang belum diinstal.


## use
Jupyter Notebook dapat dijalankan pada suatu penjelajah web dengan terlebih dahulu menjalankan servernya

```
PS L:\home\cookbook\notebook> jupyter notebook
[I 15:41:27.407 NotebookApp] Serving notebooks from local directory: L:\home\cookbook\notebook
[I 15:41:27.407 NotebookApp] Jupyter Notebook 6.4.10 is running at:
[I 15:41:27.408 NotebookApp] http://localhost:8888/?token=b87e20da29d1723983e9046618a74a045324fcf43b536df1
[I 15:41:27.408 NotebookApp]  or http://127.0.0.1:8888/?token=b87e20da29d1723983e9046618a74a045324fcf43b536df1
[I 15:41:27.408 NotebookApp] Use Control-C to stop this server and shut down all kernels (twice to skip confirmation).
[C 15:41:29.419 NotebookApp]

    To access the notebook, open this file in a browser:
        file:///C:/Users/Your%20Name/AppData/Roaming/jupyter/runtime/nbserver-8596-open.html
    Or copy and paste one of these URLs:
        http://localhost:8888/?token=b87e20da29d1723983e9046618a74a045324fcf43b536df1
     or http://127.0.0.1:8888/?token=b87e20da29d1723983e9046618a74a045324fcf43b536df1
```

di mana token akan berbeda setiap kali dijalankan. Keseluruhan is berkas [`notebook_diagram.ipynb`](https://github.com/dudung/cookbook/blob/main/notebook/hello/notebook_diagram.ipynb) adalah

```json
{
 "cells": [
  {
   "cell_type": "markdown",
   "id": "0edd2e19",
   "metadata": {},
   "source": [
    "Examples are from https://pypi.org/project/nb-js-diagrammer/"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 1,
   "id": "b2fe8948",
   "metadata": {},
   "outputs": [],
   "source": [
    "%load_ext nb_js_diagrammers"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 2,
   "id": "68bb3c93",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<iframe srcdoc=\"&lt;!DOCTYPE html&gt;\n",
       "&lt;html&gt;\n",
       "    &lt;head&gt;\n",
       "        &lt;meta charset=&quot;UTF-8&quot;&gt;\n",
       "        &lt;title&gt;Flowchart.js&lt;/title&gt;\n",
       "        &lt;script type=&quot;text/javascript&quot; src=&quot;https://cdnjs.cloudflare.com/ajax/libs/raphael/2.3.0/raphael.min.js&quot;&gt;&lt;/script&gt;\n",
       "        &lt;script type=&quot;text/javascript&quot; src=&quot;https://cdnjs.cloudflare.com/ajax/libs/flowchart/1.14.1/flowchart.js&quot;&gt;&lt;/script&gt;\n",
       "        &lt;/head&gt;\n",
       "        &lt;body&gt;\n",
       "         \n",
       "        &lt;div id=&quot;diagram&quot;&gt;&lt;/div&gt;\n",
       "&lt;script&gt;\n",
       "  var diagram = flowchart.parse(`\n",
       "st=&gt;start: Start\n",
       "e=&gt;end: End\n",
       "op1=&gt;operation: Generate\n",
       "op2=&gt;parallel: Evaluate\n",
       "st(right)-&gt;op1(right)-&gt;op2\n",
       "op2(path1, top)-&gt;op1\n",
       "op2(path2, right)-&gt;e\n",
       "`);\n",
       "  diagram.drawSVG(&#x27;diagram&#x27;);\n",
       "&lt;/script&gt;\n",
       " \n",
       "        &lt;/body&gt;\n",
       "&lt;/html&gt;\n",
       "\" width=\"100%\" height=\"100\"style=\"border:none !important;\" \"allowfullscreen\" \"webkitallowfullscreen\" \"mozallowfullscreen\"></iframe>"
      ],
      "text/plain": [
       "<nb_js_diagrammers.magics.JSDiagram at 0x22689ec37f0>"
      ]
     },
     "execution_count": 2,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "%%flowchart_magic -h 100\n",
    "\n",
    "st=>start: Start\n",
    "e=>end: End\n",
    "op1=>operation: Generate\n",
    "op2=>parallel: Evaluate\n",
    "st(right)->op1(right)->op2\n",
    "op2(path1, top)->op1\n",
    "op2(path2, right)->e"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 3,
   "id": "ca08363b",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<iframe srcdoc=\"&lt;!DOCTYPE html&gt;\n",
       "&lt;html&gt;\n",
       "    &lt;head&gt;\n",
       "        &lt;meta charset=&quot;UTF-8&quot;&gt;\n",
       "        &lt;title&gt;wavedrom.js&lt;/title&gt;\n",
       "&lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/wavedrom/2.6.8/skins/default.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;\n",
       "&lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/wavedrom/2.6.8/wavedrom.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;\n",
       "&lt;/head&gt;\n",
       "        &lt;body onload=&quot;WaveDrom.ProcessAll()&quot;&gt;\n",
       "&lt;script type=&quot;WaveDrom&quot;&gt;\n",
       "\n",
       "{ signal : [\n",
       "  { name: &quot;clk&quot;,  wave: &quot;p......&quot; },\n",
       "  { name: &quot;bus&quot;,  wave: &quot;x.34.5x&quot;,   data: &quot;head body tail&quot; },\n",
       "  { name: &quot;wire&quot;, wave: &quot;0.1..0.&quot; },\n",
       "]}\n",
       "\n",
       "&lt;/script&gt;\n",
       "        &lt;/body&gt;\n",
       "&lt;/html&gt;\n",
       "\" width=\"100%\" height=\"100\"style=\"border:none !important;\" \"allowfullscreen\" \"webkitallowfullscreen\" \"mozallowfullscreen\"></iframe>"
      ],
      "text/plain": [
       "<nb_js_diagrammers.magics.JSDiagram at 0x22689ec2ef0>"
      ]
     },
     "execution_count": 3,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "%%wavedrom_magic -h 100\n",
    "\n",
    "{ signal : [\n",
    "  { name: \"clk\",  wave: \"p......\" },\n",
    "  { name: \"bus\",  wave: \"x.34.5x\",   data: \"head body tail\" },\n",
    "  { name: \"wire\", wave: \"0.1..0.\" },\n",
    "]}"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 4,
   "id": "e774623b",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<iframe srcdoc=\"&lt;html&gt;\n",
       "    &lt;body&gt;\n",
       "        &lt;script src=&quot;https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js&quot;&gt;&lt;/script&gt;\n",
       "        &lt;script&gt;\n",
       "            mermaid.initialize({ startOnLoad: true });\n",
       "        &lt;/script&gt;\n",
       " \n",
       "        &lt;div class=&quot;mermaid&quot;&gt;\n",
       "            \n",
       "flowchart TD\n",
       "    A[Start] --&gt; B{Is it?};\n",
       "    B --&gt;|Yes| C[OK];\n",
       "    C --&gt; D[Rethink];\n",
       "    D --&gt; B;\n",
       "    B ----&gt;|No| E[End];\n",
       "\n",
       "        &lt;/div&gt;\n",
       " \n",
       "    &lt;/body&gt;\n",
       "&lt;/html&gt;\n",
       "\" width=\"100%\" height=\"400\"style=\"border:none !important;\" \"allowfullscreen\" \"webkitallowfullscreen\" \"mozallowfullscreen\"></iframe>"
      ],
      "text/plain": [
       "<nb_js_diagrammers.magics.JSDiagram at 0x22689ec2560>"
      ]
     },
     "execution_count": 4,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "%%mermaid_magic -h 400\n",
    "\n",
    "flowchart TD\n",
    "    A[Start] --> B{Is it?};\n",
    "    B -->|Yes| C[OK];\n",
    "    C --> D[Rethink];\n",
    "    D --> B;\n",
    "    B ---->|No| E[End];"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 5,
   "id": "cd0797ad",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<iframe srcdoc=\"&lt;html&gt;\n",
       "    &lt;body&gt;\n",
       "        &lt;script src=&quot;https://unpkg.com/wavesurfer.js/dist/wavesurfer.js&quot;&gt;&lt;/script&gt;\n",
       "        &lt;div id=&quot;wavesurfer&quot;&gt;\n",
       "            &lt;div id=&quot;waveform&quot;&gt;&lt;/div&gt;\n",
       "            &lt;div class=&quot;controls&quot;&gt;\n",
       "                &lt;button class=&quot;btn btn-primary&quot; data-action=&quot;play&quot;&gt;\n",
       "                    &lt;i class=&quot;glyphicon glyphicon-play&quot;&gt;&lt;/i&gt;\n",
       "                    Play\n",
       "                    /\n",
       "                    &lt;i class=&quot;glyphicon glyphicon-pause&quot;&gt;&lt;/i&gt;\n",
       "                    Pause\n",
       "                &lt;/button&gt;\n",
       "            &lt;/div&gt;\n",
       "        &lt;/div&gt;\n",
       "        &lt;script&gt;\n",
       "            var GLOBAL_ACTIONS = { // eslint-disable-line\n",
       "                play: function() {\n",
       "                    window.wavesurfer.playPause();\n",
       "                },\n",
       " \n",
       "                back: function() {\n",
       "                    window.wavesurfer.skipBackward();\n",
       "                },\n",
       " \n",
       "                forth: function() {\n",
       "                    window.wavesurfer.skipForward();\n",
       "                },\n",
       " \n",
       "                &#x27;toggle-mute&#x27;: function() {\n",
       "                    window.wavesurfer.toggleMute();\n",
       "                }\n",
       "            };\n",
       " \n",
       "            // Bind actions to buttons and keypresses\n",
       "            document.addEventListener(&#x27;DOMContentLoaded&#x27;, function() {\n",
       "                document.addEventListener(&#x27;keydown&#x27;, function(e) {\n",
       "                    let map = {\n",
       "                        32: &#x27;play&#x27;, // space\n",
       "                        37: &#x27;back&#x27;, // left\n",
       "                        39: &#x27;forth&#x27; // right\n",
       "                    };\n",
       "                    let action = map[e.keyCode];\n",
       "                    if (action in GLOBAL_ACTIONS) {\n",
       "                        if (document == e.target || document.body == e.target || e.target.attributes[&quot;data-action&quot;]) {\n",
       "                            e.preventDefault();\n",
       "                        }\n",
       "                        GLOBAL_ACTIONS[action](e);\n",
       "                    }\n",
       "                });\n",
       " \n",
       "                [].forEach.call(document.querySelectorAll(&#x27;[data-action]&#x27;), function(el) {\n",
       "                    el.addEventListener(&#x27;click&#x27;, function(e) {\n",
       "                        let action = e.currentTarget.dataset.action;\n",
       "                        if (action in GLOBAL_ACTIONS) {\n",
       "                            e.preventDefault();\n",
       "                            GLOBAL_ACTIONS[action](e);\n",
       "                        }\n",
       "                    });\n",
       "                });\n",
       "            });\n",
       "        &lt;/script&gt;\n",
       " \n",
       "        &lt;script&gt;\n",
       "            var wavesurfer = WaveSurfer.create({\n",
       "                container: &#x27;#waveform&#x27;,\n",
       "                waveColor: &#x27;violet&#x27;,\n",
       "                backend: &#x27;MediaElement&#x27;,\n",
       "                progressColor: &#x27;purple&#x27;\n",
       "            });\n",
       "        &lt;/script&gt;\n",
       "        &lt;script&gt;\n",
       "            wavesurfer.load(&quot;https://ia802606.us.archive.org/35/items/shortpoetry_047_librivox/abou_ben_adhem_hunt_mlb.mp3&quot;);\n",
       "        &lt;/script&gt;\n",
       "    &lt;/body&gt;\n",
       "&lt;/html&gt;\n",
       "\" width=\"100%\" height=\"200\"style=\"border:none !important;\" \"allowfullscreen\" \"webkitallowfullscreen\" \"mozallowfullscreen\"></iframe>"
      ],
      "text/plain": [
       "<nb_js_diagrammers.magics.JSDiagram at 0x22689ec2f50>"
      ]
     },
     "execution_count": 5,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "%wavesurfer_magic -f https://ia802606.us.archive.org/35/items/shortpoetry_047_librivox/abou_ben_adhem_hunt_mlb.mp3"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "1198c3a2",
   "metadata": {},
   "outputs": [],
   "source": []
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3 (ipykernel)",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.10.4"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 5
}}
```

yang hasilnya tidak dapat dirender di GitHub akan tetapi dapat secara lokal. Perbandingan tampilan keduanya diberikan pada Gambar [1](#fig1) dan [2](#fig2).

![](/bugx/img/notebook/notebook_diagram_not_rendered_github.png) \
Gambar <a name='fig1'>1</a>. Isi berkas Jupyter Notebook yang tidak dirender di GitHub.

Untuk Gambar [1](#fig1) berkas dapat diakses di <https://github.com/dudung/cookbook/blob/main/notebook/hello/notebook_diagram.ipynb>.

![](/bugx/img/notebook/notebook_diagram_rendered_locally.png) \
Gambar <a name='fig2'>2</a>. Isi berkas Jupyter Notebook yang terender secara lokal.

Untuk Gambar [2](#fig1) berkas dapat diakses di <http://localhost:8888/notebooks/notebook_diagram.ipynb>, yang bergantung lokasi penyimpanan berkas itu. Gambar [1](fig1) dan [2](#fig2) menampilkan berkas Jupyter Notebook yang sama.

Dengan demikian `nb-js-diagrammers-0.0.7` telah dapat diinstal dan dapat berfungsi dengan baik. Hanya sayangnya belum dapat dirender di GitHub sehingga untuk melihat hasilnya perlu diunduh terlebih dahulu dan kemudian dilihat menggunakan server Jupyter.

Semua diagram yang ditampilkan pada Gambaf [2](#fig2) merupakan hasil dari Command mode dan bukan Edit mode. Edit mode hanya mengakomodasi Markdown dan LaTex menggunakan MathJax [[3](#r03)].


## mermaid on github
Setelah banyak ditanyakan dan salah satunya sekitar tiga tahun lebih yang lalu [[4](#r04)], fitur agar Mermaid dapat didukung oleh Markdown GitHub akhirnya diusulkan dan disampaikan pada tim terkait untuk dipertimbangkan sekitar tiga bulan kemudian [[5](#r05)]. Dan di awal tahun 2022 ini fitur tersebut diumumkan telah didukung secara natif di manapun Markdown dapat digunakan (issues, repositories, discussions, gists) di GitHub [[6](#r06)].

Tabel <a tab='tab1'>1</a>. Penyebaran informasi fitur Mermaid pada Markdown GitHub.

Tanggal | Penulis | Lang | Ref
:- | :-: | :-: | :-:
Martin Woodward, <br> Adam Biagianti | 14 Feb 2022 | en | [[7](#r07)]
Ryan Daws | 15 Feb 2022 | en | [[8](#r08)]
李建興 | 15 Feb 2022 | tw | [[9](#r09)]
Steve Smith | 16 Feb 2022 | en | [[10](#r10)]
リルオッサ | 17 Feb 2022 | jp | [[11](#r11)]
Bobby Jack | 22 Feb 2022 | en | [[12](#r12)]
Даниил Шатухин | 22 Feb 2022 | ru | [[13](#r13)]
Stephan Augsten | 23 Feb 2022 | de | [[14](#r14)]
Waylon Walker | 25 Feb 2022 | en | [[15](#r15)]
Shinichi Okada | 28 Feb 2022 | en | [[16](#r16)]
Maciej Duraj | 8 Mar 2022 | en | [[17](#r17)]
＠IT | 12 Apr 2022 | jp | [[18](#r18)]

Isi dari Tabel [1](#tab1) hanya merupakan beberapa hasil pencarian dengan mesin pencari Google dan tidak dilakukan secara sistematis. Pasti akan terdapat banyak informasi lain yang belum disertakan sehingga tabel ini tidak dapat dianggap mewakili penyebaran informasi mengenai fitur Mermaid pada Markdown GitHub.


## notes
1. <a name='r01'></a>Tony Hirst, "Subject Matter Authoring Using Jupyter Notebooks", OpenComputingLab, 2021, url <https://opencomputinglab.github.io/SubjectMatterNotebooks> [20220414].
2. <a name='r02'></a>Tony Hirst, "nb-js-diagrammers 0.0.7", PyPI, Python Software Foundation, 9 Mar 2022, url <https://pypi.org/project/nb-js-diagrammers/0.0.7/> [2022<wbr>04<wbr>14].
3. <a name='r03'></a>Celeste Grupman, "28 Jupyter Notebook Tips, Tricks, and Shortcuts", Dataquest Labs, Inc., 12 Oct 2016, url <https://www.dataquest.io/blog/jupyter-notebook-tips-tricks-shortcuts/> [20220415].
4. <a name='r04'></a>wooohooo, "How to make GitHub Pages Markdown support mermaid diagram?", Stack Overflow, 21 Dec 2018, url <https://stackoverflow.com/q/53883747/9475509> [20220415].
5. <a name='r05'></a>mmmurf, AndreaGriffiths11, "Feature Request: Support Mermaid (markdown) graph diagrams in .md files", GitHub Community Forum, 11 Apr 2019, 12 Apr 2019, url <https://github.community/t/feature-request-support-mermaid-markdown-graph-diagrams-in-md-files/1922> [20220415].
6. <a name='r06'></a>github-product-roadmap, "Mermaid diagrams can be displayed within Markdown #372", GitHub public roadmap, GitHub, 12 Jan 2022, url <https://github.com/github/roadmap/issues/372> [20220415].
7. <a name='r07'></a>Martin Woodward, Adam Biagianti, "Include diagrams in your Markdown files with Mermaid", GitHub Blog, 14 Feb 2022, url <https://github.blog/2022-02-14-include-diagrams-markdown-files-mermaid/> [20220415].
8. <a name='r08'></a>Ryan Daws, "GitHub’s Mermaid support enables developers to quickly create diagrams", Developer Tech News, 15 Feb 2022, url <https://developer-tech.com/news/2021/nov/03/thomas-dohmke-will-be-githubs-new-ceo/> [20220415].
9. <a name='r09'></a>李建興, "GitHub原生支援在Markdown檔案以Mermaid語法編輯圖表", iThome, 15 Feb 2022, url <https://www.ithome.com.tw/news/149380> [20220415].
10. <a name='r10'></a>Steve Smith, "GitHub Diagrams with Mermaid", Ardalis, 16 Feb 2022, url <https://ardalis.com/github-diagrams-with-mermaid/> [20220415].
11. <a name='r11'></a>リルオッサ, "GitHubでmermaid記法が使えるようになったのでアーキテクチャーの図を書いてみた", Classmethod, Inc., 17 Feb 2022, url <https://dev.classmethod.jp/articles/hotlimit-mermaid/> [20220415].
12. <a name='r12'></a>Bobby Jack, "How to Include Mermaid Diagrams in Your GitHub Project", MUO, 22 Feb 2022, url <https://www.makeuseof.com/how-to-include-diagrams-in-github-project/> [20220415].
13. <a name='r13'></a>Даниил Шатухин, "Рисуем диаграммы Mermaid.js в README-файлах GitHub", Habr, 22 Feb 2022, url <https://habr.com/ru/post/652867/> [2022<wbr>0415].
14. <a name='r14'></a>Stephan Augsten, "GitHub integriert Mermaid-Funktionen: Diagramme in Markdown-Files", Dev Insider, Vogel Communications Group, 23 Feb 2022, url <https://www.dev-insider.de/github-integriert-mermaid-funktionen-a-1096526/> [20220415].
15. <a name='r15'></a>Waylon Walker, "GitHub Markdown now Supports Mermaid Diagrams", DEV Community, 25 Feb 2022, url <https://dev.to/waylonwalker/github-markdown-now-supports-mermaid-diagrams-3485> [20220415].
16. <a name='r16'></a>Shinichi Okada, "GitHub and Gist Markdown Now Support Mermaid", mkdir Awesome, Medium, 28 Feb 2022, url <https://medium.com/mkdir-awesome/github-and-gist-markdown-now-support-mermaid-b708799adfc3> [20220415].
17. <a name='r17'></a>Maciej Duraj, "Github Writer now available with Mermaid support", CKEditor Ecosystem Blog, 8 Mar 2022, url <https://ckeditor.com/blog/github-writer-now-available-with-mermaid-support/> [20220415].
18. <a name='r18'></a>＠IT, "GitHub、Markdownファイルに「Mermaid」で図を挿入可能に", ITmedia Inc., 12 Apr 2022, url <https://atmarkit.itmedia.co.jp/ait/articles/2204/12/news043.html> [20220415].


{{< citeas >}}
