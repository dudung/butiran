---
title: "too slow for stackoverflow"
date: 2022-04-01T22:30:00+07:00
lastmod: 2022-04-01T23:43:00+07:00
author: viridi
mathjax: false
mermaid: false
chartjs: false
tags: ['stack-overflow', 'onecompiler', 'javascript', 'loop']
url: "0030"
draft: false
---
Stack Overflow (SO) merupakan suatu situs web tanya-jawab untuk programer profesional dan antusias [[1](#r01)], yang sayangnya amat cepat dan dinamis sehingga sebagai pemula akan ketinggalan dalam memberi respons.


## closed and deleted question
Terdapat suatu pertanyaan dari [A100D](https://stackoverflow.com/users/14139816/a100d) dengan judul [Execution order of nested loops in javascript](https://stackoverflow.com/questions/71708318/execution-order-of-nested-loops-in-javascript) yang telah dihapus, bersamaan dengan [pengusulan penyuntingannya](https://stackoverflow.com/review/suggested-edits/31434792). Pengusulan ini dilakukan karena saat akan menjawabnya, telah ditutup di tengah-tengah menjawab. Ya, terlalu lambat untuk Stack Overflow.

### the question
Can someone explain: How these nested loops order works in order to get the square of an specified number? [[2](#r02)].

```javascript
function square(n) {
   let result = 0;
   for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
         result += 1;
      }
   }
   return result;
}

console.log(`The Result Is: ${square(2)}`);
```

### suggested edit
Suppose we have two nested loops.

```javascript
function square(n) {
   let result = 0;
   for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
         result += 1;
      }
   }
   return result;
}

console.log(`The Result Is: ${square(2)}`);
```

How we can show when and where (in which loop) the variable result is changed? And what is it current values at certain `i` and `j` values, e.g when `i = 0` and `j = 1`.

Arsip kedua bagian di atas masih tersisa melalui tautan pada browser history [[3](#r03)], akan tetapi tidak tahu sampai kapan dapat tetap diakses di SO.

### prepared answer
Jawaban berikut sedang disiapkan saat pertanyaan ditutup, lalu saat akan mengusulkan perubahan, pertanyaan dihapus :-D.

```javascript
function square(n) {
  let result = 0;
  console.log("result: " + result)
  for (let i = 1; i <= n; i++) {
    console.log("i:" + i);
    console.log("  result: " + result)
    for (let j = 1; j <= n; j++) {
      console.log("  j:" + j);
      result += 1;
      console.log("    result: " + result)
    }
  }
  return result;
}

console.log(`The Result Is: ${square(2)}`);
```

dengan hasilnya adalah

```batch
Output:

result: 0
i:1
  result: 0
  j:1
    result: 1
  j:2
    result: 2
i:2
  result: 2
  j:1
    result: 3
  j:2
    result: 4
The Result Is: 4
```

di mana kode di atas dapat dicoba di OneCompiler [3xxugqn3j](https://onecompiler.com/javascript/3xxugqn3j). Kode ini diharapkan dapat menjelaskan peran masing-masing loop dalam mengubah isi variabel `result`. Sayangnya belum tahu bagaimana cara berkomunikasi dengan A100D [[4](#r04)] untuk menyampaikan hal ini.


## -4
Kaget dengan tampilan SO yang blur dengan warna kacau, mengajukan suatu pertanyaan menggelikan [[5](#r05)] yang menyebakan downvote 4 poin sehingga reputasi menjadi 1 saat ini :-p.

### +2
Mendapatkan 2 poin karena menyunting artikel yang dihapus [[2](#r02)] sehingga poin saat ini adalah 3. Cukup membingungkan bukan :-).

### -6
Sebenarnya sebelumnya pun pernah mendapatkan downvote 6 poin untuk suatu pertanyaan yang telah dihapus 3 tahun dan 3 bulan yang lalu karena tidak ada yang menjawabnya walau telah dilihat 92 kali [[6](#r06)].


## notes
1. <a name='r01'></a>Wikipedia contributors, "Stack Overflow", Wikipedia, The Free Encyclopedia, 27 March 2022, 13:05 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1079564104> [20220401].
2. <a name='r02'></a>A100D, "Execution order of nested loops in javascript", Stack Overflow, 1 Apr 2022, url <https://stackoverflow.com/questions/71708318/execution-order-of-nested-loops-in-javascript> [20220401]. 
3. <a name='r03'></a>dudung, "Suggested edits", Stack Overflow, 1 Apr 2022, url <https://stackoverflow.com/review/suggested-edits/31434792> [20220401].
4. <a name='r04'></a>A100D, "A100D", Stack Overflow, url <https://stackoverflow.com/users/14139816/a100d> [20220401].
5. <a name='r05'></a>dudung, "StackOverflow style for 3d glasses", Stack Overflow, 1 Apr 2022, url <https://stackoverflow.com/q/71707923/9475509> [20220401].
6. <a name='r06'></a>dudung, "Swap two elements of C++ vector with insert and erase", Stack Overflow, 24 Dec 2018, url <https://stackoverflow.com/q/53908371/9475509> [20220401].

{{< citeas >}}
