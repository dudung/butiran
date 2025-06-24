---
title: "list of html entities"
date: 2022-06-03T19:27:00+07:00
lastmod: 2022-06-04T13:18:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: true
tags: ['bugx', 'html', 'entity', 'greek', 'symbol', 'arrow', 'box']
url: "0078"
draft: false
---
While creating posts for this [bugx](https://dudung.github.io/bugx/), a static site generated with Hugo [[1](#r01)], the images are created in SVG format using Inkscape, which is not so easy dealing with symbols, e.g greek letters [[2](#r02)], or other HTML entities [[3](#r03)]. That is the only reason why this post is created, so the symbols can be copied from this post and then pasted to a text in Inkscape.


## greek letters
The HTML code for greek letter are available in the two forms [[4](#r04)], `&#nnn` or `&name;`, where the second one is used here.

Tabel <a name='tab1'>1</a>. Greek letters in lowercase and uppercase.

Case | <center>Letters</center>
:--: | --
Lowercase | &alpha; &beta; &gamma; &delta; &epsilon; &zeta; &eta; &theta; &iota; &kappa; &lambda; &mu; &nu; &xi; &omicron; &pi; &rho; &sigma; &tau; &upsilon; &phi; &chi; &psi; &omega;
Uppercase | &Alpha; &Beta; &Gamma; &Delta; &Epsilon; &Zeta; &Eta; &Theta; &Iota; &Kappa; &Lambda; &Mu; &Nu; &xi; &Omicron; &Pi; &Rho; &Sigma; &Tau; &Upsilon; &Phi; &Chi; &Psi; &Omega;


Following HTML entities

```js
&alpha;   &beta; &gamma; &delta;  &epsilon; &zeta;    &eta;
&theta;   &iota; &kappa; &lambda; &mu;      &nu;      &xi;
&omicron; &pi;   &rho;   &sigma;  &tau;     &upsilon; &phi;
&chi;     &psi;  &omega;

&Alpha;   &Beta; &Gamma; &Delta;  &Epsilon; &Zeta;    &Eta;
&Theta;   &Iota; &Kappa; &Lambda; &Mu;      &Nu;      &xi;
&Omicron; &Pi;   &Rho;   &Sigma;  &Tau;     &Upsilon; &Phi;
&Chi;     &Psi;  &Omega;
```

are used in Table [1](#tab1).


## arrows
There are Unicode arrows and HTML arrows.

### unicode
Some Unicode arrows [[5](#r05)] are as follow.

&#x2190; &#x2196; &#x2191; &#x2197; &#x2192; &#x2198; &#x2193; &#x2199;

`&#x2190; &#x2196; &#x2191; &#x2197; &#x2192; &#x2198; &#x2193; &#x2199;`

&#x1F860; &#x1F864; &#x1F861; &#x1F865; &#x1F862; &#x1F866; &#x1F863; &#x1F867;

`&#x1F860; &#x1F864; &#x1F861; &#x1F865; &#x1F862; &#x1F866; &#x1F863; &#x1F867;`

&#x1F880; &#x1F884; &#x1F881; &#x1F885; &#x1F882; &#x1F886; &#x1F883; &#x1F887;

`&#x1F880; &#x1F884; &#x1F881; &#x1F885; &#x1F882; &#x1F886; &#x1F883; &#x1F887;`

&#x21D0; &#x21D6; &#x21D1; &#x21D7; &#x21D2; &#x21D8; &#x21D3; &#x21D9;

`&#x21D0; &#x21D6; &#x21D1; &#x21D7; &#x21D2; &#x21D8; &#x21D3; &#x21D9;`

&#x2B70; &#x2B71; &#x2B72; &#x2B73; &#x2B76; &#x2B77; &#x2B78; &#x2B79;

`&#x2B70; &#x2B71; &#x2B72; &#x2B73; &#x2B76; &#x2B77; &#x2B78; &#x2B79;`

Pada setiap dua baris terdapat simbol dan kode Unicode terkaitnya.

### html arrow
HTML arrows can be refered with left, up, right, and down [[6](#r06)], also north-west, north-east, south-east, and north-west.

&larr; &nwarr; &uarr; &nearr; &rarr; &nearr; &darr; &nwarr;

`&larr; &nwarr; &uarr; &nearr; &rarr; &nearr; &darr; &nwarr;`


## squares
Filled and empty squares are also avaialable [[7](#r07)].

&#x2B1E; &#x25AB; &#x25FD; &#x25FB; &#x25A1; &#x2B1C;

`&#x2B1E; &#x25AB; &#x25FD; &#x25FB; &#x25A1; &#x2B1C;`

&#x2B1D; &#x25AA; &#x25FE; &#x25FC; &#x25A0; &#x2B1B;

`&#x2B1D; &#x25AA; &#x25FE; &#x25FC; &#x25A0; &#x2B1B;`


## box elements
Boxes can be drawn using characters as follow,

<div style="
  line-height:normal;
  white-space: pre;
  font-family: monospace;
  letter-spacing: 0px;
">
&boxdr;&boxh;&boxhd;&boxh;&boxdl;
&boxv;&nbsp;&boxv;&nbsp;&boxv;
&boxvr;&boxh;&boxvh;&boxh;&boxvl;
&boxv;&nbsp;&boxv;&nbsp;&boxv;
&boxur;&boxh;&boxhu;&boxh;&boxul;
</div>

```html
<div style="
  line-height:normal;
  white-space: pre;
  font-family: monospace;
  letter-spacing: 0px;
">
&boxdr;&boxh;&boxhd;&boxh;&boxdl;
&boxv;&nbsp;&boxv;&nbsp;&boxv;
&boxvr;&boxh;&boxvh;&boxh;&boxvl;
&boxv;&nbsp;&boxv;&nbsp;&boxv;
&boxur;&boxh;&boxhu;&boxh;&boxul;
</div>
```

where the characters are part of extended ASCII characters [[8](#r08)], beside the space `&nbsp;`.


## notes
1. <a name='r01'></a>Sherlene Von Drehnen, "What Is Hugo and How Does It Work?", MUO, 16 May 2022, url <https://www.makeuseof.com/hugo-static-site-generator/> [20220603].
2. <a name='r02'></a>Prashant Dabholkar, "Greek and Special Symbols in Inkscape", Engineering Chatter and Some Tools, WordPress, 29 Sep 2018, url <https://techietalkntools.wordpress.com/2018/09/29/greek-and-special-symbols-in-inkscape/> [20220603].
3. <a name='r03'></a>Shahnawaz_Ali, "HTML Entities", GeekforGeeks, 14 Dec 2021, url <https://www.geeksforgeeks.org/html-entities/> [20220603].
4. <a name='r04'></a>Anne Helmenstine, "HTML Codes for Greek Letters", Science Notes, 10 May 2021, url <https://sciencenotes.org/html-codes-for-greek-letters/> [20220604].
5. <a name='r05'></a>Xah Lee, "Unicode Arrows →", ∑XAH, 19 Jun 2010, url <http://xahlee.info/comp/unicode_arrows.html> [20220604].
6. <a name='r06'></a>Fiverr Team, "HTML Arrows: What They Are and How to Use Them", Fiverr International Ltd., 7 Oct 2021, url <https://blog.fiverr.com/post/html-arrows-what-they-are-and-how-to-use-them> [20220604].
7. <a name='r07'></a>-, "Square Symbols", Alt-Codes, 2022, url <https://www.alt-codes.net/square-symbols> [20220604].
8. <a name='r08'></a>Peter, "Box drawing character single line horizontal vertical", url <https://theasciicode.com.ar/extended-ascii-code/box-drawings-single-line-horizontal-vertical-character-ascii-code-197.html> [20220604].

{{< citeas >}}

{{< todo >}}
{{</ todo >}}