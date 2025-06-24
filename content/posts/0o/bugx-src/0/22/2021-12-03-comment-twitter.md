---
layout: butir
authors: [viridi]
title: comment twitter
permalink: pages/0220
mathjax: false
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["comment"]
date: 2021-12-04 11:30:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/22/2021-12-03-comment-twitter.md
twitter_username: 6unpnp
nodes: []
---
Terdapat berbagai situs untuk melakukan blog tak-berbayar di tahun 2021 ini [[1](#r01)], yang salah satunya adalah WordPress. Pengunjung situs blog ini mulai pertengahan tahun 2011 dapat menggunakan akun Facebook atau Twitter untuk memberikan komentar yang kendali atas indentitas mana yang digunakan [[2](#r02)]. Khusus untuk Twitter, platform ini telah digunakan untuk membagi tulisan blog dan masih merupakan suatu platform populer untuk para pendidik sedunia, yang agar tulisan dapat terbagi lebih baik dapat memperhatikan beberapa tips [[3](#r03)]. Salah satu kelebihannya menggunakan Twitter ketimbang aplikasi pihak ketiga lainnya adalah pengunjung dapat berkomentar pada suatu blog seperti mereka melakukan tweet, menyertakan rekannya dengan memberi tag dalam tweet tersebut, dapat melakukan retween komentar untuk membuat yang lain melihat lalu bergabung, dan pengguna lain akan menerima notifikasi dalam aplikasi Twitter mereka [[4](#r04)]. Hal juga memperhatikan bahwa Twitter merupakan sesuatu yang telah digunakan oleh orang-orang, dengan lebih dari 330 juta pengguna aktif setiap bulannya, sehingga kemungkinan para pengunjung blog telah memikili akun pada platform tersebut [[5](#r05)]. Akan tetapi dalam penerapannya, sayangnya masih bergantung dari content management system yang digunakan [[6](#r06)].


## make a tweet
Dengan menggunakan kode berikut [[7](#r07)]

```batch
https://twitter.com/intent/tweet?text=Put%20comment%20here&url=https://dudung.github.io/bug/0220&via=6unpnp
```

dapat dibuat suatu tweet di Twitter seperti pada Gambar [1](#fig1) berikut ini.

![]({{ site.baseurl }}/assets/img/0/22/0220-a.png) \
Gambar <a name="fig1">1</a>. Membuat suatu tweet dengan parameter `text`, `url`, dan `via`.

Dapat disarikan bahwa
+ `text` berisikan teks yang ingin ditampilkan (spasi diganti dengan %20),
+ `url` berisikan tautan ke tulisan pada blog yang ingin dibagikan, dan
+ `via` merupakan nama pengguna di Twitter.


## customize with liquid
Bila digunakan situs web static, seperti Jekyll di sini, dapat digunakan sintaks Liquid untuk membuat tweet, misalnya

```c++
{% raw %}{% capture tweet_url %}
https://twitter.com/intent/tweet?url={{ site.url }}{{ site.baseurl }}{{ page.url }}&screen_name={{ page.twitter_username }}&hashtags=bug_{{ page.pid }} {{ page.title | append: ": " }}
{% endcapture %}

{% capture tweet_msg %}
&text=
{% endcapture %}{% endraw %}

<a id='comment' href="{{ tweet_url }}" name="{{ tweet_msg }}" rel="nofollow" target="_blank" title="Give comment on Twitter">Comment</a>

<script>
function rnd(){return Math.round(65535*Math.random()).toString(16)};
var a = document.getElementById("comment");
a.name = a.name + "[" + rnd() + "]";
a.href = a.href + a.name;
</script>
```

yang saat link bertuliskan <b style="color:blue; font-weight:normal;">Comment</b> diakses akan menghasilkan tampilan seperti di bawah ini. Kode di atas tersebut disimpan dalam salah satu berkas dalam folder `_layouts` pada struktur berkas dan direktori Jekyll [[8](#r08)].

![]({{ site.baseurl }}/assets/img/0/22/0220-b.png) \
Gambar <a name="fig2">2</a>. Suatu tweet yang dibuat dengan bantuan Liquid dan JavaScript.

Pada bagian bawah kode sebelum Gambar [2](#fig2) terdapat kode JavaScript yang berfungsi untuk membangkitkan bilangan acak dalam bentuk bilangan heksadesimal empat digit, yang berfungsi agar isi tweet selalu berbeda sehingga dapat dimunculkan ke Twitter. Ini disebabkan tweet yang sama tidak boleh muncul dua kali.

![]({{ site.baseurl }}/assets/img/0/22/0220-c.png) \
Gambar <a name="fig3">3</a>. Peringatan yang muncul saat suatu tweet yang sama ingin ditampilkan di Twitter.

Bila kode pertama, yang digunakan untuk menghasilkan pada Gambar [1](#fig1), digunakan kembali maka akan muncul peringatan seperti pada Gambar [3](#fig3), di mana hal ini telah tercantum pada Help Center Twitter [[9](#r09)].

## embed a tweet
Cara lain adalah dengan menggunakan fitur embed yang disediakan oleh Twitter [[10](#r10)] yang, sebagai contoh, akan menghasilkan kode berikut

```html
<blockquote class="twitter-tweet" data-lang="en" data-theme="light" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0220?src=hash&amp;ref_src=twsrc%5Etfw">#bug0220</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1466968294619955200?ref_src=twsrc%5Etfw">December 4, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
```

dan menghasilkan tampilan pada suatu halaman web dengan bentuk seperti pada akhir halaman ini, yang langsung terhubung dengan Twitter, akan tetapi dengan kelemahannya adalah perlu terlebih dahulu membuat tweet tersebut di sana.


## note
1. <a name="r01"></a>Adelina Tuca, "10 Best Free Blogging Sites to Build Your Blog for Free in 2021: Tested, Compared and Reviewed", Themeisle, 14 Sep 2021, url <https://themeisle.com/blog/best-free-blogging-sites/> [20211204].
2. <a name="r02"></a>Scott Berkung, "Post Comments Using Twitter and Facebook", WordPress, 7 Jun 2011, url <https://wordpress.com/blog/2011/06/07/post-comments-twitter-facebook/> [20211204].
3. <a name="r03"></a>Kathleen Morris, "8 Tips For Sharing Your Blog Posts On Twitter", CampusPress, 15 Jan 2020, url <https://www.theedublogger.com/tweet-tips/> [20211204].
4. <a name="r04"></a>Arvind Singh, "A thought about Twitter comments plugin", DEV Community, 6 Oct 2017, url <https://dev.to/heyarviind/a-thought-about-twitter-comments-plugin-579> [20211204].
5. <a name="r05"></a>Janne Kemppainen, "I'm Switching to Twitter for My Blog Comments", PäksTech, 24 May 2020, url <https://pakstech.com/blog/switching-to-twitter-comments/> [20211204].
6. <a name="r06"></a>Thursday Bram, "Answer to 'How feasible is it to use Twitter for blog comments?'", Quora, 5 Sep 2014, url <https://qr.ae/pGlSTE> [20211204].
7. <a name="r07"></a>Bouwe Westerdijk, "Using Twitter for blog commenting", bouwe.io, 18 Apr 2020, url <https://bouwe.io/using-twitter-for-blog-commenting> [20211204].
8. <a name="r08"></a>Ashwin, Matt, Alfred, Frank, Nick, Parker, Tom, "Directory Structure", Jekyll, 22 Nov 2021, url <https://jekyllrb.com/docs/structure/> [20211204].
9. <a name="r09"></a>"Help with Tweeting", Help Center, Twitter, Inc., 2021, url <https://help.twitter.com/en/using-twitter/tweets-not-sending> [20211204].
10. <a name="r10"></a>"Twitter Publish", Twitter, Inc., 2021, url <https://publish.twitter.com/#> [20211204].

### comments
<blockquote class="twitter-tweet" data-lang="en" data-theme="light" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0220?src=hash&amp;ref_src=twsrc%5Etfw">#bug0220</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1466968294619955200?ref_src=twsrc%5Etfw">December 4, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


## &nbsp;
[mobile browser emulator](0221.html) &bull; [show only youtube control](0222.html) &bull; [install node.js v16.13.1 x64](0223.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>
