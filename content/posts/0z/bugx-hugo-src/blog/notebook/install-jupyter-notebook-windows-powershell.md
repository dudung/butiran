---
title: "install jupyter notebook windows powershell"
date: 2022-04-03T13:18:00+07:00
lastmod: 2022-04-03T16:59:00+07:00
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['install', 'python', 'windows', 'powershell', 'pip', 'jupyter', 'notebook']
url: "0032"
draft: false
---
Terdapat informasi bahwa persamaan matematika dapat dituliskan dalam Jupyter Notebook [[1](#r01)] perlu terlebih dahulu menginstalnya bila belum. Perlu versi Python tertentu bila ingin menginstalnya menggunakan pip [[2](#r02)]. Selain Jupyter Notebook klasik, mungkin juga dapat dinstal JupyterLab dan Voilà bila diperlukan [[3](#r03)]. Untuk saat ini hanya akan diinstal Jupyter Notebook. Proses instalasi dilakukan menggunakan PowerShell 5.1.19041.1320 pada Windows 10.0.19042.


## pip
Perlu terlebih dahulu dilihat versi `pip` dan diperbarui [[4](#r04)].

```
PS L:\home\cookbook> pip --version
pip 22.0.4 from C:\Program Files\WindowsApps\PythonSoftwareFoundation.Python.3.10_3.10.1264.0_x64__qbz5n2kfra8p0\lib\site-packages\pip (python 3.10)
PS L:\home\cookbook> pip install --upgrade pip
Requirement already satisfied: pip in c:\program files\windowsapps\pythonsoftwarefoundation.python.3.10_3.10.1264.0_x64__qbz5n2kfra8p0\lib\site-packages (22.0.4)
PS L:\home\cookbook>
```

Dan diperoleh bahwa telah merupakan versi terbaru [[5](#r05)]. 


## maximum path length limitation
Saat melakukan instalasi Jupyter Notebook klasik diperlukan dukungan pada Windows Long Path yang perlu dienable untuk menghindari pesan kesalahan

```
ERROR: Could not install packages due to an OSError: [Errno 2] No such file or directory: 'C:\\Users\\Sparisoma Viridi\\AppData\\Local\\Packages\\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\\LocalCache\\local-packages\\Python310\\site-packages\\jedi\\third_party\\django-stubs\\django-stubs\\contrib\\contenttypes\\management\\commands\\remove_stale_contenttypes.pyi'
HINT: This error might have occurred since this system does not have Windows Long Path support enabled. You can find information on how to enable this at https://pip.pypa.io/warnings/enable-long-paths
```

di akhir instalasi. Agar fitur Windows Long Path tersebut menjadi enable, dapat dilakukan dengan menggunakan PowerShell atau cara lainnya [[6](#r06)].

### powershell
Bila dipilih cara pertama, PowerShell perlu djalankan dengan Run as administrator agar tidak mendapatkan pesan berikut

```
PS L:\home\cookbook> New-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\FileSystem" `
>> -Name "LongPathsEnabled" -Value 1 -PropertyType DWORD -Force
New-ItemProperty : Requested registry access is not allowed.
At line:1 char:1
+ New-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\FileSy ...
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : PermissionDenied: (HKEY_LOCAL_MACH...trol\FileSystem:String) [New-ItemProperty], Securit
   yException
    + FullyQualifiedErrorId : System.Security.SecurityException,Microsoft.PowerShell.Commands.NewItemPropertyCommand
```

saat prosesnya. Klik kanan ikon PowerShell dan pilih Run as administrator sehingga terbuka jendela dengan judul Administrator: powershell. Lakukan langkah berikut.

```
PS C:\WINDOWS\system32> New-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\FileSystem" `
>> -Name "LongPathsEnabled" -Value 1 -PropertyType DWORD -Force


LongPathsEnabled : 1
PSPath           : Microsoft.PowerShell.Core\Registry::HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem
PSParentPath     : Microsoft.PowerShell.Core\Registry::HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control
PSChildName      : FileSystem
PSDrive          : HKLM
PSProvider       : Microsoft.PowerShell.Core\Registry



PS C:\WINDOWS\system32>
```

Terlihat bahwa opsi LongPathsEnabled telah menjadi 1. Tutup jendela Administrator: powershell dan jangan lakukan hal lain sebagai administrator karena cukup berbahaya.

### regedit
Cara lain adalah dengan menggunakan Registry Editor. Tekan tombol Windows + R akan membuka Run dan ketikkan `regedit` sehingga membuka jendela Registry Editor. Dan ubah `Computer\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem\LongPathsEnabled (Type: REG_DWORD)` yang semula bernilai 0 menjadi 1. Lalu tutup jendela tersebut.


## install notebook
Selanjutnya adalah melakukan instalasi Jupyter Notebook klasik [[3](#r03)].

```
PS L:\home\cookbook> pip install notebook
Collecting notebook
  Downloading notebook-6.4.10-py3-none-any.whl (9.9 MB)
     ---------------------------------------- 9.9/9.9 MB 544.0 kB/s eta 0:00:00
Collecting pyzmq>=17
  Downloading pyzmq-22.3.0-cp310-cp310-win_amd64.whl (1.1 MB)
     ---------------------------------------- 1.1/1.1 MB 586.9 kB/s eta 0:00:00
Collecting nest-asyncio>=1.5
  Downloading nest_asyncio-1.5.5-py3-none-any.whl (5.2 kB)
Collecting jupyter-core>=4.6.1
  Downloading jupyter_core-4.9.2-py3-none-any.whl (86 kB)
     ---------------------------------------- 86.9/86.9 KB 233.8 kB/s eta 0:00:00
Collecting nbconvert>=5
  Downloading nbconvert-6.4.5-py3-none-any.whl (561 kB)
     ---------------------------------------- 561.4/561.4 KB 560.1 kB/s eta 0:00:00
Collecting jinja2
  Downloading Jinja2-3.1.1-py3-none-any.whl (132 kB)
     ---------------------------------------- 132.6/132.6 KB 355.7 kB/s eta 0:00:00
Collecting ipython-genutils
  Downloading ipython_genutils-0.2.0-py2.py3-none-any.whl (26 kB)
Collecting prometheus-client
  Downloading prometheus_client-0.13.1-py3-none-any.whl (57 kB)
     ---------------------------------------- 57.1/57.1 KB 187.5 kB/s eta 0:00:00
Collecting traitlets>=4.2.1
  Downloading traitlets-5.1.1-py3-none-any.whl (102 kB)
     ---------------------------------------- 102.0/102.0 KB 294.2 kB/s eta 0:00:00
Collecting jupyter-client>=5.3.4
  Downloading jupyter_client-7.2.1-py3-none-any.whl (130 kB)
     ---------------------------------------- 130.4/130.4 KB 296.1 kB/s eta 0:00:00
Collecting terminado>=0.8.3
  Downloading terminado-0.13.3-py3-none-any.whl (14 kB)
Collecting tornado>=6.1
  Downloading tornado-6.1.tar.gz (497 kB)
     ---------------------------------------- 497.4/497.4 KB 439.2 kB/s eta 0:00:00
  Preparing metadata (setup.py) ... done
Collecting Send2Trash>=1.8.0
  Downloading Send2Trash-1.8.0-py3-none-any.whl (18 kB)
Collecting argon2-cffi
  Downloading argon2_cffi-21.3.0-py3-none-any.whl (14 kB)
Collecting ipykernel
  Downloading ipykernel-6.11.0-py3-none-any.whl (130 kB)
     ---------------------------------------- 130.8/130.8 KB 386.5 kB/s eta 0:00:00
Collecting nbformat
  Downloading nbformat-5.2.0-py3-none-any.whl (74 kB)
     ---------------------------------------- 74.6/74.6 KB 196.3 kB/s eta 0:00:00
Requirement already satisfied: python-dateutil>=2.8.2 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from jupyter-client>=5.3.4->notebook) (2.8.2)
Collecting entrypoints
  Downloading entrypoints-0.4-py3-none-any.whl (5.3 kB)
Collecting pywin32>=1.0
  Downloading pywin32-303-cp310-cp310-win_amd64.whl (9.2 MB)
     ---------------------------------------- 9.2/9.2 MB 616.2 kB/s eta 0:00:00
Collecting pygments>=2.4.1
  Downloading Pygments-2.11.2-py3-none-any.whl (1.1 MB)
     ---------------------------------------- 1.1/1.1 MB 680.9 kB/s eta 0:00:00
Collecting pandocfilters>=1.4.1
  Downloading pandocfilters-1.5.0-py2.py3-none-any.whl (8.7 kB)
Collecting MarkupSafe>=2.0
  Downloading MarkupSafe-2.1.1-cp310-cp310-win_amd64.whl (17 kB)
Collecting bleach
  Downloading bleach-4.1.0-py2.py3-none-any.whl (157 kB)
     ---------------------------------------- 157.9/157.9 KB 471.9 kB/s eta 0:00:00
Collecting beautifulsoup4
  Downloading beautifulsoup4-4.10.0-py3-none-any.whl (97 kB)
     ---------------------------------------- 97.4/97.4 KB 370.9 kB/s eta 0:00:00
Collecting jupyterlab-pygments
  Downloading jupyterlab_pygments-0.1.2-py2.py3-none-any.whl (4.6 kB)
Collecting nbclient<0.6.0,>=0.5.0
  Downloading nbclient-0.5.13-py3-none-any.whl (70 kB)
     ---------------------------------------- 70.6/70.6 KB 297.4 kB/s eta 0:00:00
Collecting mistune<2,>=0.8.1
  Downloading mistune-0.8.4-py2.py3-none-any.whl (16 kB)
Collecting testpath
  Downloading testpath-0.6.0-py3-none-any.whl (83 kB)
     ---------------------------------------- 83.9/83.9 KB 92.4 kB/s eta 0:00:00
Collecting defusedxml
  Downloading defusedxml-0.7.1-py2.py3-none-any.whl (25 kB)
Collecting jsonschema!=2.5.0,>=2.4
  Downloading jsonschema-4.4.0-py3-none-any.whl (72 kB)
     ---------------------------------------- 72.7/72.7 KB 286.5 kB/s eta 0:00:00
Collecting pywinpty>=1.1.0
  Downloading pywinpty-2.0.5-cp310-none-win_amd64.whl (1.4 MB)
     ---------------------------------------- 1.4/1.4 MB 616.8 kB/s eta 0:00:00
Collecting argon2-cffi-bindings
  Downloading argon2_cffi_bindings-21.2.0-cp36-abi3-win_amd64.whl (30 kB)
Collecting debugpy>=1.0
  Downloading debugpy-1.6.0-cp310-cp310-win_amd64.whl (4.3 MB)
     ---------------------------------------- 4.3/4.3 MB 559.0 kB/s eta 0:00:00
Collecting psutil
  Downloading psutil-5.9.0-cp310-cp310-win_amd64.whl (245 kB)
     ---------------------------------------- 245.5/245.5 KB 470.6 kB/s eta 0:00:00
Collecting ipython>=7.23.1
  Downloading ipython-8.2.0-py3-none-any.whl (750 kB)
     ---------------------------------------- 750.7/750.7 KB 473.8 kB/s eta 0:00:00
Collecting matplotlib-inline>=0.1
  Downloading matplotlib_inline-0.1.3-py3-none-any.whl (8.2 kB)
Collecting setuptools>=60
  Downloading setuptools-61.3.1-py3-none-any.whl (1.1 MB)
     ---------------------------------------- 1.1/1.1 MB 510.2 kB/s eta 0:00:00
Collecting prompt-toolkit!=3.0.0,!=3.0.1,<3.1.0,>=2.0.0
  Downloading prompt_toolkit-3.0.28-py3-none-any.whl (380 kB)
     ---------------------------------------- 380.2/380.2 KB 526.3 kB/s eta 0:00:00
Collecting decorator
  Downloading decorator-5.1.1-py3-none-any.whl (9.1 kB)
Collecting backcall
  Downloading backcall-0.2.0-py2.py3-none-any.whl (11 kB)
Collecting pickleshare
  Downloading pickleshare-0.7.5-py2.py3-none-any.whl (6.9 kB)
Collecting stack-data
  Downloading stack_data-0.2.0-py3-none-any.whl (21 kB)
Collecting colorama
  Downloading colorama-0.4.4-py2.py3-none-any.whl (16 kB)
Collecting jedi>=0.16
  Downloading jedi-0.18.1-py2.py3-none-any.whl (1.6 MB)
     ---------------------------------------- 1.6/1.6 MB 716.8 kB/s eta 0:00:00
Collecting attrs>=17.4.0
  Downloading attrs-21.4.0-py2.py3-none-any.whl (60 kB)
     ---------------------------------------- 60.6/60.6 KB 267.7 kB/s eta 0:00:00
Collecting pyrsistent!=0.17.0,!=0.17.1,!=0.17.2,>=0.14.0
  Downloading pyrsistent-0.18.1-cp310-cp310-win_amd64.whl (61 kB)
     ---------------------------------------- 61.6/61.6 KB 251.8 kB/s eta 0:00:00
Requirement already satisfied: six>=1.5 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from python-dateutil>=2.8.2->jupyter-client>=5.3.4->notebook) (1.16.0)
Collecting cffi>=1.0.1
  Downloading cffi-1.15.0-cp310-cp310-win_amd64.whl (180 kB)
     ---------------------------------------- 180.3/180.3 KB 434.9 kB/s eta 0:00:00
Collecting soupsieve>1.2
  Downloading soupsieve-2.3.1-py3-none-any.whl (37 kB)
Collecting webencodings
  Downloading webencodings-0.5.1-py2.py3-none-any.whl (11 kB)
Requirement already satisfied: packaging in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from bleach->nbconvert>=5->notebook) (21.3)
Collecting pycparser
  Downloading pycparser-2.21-py2.py3-none-any.whl (118 kB)
     ---------------------------------------- 118.7/118.7 KB 495.2 kB/s eta 0:00:00
Collecting parso<0.9.0,>=0.8.0
  Downloading parso-0.8.3-py2.py3-none-any.whl (100 kB)
     ---------------------------------------- 100.8/100.8 KB 362.2 kB/s eta 0:00:00
Collecting wcwidth
  Downloading wcwidth-0.2.5-py2.py3-none-any.whl (30 kB)
Requirement already satisfied: pyparsing!=3.0.5,>=2.0.2 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from packaging->bleach->nbconvert>=5->notebook) (3.0.7)
Collecting executing
  Downloading executing-0.8.3-py2.py3-none-any.whl (16 kB)
Collecting pure-eval
  Downloading pure_eval-0.2.2-py3-none-any.whl (11 kB)
Collecting asttokens
  Downloading asttokens-2.0.5-py2.py3-none-any.whl (20 kB)
Building wheels for collected packages: tornado
  Building wheel for tornado (setup.py) ... done
  Created wheel for tornado: filename=tornado-6.1-cp310-cp310-win_amd64.whl size=414478 sha256=809300a1799041728e3eed430c85ede744545f02b5f4d4584ecdf6d1f13fa74b
  Stored in directory: c:\users\sparisoma viridi\appdata\local\pip\cache\wheels\80\32\8d\21cf0fa6ee4e083f6530e5b83dfdfa9489a3890d320803f4c7
Successfully built tornado
Installing collected packages: webencodings, wcwidth, Send2Trash, pywin32, pure-eval, pickleshare, mistune, ipython-genutils, executing, backcall, traitlets, tornado, testpath, soupsieve, setuptools, pyzmq, pywinpty, pyrsistent, pygments, pycparser, psutil, prompt-toolkit, prometheus-client, parso, pandocfilters, nest-asyncio, MarkupSafe, entrypoints, defusedxml, decorator, debugpy, colorama, attrs, asttokens, terminado, stack-data, matplotlib-inline, jupyterlab-pygments, jupyter-core, jsonschema, jinja2, jedi, cffi, bleach, beautifulsoup4, nbformat, jupyter-client, ipython, argon2-cffi-bindings, nbclient, ipykernel, argon2-cffi, nbconvert, notebook
Successfully installed argon2-cffi-21.3.0 argon2-cffi-bindings-21.2.0 beautifulsoup4-4.10.0 bleach-4.1.0 cffi-1.15.0 ipykernel-6.11.0 ipython-8.2.0 jedi-0.18.1 jupyter-client-7.2.1 nbclient-0.5.13 nbconvert-6.4.5 nbformat-5.2.0 notebook-6.4.10
PS L:\home\cookbook>
```

Versi terkini notebook adalah 6.4.10 yang dirilis 15 Mar 2022 [[7](#r07)] dan terlihat pada baris akhir proses instalasi.


## run notebook
Pada PowerShell lakukan

```
PS L:\home\cookbook> jupyter notebook
[I 14:58:26.613 NotebookApp] Serving notebooks from local directory: L:\home\cookbook
[I 14:58:26.613 NotebookApp] Jupyter Notebook 6.4.10 is running at:
[I 14:58:26.613 NotebookApp] http://localhost:8888/?token=d2fb6990b783c932f197ba362ef1404c28f978360a825245
[I 14:58:26.613 NotebookApp]  or http://127.0.0.1:8888/?token=d2fb6990b783c932f197ba362ef1404c28f978360a825245
[I 14:58:26.628 NotebookApp] Use Control-C to stop this server and shut down all kernels (twice to skip confirmation).
[C 14:58:28.027 NotebookApp]

    To access the notebook, open this file in a browser:
        file:///C:/Users/Your%20Name/AppData/Roaming/jupyter/runtime/nbserver-3860-open.html
    Or copy and paste one of these URLs:
        http://localhost:8888/?token=d2fb6990b783c932f197ba362ef1404c28f978360a825245
     or http://127.0.0.1:8888/?token=d2fb6990b783c932f197ba362ef1404c28f978360a825245

```

untuk menjalankan server notebook. Buka browser pada <http://localhost:8888/tree> atau akan terbuka sendiri pada penjelajah internet yang sedang aktfi, e.g. Google Chrome. Kemudian dengan Control-C Jupyter Notebook dapat dihentikan.

```
[I 15:17:18.041 NotebookApp] Interrupted...
[I 15:17:18.592 NotebookApp] Shutting down 0 kernels
[I 15:17:18.592 NotebookApp] Shutting down 0 terminals
PS L:\home\cookbook>
```

Tampak bahwa kendali telah kembali ke PowerShell.

### example
Dengan mengikuti tutorial pemula penggunaan Jupyter Notebook [[8](#r08)] dapat dihasilkan kode berikut.

```json
{
 "cells": [
  {
   "cell_type": "code",
   "execution_count": 2,
   "id": "8e53bc62",
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "Hello, World!\n"
     ]
    }
   ],
   "source": [
    "print(\"Hello, World!\")"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 3,
   "id": "8089724a",
   "metadata": {},
   "outputs": [],
   "source": [
    "import time\n",
    "time.sleep(3)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 4,
   "id": "fdd054ef",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "'Hello, Bugx!'"
      ]
     },
     "execution_count": 4,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "def say_hello(recipient):\n",
    "    return 'Hello, {}!'.format(recipient)\n",
    "\n",
    "say_hello('Bugx')"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "81aa10ed",
   "metadata": {},
   "source": [
    "# Title\n",
    "## Section\n",
    "### Title"
   ]
  },
  {
   "cell_type": "markdown",
   "id": "de227e49",
   "metadata": {},
   "source": [
    "\\begin{equation}\n",
    "y = ax^2 + bx + c + \\frac{e^x}{\\tan x}\n",
    "\\end{equation}"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "eaf0c33c",
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
}
```

Suatu persamaan matematika juga telah disisipkan seperti tujuan awal tulisan ini [[1](#r01)]. Hasil menjalankan notebook di atas dapat dilihat pada berkas [hello_world.ipynb](https://github.com/dudung/cookbook/blob/main/notebook/hello/hello_world.ipynb) di [cookbook](https://github.com/dudung/cookbook).


## other notebooks
Terdapat notebook lain selain Jupyter Notebook yang dapat digunakan untuk Python untuk pembelajaran mesin [[9](#r09)]. Selain itu terdapat juga beberapa kekuatiran dalam pemanfaatan notebook seperti kurang efisien dalam debugging dan visualisasi data, terutama saat mencari visualisasi dan analisis yang telah dihasilkan pada berkas notebook yang besar [[10](#r10)].


## exer
1. Buatlah sebuah notebook sehingga dapat menampilkan formula kuadrat
\begin{equation}\label{eqn:quadratic-formula}
x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
\end{equation}
dengan penjelasan singkatnya.


## notes
1. <a name='r01'></a>Abhay Shukla, "Writing Math Equations in Jupyter Notebook: A Naive Introduction", Analytics Vidhya, Medium, 27 Mar 2020, url <https://medium.com/analytics-vidhya/a5ce87b9a214> [20220403].
2. <a name='r02'></a>Kalhari Walawage, "Install Python and Jupyter Notebook to Windows 10 (64 bit)", Medium, 14 Dec 2019, url <https://medium.com/@kswalawage/66db782e1d02> [20220403].
3. <a name='r03'></a>-, "Installing Jupyter: Get up and running on your compute", Project Jupyter, 2022, url <https://jupyter.org/install> [20220403].
4. <a name='r04'></a>The Uptide, "How To Upgrade Pip In Windows, MacOS & Linux", The Uptide, 9 Dec 2021, url <https://theuptide.com/upgrade-pip/> [20220403].
5. <a name='r05'></a>The pip developers, "pip 22.0.4", PyPI,  Python Software Foundation, 7 Mar 2022, url <https://pypi.org/project/pip/22.0.4/> [20220403].
6. <a name='r06'></a>alvinashcraft, bearmannl, TimShererWithAquent, iSatishYadav, drewbatgit, DCtheGeek, andreas-eriksson, GrantMeStrength, "Maximum Path Length Limitation", Microsoft technical documentation, 22 Apr 2021, url <https://docs.microsoft.com/en-us/windows/win32/fileio/maximum-file-path-limitation?tabs=powershell> [20220403].
7. <a name='r07'></a>Jupyter Development Team, "notebook 6.4.10", PyPI,  Python Software Foundation, 15 Mar 2022, url <https://pypi.org/project/notebook/6.4.10/> [20220403].
8. <a name='r08'></a>Benjamin Pryke, "How to Use Jupyter Notebook in 2020: A Beginner’s Tutorial", Dataquest Labs, Inc., 24 Aug 2020, url <https://www.dataquest.io/blog/jupyter-notebook-tutorial/> [20220403].
9. <a name='r09'></a>09amit, "Top Python Notebooks for Machine Learning", GeekforGeeks, 22 Jul 2020, url <https://www.geeksforgeeks.org/top-python-notebooks-for-machine-learning/> [20220403].
10. <a name='r10'></a>Chris Moffitt, "Exploring an Alternative to Jupyter Notebooks for Python Development", Practical Business Python, 4 May 2020, url <https://pbpython.com/notebook-alternative.html> [20220403].

{{< citeas >}}
