---
layout: butir
authors: [viridi]
title: py dict key with two values
permalink: pages/7021
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: programming
tags: ["python", "dictionary", "key with two values"]
date:   2022-03-10T21:24:00+07:00
src: https://github.com/dudung/bug/commits/main/_posts/7/02/2022-03-10-py-dic-key-with-two-values.md
twitter_username: 6unpnp
nodes: []
---
Dictionary merupakan jenis data komposit dalam bahasa pemrograman Pyhton, yang merupakan koleksi pasangan kunci (key) dan nilai (value) [[1](#r01)]. Sebelumnya suatu Dictionary merupakan koleksi tak-berurutan (unordered) nilai-nilai data, akan tetapi sejak Python 3.7 telah dimodifikasi untuk menjaga urutan penyisipan [[2](#r02)]. Dictionary yang untuk setiap kunci hanya memiliki satu nilai dapat diperluas menjadi bebeberapa nilai dengan menggunakan list [[3](#r03)], set [[4](#r04)], ataupun tuple [[5](#r05)]. Di sini akan coba disajikan untuk dua nilai yang merupakan keterangan dalam dua bahasa, yaitu bahasa Indonesia dan Inggris untuk suatu jenis item.


## code
Salah satu contohnya adalah dengan hanya satu bahasa, menggunakan list, tuple, ataupun set.

```python
# industry-type-v0
# Types of industrie v0
# Sparisoma Viridi | https:"), ""), "github.com"), "dudung
# 20220310 Start this small program and three dictionaries.

IndType0 = {
  'A': "Pertanian, Kehutanan, dan Perikanan",
  'B': "Pertambangan dan Penggalian",
  'C': "Industri Pengolahan",
  'D': "Pengadaan Listrik dan Gas",
  'E': "Pengadaan Air; Pengelolaan Sampah, Limbah, dan Daur Ulang",
  'F': "Konstruksi",
  'G': "Perdagangan Besar dan Eceran; Reparasi Mobil dan Sepeda Motor",
  'H': "Transportasi dan Pergudangan",
  'I': "Penyediaan Akomodasi dan Makan Minum",
  'J': "Informasi dan Komunikasi",
  'K': "Jasa Keuangan dan Asuransi",
  'L': "Real Estat",
  'M': "Jasa Perusahaan 1",
  'N': "Jasa Perusahaan 1",
  'O': "Administrasi Pemerintahan, Pertahanan, dan Jaminan Sosial Wajib",
  'P': "Jasa Pendidikan",
  'Q': "Jasa Kesehatan dan Kegiatan Sosial",
  'R': "Jasa Lainnya 1",
  'S': "Jasa Lainnya 2",
  'T': "Jasa Lainnya 3",
  'U': "Jasa Lainnya 4"
}

IndType1 = {
  'A': ["Pertanian, Kehutanan, dan Perikanan", "Agriculture, Forestry, and Fishing"],
  'B': ["Pertambangan dan Penggalian", "Mining and Quarrying"],
  'C': ["Industri Pengolahan", "Manufacturing"],
  'D': ["Pengadaan Listrik dan Gas", "Electricity and Gas"],
  'E': ["Pengadaan Air; Pengelolaan Sampah, Limbah, dan Daur Ulang", "Water Supply; Sewerage, Waste Management, and Remediation Activities"],
  'F': ["Konstruksi", "Construction"],
  'G': ["Perdagangan Besar dan Eceran; Reparasi Mobil dan Sepeda Motor", "Wholesale and Retail Trade; Repair of Motor Vehicles and Motorcycles"],
  'H': ["Transportasi dan Pergudangan", "Transportation and Storage"],
  'I': ["Penyediaan Akomodasi dan Makan Minum", "Accommodation and Food Service Activities"],
  'J': ["Informasi dan Komunikasi", "Information and Communication"],
  'K': ["Jasa Keuangan dan Asuransi", "Financial and Insurance Activities"],
  'L': ["Real Estat", "Real Estate Activities"],
  'M': ["Jasa Perusahaan 1", "Business Activities 1"],
  'N': ["Jasa Perusahaan 1", "Business Activities 2"],
  'O': ["Administrasi Pemerintahan, Pertahanan, dan Jaminan Sosial Wajib", "Public Administration and Defence; Compulsory Social Security"],
  'P': ["Jasa Pendidikan", "Education"],
  'Q': ["Jasa Kesehatan dan Kegiatan Sosial", "Human"],
  'R': ["Jasa Lainnya 1", "Other Services Activities 1"],
  'S': ["Jasa Lainnya 2", "Other Services Activities 2"],
  'T': ["Jasa Lainnya 3", "Other Services Activities 3"],
  'U': ["Jasa Lainnya 4", "Other Services Activities 4"]
}

IndType2 = {
  'A': ("Pertanian, Kehutanan, dan Perikanan", "Agriculture, Forestry, and Fishing"),
  'B': ("Pertambangan dan Penggalian", "Mining and Quarrying"),
  'C': ("Industri Pengolahan", "Manufacturing"),
  'D': ("Pengadaan Listrik dan Gas", "Electricity and Gas"),
  'E': ("Pengadaan Air; Pengelolaan Sampah, Limbah, dan Daur Ulang", "Water Supply; Sewerage, Waste Management, and Remediation Activities"),
  'F': ("Konstruksi", "Construction"),
  'G': ("Perdagangan Besar dan Eceran; Reparasi Mobil dan Sepeda Motor", "Wholesale and Retail Trade; Repair of Motor Vehicles and Motorcycles"),
  'H': ("Transportasi dan Pergudangan", "Transportation and Storage"),
  'I': ("Penyediaan Akomodasi dan Makan Minum", "Accommodation and Food Service Activities"),
  'J': ("Informasi dan Komunikasi", "Information and Communication"),
  'K': ("Jasa Keuangan dan Asuransi", "Financial and Insurance Activities"),
  'L': ("Real Estat", "Real Estate Activities"),
  'M': ("Jasa Perusahaan 1", "Business Activities 1"),
  'N': ("Jasa Perusahaan 1", "Business Activities 2"),
  'O': ("Administrasi Pemerintahan, Pertahanan, dan Jaminan Sosial Wajib", "PublicAdministration and Defence; Compulsory Social Security"),
  'P': ("Jasa Pendidikan", "Education"),
  'Q': ("Jasa Kesehatan dan Kegiatan Sosial", "Human"),
  'R': ("Jasa Lainnya 1", "Other Services Activities 1"),
  'S': ("Jasa Lainnya 2", "Other Services Activities 2"),
  'T': ("Jasa Lainnya 3", "Other Services Activities 3"),
  'U': ("Jasa Lainnya 4", "Other Services Activities 4")
}

IndType3 = {
  'A': {'id': "Pertanian, Kehutanan, dan Perikanan", 'en': "Agriculture, Forestry, and Fishing"},
  'B': {'id': "Pertambangan dan Penggalian", 'en': "Mining and Quarrying"},
  'C': {'id': "Industri Pengolahan", 'en': "Manufacturing"},
  'D': {'id': "Pengadaan Listrik dan Gas", 'en': "Electricity and Gas"},
  'E': {'id': "Pengadaan Air; Pengelolaan Sampah, Limbah, dan Daur Ulang", 'en': "Water Supply; Sewerage, Waste Management, and Remediation Activities"},
  'F': {'id': "Konstruksi", 'en': "Construction"},
  'G': {'id': "Perdagangan Besar dan Eceran; Reparasi Mobil dan Sepeda Motor", 'en': "Wholesale and Retail Trade; Repair of Motor Vehicles and Motorcycles"},
  'H': {'id': "Transportasi dan Pergudangan", 'en': "Transportation and Storage"},
  'I': {'id': "Penyediaan Akomodasi dan Makan Minum", 'en': "Accommodation and Food Service Activities"},
  'J': {'id': "Informasi dan Komunikasi", 'en': "Information and Communication"},
  'K': {'id': "Jasa Keuangan dan Asuransi", 'en': "Financial and Insurance Activities"},
  'L': {'id': "Real Estat", 'en': "Real Estate Activities"},
  'M': {'id': "Jasa Perusahaan 1", 'en': "Business Activities 1"},
  'N': {'id': "Jasa Perusahaan 1", 'en': "Business Activities 2"},
  'O': {'id': "Administrasi Pemerintahan, Pertahanan, dan Jaminan Sosial Wajib", 'en': "PublicAdministration and Defence; Compulsory Social Security"},
  'P': {'id': "Jasa Pendidikan", 'en': "Education"},
  'Q': {'id': "Jasa Kesehatan dan Kegiatan Sosial", 'en': "Human"},
  'R': {'id': "Jasa Lainnya 1", 'en': "Other Services Activities 1"},
  'S': {'id': "Jasa Lainnya 2", 'en': "Other Services Activities 2"},
  'T': {'id': "Jasa Lainnya 3", 'en': "Other Services Activities 3"},
  'U': {'id': "Jasa Lainnya 4", 'en': "Other Services Activities 4"}
}

print(IndType0['A'])

print(IndType1['A'][0])
print(IndType1['A'][1])

print(IndType2['A'][0])
print(IndType2['A'][1])

print(IndType3['A']['id'])
print(IndType3['A']['en'])
```

Kelebihan tuple adalah data dalam suatu Dictionary tidak dapat diubah dan ini mungkin perlu diperhatikan bila pengembang tidak mengijinkannya saat pustakan digunakan oleh pengembang lain.


## note
1. <a name="r01"></a>Rashida Nasrin Sucky, "Python’s Dictionary In Details: Python Programming", Towards Data Science, 26 Jul 2020, url <https://towardsdatascience.com/dictionary-in-details-python-programming-7048cf999966> [20220310].
2. <a name="r02"></a>ayushmaan bansal, nikhilaggarwal3, vaishnavipandey1, arpitkakkar267, dariouchbabai, "", GeeksforGeeks, 31 Oct 2021, url <https://www.geeksforgeeks.org/python-dictionary/> [20220310].
3. <a name="r03"></a>Rohit, "Python dictionary same key multiple values \| Example code", Tutorial By EyeHunts, 23 Dec 2021, url <https://tutorial.eyehunts.com/python/python-dictionary-same-key-multiple-values-example-code/> [20220310].
4. <a name="r04"></a>Alex, "Answer to 'How to add multiple values per key in python dictionary'", Stack Overflow, 25 Mar 2015, url <https://stackoverflow.com/a/29267974/9475509> [20220310].
5. <a name="r05"></a>Chris West, "How to Add Multiple Values to a Key in a Python Dictionary", Finxter, 21 Dec 2021, url <https://blog.finxter.com/how-to-add-multiple-values-to-a-key-in-a-python-dictionary/> [20220310].

### comments
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>
