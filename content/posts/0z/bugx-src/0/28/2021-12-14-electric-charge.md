---
layout: post
authors: [viridi]
title: electric charge
permalink: pages/0280
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["electric charge"]
date: 2021-12-16 21:30:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/28/2021-12-14-electric-charge.md
twitter_username: 6unpnp
nodes: []
---
Muatan listrik merupakan sifat dasar bahan yang dibawa oleh partikel-partikel elementar, di mana sifat ini mengendalikan bagaimana partikel-partikel tersebut terpengaruh baik oleh medan listrik maupun medan magnetik [[1](#r01)]. Pengaruh dari muatan dikarakterisasi dalam istilah gaya antar muatan, dalam hukum Coulomb, dan medan magnetik dan tegangan yang dihasilkannya [[2](#r02)]. Muatan listrik bersifat kekal, yang artiniya total muatan suatu sistem terisolasi, yaitu selisih muatan positif dan negatif, tidak berubah [[3](#r03)]. Saat dua buah bahan isolator saling bergesekan masing-masing dapat menjadi bermuatan berbeda karena elektron terhapus dari satu bahan dan pindah ke bahan lainnya, sehingga bahan yang kehilangan disebut menjadi bermuatan positif dan bahan yang ketambahan disebut menjadi bermuatan negatif [[4](#r04)]. Satuan SI muatan listrik adalah coulomb atau $\rm C$, dari nama fisikawan Perancis Charles Augustine de Coulomb (1736–1806) [[5](#r05)].


## color
Agar tergambarkan dengan lebih jelas muatan dapat dibedakan warnanya, seperti muatan positif dengan warna merah dan muatan negatif dengan warna biru [[6](#r06)], dan benda bermuatan netral di sini dengan warna hijau.

![]({{ site.baseurl }}/assets/img/0/28/0280-a.png) \
Gambar <a name="fig1">1</a>. Benda bermuatan positif (kiri), netral (tengah), dan negatif (kanan), yang diwarnai berbeda.

Warna merah dapat diartikan lebih 'panas' dibandingkan warna biru yang lebih 'dingin' sehingga konsisten dengan arah medan listrik yang keluar dari muatan positif dan masuk ke muatan negatif. Kenetralan dapat dianggap sebagai sifat alami bahan secara umum, sehingga bersifat ramah-lingkungan atau green (hijau).

Tabel <a name="tab1">1</a>. Keadaan muatan benda dan kode warna yang digunakan.

Bermuatan | Fill | Outline
:-: | :-: | :-: |
Positif | `#f2dbdb`$\color{#f2dbdb}{\blacksquare}$ | `#c00000`$\color{#c00000}{\blacksquare}$
Netral  | `#eaf1dd`$\color{#eaf1dd}{\blacksquare}$ | `#00b050`$\color{#00b050}{\blacksquare}$
Negatif | `#dbe5f1`$\color{#dbe5f1}{\blacksquare}$ | `#0070c0`$\color{#0070c0}{\blacksquare}$

Pemilihan warna pada Gambar [1](#fig1) dan juga Tabel [1](#tab1) ini sesuai dengan salah satu pewarnaan untuk proton (positif, merah), neutron (netral, hijau), dan elektron (negatif, biru) [[7](#r07)], yang akan tetapi berbeda pemilihan warna pada QCD secara umum [[8](#r08)], maupun perwarnaan potensial permukaan elektrostatik yang menggunakan merah dan biru untuk muatan negatif dan positif, serta putih untuk residu netral [[9](#r09)].


## charge interaction
Terdapat interaksi yang berbeda antar dua benda yang berbeda keadaan muatannya (positif, netral, negatif) sebagaimana diilustrasikan pada gambar berikut ini.

![]({{ site.baseurl }}/assets/img/0/28/0280-b.png) \
Gambar <a name="fig2">2</a>. Interaksi-interaksi antar benda berbeda keadaan muatannya: positif (merah $\color{#c00000}{\blacksquare}$), netral (hijau $\color{#00b050}{\blacksquare}$), negatif (biru $\color{#0070c0}{\blacksquare}$), dengan panah (jingga $\color{#f79646}{\blacksquare}$) menggambarkan arah gaya interaksinya pada masing-masing benda.

Benda bermuatan netral tidak berinteraksi dengan keadaan muatan lainnya. Benda bermuatan selain netral akan saling tarik bila tanda muatannya berbeda dan saling tolak bila tanda muatannya sama. Hal-hal tersebut telah diberikan pada Gambar [2](#fig2).

Fenomena bahwa jenis muatan yang sama akan saling tolak dan yang berbeda akan saling tarik ini digunakan untuk mendeteksi ada tidaknya muatan pada suatu benda dengan alat yang disebut sebagai elektroskop [[10](#r10)].

## charging by friction
Benda-benda di sekitar kita umumnya bermuatan netral, di mana jumlah muatan positifnya sama dengan jumlah muatan negatifnya. Elektron sebagai pembawa muatan negatif mudah berpindah dari satu bahan ke bahan lainnya. Salah satu peristiwa fisis yang dapat menyebabkan hal ini adalah gesekan antar dua benda.

![]({{ site.baseurl }}/assets/img/0/28/0280-c.png) \
Gambar <a name="fig3">3</a>. Kedua benda yang semula netral (atas), saat bergesekan memindahkan elektron dari satu benda ke yang lain (tengah), sehingga pada saat terpisah keduanya menjadi bermuatan berbeda (bawah).

Terdapat jenis benda yang mudah untuk melepaskan elektron sehingga benda berjenis ini lebih mudah menjadi bermuatan positif dan terdapat pula jenis benda yang lebih mudah menangkap elektron sehingga jenis benda ini lebih mudah menjadi bermuatan negatif. Total muatan sistem, yaitu jumlah muatan kedua benda harus selalu sama karena terdapat hukum kekekalan muatan.

![]({{ site.baseurl }}/assets/img/0/28/0280-d.png) \
Gambar <a name="fig4">4</a>. Keadaan akhir kedua benda setelah bergesekan sehingga keduanya menjadi bermuatan berbeda.

Keadaan akhir pada Gambar [3](#fig3) lebih tepat bila disajikan seperti dalam Gambar [4](#fig4), di mana benda yang bermuatan lebih positif menjadi berwarna merah dan benda yang bermuatan lebih negatif berwarna biru.


## triboelectric series
Terdapat series atau deret bahan-bahan yang cenderung bersifat lebih positif dan cenderung lebih negatif muatannya, mulai dari yang tangan manusia (bila tidak lembab) yang sangat positif, baja yang netral, dan teflon yang amat negatif [[11](#r11)]. Saat dua benda yang terbuat dari bahan yang berbeda posisinya pada deret triboelectrik tersebut, akan terjadi perpindahan muatan negatif (elektron) dari bahan yang cenderung lebih positif muatannya ke bahan yang cenderung lebih negatif muatannya.

Saat sebatang plastik (polyethylene terephthalate, glycol termodifikasi, atau PETG) diusap dengan kain wol, batang plastik akan menjadi bermuatan negatif, sedangkan saat batang kaca diusap dengan kain sutra, batang kaca akan menjadi bermuatan positif [[12](#r12)].

Dalam deret triboelekrik [[11](#r11)], urutan yang lebih positif ke yang lebih negatif adalah kaca, wol, sutra, plastik. Dengan demikian

> (+) wol &bull; &bull; &bull; plastik (-)

dan

> (+) kaca &bull; &bull; &bull; sutra (-)

sehingga diperoleh seperti dalam eksperimen [[12](#r12)].


## exer
1. Sebutkan dua benda yang dapat dijadikan contoh saat keduanya saling digesekkan muatan keduanya yang semula netral akan menjadi berbeda seperti pada Gambar [3](#fig3).
2. Setelah batang plastik digosok dengan kain wol dan batang kaca digosok dengan kain sutra, kedua batang tersebut didekatkan tetapi tidak bersentuhan. Apa yang terjadi?
3. Terdapat dua benda, semula bermuatan netral, yang terbuat dari bahan yang sama. Keduanya saling digesekkan. Bagaimana keadaan akhir muatan kedua benda?
4. Kapas digunakan untuk mengusap-usap cakram yang terbuat dari teflon. Bagaimana keadaan akhir muatan teflon?
5. Mengapa elektroskop bilah emas akan merentangkan kedua bilahnya saat benda bermuatan didekatkan pada bagian atas alat?


## note
1. <a name="r01"></a>The Editors of Encyclopaedia Britannica, Erik Gregersen, William L. Hosch, Gloria Lotha, "electric charge", Encyclop&aelig;dia Britannica, 26 Feb 2021, url <https://www.britannica.com/science/electric-charge> [20211214].
2. <a name="r02"></a>Carl Rod Nave, "Electric Charge", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/electric/elecur.html#c2> [20211214].
3. <a name="r03"></a>Wikipedia contributors, "Electric charge", Wikipedia, The Free Encyclopedia, 11 December 2021, 17:53 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1059797160> [20211214].
4. <a name="r04"></a>"Charging by friction", Bitsize, BBC, 2021, url <https://www.bbc.co.uk/bitesize/guides/z2vfk2p/revision/2> [20211214].
5. <a name="r05"></a>Samuel J. Ling, Jeff Sanny, William Moebs, Daryl Janzen, "Electric Charge", in Introduction to Electricity, Magnetism, and Circuits, University of Saskatchewan, Distance Education Unit, 28 Nov 2018, url <https://openpress.usask.ca/physics155/chapter/electric-charge/> [20211214].
6. <a name="r06"></a>Wikipedia-Autoren, "Elektrische Ladung", Wikipedia – Die freie Enzyklopädie, 24. März 2021, 18:15 UTC, url <https://de.wikipedia.org/w/index.php?oldid=210174484> [20211214].
7. <a name="r07"></a>Swagato Banerjee, "QCD and the structure of matter", University of Victoria, Canada, 2003, url <https://conferences.fnal.gov/lp2003/forthepublic/qcd/> [20211215].
8. <a name="r08"></a>Wikipedia contributors, "Color charge", Wikipedia, The Free Encyclopedia, 13 December 2021, 00:40 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1060018204> [20211215].
9. <a name="r09"></a>Omid Haji-Ghassemi, Ryan Blackler, N. Martin Young, Stephen V. Evans, "Antibody recognition of carbohydrate epitopes", Glycobiology [Glycobiology], vol 25, no 9, p 920–952, Sep 2015, url <http://dx.doi.org/10.1093/glycob/cwv037>.
10. <a name="r10"></a>Wikipedia contributors, "Electroscope", Wikipedia, The Free Encyclopedia, 8 October 2021, 18:51 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1048917561> [20211216].
11. <a name="r11"></a>John Zavisa, "How Van de Graaff Generators Work", HowStuffWorks.com, 1 Apr 2000, url <https://science.howstuffworks.com/transport/engines-equipment/vdg1.htm> [20211216].
12. <a name="r12"></a>"Electrostatically charged rods", Department of Physics, University of California, Santa Barbara, 22 Jan 2020, url <https://web.physics.ucsb.edu/~lecturedemonstrations/Composer/Pages/56.06.html> [20211216].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug280?src=hash&amp;ref_src=twsrc%5Etfw">#bug280</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1470769897995227150?ref_src=twsrc%5Etfw">December 14, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
[charge distribution](0281.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) wol - plastik, kaca - sutra; &nbsp;
2) kedua batang akan saling tarik karena jenis muatannya berbeda; &nbsp;
3) jenis bahan yang sama akan memiliki kecenderungan bermuatan yang sama, dan karena semula netral, akan menjadi tetap netral keduanya; &nbsp;
4) bermuatan negatif; &nbsp;
5) muatan pada kedua bilah terinduksi oleh benda bermuatan sehingga bermuatan sama, yang menyebabkan kedua bilah terentang atau saling tolak; &nbsp;
</ans>


{% comment %}
{% endcomment %}
