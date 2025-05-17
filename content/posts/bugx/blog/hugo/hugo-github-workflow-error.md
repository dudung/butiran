---
title: "hugo github workflow error"
date: 2022-05-23T08:31:00+07:00
lastmod: 2022-05-23T18:22:00+07:00
author: viridi
mathjax: true
draft: false
tags: ['hugo', 'github', 'workflow', 'error']
url: "0072"
---
Sembari membantu U3 FI1201 [[1](#r01)] berupaya untuk meregistrasi permasalan workflow dari `bugx` ini yang belum terpecahkan. Sebelumnya sempat berfungsi dengan baik.


## solution
The example is for a private repository (user: [dudung](https://github.com/dudung), repo: [bugx-hugo-src](https://github.com/dudung/bugx-hugo-src)), but you can adapt it to yours.

### steps
1. Explore the page listing commits of a branch \
  https://github.com/dudung/bugx-hugo-src/commits/master
2. Look for the last failed check indicated with $\color{#f00}{\times}$ \
  https://github.com/dudung/bugx-hugo-src/commit/22c32b416cc22cb81f4c61985bd95931feb5658f
3. Visit build page showing the failed action by clicking $\color{#f00}{\times}$ indicator \
  https://github.com/dudung/bugx-hugo-src/runs/6548801081?check_suite_focus=true
  ```
  (×) Deploy
  ... 
  590 remote: Invalid username or password.
  591 fatal: Authentication failed for 
      'https://github.com/dudung/bugx.git/'
  592 Error: Action failed with "The process 
      '/usr/bin/git' failed with exit code 128"
  ```
4. Go to Actions tab \
  https://github.com/dudung/bugx-hugo-src/actions
5. Select the failed workflow and open the yml file \
  https://github.com/dudung/bugx-hugo-src/actions/workflows/main.yml
6. Find `Deploy` and `personal_token`, which gives `secrets.PERSONAL_TOKEN`
7. Generate new token and copy the value \
  https://github.com/settings/tokens
8. Open page for action secrets \
  https://github.com/dudung/bugx-hugo-src/settings/secrets/actions
9. Create new repository secret \
  https://github.com/dudung/bugx-hugo-src/settings/secrets/actions/new
10. Name it as `PERSONAL_TOKEN`, paste the value from previously new token, and Add secret

Perhatikan keterkaitan antara Langkah 6 --> 10 dan 7 --> 10.

Pembahasan pada bagian-bagian di bawah ini adalah sebelum solusi yang dimaksud di atas diperoleh dan bagian-bagian tersebut dipertahankan hanya sebagai catatan bagaimana solusi tersebut dapat diperoleh.


## current state
Keadaan saat ini pada suatu repo adalah seperti diberikan pada Gambar [1](#fig1) berikut.

![](/bugx/img/bugx/bugx-hugo-src-workflow-error.png)

Gambar <a name="fig1">1</a>. Build error dari workflow `bugx-hugo-ci`.

Isi dari berkas `main.yml` yang digunakan adalah sebagai berikut ini

```yaml
name: bugx-hugo-ci

on:
  push:
    branches: [ master ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
        with:
          submodules: true 
          fetch-depth: 1   

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'

      - name: Build
        run: hugo

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          personal_token: ${{ secrets.PERSONAL_TOKEN }}
          external_repository: dudung/bugx
          publish_branch: master
          publish_dir: ./public
```

dengan hanya sedikit penyesuaian dari [peaceiris/actions-gh-pages@v3](https://github.com/peaceiris/actions-gh-pages) [[2](#r02)].


## tokens
Suatu token dapat dibuat dengan mengunjungi https://github.com/settings/tokens dan membuatnya dengan nilai seperti

```
ghp_0Xx0Xx0Xx0Xx0Xx0Xx0Xx0Xx0Xx0Xx0Xx0Xx
```

yang merupakan kombinasi dari sembarang angka `0`, huruf besar `X` dan huruf kecil `x` membentuk 36 karakter. Di awalnya terdapat empat karakter `ghp_`.


## secrets
Kunjungi https://github.com/dudung/bugx/settings/secrets/actions untuk membuat secret

![](/bugx/img/bugx/repo-secrets.png)

Gambar <a name="fig2">2</a>. Daftar action secrets yang tersedia.

yang dalam hal ini adalah `PERSONAL_TOKEN`

![](/bugx/img/bugx/repo-secrets-personal-token.png)

Gambar <a name="fig3">3</a>. Memperbaharui `PERSONAL_TOKEN` dengan nilai token yang telah dibuat.

dengan isi token sebelumnya.


## result
GitHub Workflow akhirnya dapat berjalan kembali seperti pada gambar berikut ini.

![](/bugx/img/bugx/bugx-hugo-src-workflow-ok.png)

Gambar <a name="fig4">4</a>. Workflow `bugx-hugo-ci` di GitHub yang telah berfungsi kembali.

Contoh hasilnya adalah `bugx` ini yang dapat dilihat pada <https://dudung.github.io/bugx/> dengan salah satunya adalah tulisan ini.


## notes
1. <a name='r01'></a>Tim Ujian, "Panduan Ujian 3 FI1201 (Fisika Dasar IIA)", FMIPA, ITB, 20 Mei 2022, url <https://osf.io/jbtd3/> [20220523].
2. <a name='r02'></a>Shohei Ueda (Sponsor) and Other Contributors, "GitHub Pages Action", GitHub, 17 May 2022, url <https://github.com/peaceiris/actions-gh-pages> [20220523].

{{< citeas >}}
