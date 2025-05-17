---
title: "ga short introduction"
date: 2022-04-11T16:25:00+07:00
lastmod: 2022-04-13T11:01:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['computation', 'model', 'genetic-algorithm', 'draft']
url: "0052"
draft: false
---
Algoritma genetik atau genetic algorithm (GA) merupakan algoritma berdasarkan pencarian yang digunakan untuk menyelesaikan permasalahan optimasi di dalam pembelajaran mesin [[1](#r01)]. Dalam suatu GA solusi dinyatakan dalam bentuk individu yang memiliki sifat-sifat yang tercerminkan dalam kromosomnya [[2](#r02)]. Salah satu kelebihan GA adalah dapat mencegah terjadinya konvergensi terlalu dini yang mengarah pada titik optimum lokal alih-alih titik optimum global yang diinginkan dan hal ini dilakukan dengan mempertahankan keberagaman kromosom melalui operasi persilangan (crossover) dan mutasi (mutation) gen-gen pada kromosom [[3](#r03)]. Terdapat banyak contoh penerapan GA pada berbagai permasalahan, seperti optimasi penjadwalan perkuliahan [[4](#r04), [5](#r05)] dan perencaan produksi [[6](#r06)]. Untuk membantu mempelajari GA telah terdapat tutorialnya [[7](#r07)] dan untuk menerapkannya telah terdapat pengenalan dengan contoh algoritma beserta kodenya dalam Java [[8](#r08)].


## terms
Terdapat istilah-istilah pada algoritma genetik seperti alel (allele), gen (gene), kromosom (chromosome), dan populasi (population), yang ilustrasinya diberikan berikut ini.

{{< svg "/static/img/comp/ga/pop-chro-gen-all.svg" "fig1" "1" "GA: (a) Populasi, (b) kromosom, (c) gen, dan (d) alel." >}}

Populasi merupakan subset atau himpunan bagian dari semua solusi bagi permasalahan yang sedang dipecahkan. Populasi beranggotakan kromosom-kromosom yang merupakan solusi-solusi dari permasalahan. Dalam setiap kromosom terdapat sejumlah gen yang merupakan posisi elemen dengan nilai-nilai yang diperbolehkan untuk setiap gen diberikan oleh alel. Bagaimana istilah-istilah tersebut saling terkait diberikan pada Gambar [1](#fig1).

{{< svg "/static/img/comp/ga/geno-feno.svg" "fig2" "2" "GA: (a) genotip, (b) fenotip." >}}

Terdapat pula istilah genotip (genotype) dan fenotip (phenotype), di mana masing-masing adalah populasi di ruang komputasi dan di ruang solusi pada dunia nyata. Gambar [2](#fig2) memberikan contoh genotip untuk jalur kunjungan pada lima buah titik dan fenotipnya.


## example
Sebagai contoh misalkan terdapat kota-kota A, B, .., G, H yang dihubungkan dengan jalan lurus seperti pada gambar berikut ini.

{{< svg "/static/img/comp/ga/visiting-cities.svg" "fig3" "3" "Kota-kota yang terhubung dengan jalan langsung." >}}

Tidak semua kota terhubung secara langsung, misalnya dari kota F untuk mencapai kota G harus melalui kota E atau kota A. Demikian pula untuk dari C ke A atau D ke B. Sistem yang dimaksud diberikan pada Gambar [3](#fig3).

### code
Kode berikut tersedia dan dapat dijalankan di OneCompiler [3xyxgccuy](https://onecompiler.com/python/3xyxgccuy).

```python
# visiting_cities.py
# Search order of visited cities using genetic algorithm
# 
# Sparisoma Viridi | https://github.com/dudung/cookbook
# 
# 20220412 Create this program.
#     1706 Finish a dictionary named City and print it.
#     1721 Finish a matrix named Road and print it.
#     1735 Add some references for future use.
#     2021 Finish distance function and print it.
#     2040 Finish isconnected function and print it.
#     2133 Finish getfenotype function and print it.
#     2155 Finish getgenotype function and print it.
#     2225 Finish getconnectionstr function and print it.
#     2234 Finish isvalidsolution function and print it.
#     2255 Finish crossover function and print it.
#     2311 Pause after try crossover for n = 0, .. 23.
# 20220413 Make it public.
#     0354 Test in OneCompiler.
#     0357 Share it to group of FI3201-01.
#     1059 Show live in the lecture.
# 
# Refs
# 1. https://stackoverflow.com/a/3294899/9475509 dictionary for
# 2. https://stackoverflow.com/a/19084485/9475509 print matrix
# 3. https://stackoverflow.com/a/11266091/9475509 end of line
# 4. https://stackoverflow.com/a/8951047/9475509 circular index
# 5. https://stackoverflow.com/a/8928256/9475509 binary string
# 6. https://stackoverflow.com/a/10411108/9475509 int to binary
# 7. https://stackoverflow.com/a/2294502/9475509 chr pos in str


# Import necessary packages
import math


# City dictionary
City = {
  'A': {'id': 0, 'x': 2, 'y': 2},
  'B': {'id': 1, 'x': 4, 'y': 1},
  'C': {'id': 2, 'x': 7, 'y': 2},
  'D': {'id': 3, 'x': 6, 'y': 5},
  'E': {'id': 4, 'x': 4, 'y': 6},
  'F': {'id': 5, 'x': 5, 'y': 3},
  'G': {'id': 6, 'x': 2, 'y': 6},
  'H': {'id': 7, 'x': 1, 'y': 5},
}

print('City')
for key in City:
  c = City[key]
  i = c['id']
  x = c['x']
  y = c['y']
  print(key, '  ', i, '  ', x, '  ', y, sep='')
print()


# Road matrix
Road = [
  [0, 1, 0, 0, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 1, 0, 0],
  [0, 1, 0, 1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 1, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 0, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0],  
]

print('Road')
for i in Road:
  for j in i:
    print(j, ' ', end='')
  print()
print()


# Distance between two cities
def distance(c1, c2):
  x1 = City[c1]['x']
  y1 = City[c1]['y']
  x2 = City[c2]['x']
  y2 = City[c2]['y']
  
  dx = (x1 - x2)
  dy = (y1 - y2)
  dr = math.sqrt(dx * dx + dy * dy)
  
  return dr

print('distance')
print("AB", distance('A', 'D'))
print()


# Check connection of two cities
def isconnected(c1, c2):
  id1 = City[c1]['id']
  id2 = City[c2]['id']
  
  road = Road[id1][id2]
  connected = bool(road)
  
  return connected
 
print('isconnected')
print("AB", isconnected('A', 'B'))
print("AC", isconnected('A', 'C'))
print()


# Get fenotype from a chromosome
def getfenotype(chro):
  N = int(len(chro)/3)
  feno = ''
  for i in range(N):
    j = 3 * i
    genstr = chro[j:j+3]
    genint = int(genstr, 2)
    
    city = ''
    for key in City:
      id = City[key]['id']
      if genint == id:
        city = key
    
    feno = feno + city
  return feno

print('getfenotype')
chromose0 = '000001010011100101110111'
print('chromose', chromose0)
print('fenotype', getfenotype(chromose0))
chromose1 = '110111000100101011010001'
print('chromose', chromose1)
print('fenotype', getfenotype(chromose1))
print()


# Get genotype from a solution
def getgenotype(sol):
  geno = ''
  for key in sol:
    id = City[key]['id']
    idbin = '{0:03b}'.format(id)
    geno = geno + idbin
  
  return geno

print('getgenotype')
solution0 = 'GHAEFDCB'
print('solution', solution0)
print('genotype', getgenotype(solution0))
solution1 = 'ABCDHGFE'
print('solution', solution1)
print('genotype', getgenotype(solution1))
print()


# Get connections information in string
def getconnectionstr(sol):
  constr = ''
  for i in range(len(sol)):
    c1 = sol[i]
    if i < len(sol) - 1:
      c2 = sol[i+1]
      iscon = isconnected(c1, c2)
    
    if iscon:
      constr = constr + c1
      if i < len(sol) - 1:
        constr = constr + '--'
    else:
      constr = constr + c1
      if i < len(sol) - 1:
        constr = constr + '  '
    
  return constr

print('getconnectionstr')
solution0 = 'BHAEFDCG'
print('solution', solution0)
print('connection ', getconnectionstr(solution0))
solution1 = 'GHAEFDCB'
print('solution', solution1)
print('connection ', getconnectionstr(solution1))
print()


# Check whether a solution is valid
def isvalidsolution(sol):
  disconnect = 0
  for i in range(len(sol)):
    c1 = sol[i]
    if i < len(sol) - 1:
      c2 = sol[i+1]
      iscon = isconnected(c1, c2)
    
    if not iscon:
      disconnect = disconnect + 1
  
  valid = True
  if disconnect > 0:
    valid = False
  return valid

print('isvalidsolution')
solution0 = 'BHAEFDCG'
print('solution', solution0)
print('valid ', isvalidsolution(solution0))
solution1 = 'GHAEFDCB'
print('solution', solution1)
print('valid ', isvalidsolution(solution1))
print()


# Do crossover two chromosomes
def crossover(ch1, ch2, n):
  ch3a = ch1[0:n]
  ch4b = ch1[n:]
  
  ch4a = ch2[0:n]
  ch3b = ch2[n:]
  
  ch3 = ch3a + ch3b
  ch4 = ch4a + ch4b
  
  return [ch3, ch4]


print('crossover')
chro0 = '111110000001010011100101'
chro1 = '110111000100101011010001'

feno0 = getfenotype(chro0)
print('fenotype0', feno0)
print('connection ', getconnectionstr(feno0))
print('valid ', isvalidsolution(feno0))
print()

feno1 = getfenotype(chro1)
print('fenotype1', feno1)
print('connection ', getconnectionstr(feno1))
print('valid ', isvalidsolution(feno1))
print()

print('chromosome0', chro0)
print('chromosome1', chro1)

# ok: n = 0-2, 6-8, 9, 22, 23
# problem: n = 19, 3-5, 10-12, 13-14, (15), (16, 17, 18), (19, 20, 21)
n = 5

print('crossover at', n)
[chro2, chro3] = crossover(chro0, chro1, n)
print('chromosome2', chro2)
print('chromosome3', chro3)
print()

feno2 = getfenotype(chro2)
print('fenotype2', feno2)
print('connection ', getconnectionstr(feno2))
print('valid ', isvalidsolution(feno2))
print()

feno3 = getfenotype(chro3)
print('fenotype2', feno3)
print('connection ', getconnectionstr(feno3))
print('valid ', isvalidsolution(feno3))
print()
```

Hasil yang diperoleh adalah sebagai berikut.

```batch
PS L:\home\cookbook\python\ga> python .\visiting_cities.py
City
A  0  2  2
B  1  4  1
C  2  7  2
D  3  6  5
E  4  4  6
F  5  5  3
G  6  2  6
H  7  1  5

Road
0  1  0  0  1  1  1  1
1  0  1  0  0  1  0  0
0  1  0  1  0  1  0  0
0  0  1  0  1  1  0  0
1  0  0  1  0  1  1  0
1  1  1  1  1  0  0  0
1  0  0  0  1  0  0  1
1  0  0  0  0  0  1  0

distance
AB 5.0

isconnected
AB True
AC False

getfenotype
chromose 000001010011100101110111
fenotype ABCDEFGH
chromose 110111000100101011010001
fenotype GHAEFDCB

getgenotype
solution GHAEFDCB
genotype 110111000100101011010001
solution ABCDHGFE
genotype 000001010011111110101100

getconnectionstr
solution BHAEFDCG
connection  B  H--A--E--F--D--C  G
solution GHAEFDCB
connection  G--H--A--E--F--D--C--B

isvalidsolution
solution BHAEFDCG
valid  False
solution GHAEFDCB
valid  True

crossover
fenotype0 HGABCDEF
connection  H--G--A--B--C--D--E--F
valid  True

fenotype1 GHAEFDCB
connection  G--H--A--E--F--D--C--B
valid  True

chromosome0 111110000001010011100101
chromosome1 110111000100101011010001
crossover at 5
chromosome2 111111000100101011010001
chromosome3 110110000001010011100101

fenotype2 HHAEFDCB
connection  H  H--A--E--F--D--C--B
valid  False

fenotype2 GGABCDEF
connection  G  G--A--B--C--D--E--F
valid  False

PS L:\home\cookbook\python\ga>
```

Dengan masih terdapat kesalahan bentuk pemilihan bentuk genotip (kromosom) yang merepresentasikan suatu fenotip (solusi rute).


## exer
1. <a name='exer1'></a>Terdapat kromosom dengan 10 gen yang mewakili suatu solusi. Masing-masing gen memiliki empat macam alel, yaitu 'A', 'B', 'C', dan 'D'. Contoh sebuah kromosom adalah 'ABCDABCDAB' dengan nilai tertentu. Dengan adanya empat alel, maka akan dapat dibuat $4^{10} = 1048576$ macam kromosom. Setiap peserta memiliki empat kesempatan untuk mencoba fitness function ([tautan Edunex](https://edunex.itb.ac.id/exam/7129)) sehingga bila bekerja sendiri kemungkin untuk mendapatkan kromosom dengan nilai tertinggi adalah $4/1048576$. Dengan bekerja dalam kelompok $N$ anggota maka $3N$ kesempatan digunakan untuk mencoba fitness function dan satu kesempatan terakhir setiap anggota digunakan untuk mendapatkan jawaban yang tertinggi nilainya, sehingga kemungkinan sebelumnya menjadi $3N/1048576$ dengan $N = 1, 2, \dots, 45$.
2. Gunakan sebagai dasar untuk dimodifikasi kode yang diberikan di OneCompiler [3xyxgccuy](https://onecompiler.com/python/3xyxgccuy) dalam menghitung total panjang lintasan yang ditempuh oleh suatu solusi, misalnya ABCFDEGH. Namakan fungsinya `totaldistance()` dengan argumennya adalah sebuah solusi.

{{< todo >}}
cap 
url https://edunex.itb.ac.id/exam/7129
ans ADAB CA BACA

cap Praktek Mencari Solusi dengan Algoritma Genetik
url 
asn 
{{< /todo >}}


## notes
1. <a name='r01'></a>Arthur Muthee, "The Basics of Genetic Algorithms in Machine Learning", Section, 26 May 2021, url <https://www.section.io/engineering-education/the-basics-of-genetic-algorithms-in-ml/> [20220411].
2. <a name='r02'></a>Wikipedia contributors, "Genetic algorithm", Wikipedia, The Free Encyclopedia, 9 April 2022, 21:23 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1081816519> [20220411].
3. <a name='r03'></a>-, "Genetic Algorithm", School of Computer Science, BINUS University, 8 Dec 2018, url <https://socs.binus.ac.id/2018/12/08/genetic-algorithm/> [20220411].
4. <a name='r04'></a>Tri Suratno, Niken Rarasati, Gusmanely Z., "Optimization of Genetic Algorithm for Implementation Designing and Modeling in Academic Scheduling", Eksakta: Berkala Ilmiah Bidang MIPA [], vol 20, no 1, p 17-24, Apr 2019, url <https://doi.org/10.24036/eksakta/vol20-iss1/166>.
5. <a name='r05'></a>David Kristiadi, Rudy Hartanto, "Genetic Algorithm for lecturing schedule optimization", Indonesian Journal of Computing and Cybernetics Systems [], vol 13, no 1, p 83-94, Jan 2019, url <https://doi.org/10.22146/ijccs.43038>
6. <a name='r06'></a>Bryan Pratama Jocom, Nurul Hidayat, Putra Pandu Adikara, "Penerapan Genetic Algorithm Untuk Optimasi Peningkatan Laba Persediaan Produksi Pakaian", Jurnal Pengembangan Teknologi Informasi dan Ilmu Komputer [], vol 2, no 6, p 2168-2172, Jun 2018, url <https://j-ptiik.ub.ac.id/index.php/j-ptiik/article/view/1617> [20220411].
7. <a name='r07'></a>-, "Genetic Algorithms Tutorial", Tutorials Point, 2022, url <https://www.tutorialspoint.com/genetic_algorithms/index.htm> [20220412].
8. <a name='r08'></a>Vijini Mallawaarachchi, "Introduction to Genetic Algorithms — Including Example Code", Towards Data Science, 8 Jul 2017, url <https://towardsdatascience.com/e396e98d8bf3> [20220411].

{{< citeas >}}
