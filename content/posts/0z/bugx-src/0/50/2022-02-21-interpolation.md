---
layout: post
authors: [viridi]
title: interpolation
permalink: pages/0500
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: mathematics
tags: ["interpolation"]
date: 2022-02-21 13:53:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/50/2022-02-21-interpolation.md
twitter_username: 6unpnp
nodes: []
youtube: AFVInWA_C2M
---
Interpolasi merupakan proses untuk mencari suatu nilai antara dua titik pada suatu garis atau kurva [[1](#r01)], yang secara umum dapat menjadi suatu pendekatan bagi suatu fungsi yang melewati semua titik yang diberikan [[2](#r02)]. Dalam bidang perpajakan dan keuangan interpolasi merupakan sebagai metode statistik dengan menggunakan nilai terkait untuk memperkirakan suatu harga atau hasil sekuritas yang tidak diketahui [[3](#r03)].


## methods
Terdapat banyak metode interpolasi dua di antaranya adalah metode interpolasi linier dan interpolasi polinomial. Contoh dari kedua metode tersebut diilustrasikan pada gambar berikut ini.

![]({{ site.baseurl }}/assets/img/0/50/0500-a.png) \
Gambar <a name='fig1'>1</a>. Titik-titik data dengan interpolasi linier ($\color{#c55}{\blacksquare}$) dan interpolasi polinomial ($\color{#58c}{\blacksquare}$).

Perhatikan bagaimana perbedaan kedua metode pada titik-titik data seperti diberikan pada Gambar [1](#fig1). Untuk interpolasi linier sebuah kurva berbentuk garis lurus menghubungi dua titik terdekat, sedangkan pada interpolasi polinomial semua titik data dihubungkan oleh kurva yang bersumber dari satu fungsi polinomial. Metode pertama tidak diferensiabel pada titik-titik data sedangkan yang kedua diferensiabel.


## exer
1. Terdapat $N$ buat titik data dengan $N = 8$, berapa jumlah funsi berupa garis lurus yang diperlukan pada interpolasi linier?
2. Terdapat $N$ buat titik data dengan $N = 20$, berapa jumlah fungsi berupa polinomial yang diperlukan pada interpolasi polinomial?
3. Dengan $N$ buah data telah dibuat suatu fungsi interpolasi, baik dengan interpolasi linier maupun polinomial, bagaimana nilai fungsi tersebut bila nilai titiknya sama dengan nilai titik-titik data?


## note
1. <a name='r01'></a>Vanessa Botts, Kathryn Boddie, "Interpolation in Statistics: Definition, Formula & Example", Study.com, 10 Oct 2021, url <https://study.com/academy/lesson/interpolation-in-statistics-definition-formula-example.html> [20220221].
2. <a name='r02'></a>Wikipedia contributors, "Interpolation", Wikipedia, The Free Encyclopedia, 29 January 2022, 19:06 UTC, <https://en.wikipedia.org/w/index.php?oldid=1068675581> [20220221].
3. <a name='r03'></a>Komal, "Interpolation", ClearTax, Defmacro Software Pvt. Ltd., 5 Jan 2022, url <https://cleartax.in/g/terms/interpolation> [20220221].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0500?src=hash&amp;ref_src=twsrc%5Etfw">#bug0500</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1495649354161750017?ref_src=twsrc%5Etfw">February 21, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8">
</script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) $7$ buah; &nbsp;
2) $1$ buah; &nbsp;
3) nilai fungsi akan sama dengan nilai titik data, dan hal ini harus dipenuhi; &nbsp;
</ans>


{% comment %}
{% endcomment %}
