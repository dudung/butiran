---
title: "pip uninstall package"
date: 2022-04-14T10:52:01+07:00
lastmod: 2022-04-14T11:35:00+07:00
author: viridi
mathjax: false
mermaid: false
chartjs: false
tags: ['python', 'pip', 'uninstall', 'mermaid']
url: "0055"
draft: false
---
Setelah beberapa saat dan belum mendapatkan solusi bagaimana dapat menginstal `nb-mermaid-0.1.0` dan `ipykernel-6.11.0` bersama-sama yang masing-masing membutuhkan versi `ipython` berbeda dan tanpa ada irisannya [[1](#r01)], dilakukan proses uninstalasi paket-paket terkait `nb-mermaid`.


## dependency
Sebelum melakukan uninstal, diperiksa dulu paket-paket yang terinstal bersama-sama dengan `nb-mermaid` atau diperlukan olehnya

```
PS L:\home\cookbook\notebook> pip show nb-mermaid
Name: nb-mermaid
Version: 0.1.0
Summary: Mermaid diagrams in the IPython Notebook
Home-page: http://github.com/bollwyvl/nb-mermaid
Author: Nicholas Bollweg
Author-email: nick.bollweg@gmail.com
License: BSD
Location: c:\users\your name\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages
Requires: IPython, jupyter-pip
Required-by:
```

dan terdapat `ipython` dan `jupyter-pip`. Periksa juga paket-paket yang menggunakan keduanya. Untuk `jupyter-pip`

```
PS L:\home\cookbook\notebook> pip show jupyter-pip
Name: jupyter-pip
Version: 0.3.1
Summary: Allows IPython notebook extension authors to make their extension pip installable!
Home-page: https://github.com/jdfreder/jupyter-pip
Author: Jonathan Frederic
Author-email: jon.freder@gmail.com
License: New BSD License
Location: c:\users\your name\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages
Requires:
Required-by: nb-mermaid
```

hanya diperlukan oleh `nb-mermaid` sehingga keduanya dapat diuninstal tanpa mengganggu paket-paket yang lain. Akan tetapi untuk `ipython` diperoleh

```
PS L:\home\cookbook\notebook> pip show ipython
Name: ipython
Version: 8.2.0
Summary: IPython: Productive Interactive Computing
Home-page: https://ipython.org
Author: The IPython Development Team
Author-email: ipython-dev@python.org
License: BSD
Location: c:\users\your name\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages
Requires: backcall, colorama, decorator, jedi, matplotlib-inline, pickleshare, prompt-toolkit, pygments, setuptools, stack-data, traitlets
Required-by: ipykernel, nb-mermaid
```

terdapat banyak paket yang memerlukannya sehingga tidak dapat diuninstal.


## uninstall
Untuk paket `jupyter-pip` akan diuninstal

```
PS L:\home\cookbook\notebook> pip uninstall jupyter-pip
Found existing installation: jupyter-pip 0.3.1
Uninstalling jupyter-pip-0.3.1:
  Would remove:
    c:\users\your name\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages\jupyter_pip-0.3.1.dist-info\*
    c:\users\your name\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages\jupyterpip\*
  Would not remove (might be manually added):
    c:\users\your name\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages\jupyter_pip-0.3.1.dist-info\REQUESTED
Proceed (Y/n)? y
  Successfully uninstalled jupyter-pip-0.3.1
```

lanjutkan dengan menghapus folder `c:\users\your name\appdata\local\ packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\ local-packages\python310\site-packages\jupyter_pip-0.3.1.dist-info` serta isinya secara manual, dan lanjutkan dengan memeriksa kebergantungan padanya [[2](#r02)]

```
PS L:\home\cookbook\notebook> pip check
nb-mermaid 0.1.0 requires jupyter-pip, which is not installed.
nb-mermaid 0.1.0 has requirement IPython<4.0,>3.0, but you have ipython 8.2.0.
```

dan hanya `nb-mermaid 0.1.0`. Selanjutnya adalah uninstal `nb-mermaid`

```
PS L:\home\cookbook\notebook> pip uninstall nb-mermaid
Found existing installation: nb-mermaid 0.1.0
Uninstalling nb-mermaid-0.1.0:
  Would remove:
    c:\users\your name\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages\mermaid\*
    c:\users\your name\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages\nb_mermaid-0.1.0.dist-info\*
Proceed (Y/n)? y
  Successfully uninstalled nb-mermaid-0.1.0
```

dan tidak ada paket yang bergantung padanya

```
PS L:\home\cookbook\notebook> pip check
No broken requirements found.
```

sehingga proses uninstalasi telah selesai.


## notes
1. <a name='r01'></a>dudung, "ipython version conflict while installing mermaid and ipykernel using pip", Stack Overflow, 14 Apr 2022, url <https://stackoverflow.com/q/71865814/9475509> [20220414].
2. <a name='r02'></a>Katie Chang, "How To List Installed Python Packages", ActiveState, 21 Sep 2021, url <https://www.activestate.com/resources/quick-reads/how-to-list-installed-python-packages/> [20220414].

{{< citeas >}}
