---
title: "gnuplot out svg for figs"
date: 2022-08-06T05:30:00+0700
lastmod: 2022-08-06T10:30:00+0700
author: viridi
mathjax: false
mermaid: false
chartjs: false
tags: ['gnuplot', 'svg', 'bugx']
url: "0136"
draft: false
---
Citra yang disematkan pada suatu situs web dapat berjenis citra raster atau vektor [[1](#r01)], di mana SVG (Scalable Vector Graphics) merupakan salah satu jenis format citra yang menggunakan data vektor dan tidak bergantung pada data piksel [[2](#r02)]. Selain terdapat berbagai kelebihan format citra SVG seperti scalability dan ukuran yang kompak [[3](#r03)], terdapat juga beberapa kekurangannya seperti ukuran berkas akan bertambah dengan cepat bila obyek terdiri dari banyak elemen kecil [[4](#r04)]. Secara umum citra berformat SVG merupakan kode sehingga ideal untuk animasi dan dapat dimanipulasi dengan CSS atau JS, yang sayangnya perlu terdapat upaya lebih untuk mempelajari makna dibalik kode tersebut [[5](#r05)]. Secara umum SVG ideal untuk menampilkan logo, ikon, dan desain geometris vektor lainnya, yang digunakan untuk elemen grafis yang akan ditampilkan dalam berbagai ukuran pada berbagai devais, serta perlu untuk diperbarui dan disunting [[6](#r06)]. Terdapat berbagai piranti lunak yang bebas dan berbayar untuk menyunting SVG baik berbentuk aplikasi maupun menggunakan penjelajah web secara daring [[7](#r07), [8](#r08)].


## use and create
Suatu berkas citra SVG dapat disisipkan dalam berkas HTML sebagaimana penyisipan format citra lainnya ataupun dituliskan secara inline [[9](#r09)] sebagai suatu elemen DOM, sehingga dapat dibuat cukup dengan sebuah editor penyunting teks polos [[10](#r10)]. Untuk citra yang menggambarkan grafik suatu fungsi ataupun data, akan lebih efisien bila digunakan aplikasi yang dapat menghasilkan citra berformat SVG, yang dalam hal ini akan digunakan Gnuplot [[11](#r11)], yang dapat menggambarkan citra 2d dan 3d [[12](#r12)].

Di sini digunakan

```xxx
{{</* svg
  "/static/img/gnuplot/hello.svg"
  "#fig1"
  "1"
  "Menampilkan pesan \"Hello, World!\" dengan gnuplot."
*/>}}
```

untuk menyisipkan citra berformat SVG dengan bantuan [shortcode Hugo](https://gohugo.io/content-management/shortcodes/).


## example
Pesan "Hello, World!" dapat ditampilkan dalam suatu berkas SVG dengan bantuan gnuplot seperti berikut ini.

{{< svg
  "/static/img/gnuplot/hello.svg"
  "#fig1"
  "1"
  "Menampilkan pesan \"Hello, World!\" dengan gnuplot."
>}}

Hasil pada Gambar [1](#fig1) diperoleh dengan kode berikut ini

```bash
# Display 'Hello, World!'
# Sparisoma Viridi
# dudung@gmail.com
# 2022.08.06.40198

# svg output is selected
set term svg size 300,300 font "Times, 14"

# axis settings
set xtics 1
set xrange [0:4]
set xlabel "x"
set ytics 1
set yrange [0:4]
set ylabel "y"

# a function
f(x) = 0

# output and label to display
set output "hello.svg"
set label "Hello, World!" at 2, 2 center enhanced font "Times, 20"

# show results
plot f(x) t ""
```

yang dijalankan dengan

```bash
$ gnuplot hello.gnu
```

pada konsol. Contoh-contoh skrip gnuplot lainnya dapat diperoleh di suatu repositori [[13](#r13)] yang telah dipindahkan dari repositori lain sebelumnya [[14](#r14)].

### max width
Dengan mencoba beberapa kali akhirnya diperoleh lebar maksimum yang masih memberikan hasil yang baik untuk suatu citra berformat SVG.

{{< svg
  "/static/img/gnuplot/hello-max-width.svg"
  "#fig2"
  "2"
  "Citra memiliki lebar maksimum 540."
>}}

Skrip sebelumnya di atas perlu dimodifikasi pada bagian `size 300,300` menjadi `size 540,300` dan dimodifkasi pesan yang ditampilkannya untuk menghasilkan Gambar [2](#fig2).


## to-do
- Mencari informasi bagaimana mengubah font menjadi berjenis Italic.
- Mempelajari cara menyisipkan persamaan ke dalam citra SVG.
- Merancang templat dasar fungsi kontinu dan diskontinu.
- Merancang templat dasar untuk ilustrasi grafik fungsi ataupun data.
- Membuat contoh-contoh siap pakai untuk perkuliahan.


## notes
1. <a name='r01'></a>Kayleigh Circle, "Benefits of using SVG (scalable vector graphics)", TBH Creative, 15 Jun 2017, url <https://blog.tbhcreative.com/2017/06/benefits-of-using-svg.html> [20220806]. 
2. <a name='r02'></a>Will Morris, "What is an SVG File (And How Do You Use it)?", Elegant Themes, 18 Aug 2022, url <https://www.elegantthemes.com/blog/wordpress/what-is-an-svg-file-and-how-do-you-use-it> [20220806].
3. <a name='r03'></a>Sean, "5 Advantages to Using SVG Files", Explain Everything, 5 Oct 2017, url <https://explaineverything.com/blog/uncategorized/5-advantages-using-svgs/> [20220806].
4. <a name='r04'></a>Vasyl Holiney, "Advantages and disadvantages of SVG Format", Logaster, 5 Apr 2022, url <https://www.logaster.com/blog/svg/> [20220806]. 
5. <a name='r05'></a>Jessica Lavoie, "Benefits of SVG Vector Graphics", Hall, 30 Apr 2018, url <https://www.hallme.com/blog/benefits-of-svg-vector-graphics/> [20220806].
6. <a name='r06'></a>Enjeck, "Advantages and disadvantages of SVG", Create Fish, 17 May 2020, url <https://creatiffish.com/blog/other/svg-advantages-and-disadvantages/> [20220806].
7. <a name='r07'></a>Joseph Downs, "32 great free & paid SVG editors for UX designers", Justinmind, 8 Aug 2020, url <https://www.justinmind.com/blog/best-free-paid-svg-editors-download-online/> [20220806].
8. <a name='r08'></a>Alex Ivanovs, "Top 13 Free SVG Editors for Graphic & Web Designers", Colorlib, 31 Mar 2022, url <https://colorlib.com/wp/free-svg-editor-tools/> [20220806].
9. <a name='r09'></a>Chris Coyier, "Using SVG", CSS-Tricks, 2 May 2019, url <https://css-tricks.com/using-svg/> [20220806].
10. <a name='r10'></a>Hunor Márton Borbély, "SVG Tutorial – How to Code Images with 7 Examples", freeCodeCamp, 10 Dec 2021, url <https://www.freecodecamp.org/news/svg-tutorial-learn-to-code-images/> [20220806].
11. <a name='r11'></a>bibi, "Answer to 'Gnuplot script to output eps or svg - how to write?'", Stack Overflow, 13 Feb 2016, url <https://stackoverflow.com/a/35386570/9475509> [20220806].
12. <a name='r12'></a>Thomas Williams, Colin Kelley, "gnuplot homepage", Jul 2022, url <http://www.gnuplot.info/> [20220806].
13. <a name='r13'></a>dudung, "gnuplot-svg", GitHub, 6 Aug 2022, url <https://github.com/dudung/gnuplot-svg> [20220806].
14. <a name='r14'></a>dudung, "cookbook", GitHub, 1 Jul 2022, url <https://github.com/dudung/cookbook> [20220806].

{{< citeas >}}

{{< todo >}}
{{</ todo >}}