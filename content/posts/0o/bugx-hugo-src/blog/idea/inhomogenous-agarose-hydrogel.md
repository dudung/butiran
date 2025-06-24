---
title: "inhomogenous agarose hydrogel"
date: 2022-06-20T17:06:00+0700
lastmod: 2022-06-20T17:45:00+0700
author: viridi
mathjax: false
mermaid: false
chartjs: false
tags: ['idea', 'agarose', 'hydrogel', 'fea']
url: "0094"
draft: false
---
Diskusi dengan seorang kolega [[1](#r01)] perihal kelanjutan pekerjaannya [[2](#r02)] yang ingin ditingkatkan untuk bahan tidak homogen.


## analysis
Bila dengan FEA (Finite Element Analysis) dapat menggunakan SfePy [[3](#r03)] yang lebih bebas dibandingkan dengan Abaqus [[4](#r04)]. Alternatif pertama perlu memrogram sedangkan yang kedua dapat langsung digunakan akan tetapi terbatas pada fiturnya untuk edisi pelajar. Atau dapat pula dengan model pegas dan massa yang telah dibandingkan dengan prediksi isostrain [[5](#r05)] dan rules of mixture [[6](#r06)].


## todo
- Resumekan kembali rule of mixture dari Voight and Reuss.
- Cari hubungan modulus geser G dengan modulus tarik E.
- Pelajari pekerjaan sebelumnya [[2](#r02)].
- Pelajari dan hitung kasus sederhana dengan SfePy [[3](#r03)].
- Bandingkan hasil eksperimen dan simulasi.


## notes
1. <a name='r01'></a>-, "Yanurita Dwihapsari", Google Scholar, url <https://scholar.google.com/citations?user=DTgGIRUAAAAJ> [20220620].
2. <a name='r02'></a>Yanurita Dwihapsari, Nauval Maheswara Prabawa, Mochamad Robby Fairuzzihab Qodarul, Savira Sukma Dewi, Dinuhaa Hanaanul Hajidah, "The comparison of noninvasive assessments of shear modulus using quantitative T2 magnetic resonance imaging and rheology of agarose hydrogel", Mechanics of Materials [Mech Mater], vol 171, no, p 104358, Aug 2022, url <https://doi.org/10.1016/j.mechmat.2022.104358>.
3. <a name='r03'></a>Robert Cimrman, SfePy developers, "SfePy: Simple Finite Elements in Python", sfepy, version 2022.1+git.de2897c4, url <https://sfepy.org/doc-devel/index.html> [20220620].
4. <a name='r04'></a>I. D. Aditya, Widayani, S. Viridi, S. N. Khotimah, "Study of Internal Response of Epoxy Due to Compressive Load via Experiment and Simulation using Abaqus FEA Software", Advanced Materials Research [Adv Mat Rec] vol 896, no 8, p 549-552, 2014.
5. <a name='r05'></a>S. Viridi, Widayani, S. N. Khotimah, "Elastisitas Batang Lurus Komposit Biner Dengan Model Pegas-Titik Massa Dalam Serat Lurus Sejajar Tak Berinteraksi: Studi Awal Kasus Serat Tunggal", viXra:1506.0078 | 2015-06-10, url <https://vixra.org/abs/1506.0078> [20220620].
6. <a name='r06'></a>Widayani, S. Viridi, S. N. Khotimah, "Binary Composite Fiber Elasticity using Spring-Mass and Non-Interacting Parallel Sub-Fiber Model", KnE Engineering [KnE Eng], vol 1, no 1, p 519,  2016, url <http://dx.doi.org/10.18502/keg.v1i1.519>.

{{< citeas >}}

{{< todo >}}
{{</ todo >}}