---
title: "create new github repository"
date: 2022-03-25T10:31:00+07:00
lastmod: 2022-03-26T19:33:00+0700
author: viridi
mathjax: false
mermaid: false
chartjs: true
tags: ['github', 'repository', 'draft']
url: "0020"
draft: false
---
Walaupun telah terdapat informasi bagaimana folder lokal dapat disimpan pada suatu repo di GitHub [[1](#r01)], akan tetapi kadang masih membingunkan bila belum terbiasa. Tulisan ini mencoba merekam langkah-langkah yang dilakukan untuk mencapai hal tersebut dengan menggunakan Windows PowerShell (PS) dan Git Bash, serta akses ke situs GitHub. Selain itu terdapat pula langkah tambahan untuk menambahkan submodule [[2](#r02)] dan menghapusnya [[3](#r03)], yang belum tentu diperlukan.


## local folder
1. Pada ujung kiri taskbar Windows 10 atau ujung kanan bawah layar, pilihlah ikon Start.
2. Gulung ke bawah dan pilih 'Windows PowerShell'.
3. Pilih aplikasi 'Windows PowerShell' sehingga muncul jendela dengan judul Windows PowerShell.
```
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Try the new cross-platform PowerShell https://aka.ms/pscore6

PS C:\Users\Your Name>
```
4. Ubah drive dan direktori ke tempat terdapat folder GitHub berada, misalnya `L:\home`.
```
PS C:\Users\Your Name> L:
PS L:\> cd home
PS L:\home>
```
5. Buat direktori `cookbook`
```
PS L:\home> mkdir cookbook


    Directory: L:\home


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        2022-03-25     10:45                cookbook

PS L:\home>
```
6. Masuk ke direktori `cookbook`.
```
PS L:\home> cd cookbook
PS L:\home\cookbook>
```

Dengan demikian folder baru `cookbook` telah dibuat, yang akan menjadi folder lokal dari suatu repositori di [GitHub](https://github.com/).


## new remote repository
1. Sign in ke GitHub dengan membuka <https://github.com/login>.
2. Buat repositori baru dengan memilih ikon '+' di kanan atas halaman dan pilih 'New repository', atau langsung ke <https://github.com/new>.
3. Isikan pada Repository name dengan nama `cookbook`.
3. Biarkan opsi 'Public'.
4. Tekan tombol berwarna hijau di bagian bawah 'Create repository'.
5. Lihat repositori cookbook di <https://github.com/dudung/coobook>.


## new local repository
Inisialiasi folder `cookbook` sebagai suatu repositori lokal.

```
PS L:\home\cookbook> git init
Initialized empty Git repository in L:/home/cookbook/.git/
PS L:\home\cookbook>
```

Buat suatu berkas `README.md`, lihat isinya, serta tampillkan isi folder.

```
PS L:\home\cookbook> echo "# cookbook" >> README.md
PS L:\home\cookbook> cat README.md
# cookbook
PS L:\home\cookbook> ls


    Directory: L:\home\cookbook


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        2022-03-25     20:21             26 README.md


PS L:\home\cookbook>
```

Tambahkan berkas `README.md` ke repositori lokal.

```
PS L:\home\cookbook> git add README.md
PS L:\home\cookbook>
```
 Lakukan commit untuk berkas yang baru saja dibuat tersebut.
 
 ```
 PS L:\home\cookbook> git commit -a -m "Initial commit with README.md"
[master (root-commit) 1b5f7a1] Initial commit with README.md
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README.md
PS L:\home\cookbook>
 ```

Sunting berkas `README.md` dengan suatu aplikasi sehingga baris pertamanya menjadi `# a cookbook` dan lihat hasilnya pada PS.

```
PS L:\home\cookbook> cat README.md
# a cookbook
PS L:\home\cookbook>
```

Lakukan lagi commit untuk modifikasi yang baru saja dilakukan.

```
PS L:\home\cookbook> git commit -a -m "Edit README.md"
[master 93c00f1] Edit README.md
 1 file changed, 0 insertions(+), 0 deletions(-)
PS L:\home\cookbook>
```

Langkah terakhir ini selalu dilakukan bila suatu berkas dalam repositori lokal diubah.

Selanjutnya adalah menambahkan informasi untuk asal dari repositor remote yang diawali dengan memeriksanya dulu.

```
PS L:\home\cookbook> git remote -v
PS L:\home\cookbook> git remote add origin https://github.com/dudung/cookbook.git
PS L:\home\cookbook> git remote -v
origin  https://github.com/dudung/cookbook.git (fetch)
origin  https://github.com/dudung/cookbook.git (push)
PS L:\home\cookbook>
```

Push perubahan-perubahan lokal yang telah dilakukan ke repositori remote.

```
PS L:\home\cookbook> git push origin master
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (6/6), 475 bytes | 79.00 KiB/s, done.
Total 6 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/dudung/cookbook.git
 * [new branch]      master -> master
PS L:\home\cookbook>
```

Ubah berkas di <https://github.com/dudung/cookbook/blob/master/README.md> dan lakukan pull untuk memperbarui repositori lokal.

```
PS L:\home\cookbook> git pull origin master
From https://github.com/dudung/cookbook
 * branch            master     -> FETCH_HEAD
Updating 93c00f1..3a4d1c4
Fast-forward
 README.md | Bin 30 -> 13 bytes
 1 file changed, 0 insertions(+), 0 deletions(-)
PS L:\home\cookbook>
```

Opsi pada perintah push dan pull dapat ditiadakan dengan sekali menggunakan

```
PS L:\home\cookbook> git push --set-upstream origin master
```

sehingga selajutnya hanya

```
PS L:\home\cookbook> git push
```

dan

```
PS L:\home\cookbook> git pull
```

yang lebih pendek. Ubah kembali berkas `README.md` pada repositor lokal.

```
PS L:\home\cookbook> git commit -a -m "Add words to README.md"
[master f65471c] Add words to README.md
 1 file changed, 1 insertion(+), 1 deletion(-)
PS L:\home\cookbook> git push --set-upstream origin master
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Writing objects: 100% (3/3), 278 bytes | 92.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/dudung/cookbook.git
   3a4d1c4..f65471c  master -> master
branch 'master' set up to track 'origin/master'.
```

Ubah lagi berkas tersebut di repositori remote.

```
PS L:\home\cookbook> git pull
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), 647 bytes | 1024 bytes/s, done.
From https://github.com/dudung/cookbook
   f65471c..751cd0f  master     -> origin/master
Updating f65471c..751cd0f
Fast-forward
 README.md | 3 ++-
 1 file changed, 2 insertions(+), 1 deletion(-)
PS L:\home\cookbook> cat README.md
# cookbook
A cookbook for me as beginner
PS L:\home\cookbook>
```

Dapat terlihat bahwa tidak lagi diperlukan opsi pada perintah push dan pull.


## submodule
Di sini diasumsikan telah terdapat suatu repository remote dengan nama `python` di <https://github.com/dudung/python> yang akan dijadikan submodule dari repositori `cookbook`. Pada repositori remote `python` tersebut telah ada berkas `README.md`, `LICENSE` dengan MIT License, dan `.gitignore` dengan templat Python. 


### create submodule
Tambahkan submodule `python` dengan folder tujuan `python` yang merupakan opsi paling belakang dan dapat diganti.

```
PS L:\home\cookbook> git submodule add https://github.com/dudung/python.git python
Cloning into 'L:/home/cookbook/python'...
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (4/4), done.
remote: Total 5 (delta 0), reused 0 (delta 0), pack-reused 0
Receiving objects: 100% (5/5), done.
warning: LF will be replaced by CRLF in .gitmodules.
The file will have its original line endings in your working directory
PS L:\home\cookbook> git submodule init
PS L:\home\cookbook>
```

Isi keseluruhan dari folder `cookbook` telah berubah.

```
PS L:\home\cookbook> dir -r


    Directory: L:\home\cookbook


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        2022-03-26     05:43                python
-a----        2022-03-26     05:43             80 .gitmodules
-a----        2022-03-25     21:59             43 README.md


    Directory: L:\home\cookbook\python


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        2022-03-26     05:43           1928 .gitignore
-a----        2022-03-26     05:43           1094 LICENSE
-a----        2022-03-26     05:43             29 README.md


PS L:\home\cookbook>
```

Dan telah terdapat perubahan.

```
PS L:\home\cookbook> git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   .gitmodules
        new file:   python

PS L:\home\cookbook>
```

Lakukan kembali commit dan push ke repositori remote.

```
PS L:\home\cookbook> git commit -a -m "Add python submodule"
[master b13e522] Add python submodule
 2 files changed, 4 insertions(+)
 create mode 100644 .gitmodules
 create mode 160000 python
PS L:\home\cookbook> git push
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 4 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 381 bytes | 127.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/dudung/cookbook.git
   be115ad..b13e522  master -> master
PS L:\home\cookbook>
```

### update submodule
Pada halaman <https://github.com/dudung/cookbook> telah terdapat folder [python @ e70da50](https://github.com/dudung/python/tree/e70da50296220f3c117cc0318342a7c58e232a5e) yang merujuk ke suatu perubahan pada <https://github.com/dudung/python>.

Sekarang repsitori remote <https://github.com/dudung/python> diubah dengan menambahkan folder `hello` dan di dalamnya terdapat berkas `hello_world.py`. Sementara pada folder lokal kedua item ini belum terdapat.

```
PS L:\home\cookbook> dir python -r


    Directory: L:\home\cookbook\python


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        2022-03-26     05:43           1928 .gitignore
-a----        2022-03-26     05:43           1094 LICENSE
-a----        2022-03-26     05:43             29 README.md


PS L:\home\cookbook>
```

Untuk itu submodule `python` perlu diperbarui.

```
PS L:\home> cd cookbook
PS L:\home\cookbook> cd python
PS L:\home\cookbook\python> git pull
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 4 (delta 1), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (4/4), 716 bytes | 2.00 KiB/s, done.
From https://github.com/dudung/python
   e70da50..1ae3048  main       -> origin/main
Updating e70da50..1ae3048
Fast-forward
 hello/hello_world.py | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 hello/hello_world.py
PS L:\home\cookbook\python> cd ..
PS L:\home\cookbook\python>
```

Langkah di atas agak sedikit berbeda seperti yang disarankan [[4](#r04)]. Kemudian lihat kembali hasilnya.

```
PS L:\home\cookbook> dir python -r


    Directory: L:\home\cookbook\python


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        2022-03-26     06:26                hello
-a----        2022-03-26     05:43           1928 .gitignore
-a----        2022-03-26     05:43           1094 LICENSE
-a----        2022-03-26     05:43             29 README.md


    Directory: L:\home\cookbook\python\hello


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        2022-03-26     06:26             24 hello_world.py


PS L:\home\cookbook> tree
Folder PATH listing for volume Linux
Volume serial number is DC0D-53EE
L:.
└───python
    └───hello
PS L:\home\cookbook>
```

Telah terdapat tambahan folder `hello` dan berkas `hello_python` di dalamnya, sesuai dengan keadaan terkini. Lakukan commit untuk perbaruan ini.

```
PS L:\home\cookbook> git commit -a -m "Fetch upstream of python submodule"
[master fd49c8b] Fetch upstream of python submodule
 1 file changed, 1 insertion(+), 1 deletion(-)
PS L:\home\cookbook> git push
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 253 bytes | 126.00 KiB/s, done.
Total 2 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/dudung/cookbook.git
   34f0fea..fd49c8b  master -> master
PS L:\home\cookbook>
```

Repositori remote <https://github.com/dudung/cookbook> telah memiliki folder [python @ 1ae3048](https://github.com/dudung/python/tree/1ae3048b9ee8ac0b0c0f2f9f39c10102e1d4feb1) yang terkini.

Perbarui lagi repositori remote <https://github.com/dudung/python> dan tanpa masuk ke foder lokal `python` perintah pull pun dapat dilakukan [[4](#r04)].

```
PS L:\home\cookbook> git submodule foreach git pull
Entering 'python'
Updating 1ae3048..61731ff
Fast-forward
 hello/hello_world.py | 2 ++
 1 file changed, 2 insertions(+)
PS L:\home\cookbook> git commit -a -m "Fetch upstreams for all submodules"
[master 12a533a] Fetch upstreams for all submodules
 1 file changed, 1 insertion(+), 1 deletion(-)
PS L:\home\cookbook> git push
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 250 bytes | 83.00 KiB/s, done.
Total 2 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/dudung/cookbook.git
   fd49c8b..12a533a  master -> master
PS L:\home\cookbook>
```

Versi terkini folder [python @ 61731ff](https://github.com/dudung/python/tree/61731ff4bf455f5242cb9181582d4c6a46fae232) telah terdapat di <https://github.com/dudung/cookbook>.

### many submodules
Pemanfaatan `foreach` belum terasa pada contoh sebelumnya.

```
PS L:\home\cookbook> git submodule foreach git pull
Entering 'bash'
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 4 (delta 1), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (4/4), 727 bytes | 3.00 KiB/s, done.
From https://github.com/dudung/bash
   589f86c..31ffa2a  main       -> origin/main
Updating 589f86c..31ffa2a
Fast-forward
 hello/hello_world.sh | 2 ++
 1 file changed, 2 insertions(+)
 create mode 100644 hello/hello_world.sh
Entering 'basic'
Already up to date.
Entering 'cpp'
Already up to date.
Entering 'css'
Already up to date.
Entering 'fortran'
Already up to date.
Entering 'go'
Already up to date.
Entering 'java'
Already up to date.
Entering 'js'
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 4 (delta 1), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (4/4), 721 bytes | 4.00 KiB/s, done.
From https://github.com/dudung/js
   4da88b6..d8d4059  main       -> origin/main
Updating 4da88b6..d8d4059
Fast-forward
 hello/hello_world.js | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 hello/hello_world.js
Entering 'json'
Already up to date.
Entering 'lisp'
Already up to date.
Entering 'node.js'
Already up to date.
Entering 'pascal'
Already up to date.
Entering 'perl'
Already up to date.
Entering 'php'
Already up to date.
Entering 'python'
remote: Enumerating objects: 7, done.
remote: Counting objects: 100% (7/7), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 4 (delta 1), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (4/4), 707 bytes | 11.00 KiB/s, done.
From https://github.com/dudung/python
   61731ff..c50451d  main       -> origin/main
Updating 61731ff..c50451d
Fast-forward
 hello/hello_world.py | 2 --
 1 file changed, 2 deletions(-)
Entering 'r'
Already up to date.
Entering 'svg'
Already up to date.
Entering 'tex'
Already up to date.
PS L:\home\cookbook>
```

Pada contoh di atas ke-18 folder diperiksa repositori remotenya dan dilakukan pull bila terdapat perubahan yang belum ada pada repositori lokal terkait.

Terdapat temuan yang menarik bahwa `git init` tidak diperlukan lagi bila telah dilakukan `git submodule add`. Dari repositori-repositori di atas hanya folder `python` yang menggunakan `git init`. Walaupun belum mendapatkan rujukan mengenai hal ini, tetapi diduga saat penambahan submodule, inisialisasi sebagai suatu repositori lokal pun telah dilakukan secara implisit.


## exer
1. Bagaimana cara memeriksa apakah repositor lokal telah tertaut dengan suatu repositori remote di GitHub?


## notes
1. <a name='r01'></a>Ahmed Ashour, gronostaj, "Answer to 'Bring a local folder to remote git repo'", Super User, 7 Mar 2019, 11 Jan 2021, url <https://superuser.com/a/1412081/1005329> [20220325].
2. <a name='r02'></a>Schkn, "How To Add and Update Git Submodules", devconnected, 19 Dec 2019, url <https://devconnected.com/how-to-add-and-update-git-submodules/> [20220326].
3. <a name='r03'></a>CodeWizard, "Answer to 'What is the current way to remove a git submodule?'", Stack Overflow, 24 Apr 2015, url <https://stackoverflow.com/a/29850245/9475509> [20220326].
4. <a name='r04'></a>Daniel Andrei Mincă, Peter Mortensen, "Answer to 'Update Git submodule to latest commit on origin'", Stack Overflow, 17 Aug 2017, 16 Jun 2019, url <https://stackoverflow.com/a/45744725/9475509> [20220326].

{{< citeas >}}
