---
title: "update hugo windows 10"
date: 2022-04-24T10:05:00+07:00
lastmod: 2022-04-24T22:19:00+07:00
author: viridi
draft: false
tags: ['hugo', 'update', 'windows']
url: "0066"
---
Tulisan ini dibuat berbarengan dengan update Hugo dari versi 0.95.0 ke 0.97.3 mengikuti suatu informasi [[1](#r01)]. Untuk menjalan Hugo digunakan sistem operasi Microsoft Windows 10 Home versi 10.0.19042 Build 19042.


## current version
Versi Hugo yang terinstal saat ini dapat diperoleh dengan

```
L:\home\bugx>hugo version
hugo v0.95.0-9F2E76AF+extended windows/amd64 
BuildDate=2022-03-16T14:20:19Z 
VendorInfo=gohugoio
```

yang memberikakan versi 0.95.0 dengan tanggal built pada 16 Mar 2022. Kemudian, terinformasikan dalam email kemarin [[2](#r02)] bahwa telah terdapat Hugo rilis 0.97.3 oleh beb (Bjørn Erik Pedersen) pada 18 Apr 2022.


## current errors
Pada penggunaan versi 0.95.0 sering muncul pesan-pesan berikut

```
panic: BUG: parent not set for "/blog/"

goroutine 743 [running]:
github.com/gohugoio/hugo/hugolib.(*pageMap).assembleSections.func1({0xc005143930, 0x6}, {0x2c9e4c0?, 0xc0053effb0})
        /root/project/hugo/hugolib/content_map_page.go:465 +0x6ba
github.com/armon/go-radix.recursiveWalk(0xc0054ba000, 0xc003e4bdb0)
        /go/pkg/mod/github.com/armon/go-radix@v1.0.0/radix.go:519 +0x45
github.com/armon/go-radix.recursiveWalk(0xc0054ba090?, 0xc003e4bdb0)
        /go/pkg/mod/github.com/armon/go-radix@v1.0.0/radix.go:525 +0xb3
github.com/armon/go-radix.recursiveWalk(0x146f340?, 0xc003e4bdb0)
        /go/pkg/mod/github.com/armon/go-radix@v1.0.0/radix.go:525 +0xb3
github.com/armon/go-radix.(*Tree).Walk(...)
        /go/pkg/mod/github.com/armon/go-radix@v1.0.0/radix.go:447
github.com/gohugoio/hugo/hugolib.(*pageMap).assembleSections(0xc005659e80?)
        /root/project/hugo/hugolib/content_map_page.go:435 +0x85
github.com/gohugoio/hugo/hugolib.(*pageMap).assemblePages(0xc005659e80)
        /root/project/hugo/hugolib/content_map_page.go:330 +0x4f
github.com/gohugoio/hugo/hugolib.(*pageMaps).AssemblePages.func1(0xc005659e80)
        /root/project/hugo/hugolib/content_map_page.go:719 +0x56
github.com/gohugoio/hugo/hugolib.(*pageMaps).withMaps.func1()
        /root/project/hugo/hugolib/content_map_page.go:787 +0x22
github.com/gohugoio/hugo/common/para.(*errGroupRunner).Run.func1()
        /root/project/hugo/common/para/para.go:52 +0x26
golang.org/x/sync/errgroup.(*Group).Go.func1()
        /go/pkg/mod/golang.org/x/sync@v0.0.0-20210220032951-036812b2e83c/errgroup/errgroup.go:57 +0x67
created by golang.org/x/sync/errgroup.(*Group).Go
        /go/pkg/mod/golang.org/x/sync@v0.0.0-20210220032951-036812b2e83c/errgroup/errgroup.go:54 +0x8d
```

yang membuat pemanggilan Hugo berhenti dan kendali kembali ke command prompt. Sampai sebelum tulisan ini dibuat masalah tersebut belum terselesaikan.


## download
Hugo rilis 0.97.3 dapat diperoleh di halaman rilisnya  [[3](#r03)] dan dipilih berkas `hugo_extended_0.97.3_Windows-64bit.zip`, walaupun belum memanfaatkan fitur perubahan SASS ataupu SCSS [[4](#r04)], di mana masih mencoba mencerna apakah SASS dan SCSS itu [[5](#r05)].


## install
Proses instalasi Hugo versi 0.97.3 dilakukan dengan mengekstrak isi berkas `hugo_extended_0.97.3_Windows-64bit.zip` ke folder tempat instalasi Hugo sebelumnya berada, yang dalam hal ini digunakan `C:\Hugo\bin`. Setelah itu dapat diperiksa versinya

```
L:\home\bugx>hugo version
hugo v0.97.3-078053a43d746a26aa3d48cf1ec7122ae78a9bb4+extended windows/amd64 BuildDate=2022-04-18T17:22:19Z
VendorInfo=gohugoio
```

yang telah berganti menjadi versi 0.97.3 dan telah dapat dijalankan seperti semula.

### errors
Pesan kesalahan

```
panic: BUG: parent not set for "/blog/"

goroutine 1098 [running]:
github.com/gohugoio/hugo/hugolib.(*pageMap).assembleSections.func1({0xc000ac0100, 0x6}, {0x1f8a4a0?, 0xc007176870})
        /root/project/hugo/hugolib/content_map_page.go:465 +0x6ba
github.com/armon/go-radix.recursiveWalk(0xc0071768a0, 0xc000d3ddb0)
        /go/pkg/mod/github.com/armon/go-radix@v1.0.0/radix.go:519 +0x45
github.com/armon/go-radix.recursiveWalk(0xc0041cf200?, 0xc000d3ddb0)
        /go/pkg/mod/github.com/armon/go-radix@v1.0.0/radix.go:525 +0xb3
github.com/armon/go-radix.recursiveWalk(0x6101e0?, 0xc000d3ddb0)
        /go/pkg/mod/github.com/armon/go-radix@v1.0.0/radix.go:525 +0xb3
github.com/armon/go-radix.(*Tree).Walk(...)
        /go/pkg/mod/github.com/armon/go-radix@v1.0.0/radix.go:447
github.com/gohugoio/hugo/hugolib.(*pageMap).assembleSections(0xc002ac2890?)
        /root/project/hugo/hugolib/content_map_page.go:435 +0x85
github.com/gohugoio/hugo/hugolib.(*pageMap).assemblePages(0xc002ac2890)
        /root/project/hugo/hugolib/content_map_page.go:330 +0x4f
github.com/gohugoio/hugo/hugolib.(*pageMaps).AssemblePages.func1(0xc002ac2890)
        /root/project/hugo/hugolib/content_map_page.go:719 +0x56
github.com/gohugoio/hugo/hugolib.(*pageMaps).withMaps.func1()
        /root/project/hugo/hugolib/content_map_page.go:787 +0x22
github.com/gohugoio/hugo/common/para.(*errGroupRunner).Run.func1()
        /root/project/hugo/common/para/para.go:52 +0x26
golang.org/x/sync/errgroup.(*Group).Go.func1()
        /go/pkg/mod/golang.org/x/sync@v0.0.0-20210220032951-036812b2e83c/errgroup/errgroup.go:57 +0x67
created by golang.org/x/sync/errgroup.(*Group).Go
        /go/pkg/mod/golang.org/x/sync@v0.0.0-20210220032951-036812b2e83c/errgroup/errgroup.go:54 +0x8d
```

masih muncul dan belum ada solusinya. Akan tetapi terdapat petunjuk terkait, seperti `panic: BUG: parent not set for "/categories"` yang terjadi saat situs dibangun dengan homepage dalam keadaan drafted [[6](#r06)]. Penelusuran lebih lanjut dapat dilakukan dan akan dilaporkan kemudian.

Selain itu terdapat pula

```
panic: runtime error: invalid memory address or nil pointer dereference
[signal 0xc0000005 code=0x0 addr=0x20 pc=0x1977021]

goroutine 183 [running]:
github.com/gohugoio/hugo/commands.(*commandeer).handleEvents(0xc000746300, 0xc003d9b4d0, 0xc003d28148, {0xc000008600?, 0x2f, 0x40}, 0xc00397c0c0?)
        /root/project/hugo/commands/hugo.go:1101 +0x721
github.com/gohugoio/hugo/commands.(*commandeer).newWatcher.func1()
        /root/project/hugo/commands/hugo.go:882 +0x26c
created by github.com/gohugoio/hugo/commands.(*commandeer).newWatcher
        /root/project/hugo/commands/hugo.go:873 +0x38d
```

yang belum dilacak informasinya.

## notes
1. <a name='r01'></a>Vladimir Likhanov, "Installing and updating Hugo on Windows", DocsMatter, 3 Aug 2021, url <https://www.docsmatter.org/post/hugo-installing-on-windows/> [20220424]. 
2. <a name='r02'></a>HUGO, "[HUGO] Summary", 23 Apr 2022, url <mailto:notifications@gohugo.discoursemail.com> [20220424].
3. <a name='r03'></a>bep, "Hugo v0.97.3", GitHub, 19 Apr 2022, url <https://github.com/gohugoio/hugo/releases/tag/v0.97.3> [20220424].
4. <a name='r04'></a>beb, "Should I use Hugo extended for a new Hugo Project?", 31 Aug 2018, url <https://discourse.gohugo.io/t/should-i-use-hugo-extended-for-a-new-hugo-project/13954/6?u=dudung> [20220424].
5. <a name='r05'></a>anon, Nam G VU, "What's the difference between SCSS and Sass?", 13 Apr 2011, 25 Dec 2022, url <https://stackoverflow.com/a/5654471/9475509> [20220424].

{{< citeas >}}
