---
title: "install notebook mermaid"
date: 2022-04-14T02:49:01+07:00
lastmod: 2022-04-14T09:35:00+07:00
author: viridi
mathjax: false
mermaid: false
chartjs: false
tags: ['python', 'pip', 'install', 'mermaid', 'notebook', 'not-solved']
url: "0054"
draft: false
---
Untuk dapat menggambarkan diagram alir pada bagian Markdown dalam suatu IPython Motebook diperlukan instalasi diagram Mermaid [[1](#r01)].


## installing problem
Melakukan instalasi `nb-mermaid` dengan `pip`.

```
PS L:\home\cookbook\notebook> pip show nb-mermaid
WARNING: Package(s) not found: nb-mermaid
PS L:\home\cookbook\notebook> pip install nb-mermaid
Collecting nb-mermaid
  Downloading nb-mermaid-0.1.0.tar.gz (161 kB)
     ---------------------------------------- 161.2/161.2 KB 508.4 kB/s eta 0:00:00
  Preparing metadata (setup.py) ... done
Collecting IPython<4.0,>3.0
  Using cached ipython-3.2.3-py3-none-any.whl (3.4 MB)
Collecting jupyter-pip
  Using cached jupyter_pip-0.3.1-py3-none-any.whl
Building wheels for collected packages: nb-mermaid
  Building wheel for nb-mermaid (setup.py) ... done
  Created wheel for nb-mermaid: filename=nb_mermaid-0.1.0-py3-none-any.whl size=163196 sha256=563832728b8f39661501de6d9f336bea79c6cb9b440c8eb96081e9059f883489
  Stored in directory: c:\users\your name\appdata\local\pip\cache\wheels\54\e5\9c\1b682a060f1a803392b253d1d5e2f2633ec7d24fea64e15060
Successfully built nb-mermaid
Installing collected packages: jupyter-pip, IPython, nb-mermaid
  Attempting uninstall: IPython
    Found existing installation: ipython 8.2.0
    Uninstalling ipython-8.2.0:
      Successfully uninstalled ipython-8.2.0
ERROR: pip's dependency resolver does not currently take into account all the packages that are installed. This behaviour is the source of the following dependency conflicts.
ipykernel 6.11.0 requires ipython>=7.23.1, but you have ipython 3.2.3 which is incompatible.
Successfully installed IPython-3.2.3 jupyter-pip-0.3.1 nb-mermaid-0.1.0
```

Terdapat pesan kesalahan yang perlu ditanggapi.

Periksa package yang telah terinstal sampai saat ini.

```
PS L:\home\cookbook\notebook> pip list
Package              Version
-------------------- -------
argon2-cffi          21.3.0
argon2-cffi-bindings 21.2.0
asttokens            2.0.5
attrs                21.4.0
backcall             0.2.0
beautifulsoup4       4.10.0
bleach               4.1.0
cffi                 1.15.0
colorama             0.4.4
cycler               0.11.0
debugpy              1.6.0
decorator            5.1.1
defusedxml           0.7.1
entrypoints          0.4
executing            0.8.3
ffmpeg               1.4
fonttools            4.31.2
ipykernel            6.11.0
ipython              3.2.3
ipython-genutils     0.2.0
jedi                 0.18.1
Jinja2               3.1.1
jsonschema           4.4.0
jupyter-client       7.2.1
jupyter-core         4.9.2
jupyter-pip          0.3.1
jupyterlab-pygments  0.1.2
kiwisolver           1.4.0
MarkupSafe           2.1.1
matplotlib           3.5.1
matplotlib-inline    0.1.3
mistune              0.8.4
nb-mermaid           0.1.0
nbclient             0.5.13
nbconvert            6.4.5
nbformat             5.2.0
nest-asyncio         1.5.5
notebook             6.4.10
numpy                1.22.3
packaging            21.3
pandocfilters        1.5.0
parso                0.8.3
pickleshare          0.7.5
Pillow               9.0.1
prometheus-client    0.13.1
prompt-toolkit       3.0.28
psutil               5.9.0
pure-eval            0.2.2
pycparser            2.21
Pygments             2.11.2
pyparsing            3.0.7
pyrsistent           0.18.1
python-dateutil      2.8.2
pywin32              303
pywinpty             2.0.5
pyzmq                22.3.0
Send2Trash           1.8.0
setuptools           61.3.1
six                  1.16.0
soupsieve            2.3.1
stack-data           0.2.0
terminado            0.13.3
testpath             0.6.0
tornado              6.1
traitlets            5.1.1
wcwidth              0.2.5
webencodings         0.5.1
wheel                0.37.1
PS L:\home\cookbook\notebook>
```

Menarik melihat bahwa dapat diambil dari pesan instalasi `nb-mermaid` bahwa telah

```
Successfully uninstalled ipython-8.2.0
Successfully installed IPython-3.2.3 jupyter-pip-0.3.1 nb-mermaid-0.1.0
..
ipykernel 6.11.0 requires ipython>=7.23.1, but you have ipython 3.2.3 which is incompatible.
```

yang cukup membingungkan karena terdapat `ipython-3.2.3` akan tetapi dilakukan uninstal `ipython-8.2.0` yang lebih dibutuhkan.

Lakukan uninstal `nb-mermaid`

```
PS L:\home\cookbook\notebook> pip uninstall nb-mermaid
Found existing installation: nb-mermaid 0.1.0
Uninstalling nb-mermaid-0.1.0:
  Would remove:
    c:\users\your name\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages\mermaid\*
    c:\users\your name\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages\nb_mermaid-0.1.0.dist-info\*
Proceed (Y/n)? y
  Successfully uninstalled nb-mermaid-0.1.0
PS L:\home\cookbook\notebook>
```

yang masih membiarkan `ipython-3.2.3` dan `jupyter-pip-0.3.1`. Terdapat kemungkian bahwa  `ipython-3.2.3` diinstal oleh `nb-mermaid` dengan terlebih dahulu melakukan uninstal `ipython-8.2.0`, di mana hal ini mungkin terjadi karena adanya anggapan bahwa `ipython` yang ada pasti memiliki versi lebih lama sehingga peerlu dilakukan uninstalasi.

```
PS L:\home\cookbook\notebook> pip install nb-mermaid
Collecting nb-mermaid
  Using cached nb_mermaid-0.1.0-py3-none-any.whl
Requirement already satisfied: jupyter-pip in c:\users\your name\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from nb-mermaid) (0.3.1)
Requirement already satisfied: IPython<4.0,>3.0 in c:\users\your name\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from nb-mermaid) (3.2.3)
Installing collected packages: nb-mermaid
Successfully installed nb-mermaid-0.1.0
PS L:\home\cookbook\notebook>
```

Hal ini tercermin dari instalasi ulang `nb-mermaid` yang tidak melakukan uninstalasi bila telah terdapat `ipython-3.2.3`.

Saat dicoba upgrade `ipython`

```
PS L:\home\cookbook\notebook> pip install ipython --upgrade
```

dan dilanjutkan dengan instalasi ulang `nb-mermaid`

```
PS L:\home\cookbook\notebook> pip install nb-mermaid
```

kembali diperoleh pesan kesalahan yang sama

```
Installing collected packages: IPython, nb-mermaid
  Attempting uninstall: IPython
    Found existing installation: ipython 8.2.0
    Uninstalling ipython-8.2.0:
      Successfully uninstalled ipython-8.2.0
ERROR: pip's dependency resolver does not currently take into account all the packages that are installed. This behaviour is the source of the following dependency conflicts.
ipykernel 6.11.0 requires ipython>=7.23.1, but you have ipython 3.2.3 which is incompatible.
Successfully installed IPython-3.2.3 nb-mermaid-0.1.0
```

dan dengan ini telah dapat ditunjukkan bahwa pesan kesalahan ini dapat diperoleh kembali. Kesalahan ini telah terdeteksi dan menjadi suatu issue #7 berjudul Destructive installation [[2](#r02)].


## dependencies check
Untuk menindaklanjuti pesan kesalahan sebelumnya

```
ipykernel 6.11.0 requires ipython>=7.23.1, but you have ipython 3.2.3 which is incompatible.
```

dilakukan pemeriksaan kebergantungan suatu package Python terhadap package lainnya. Untuk `pip` dapat digunakan [[3](#r03)]

```
PS L:\home\cookbook\notebook> pip check
ipykernel 6.11.0 has requirement ipython>=7.23.1, but you have ipython 3.2.3.
```

yang menginformasikan hal yang sama.


## ipython upgrade
Agar `ipykernel-6.11.0` dapat bekerja dengan baik, dilakukan upgrade ke versi terkini [[4](#r04)]

```
PS L:\home\cookbook\notebook> pip install ipython --upgrade

Installing collected packages: ipython
  Attempting uninstall: ipython
    Found existing installation: ipython 3.2.3
    Uninstalling ipython-3.2.3:
      Successfully uninstalled ipython-3.2.3
ERROR: pip's dependency resolver does not currently take into account all the packages that are installed. This behaviour is the source of the following dependency conflicts.
nb-mermaid 0.1.0 requires IPython<4.0,>3.0, but you have ipython 8.2.0 which is incompatible.
Successfully installed ipython-8.2.0
```

yang menginstal versi 8.2.0 dengan tanggal rilis 27 Maret 2022 [[5](#r05)] dengan permasalahan baru.

```
PS L:\home\cookbook\notebook> pip check
nb-mermaid 0.1.0 has requirement IPython<4.0,>3.0, but you have ipython 8.2.0.
```

Pesan di atas memberikan informasi versi `ipython` yang diperlukan.


## not solved
Sari dari konlik instalasi yang terjadi adalah sebagai berikut ini.

Package | Date | Dependency | Version
:- | :- | :- | :-
`nb-mermaid-0.1.0` | `28 Jul 2015` | `ipython` | `<4.0`, `>3.0`
`ipykernel-6.11.0` | `31 Mar 2022` | `ipython` | `>=7.23.1`

Terlihat bahwa tidak terdapat irisan walaupun dilakukan downgrade dari `ipykernel`. Suatu pertanyaan terkait hal ini telah diajukan ke SO [[6](#r06)]. Semoga ada bantuan, atau mungkin perlu menjawabnya sendiri karena juga dianjurkan [[7](#r07)], akan tetapi sudah tentu bila sudah ada solusinya.


## notes
1. <a name='r01'></a>Nicholas Bollweg, "nb-mermaid 0.1.0", PyPI, Python Software Foundation, 28 Jul 2015, url <https://pypi.org/project/nb-mermaid/0.1.0/> [20220414].
2. <a name='r02'></a>Masacroso, gramster, LoganWeir, "Destructive installation #7", GitHub, 15 Oct 2018, 13 Mar 2018, 17 Mar 2018, url <https://github.com/bollwyvl/nb-mermaid/issues/7> [20220414].
3. <a name='r03'></a>Katie Chang, "How To List Installed Python Packages", ActiveState, 21 Sep 2021, url <https://www.activestate.com/resources/quick-reads/how-to-list-installed-python-packages/> [20220414].
4. <a name='r04'></a>borgr, "Answer to 'How to update/upgrade a package using pip?'", Stack Overflow, 6 Jun 2021, url <https://stackoverflow.com/a/47071257/9475509> [20220414].
5. <a name='r05'></a>The IPython Development Team, "ipython 8.2.0", PyPI, Python Software Foundation, 27 Mar 2022, url <https://pypi.org/project/ipython/8.2.0/> [20220414].
6. <a name='r06'></a>dudung, "ipython version conflict while installing mermaid and ipykernel using pip", Stack Overflow, 14 Apr 2022, url <https://stackoverflow.com/q/71865814/9475509> [20220414].
7. <a name='r07'></a>Jeff Atwood, "It’s OK to Ask and Answer Your Own Questions", The Overflow, 1 Jul 2011, url <https://stackoverflow.blog/2011/07/01/its-ok-to-ask-and-answer-your-own-questions/> [20220414].

{{< citeas >}}
