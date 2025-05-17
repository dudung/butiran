---
title: "circle angles center circumference"
date: 2022-08-20T16:08:00+07:00
lastmod: 2022-08-20T19:57:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['math', 'circle', 'angles']
url: "0156"
draft: false
---
Terdapat problem matematika SMP perihal segitiga yang ketiga titik sudutnya terletak pada lingkaran, di mana salah satu sudut segitiga adalah setengah dari sudut yang dibentuk oleh dua jari-jari yang menghubungkan kedua titik lain segitiga dengan pusat lingkaran [[1](#r01)]. Inspirasi diperoleh dua hari yang yang lalu dan penjelasan telah disampaikan sore ini dengan coretan di keras. Di sini akan disarikan secara ringkas hal tersebut. Istilah tepatnya belum ditemukan dan akan ditambahkan kemudian [[2](#r02)], yang merupakan sebagai bagian dari teorema-teorema lingkaran [[3](#r03)].


## the problem &gamma;
Terdapat hubungan antar dua sudut pada segiempat seperti anak panah

\begin{equation}\label{eqn:a=2b}
\beta = 2 \alpha
\end{equation}

di mana tiga titik segiempat terletak pada lingkaran dan titik keempat terletak pada pusat lingkaran sebagaimana digambarkan berikut ini.

{{< svg
  "/static/img/math/circle/angles-center-circumference.svg"
  "#fig1"
  "1"
  "Segiempat berbentuk anak panah dengan sudut-sudut $\alpha$ dan $\beta$."
>}}

Untuk dapat menjelaskan hubungan antara $\alpha$ dan $\beta$ pada Gambar [1](#fig1) perlu digambarkan segitiga ABC, tiga garis OA, OB, dan OC.


## rules
Terdapat dua aturan, mungkin istilahnya kurang tepat, yang akan digunakan, yaitu
+ jumlah ketiga sudut suatu segitiga adalah 180&deg;, dan
+ jumlah sudut tiga garis yang betemu di satu titik adalah 360&deg;.


## triangle
Untuk memudahkan Gambar [1](#fig1) akan diubah seperti gambar berikut ini.

{{< svg
  "/static/img/math/circle/angles-triangle-circumference.svg"
  "#fig2"
  "2"
  "Segitiga dengan tiga garis menuju titik O dari masing-masing sudut."
>}}

Segiempat berbentuk anak panah dari Gambar [1](#fig1) ditambahkan garis BC dan OA sehingga menjadi segitiga dengan tiga garis menuju titik O dari masing-masing sudutnya yang telah diberikan pada Gambar [2](#fig2).

Dari Gambar [1](#fig1) dan [2](#fig2) dapat dituliskan hubungan

\begin{equation}\label{eqn:a=a1+a2}
\alpha = \alpha_1 + \alpha_2.
\end{equation}

Untuk $\Delta \rm AOB$ sisi $\overline{OB}$ dan $\overline{OA}$ memiliki panjang yang sama karena merupakan jari-jari lingkaran sehingga 

\begin{equation}\label{eqn:a1}
\angle OBA = \angle OAB = \alpha_1.
\end{equation}

Demikian pula dengan $\Delta \rm AOC$ sisi $\overline{OA}$ dan $\overline{OC}$ memiliki panjang yang sama karena merupakan jari-jari lingkaran sehingga 

\begin{equation}\label{eqn:a2}
\angle OCA = \angle OAC = \alpha_2.
\end{equation}

Selanjutnya pada $\Delta \rm BOC$ juga berlaku hal yang sama untuk sisi $\overline{OB}$ dan $\overline{OC}$ sehingga

\begin{equation}\label{eqn:g}
\angle OCB = \angle OBC = \gamma.
\end{equation}

Jumlah sudut-sudut pada  $\Delta \rm ABC$ adalah

\begin{equation}\label{eqn:abc}
\begin{array}{rcl}
\angle {\rm BAC} + \angle {\rm ACB} + \angle {\rm CBA} & = & 180^\circ \newline
(\alpha_1 + \alpha_2) + (\alpha_2 + \gamma) + (\gamma + \alpha_1) & = & \newline
2 (\alpha_1 + \alpha_2 + \gamma) & = & \newline
\alpha_1 + \alpha_2 + \gamma & = & 90^\circ.
\end{array}
\end{equation}

Substitusi Persamaan \eqref{eqn:a=a1+a2} ke Persamaan \eqref{eqn:abc} akan memberikan hubungan

\begin{equation}\label{eqn:boc-1}
\alpha + \gamma = 90^\circ,
\end{equation}

di mana dari $\Delta \rm BOC$ dapat diperoleh

\begin{equation}\label{eqn:boc-2}
\beta + 2\gamma = 180^\circ.
\end{equation}

Kalikan Persamaan \eqref{eqn:boc-1} dengan dua dan hasilnya dikurang oleh Persamaan \eqref{eqn:boc-2} akan memberikan

\begin{equation}\label{eqn:a=2b-proved}
2 \alpha - \beta = 0,
\end{equation}

yang tak lain adalah Persamaan \eqref{eqn:a=2b}, yang bagaimana hubungan ingin diperoleh telah didapatkan.


## questions
1. Apakah ini Persamaan \eqref{eqn:a=2b} juga berlaku bila sudut $\alpha$ dan $\beta$ yang ingin diperoleh bukan merupakan $\angle \rm BAC$ dan $\angle \rm BOC$, akan tetapi $\angle \rm ACB$ dan $\angle \rm AOB$ atau $\angle \rm CBA$ dan $\angle \rm COA$? Tunjukkan bukti atas jawaban tersebut.
2. Bila $\overline{BO}$ dan $\overline{OC}$ pada Gambar [2](#fig2) menjadi satu garis lurus dan sama dengan $\overline{BC}$, berapakah nilai $\alpha$ dan $\beta$? Apakah Persamaan \eqref{eqn:a=2b} tetap berlaku? Jelaskan.
3. Saat $\overline{AB} = \overline{BC} = \overline{CA}$ apakah name jenis segitiganya? Berapakah nilai $\alpha$ dan $\beta$?


## notes
1. <a name='r01'></a>A. S. V. Kesumah dan S. R. G. Kesumah, "Diskusi Pribadi", &lt;<17 Aug 2022.
2. <a name='r02'></a>20 Aug 2022, 18:27+07; Info tambahan berupapa rujukan tidak akan mengubah tangga penyuntingan entri ini. Update rujukan terbaru 19:52+07 [20220820].
3. <a name='r03'></a>-, "Circle Theorems", 2022, Revision World Networks Ltd., url <https://revisionmaths.com/gcse-maths-revision/shape-and-space/circle-theorems> [20220820].

{{< citeas >}}

{{< todo >}}
{{</ todo >}}