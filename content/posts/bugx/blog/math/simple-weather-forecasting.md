---
title: "simple-weather-forecasting"
date: 2022-07-11T07:29:00+07:00
lastmod: 2022-07-11T10:01:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['math', 'weather', 'forecasting']
url: "0113"
draft: false
---
Aturan mendasar dari cuaca adalah bahwa apan yang terjadi kemarin, akan secara umum terjadi juga hari ini dan ini merupakan cara praktis (rule of thumb) yang bermanfaat dalam memperkirakan cuaca, di mana perilaku standarnya adalah melanjutkan pola harian [[1](#r01)]. Dalam rentang waktu yang lebih lebar parameter cuaca seperti temperatur memiliki pola berulang dalam satu tahun sehingga secara umum dapat diprediksi [[2](#r02)]. Walaupun para fisikawan mendefisikan iklim sebagai suatu sistem kompleks, yang tidak dapat diselesaikan secara analitik, akan tetapi dengan perkembangan komputasi pada tahun-tahun belakangan ini, terdapat sejumlah algoritma numerik untuk menyelesaikan, dengan algoritma pembelajaran mesin (Machine Learning algorithms) merupakan bagian dari algoritma-algoritma tersebut [[3](#r03)]. Di sini hanya akan disajikan analisis sederhana yang belum memperkirakan cuaca di kemudian waktu.


## data
Temperatur kota Bandung diberikan pada tabel berikut ini.

Tabel <a name='tab1'>1</a> Temperatur terendah, rata-rata, tertinggi umumnya kota Bandung selama satu tahun [[4](#r04)].<br><br>

Rata-rata<br>------<br>Bulan | Rendah | Suhu | Tinggi
:- | :-: | :-: | :-:
Jan | 20 | 23 | 27
Feb | 19 | 23 | 27
Mar | 20 | 23 | 28
Apr | 20 | 23 | 28
May | 19 | 23 | 29
Jun | 19 | 23 | 28
Jul | 18 | 22 | 28
Aug | 18 | 22 | 29
Sep | 18 | 23 | 29
Oct | 19 | 23 | 29
Nov | 20 | 23 | 29
Dec | 20 | 23 | 28

Dan untuk kota Jakarta diberikan pada tabel di bawah ini.

Tabel <a name='tab2'>2</a> Temperatur terendah, rata-rata, tertinggi umumnya kota Jakarta selama satu tahun [[5](#r05)].<br><br>

Rata-rata<br>------<br>Bulan | Rendah | Suhu | Tinggi
:- | :-: | :-: | :-:
Jan | 24 | 27 | 30
Feb | 24 | 27 | 30
Mar | 24 | 27 | 31
Apr | 25 | 28 | 32
May | 25 | 28 | 32
Jun | 24 | 27 | 32
Jul | 24 | 27 | 32
Aug | 23 | 27 | 32
Sep | 24 | 28 | 32
Oct | 24 | 28 | 32
Nov | 24 | 28 | 32
Dec | 24 | 27 | 31

Data-data pada Tabel [1](#tab1) dan [2](#tab2) dapat diolah lebih lanjut untuk mencari nilai rata-rata dari rata-rata terendah bulan, rata-rata bulanan, dan rata-rata tertinggi bulanan.

## code
Sebuah program dapat dibuat seperti berikut ini


```python
month = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

city = ['Bandung', 'Jakarta']

TBAN = [
  [20, 23, 27],
  [19, 23, 27],
  [20, 23, 28],
  [20, 23, 28],
  [19, 23, 29],
  [19, 23, 28],
  [18, 22, 28],
  [18, 22, 29],
  [18, 23, 29],
  [19, 23, 29],
  [20, 23, 29],
  [20, 23, 28]
]

TJAK = [
  [24, 27, 30],
  [24, 27, 30],
  [24, 27, 31],
  [25, 28, 32],
  [25, 28, 32],
  [24, 27, 32],
  [24, 27, 32],
  [23, 27, 32],
  [24, 28, 32],
  [24, 28, 32],
  [24, 28, 32],
  [24, 27, 31]
]

Temp = [TBAN, TJAK]

i = 0
for c in Temp:
  print("City", city[i])
  
  t1 = 0
  t2 = 0
  t3 = 0
  
  print("  Tlow Tmid Thig c")
  for m in c:
    print("  ", end='')
    for t in m:
      print(t, end='   ')
    
    c = (m[1] - m[0]) / (m[2] - m[0])
    print(f'{c:0.2f}')
    
    t1 += m[0]
    t2 += m[1]
    t3 += m[2]

  print("  --------------")
  s1 = f'{(t1/12):0.1f}'
  s2 = f'{(t2/12):0.1f}'
  s3 = f'{(t3/12):0.1f}'
  print(" ", s1, s2, s3)
    
  print()
  i += 1
```

yang akan menghasilkan informasi


```
City Bandung
  Tlow Tmid Thig c
  20   23   27   0.43
  19   23   27   0.50
  20   23   28   0.38
  20   23   28   0.38
  19   23   29   0.40
  19   23   28   0.44
  18   22   28   0.40
  18   22   29   0.36
  18   23   29   0.45
  19   23   29   0.40
  20   23   29   0.33
  20   23   28   0.38
  --------------
  19.2 22.8 28.2

City Jakarta
  Tlow Tmid Thig c
  24   27   30   0.50
  24   27   30   0.50
  24   27   31   0.43
  25   28   32   0.43
  25   28   32   0.43
  24   27   32   0.38
  24   27   32   0.38
  23   27   32   0.44
  24   28   32   0.50
  24   28   32   0.50
  24   28   32   0.50
  24   27   31   0.43
  --------------
  24.1 27.4 31.5
```

dan dapat dimodifikasi di OneCompier [3y9mpzvjw](https://onecompiler.com/python/3y9mpzvjw). Didefinisikan pula suatu besaran

\begin{equation}\label{eqn1}
c = \frac{T - T_{\rm low}}{T_{\rm hig} - T_{\rm low}}
\end{equation}

untuk mencari apakah $T$ benar-benar berada di antara  $T_{\rm low}$ dan $T_{\rm hig}$.


## notes
1. <a name='r01'></a>Jesse Weber, "Weather Forecasting 101: How to Predict the Weather On the Go", Outdoor Project, 7 Jun 2018, url <https://www.outdoorproject.com/articles/weather-forecasting-101-how-predict-weather-go> [20220711].
2. <a name='r02'></a>Monica Dalmas, "Building a Time Series Weather Forecasting Application in Python", Section, 14 Jan 2022, url <https://www.section.io/engineering-education/building-a-time-series-weather-forecasting-application-in-python/> [20220711].
3. <a name='r03'></a>Piero Paialunga, "Weather forecasting with Machine Learning, using Python: Simple, yet powerful application of Machine Learning for weather forecasting", Towards Data Science, 19 Apr 2021, url <https://towardsdatascience.com/weather-forecasting-with-machine-learning-using-python-55e90c346647> [20220711].
4. <a name='r04'></a>"Iklim dan Cuaca Rata-Rata Sepanjang Tahun di Kota Bandung, Indonesia", Weather Spark, url <https://id.weatherspark.com/y/118121/x> [20220711].
5. <a name='r05'></a>"Iklim dan Cuaca Rata-Rata Sepanjang Tahun di Jakarta, Indonesia", Weather Spark, url <https://id.weatherspark.com/y/116847/x> [20220711].


{{< citeas >}}

{{< todo >}}
{{</ todo >}}