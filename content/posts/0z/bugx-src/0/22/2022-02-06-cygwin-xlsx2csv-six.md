---
layout: butir
authors: [viridi]
title: cygwin xlsx2csv six
permalink: pages/0224
mathjax: false
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["cygwin", "python", "2.7", "xlsx", "csv", "xlsx2csv", "six", "bug", "save"]
date: 2022-02-06 18:18:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/22/2022-02-06-cygwin-xlsx2csv-six.md
twitter_username: 6unpnp
nodes: []
---
Berkas XLSX yang diperoleh dari SIX [[1](#r01)] tidak dapat langsung dikonversi melalui command line menggunakan xlsx2csv [[2](#r02)] karena menghasilkan pesan kesalahan terkait angka nol di awal angka [[3](#r03)], yang bila diperbaiki hanya dengan menghilangkan angka nol pada informasi bulan dan hari akan menghasilkan kesalahan lain, termasuk tidak adanya atribut 'has_key' [[4](#r04)]. Solusi diperoleh dengan mengubah versi Python yang digunakan menjadi 2.7 dan membuka lalu menyimpan berkas yang diunduh.


## install xlsx2csv
Instalasi dilakukan pada Cygwin, mintty 3.4.4 (i686-pc-cygwin) [Windows 19042] (c) 2013/2020 Andy Koppe / Thomas Wolff, mengikuti suatu saran [[2](#r02)].

```bash
$ pip install xlsx2csv
Requirement already satisfied: xlsx2csv in /usr/local/lib/python3.8/site-packages (0.7.8)
WARNING: You are using pip version 21.0.1; however, version 22.0.3 is available.
You should consider upgrading via the '/usr/bin/python3.8.exe -m pip install --upgrade pip' command.
```

sehingga saat dijalankan akan memberikan

```bash
$ xlsx2csv
usage: xlsx2csv [-h] [-v] [-a] [-c OUTPUTENCODING] [-d DELIMITER]
                [--hyperlinks] [-e] [--no-line-breaks]
                [-E EXCLUDE_SHEET_PATTERN [EXCLUDE_SHEET_PATTERN ...]]
                [-f DATEFORMAT] [-t TIMEFORMAT] [--floatformat FLOATFORMAT]
                [--sci-float]
                [-I INCLUDE_SHEET_PATTERN [INCLUDE_SHEET_PATTERN ...]]
                [--exclude_hidden_sheets]
                [--ignore-formats IGNORE_FORMATS [IGNORE_FORMATS ...]]
                [-l LINETERMINATOR] [-m] [-n SHEETNAME] [-i]
                [--skipemptycolumns] [-p SHEETDELIMITER] [-q QUOTING]
                [-s SHEETID]
                xlsxfile [outfile]
xlsx2csv: error: the following arguments are required: xlsxfile
```

yang menunjukkan bahwa berkas `xlsxfile` perlu diberikan setelah perintah `xlsx2csv`.


## download xlsx file
Berkas XLSX diperoleh dari SIX [[1](#r01)] dengan mengunduhnya dalam suatu matakuliah tertentu seperti pada gambar di bawah ini.

![]({{ site.baseurl }}/assets/img/0/22/0224-a.png) \
Gambar <a name='fig1'>1</a>. Opsi untuk mengunduh berkas XLSX dan PDF pada situs SIX.

Dengan memilih opsi pertama pada bagian Download yaitu Microsoft Excel akan diperoleh berkas XLSX yang diperlukan.


## produce error
Salin berkas `xlsx2csv` ke folder aktif

```bash
$ cp /bin/xlsx2csv xlsx2csv.py
```

dan jalankan

```bash
$ ./xlsx2csv.py nt60940120211.xlsx
  File "./xlsx2csv.py", line 286
    date = datetime.datetime(1904, 01, 01) + datetime.timedelta(float(data))
                                    ^
SyntaxError: leading zeros in decimal integer literals are not permitted; use an 0o prefix for octal integers
```

yang merupakan pesan kesalahan terkait angkan nol di awal angka [[3](#r03)], seperti `01`, `09` dan seterusnya, dengan

```python
date = datetime.datetime(1904, 01, 01) + datetime.timedelta(float(data))
```

adalah baris 286 yang dimaksud.


## fix error
Terbersit bahwa cara tercepat adalah mengubah baris 286 menjadi

```python
date = datetime.datetime(1904, 1, 1) + datetime.timedelta(float(data))
```

yang sayangnya tidak menyelesaikan masalah akan tetapi malah memberikan

```bash
$ ./xlsx2csv.py nt60940120211.xlsx
Traceback (most recent call last):
  File "./xlsx2csv.py", line 427, in <module>
    xlsx2csv(args[0], sys.stdout, **kwargs)
  File "./xlsx2csv.py", line 100, in xlsx2csv
    workbook = parse(ziphandle, Workbook, "xl/workbook.xml")
  File "./xlsx2csv.py", line 127, in parse
    instance.parse(ziphandle.read(filename))
  File "./xlsx2csv.py", line 151, in parse
    if attrs.has_key('r:id'): id = int(attrs["r:id"].value[3:])
AttributeError: 'dict' object has no attribute 'has_key'
```

sebagai pesan kesalahan berikutnya, termasuk tidak adanya tribut 'has_key' yang tidak dikenal di Python 3 [[4](#r04)]. Kemudian dilihat versi Python yang terinstal

```bash
$ python
python             python3            python3.6-config   python3.7
python2            python3-config     python3.6m-config  python3.7m.exe
python2.7.exe      python3.6          python3.6m.exe     python3.8.exe
```

dan terdapat versi 2 dan 3. Baris pertama berkas `xlsx2csv` diubah dari yang semula

```python
#!/usr/bin/python

__author__ = "Dilshod Temirkhodjaev <tdilshod@gmail.com>"
__license__ = "GPL"

import csv, datetime, zipfile, sys, os
import xml.parsers.expat
from xml.dom import minidom
from optparse import OptionParser
```

menjadi

```python
#!/usr/bin/python2.7
```

menggunakan versi 2 tertinggi yang terinstal. Jalankan kembali

```bash
$ ./xlsx2csv.py nt60940120211.xlsx
Traceback (most recent call last):
  File "./xlsx2csv.py", line 427, in <module>
    xlsx2csv(args[0], sys.stdout, **kwargs)
  File "./xlsx2csv.py", line 109, in xlsx2csv
    raise Exception("Sheet %i Not Found" %sheetid)
Exception: Sheet 1 Not Found
```

dan tetap diperoleh pesan kesalahan yang belum dapat diperoleh.


## save the xlsx file
Saat berkas XLSX dibuka terlihat bahwa nama sheet bukan lagi Sheet1 akan tetapi telah menjadi kode matakuliah dan kelasnya. Saat direname kembali ke Sheet1, disimpan dan keluar. Berkas XLSX dapat terbaca

```
$ ./xlsx2csv.py nt60940120211.xlsx
INSTITUT TEKNOLOGI BANDUNG,,,
Daftar Nilai Akhir,,,
 ,,,
Mata Kuliah: NT6094 Teknik Penulisan Jurnal Ilmiah,,,
No Kelas: 01,,,
Semester: 1 - 2021/2022,,,
"Dosen: Dr. rer. nat. Sparisoma Viridi, S.Si., Dr.Eng. Muhammad Haris Mahyuddin, S.T., M.Eng.",,,
 ,,,
NO,NIM,NAMA,NILAI
1,23620033,Dhimaz Galang Hastungkorojati,A
2,28720001,Helmi Majid Ar Rasyid,AB
3,28720002,Lavita Nur'aviana Rizalputri,AB
4,28720003,Husni Ihsudha,AB
5,28720005,Achmad Zacky Fairuza,AB
6,28720006,Nurul Hanifah,AB
7,28720007,Akhmad Zein Eko Mustofa,A
8,28720008,Raih Rona Althof,AB
9,28720009,Satria Hidayat,AB
10,28721002,Diaz Ayu Widyasari,AB
11,28721004,Asnan Rinovian,A
12,28721005,Nining Oktafina Sifana,AB
```

Kemudian dilakukan upaya minimal dengan tanpa mengubah nama sheet akan tetapi langsung menekan tombol Save dengan tetikus dan keluar dari aplikasi Microsoft Excel, ternyata berkas dapat dibaca oleh `xlsx2csv`.

![]({{ site.baseurl }}/assets/img/0/22/0224-b.png) \
Gambar <a name='fig2'>2</a>. Tombol Save pada Microsoft Excel.

Tombol Save adalah icon berbentuk disket seperti diberikan pada Gambar [2](#fig2).

`06-feb-2022` Sampai saat ini belum diperoleh penjelasan mengapa berkas XLSX yang terunduh perlu dibuka dengan Microsoft Excel, disimpan, lalu ditutup kembali sehingga baru dapat dibaca oleh program Python `xlsx2csv` karya Dilshod Temirkhodjaev [[5](#r05)].


## note
1. <a name="r01"></a>"Sistem Informasi Akademik", Direktorat Pendidikan, Institut Teknologi Bandung, 2022, url <https://akademik.itb.ac.id/> [20220206].
2. <a name="r02"></a>Aniket Parulekar, "Answer to 'How to convert xlsx file to csv file using shell script?'", Stack Overflow, 7 Feb 2017, url <https://stackoverflow.com/a/42093752/9475509> [20220206].
3. <a name="r03"></a>Midhun, "Leading zeros are not allowed in Python?", Stack Overflow, 22 Jul 2020, url <https://stackoverflow.com/q/63026713/9475509> [20220206].
4. <a name="r04"></a>qloveshmily, "Answer to 'dict' object has no attribute 'has_key'", Stack Overflow, 29 May 2019, url <https://stackoverflow.com/a/56356127/9475509> [20220206].
5. <a name="r05"></a>Dilshod Temirkhodjaev, "xlsx2csv", GitHub, version 0.7.8, 20 Apr 2021, url <https://github.com/dilshod/xlsx2csv> [20220206].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0224?src=hash&amp;ref_src=twsrc%5Etfw">#bug0224</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1490281409319415808?ref_src=twsrc%5Etfw">February 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>{% comment %} data-width="390" {% endcomment %}

## &nbsp;
[comment twitter](0220.html) &bull;
[mobile browser emulator](0221.html) &bull;
[show only youtube control](0222.html) &bull;
[install node.js v16.13.1 x64](0223.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>
