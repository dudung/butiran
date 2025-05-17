---
title: "find right image width"
date: 2022-03-27T12:18:00+07:00
lastmod: 2022-03-27T16:56:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: true
tags: ['bugx', 'layout', 'image-width', 'draft', 'svg']
url: "0022"
draft: false
---
Masih dalam rangka migrasi bugx yang semula dengan [Jekyll](https://jekyllrb.com/) ke saat ini dengan [Hugo](https://gohugo.io/), perlu disesuaikan lebar gambar yang dapat disisipkan, sebagaimana hal ini juga terjadi pada sistem sebelumnya [[1](#r01)]. Ini terlihat terkait dengan saat ini menggunakan theme [hugo-theme-codex](https://github.com/jakewies/hugo-theme-codex) yang diinisialiasi Jake Wiesler [[2](#r02)].


## xlsx
Gambar-gambar berikut dibuat dengan menggunakan [Microsoft Office Excel 2007](https://www.microsoft.com/en-ww/microsoft-365/previous-versions/microsoft-excel-2007) dan disimpan screenshotnya dengan Paint.

![](/bugx/img/bugx/xlsx_z100_w36in_w348px.png) \
Gambar <a name='fig1'>1</a>. Kurva dengan font Times New Roman 11, zoom 100%, lebar 3.6 inch, dan lebar citra 348px.

![](/bugx/img/bugx/xlsx_z100_w40in_w386px.png) \
Gambar <a name='fig2'>2</a>. Kurva dengan font Times New Roman 11, zoom 100%, lebar 4 inch, dan lebar citra 386px.

![](/bugx/img/bugx/xlsx_z100_w50in_w482px.png) \
Gambar <a name='fig3'>3</a>. Kurva dengan font Times New Roman 11, zoom 100%, lebar 5 inch, dan lebar citra 483px.

Terlihat bahwa hasil pada Gambar [3](#fig5) ukuran fontnya paling mendekati ukuran font pada tulisan ini. Selain itu ukuran gambar yang lebih kecil akan diperlebar sehingga ukuran gambar akan tidak terjadi zoom-out otomatis perlu dipertahankan. Jadi, mungkin, untuk sementara 

> Excel 2007 \
> &nbsp;&nbsp;&nbsp;&nbsp; Zoom 100% \
> &nbsp;&nbsp;&nbsp;&nbsp; Width 5" (chart) \
> Paint \
> &nbsp;&nbsp;&nbsp;&nbsp; Width 480px (screenshot)

akan digunakan sebagai panduan sampai dimengerti bagaimana gambar yang lebih kecil tidak ter-zoom-out secara otomatis. Akan tetapi pada smartphone Samsung Galaxy A12 pada layarnya terlihat Gambar [2](#fig2) lebih baik.


## docx
Gambar-gambar berikut dibuat dengan menggunakan [Microsoft Office Word 2007](https://www.microsoft.com/en-us/microsoft-365/previous-versions/microsoft-word-2007) dan disimpan screenshotnya dengan Paint.

![](/bugx/img/bugx/docx_z100_w86cm_w304px.png) \
Gambar <a name='fig4'>4</a>. Gambar rangkaian DC dan medan magnetik oleh simpul berbentuk lingkaran dengan zoom 100% lebar gambar 8.6 cm, dan lebar citra 304p cm.

![](/bugx/img/bugx/docx_z120_w86cm_w364px.png) \
Gambar <a name='fig5'>5</a>. Gambar rangkaian DC dan medan magnetik oleh simpul berbentuk lingkaran dengan zoom 120% lebar gambar 8.6 cm, dan lebar citra 364p cm.

![](/bugx/img/bugx/docx_z140_w86cm_w424px.png) \
Gambar <a name='fig6'>6</a>. Gambar rangkaian DC dan medan magnetik oleh simpul berbentuk lingkaran dengan zoom 140% lebar gambar 8.6 cm, dan lebar citra 424p cm.

Saat ini ukuran gambar tidak diubah dan zoom pada berkas DOCX diubah. Gambar secara umum tidak berubah karena terjadi zoom-out otomatis saat halaman ini dimuat.


## svg
Gambar-gambar berikut ini dibuat dengan menggunakan [Inkscape 0.91](https://inkscape.org/release/inkscape-0.91/?latest=1) yang langsung menghasilkan berkas SVG untuk disisipkan.

{{< svg "/static/img/bugx/svg-w320px.svg" "fig7" "7" "$x$ Beberapa ukuran font Times New Roman dengan ukuran lebar 320px." >}}

Dengan menggunakan Inkscape terlihat bahwa ukuran font Times New Roman yang cocok adalah 14px dan ukuran gambar 320px tidak berubah dan telah cocok pada smartphone Galaxy A12.


## notes
1. <a name='r01'></a>Sparisoma Viridi, "test layout", bugx, 18 Nov 2021, url <https://bugx.vercel.app/pages/0004.html> [20220327].
2. <a name='r02'></a>Jake Wiesler, "This Site Is Now A Hugo Theme", Blog, jakewiesler.com, 4 Jan 2020, url <https://www.jakewiesler.com/blog/hugo-theme-codex> [20220327].


{{< citeas >}}
