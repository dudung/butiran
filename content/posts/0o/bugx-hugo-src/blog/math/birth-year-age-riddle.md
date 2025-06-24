---
title: "birth-year-age-riddle"
date: 2022-07-10T07:32:00+07:00
lastmod: 2022-07-10T21:24:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['math', 'birth', 'age', 'riddle']
url: "0111"
draft: false
---
Terdapat berbagai macam tebakan terkait dengan tahun lahir dan umur seseorang, seperti kaitan antara umur pada kuadrat tahun kelahiran [[1](#r01)], dua angka terakhir tahun kelahiran sama dengan umur sekarang [[2](#r02)], trick 79 bir dan 40 dolar terkait dengan tahun kelahiran [[3](#r03)], kemarin lusa dan tahun depan membuat umur berbeda tiga tahun, [[4](#r04)], dan jumlah kantung semen, umur, serta suatu angka saling terkait [[5](#r05)]. Di sini akan coba disinggung penyelesaiannya secara matematika disertai dengan penjelasan untuk dua macam terlebih dahulu.


## age - quadrat of year
Terdapat suatu kutipan [[6](#r06)]

> When Augustus de Morgan (a mathematician who was born and died in the 19th century) was asked about his age, he replied: "I was x years old in the year x²." What year was he born in?

yang belum tentu berlaku pada abad yang sama. Terdapat kode berikut

```python
import math

print("age  year   born")
for i in range(40, 50):
  age = i
  year = i * i
  born = year - age
  print(age, " ",year, " ", born, end='')
  cent1 = math.floor(year / 100)
  cent2 = math.floor(born / 100)
  if cent1 == cent2:
    print("  <-- same century")
  else:
    print()
```

yang memberikan hasil

```
age  year   born
40   1600   1560
41   1681   1640  <-- same century
42   1764   1722  <-- same century
43   1849   1806  <-- same century
44   1936   1892
45   2025   1980
46   2116   2070
47   2209   2162
48   2304   2256
49   2401   2352
```

dan dapat dicoba secara langsung di OneCompiler [3y9jvy27w](https://onecompiler.com/python/3y9jvy27w). Hasil di atas masih menggunakan batasan bahwa umur, yang merupakan akar dari tahun, merupakan bilangan bulat. Bila umur boleh menggunakan bilangan real, dengan menghitung umur berupa pecahan karena melibatkan pula bulan dan harinya, dapat diperoleh hasil lebih banyak, yang untuk saat ini belum dibahas.


## two digit same as age
Terjemahan dari tebakan oleh Thomas Maxwell adalah sebagai berikut [[2](#r02)]

> Dua angka terakhir dari tahun kelahiranku sama dengan umur saya hari ini. Dapatkan Anda menyatakan dengan keyakinan 100 persen berapa umur saya?

di mana perlu diperhatikan pada tahun berapa pertanyaan ini diajukan, misalnya pada abad 20 atau pada abad 21. Perhatikan kode berikut

```python
print("year  born  age")
for born in range(2001, 2023):
  for year in range(2001, 2023):
    age = year - born
    born2 = born - 2000
    if born2 == age:
      print(year, born, age, sep="  ")
```

yang akan menghasilkan

```
year  born  age
2002  2001  1
2004  2002  2
2006  2003  3
2008  2004  4
2010  2005  5
2012  2006  6
2014  2007  7
2016  2008  8
2018  2009  9
2020  2010  10
2022  2011  11
```

dan dapat dicoba di OneCompiler [3y9jz7k5c](https://onecompiler.com/python/3y9jz7k5c). Contoh di atas diperuntukkan bagi abad 21. Untuk abad 20 perlu dilakukan modifikasi terlebih dahulu.


## notes
1. <a name='r01'></a>Apep, "Answer to 'Riddle Man`s age'", Puzzling Stack Exchange, 19 Nov 2017, url <https://puzzling.stackexchange.com/a/57110/80525> [20220710].
2. <a name='r02'></a>Marilyn Vos Savant, "A Brain Teaser on Age and Birth Year", Parade, 11 Nov 2018, url <https://parade.com/714410/marilynvossavant/a-brain-teaser-on-age-and-birth-year/> [20220710].
3. <a name='r03'></a>Jeff Parsons, "Here's How the 79 Beers Trick Knows the Year You Were Born", WJBQ - Q97.9, 9 Jan 2020, url <https://wjbq.com/heres-how-the-79-beers-trick-knows-the-year-you-were-born/> [20220710].
4. <a name='r04'></a>Shalini K., "The Day Before Yesterday I Was 21, And Next Year I Will Be 24. When Is My Birthday? Riddle: Check Riddle Answer", FreshersLive, 27 Oct 2020, url <https://latestnews.fresherslive.com/articles/the-day-before-yesterday-i-was-21-and-next-year-i-will-be-24-when-is-my-birthday-riddle-164091> [20220710].
5. <a name='r05'></a>Kwame Osei-Tutu, "This Math Trick Only Works for Everyone at the End of The year", Cantor's Paradise, 18 Dec 2020, url <https://www.cantorsparadise.com/this-math-trick-only-works-for-everyone-at-the-end-of-the-year-7fc32c477dcb> [20220710].
6. <a name='r06'></a>prog_SAHIL, Rand al'Thor, "Riddle Man's age", Puzzling Stack Exchange, 19 Nov 2017, 10 Mar 2022, url <https://puzzling.stackexchange.com/q/57108/80525> [20220710].

{{< citeas >}}

{{< todo >}}
{{</ todo >}}