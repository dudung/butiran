---
title: "install python windows powershell"
date: 2022-03-24T05:45:00+07:00
lastmod: 2022-03-24T17:48:00+07:00
author: viridi
mathjax: false
mermaid: false
chartjs: false
tags: ['install', 'python', 'windows', 'powershell', 'pip', 'wheel']
url: "0018"
draft: false
---
Dengan menggunakan PowerShell, suatu shell perintah moderen lintas platform yang menyertakan fitur terbaik dari shell populer lainnya [[1](#r01)] yang menambah kekuatan, fungsionalits dan fleksibilitas Windows Command Prompt [[2](#r02)], instalasi Python pun dapat dilakukan. Sejak Windows 10 version 1607 PowerShell telah terinstal secara default [[3](#r03)]. Instalasi Python dengan menggunakan PowerShell akan disinggung di sini dan juga pemanfaatan pip yang telah disertakan.


## install python
Langkah pertama yang perlu dilakukan pada Windows 10 adalah membuka PowerShell (PS) dengan mencarinya pada menu Start > Windows PowerShell > Windows PowerShell atau menggunakan cara lainnya [[4](#r04)], yang akan membuka suatu jendela Windows PowerShell.

```
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Try the new cross-platform PowerShell https://aka.ms/pscore6

PS C:\Users\Your Name>
```

Ketikkan `python` dan tekan enter.

```
PS C:\Users\Your Name> python
PS C:\Users\Your Name>
```

Akan terbuka jendela Microsoft Store dengan isinya

```
Python 3.10 Python Software Foundation
```

Klik tombol Get dan proses pengunduhan suatu berkas berukuran 38.11 MB akan dimulai. Setelah pengunduhan dan instalasi selesai akan muncul pesan

```
You can find these apps in your All apps list.
```

pada jendela semula. Tutup jendela dengan klik ikon &times; pada sudut kanan atas jendela dan kembali ke PS.

Periksa hasil instalasi dengan

```
PS C:\Users\Your Name> python
Python 3.10.3 (tags/v3.10.3:a342a49, Mar 16 2022, 13:07:40) [MSC v.1929 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>> exit()
PS C:\Users\Your Name>
```

yang menggambarkan bahwa Python 3.10.3, yang dirilis 16 Mar 2022 [[5](#r05)], telah terinstal


## pip
Sejak Python 3.4 modul `ensurepip` telah ditambahkan pada pustaka standar Python [[6](#r06)]. Nama pip merupakan akronim dan deklarasi dari 'pip install packages', di mana pip ini adalah manager paket standar untuk Python [[7](#r07)]. Setelah Python terinstal, yang dalam hal ini adalah versi 3.10.3, dengan masih berada pada PS, dapat diperiksa versi pip yang disertakan.

```
PS C:\Users\Your Name> pip --version
pip 22.0.4 from C:\Program Files\WindowsApps\PythonSoftwareFoundation.Python.3.10_3.10.1008.0_x64__qbz5n2kfra8p0\lib\site-packages\pip (python 3.10)
PS C:\Users\Your Name>
```

Akan diperoleh informasi versi 22.0.4, yang merupakan versi terakhir dan dirilis pada 7 Maret 2022 [[8](#r08)]. Dikarenakan sudah merupakan versi terkini pip tidak terlu diupgrade. Bila pip belum terinstal atau belum merupakan versi terakhir dapat diikuti langkah-langkah yang tersedia [[9](#r09)].

Informasi paket yang telah terinstal dapat diperoleh dengan bantuan pip [[10](#r10)].

```
PS C:\Users\Your Name> pip list
PS C:\Users\Your Name> pip list --user
PS C:\Users\Your Name>
```

Opsi `--user` digunakan bila ingin melihat paket yang diinstal lokal hanya untuk pengguna saat ini, yang dalam hal ini adalah `Your Name`. Terlihat bahwa belum terinstal paket apapun.

Informasi terkait cache pip dapat dilihat pula menggunakan pip [[11](#r11)].

```
PS C:\Users\Your Name> pip cache info
Package index page cache location: c:\users\your name\appdata\local\pip\cache\http
Package index page cache size: 0 bytes
Number of HTTP files: 0
Wheels location: c:\users\your name\appdata\local\pip\cache\wheels
Wheels size: 0 bytes
Number of wheels: 0
PS C:\Users\Your Name> pip cache list
Nothing cached.
PS C:\Users\Your Name>
```

Terdapat pula opsi `purge` untuk membersihkan cache pip.


## python wheel
Berkas wheel Python secara esensi merupakan suatu archive zip yang nama berkasnya dibuat sedemikian rupa sehingga installer tahu versi Python dan platform yang didukung oleh wheel tersebut [[12](#r12)]. Wheels merupakan standar baru distribusi Python dan berniat untuk menggantikan eggs, sejak `pip >= 1.4` dan `setuptools >= 0.8` telah terdapat dukungan untuk wheels [[13](#r13)]. Menurut otoritas paket Python atau Python Packaging Authority (PyPA), wheels lebih dipilih oleh pip saat menginstal modul Python dari index paket Python atau Python Package Index (PyPI) karena lebih kecil, cepat diinstal, dan lebih efisien dibandingkan dengan membangun paket dari kode sumber yang terdapat pada suatu sdist (Source Distribution), di mana paket sumber terbuka Python secara umum dapat diinstal dari sdist atau wheels [[14](#r14)].

Periksa apakah telah terdapat paket wheel.

```
PS C:\Users\Your Name> pip show wheel
WARNING: Package(s) not found: wheel
```

### install
Instal paket wheel.

```
Collecting wheel
  Downloading wheel-0.37.1-py2.py3-none-any.whl (35 kB)
Installing collected packages: wheel
  WARNING: The script wheel.exe is installed in 'C:\Users\Your Name\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\LocalCache\local-packages\Python310\Scripts' which is not on PATH.
  Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.
Successfully installed wheel-0.37.1
PS C:\Users\Your Name>
```

Periksa kembali paket yang telah terinstal dengan perintah `show`.

```
PS C:\Users\Your Name> pip show wheel
Name: wheel
Version: 0.37.1
Summary: A built-package format for Python
Home-page: https://github.com/pypa/wheel
Author: Daniel Holth
Author-email: dholth@fastmail.fm
License: MIT
Location: c:\users\your name\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages
Requires:
Required-by:
PS C:\Users\Your Name>
```

Dapat juga dengan perintah `list`

```
PS C:\Users\Your Name> pip list
Package Version
------- -------
wheel   0.37.1
PS C:\Users\Your Name>
```

Lihat caches saat ini.

```
PS C:\Users\Your Name> pip cache info
Package index page cache location: c:\users\your name\appdata\local\pip\cache\http
Package index page cache size: 47 kB
Number of HTTP files: 2
Wheels location: c:\users\your name\appdata\local\pip\cache\wheels
Wheels size: 0 bytes
Number of wheels: 0
PS C:\Users\Your Name>
```

### uninstall
Uninstal paket wheel.

```
PS C:\Users\Your Name> pip uninstall wheel
Found existing installation: wheel 0.37.1
Uninstalling wheel-0.37.1:
  Would remove:
    c:\users\your name\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\scripts\wheel.exe
    c:\users\your name\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages\wheel-0.37.1.dist-info\*
    c:\users\your name\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages\wheel\*
Proceed (Y/n)? y
  Successfully uninstalled wheel-0.37.1
PS C:\Users\Your Name>
```

Lihat isi cache saat ini.

```
PS C:\Users\Your Name> pip cache info
Package index page cache location: c:\users\your name\appdata\local\pip\cache\http
Package index page cache size: 47 kB
Number of HTTP files: 2
Wheels location: c:\users\your name\appdata\local\pip\cache\wheels
Wheels size: 0 bytes
Number of wheels: 0
PS C:\Users\Your Name> pip cache list
Nothing cached.
PS C:\Users\Your Name>
```

Bersihkan isi cache.

```
PS C:\Users\Your Name> pip cache purge
Files removed: 2
PS C:\Users\Your Name>  pip cache info
Package index page cache location: c:\users\your name\appdata\local\pip\cache\http
Package index page cache size: 0 bytes
Number of HTTP files: 0
Wheels location: c:\users\your name\appdata\local\pip\cache\wheels
Wheels size: 0 bytes
Number of wheels: 0
PS C:\Users\Your Name> pip cache list
Nothing cached.
PS C:\Users\Your Name>
```

Dengan ini cache telah bersih dari berkas-berkas instalasi paket sebelumnya.

### reinstall
Sebelumnya terdapat peringatan

```
WARNING: The script wheel.exe is installed in 'C:\Users\Your Name\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\LocalCache\local-packages\Python310\Scripts' which is not on PATH.
```

yang memberitahukan bahwa informasi folder tersebut belum ada pada `PATH`, yang dapat dilihat dengan cara berikut

```
PS C:\Users\Your Name> $env:path
C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\WINDOWS\System32\OpenSSH\;C:\Program Files\OpenVPN\bin;C:\Program Files\nodejs\;C:\Program Files\Git\cmd;C:\Hugo\bin;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\Program Files\Git\cmd;C:\Program Files\nodejs\;C:\WINDOWS\System32\OpenSSH\;C:\Program Files\OpenVPN\bin;C:\Users\Your Name\AppData\Local\Microsoft\WindowsApps;C:\Users\Your Name\AppData\Roaming\npm;
PS C:\Users\Your Name>
```

atau

```
PS C:\Users\Your Name> $env:path -split ";"
C:\WINDOWS\system32
C:\WINDOWS
C:\WINDOWS\System32\Wbem
C:\WINDOWS\System32\WindowsPowerShell\v1.0\
C:\WINDOWS\System32\OpenSSH\
C:\Program Files\OpenVPN\bin
C:\Program Files\nodejs\
C:\Program Files\Git\cmd
C:\Hugo\bin
C:\WINDOWS
C:\WINDOWS\System32\Wbem
C:\WINDOWS\System32\WindowsPowerShell\v1.0\
C:\Program Files\Git\cmd
C:\Program Files\nodejs\
C:\WINDOWS\System32\OpenSSH\
C:\Program Files\OpenVPN\bin
C:\Users\Your Name\AppData\Local\Microsoft\WindowsApps
C:\Users\Your Name\AppData\Roaming\npm

PS C:\Users\Your Name>
```
di mana kedua cara di atas adalah untuk PS [[15](#r15)] dan berbeda dengan pada cmd Windows [[16](#r16)] ataupun shell Linux [[17](#r17)].

Informasi `C:\Users\Your Name\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\LocalCache\local-packages\Python310\Scripts` perlu ditambahkan pada `PATH`. Hal ini dapat dilakukan dengan mengubah variabel lingkungan sistem [[17](#r17)].

1. Klik menu Start dan ketikkan `env` lalu pilih `Edit the system environment variables` sehingga terbuka jendela System Properties.
2. Pilih tombol 'Environment Variables..' baris kedua dari paling bawah sehingga terbuka jendela Environment Variables.
3. Sorot baris kedua dengan nama `Path` dan klik tombol 'Edit' sehingga terbuka jendela 'Edit environment variable'.
4. Klik tombol 'New' dan tempel informasi yang diinginkan di atas tadi, lalu tekan tombol 'OK' di bagian bawah sehingga jendela ini tertutup.
5. Klik tombol 'OK' kembali untuk menutup jendela berikutnya.
6. Kembali klik tomobol 'OK' untuk menutup jendela selanjutnya.
7. Tutup jendela Windows PowerShell dan buka kembali.

Periksa hasilnya

```
PS C:\Users\Your Name> $env:path -split ";"
C:\WINDOWS\system32
C:\WINDOWS
C:\WINDOWS\System32\Wbem
C:\WINDOWS\System32\WindowsPowerShell\v1.0\
C:\WINDOWS\System32\OpenSSH\
C:\Program Files\OpenVPN\bin
C:\Program Files\nodejs\
C:\Program Files\Git\cmd
C:\Hugo\bin
C:\WINDOWS
C:\WINDOWS\System32\Wbem
C:\WINDOWS\System32\WindowsPowerShell\v1.0\
C:\Program Files\Git\cmd
C:\Program Files\nodejs\
C:\WINDOWS\System32\OpenSSH\
C:\Program Files\OpenVPN\bin
C:\Users\Your Name\AppData\Local\Microsoft\WindowsApps
C:\Users\Your Name\AppData\Roaming\npm
C:\Users\Your Name\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\LocalCache\local-packages\Python310\Scripts

PS C:\Users\Your Name>
```

yang telah terdapat tambahan baris baru di paling bawah.

Lanjutkan dengan menginstal wheel dengan pip.

```
PS C:\Users\Your Name> pip install wheel
Collecting wheel
  Downloading wheel-0.37.1-py2.py3-none-any.whl (35 kB)
Installing collected packages: wheel
Successfully installed wheel-0.37.1
PS C:\Users\Your Name>
```

Dan perhatikan bagaiman pesan peringatan sebelumnya telah hilang.


## matplotlib
Paket matplotlib dinstal dengan menggunakan pip.

```
PS C:\Users\Your Name> pip install matplotlib
Collecting matplotlib
  Downloading matplotlib-3.5.1-cp310-cp310-win_amd64.whl (7.2 MB)
     ---------------------------------------- 7.2/7.2 MB 528.6 kB/s eta 0:00:00
Collecting fonttools>=4.22.0
  Downloading fonttools-4.31.2-py3-none-any.whl (899 kB)
     ---------------------------------------- 899.5/899.5 KB 512.8 kB/s eta 0:00:00
Collecting python-dateutil>=2.7
  Downloading python_dateutil-2.8.2-py2.py3-none-any.whl (247 kB)
     ---------------------------------------- 247.7/247.7 KB 345.6 kB/s eta 0:00:00
Collecting pillow>=6.2.0
  Downloading Pillow-9.0.1-cp310-cp310-win_amd64.whl (3.2 MB)
     ---------------------------------------- 3.2/3.2 MB 598.7 kB/s eta 0:00:00
Collecting kiwisolver>=1.0.1
  Downloading kiwisolver-1.4.0-cp310-cp310-win_amd64.whl (51 kB)
     ---------------------------------------- 51.4/51.4 KB 329.2 kB/s eta 0:00:00
Collecting packaging>=20.0
  Downloading packaging-21.3-py3-none-any.whl (40 kB)
     ---------------------------------------- 40.8/40.8 KB 391.2 kB/s eta 0:00:00
Collecting pyparsing>=2.2.1
  Downloading pyparsing-3.0.7-py3-none-any.whl (98 kB)
     ---------------------------------------- 98.0/98.0 KB 295.7 kB/s eta 0:00:00
Collecting cycler>=0.10
  Downloading cycler-0.11.0-py3-none-any.whl (6.4 kB)
Collecting numpy>=1.17
  Downloading numpy-1.22.3-cp310-cp310-win_amd64.whl (14.7 MB)
     ---------------------------------------- 14.7/14.7 MB 610.8 kB/s eta 0:00:00
Collecting six>=1.5
  Downloading six-1.16.0-py2.py3-none-any.whl (11 kB)
Installing collected packages: six, pyparsing, pillow, numpy, kiwisolver, fonttools, cycler, python-dateutil, packaging, matplotlib
Successfully installed cycler-0.11.0 fonttools-4.31.2 kiwisolver-1.4.0 matplotlib-3.5.1 numpy-1.22.3 packaging-21.3 pillow-9.0.1 pyparsing-3.0.7 python-dateutil-2.8.2 six-1.16.0
PS C:\Users\Your Name>
```

Dan dapat dilihat dengan perintah `list` dari pip.

```
PS C:\Users\Your Name> pip list
Package         Version
--------------- -------
cycler          0.11.0
fonttools       4.31.2
kiwisolver      1.4.0
matplotlib      3.5.1
numpy           1.22.3
packaging       21.3
Pillow          9.0.1
pyparsing       3.0.7
python-dateutil 2.8.2
six             1.16.0
wheel           0.37.1
PS C:\Users\Your Name>
```

Bila diperiksa di [PyPI](https://pypi.org/) akan diperoleh bahwa NumPy vers 1.22.3 rilis 8 Mar 2022 [[18](#r18)] dan Pillow 9.0.1 rilis 3 Feb 2022 [[19](#r19)] telah merupakan versi terkini.


## notes
1. <a name='r01'></a>Sean Wheeler, Hananya Jacobson, Shawn C., "What is PowerShell?", Microsoft technical documentation, 16 Feb 2022, url <https://docs.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.2> [20220324].
2. <a name='r02'></a>Alexander Altvater, "PowerShell Commands Every Developer Should Know: 50+ Cmdlets for Getting Things Done, Monitoring Performance, Debugging", Stackify, 21 Sep 2017, url <https://stackify.com/powershell-commands-every-developer-should-know/> [20220324].
3. <a name='r03'></a>Sean Wheeler, David Coulter, "Windows PowerShell System Requirements", Microsoft technical documentation, 3 Nov 2021, url <https://docs.microsoft.com/en-us/powershell/scripting/windows-powershell/install/windows-powershell-system-requirements?view=powershell-7.2> [20220324].
4. <a name='r04'></a>Brady Gavin, "9 Ways to Open PowerShell in Windows 10", How-To Geek, 31 Mar 2020, url <https://www.howtogeek.com/662611/9-ways-to-open-powershell-in-windows-10/> [20220324].
5. <a name='r05'></a>-, "Python 3.10.3", Python Software Foundation, 16 Mar 2022, url <https://www.python.org/downloads/release/python-3103/> [20220324].
6. <a name='r06'></a>The pip developers, "Installation", pip documentation v22.1.dev0, url <https://pip.pypa.io/en/latest/installation/> [20220324].
7. <a name='r07'></a>Philipp Acsany, "Using Python's pip to Manage Your Projects' Dependencies", Real Python, 2 Feb 2022, url <https://realpython.com/what-is-pip/> [20220324].
8. <a name='r08'></a>Maintainers of pip, "pip 22.0.4", PyPI, Python Software Foundation, 7 Mar 2022, url <https://pypi.org/project/pip/22.0.4/> [20220324].
9. <a name='r09'></a>Renesh Bedre, "Install and upgrade Python packages using pip and virtual environment on Windows, Linux, and Mac", Data science blog, 12 Feb 2022, url <https://www.reneshbedre.com/blog/install-upgrade-pip-windows-mac-linux.html> [20220324].
10. <a name='r10'></a>Katie Chang, "How To List Python Packages – Globally Installed Vs Locally Installed", ActiveState, 19 Jan 2022, url <https://www.activestate.com/resources/quick-reads/how-to-list-python-packages-globally-installed-vs-locally-installed/> [20220324].
11. <a name='r11'></a>The pip developers, "pip cache", pip documentation v22.0.4, url <https://pip.pypa.io/en/stable/cli/pip_cache/> [20220324].
12. <a name='r12'></a>Brad Solomon, "What Are Python Wheels and Why Should You Care?", Real Python, 15 May 2021, url <https://realpython.com/python-wheels/> [20220324].
13. <a name='r13'></a>Wheels contributors, "What are wheels?", Python Wheels, 24 Oct 2021, url <https://pythonwheels.com/> [20220324].
14. <a name='r14'></a>Doctor Scripto, "PowerTip: Use PowerShell to Display Windows Path", Microsoft Scripting Blog, 7 Jun 2014, url <https://devblogs.microsoft.com/scripting/powertip-use-powershell-to-display-windows-path/> [20220324].
15. <a name='r15'></a>Suhani S., "How To Install, Download And Build Python Wheels", ActiveState, 7 Oct 2021, url <https://www.activestate.com/resources/quick-reads/python-install-wheel/> [20220324].
16. <a name='r16'></a>Vivek Gite, "Display or print UNIX / Linux path ~ $PATH variable", 17 Jun 2021, url <https://www.cyberciti.biz/faq/howto-print-path-variable/> [20220324].
17. <a name='r17'></a>Ryan Hoffman, "Add to the PATH on Windows 10", Architect Ryan, 17 Mar 2018,
url <https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/> [20220324].
18. <a name='r18'></a>NumPy Developers, "numpy 1.22.3", PyPI, Python Software Foundation, 8 Mar 2022, url <https://pypi.org/project/numpy/1.22.3/> [20220324].
19. <a name='r19'></a> Alex Clark (PIL Fork Author) and PIL Maintainers, "Pillow 9.0.1", PyPI, Python Software Foundation, 3 Feb 2022, url <https://pypi.org/project/Pillow/9.0.1/> [20220324].

{{< citeas >}}