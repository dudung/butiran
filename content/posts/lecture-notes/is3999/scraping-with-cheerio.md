---
title: "scraping with cheerio"
date: 2023-10-20T14:44:00+07:00
authors: ['Sparisoma Viridi']
tags: ['is3999']
draft: false
math: true
url: "0106"
---
{{< toc >}}


## website
url https://dudung.github.io/web2scrap/elem-class-attr
```html

<!DOCTYPE html>
<html>

  <head>
  <title>Title of the document</title>
  </head>

  <body>
  
    <div class="abcd">
      <div class="efgh">
        <span class="iiii">Apple</span>
        <span>Cat</span>
      </div>

      <div class="efgh">
        <a jsname="jjjj" href="https://www.google.com/">Google</a>
      </div>

      <div class="efgh">
        <cite city="serang">Surabaya</cite>
        <cite>Malang</cite>
      </div>
    </div>
  
  </body>

</html>
```

## js code
url https://github.com/Darshan972/GoogleScrapingBlogs/blob/main/GoogleorganicResultsScraper.js (original)
```js
const unirest = require("unirest");
const cheerio = require("cheerio");

const getOrganicData = () => {
  return unirest
    .get("http://dudung.github.io/web2scrap/elem-class-attr")
    .headers({
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
    })
    .then((response) => {
      
      // Display content of HTML file
      console.log(response.body);
      
      let $ = cheerio.load(response.body);
      
      let body = [];
      $("body").each((i, el) => {
        body[i] = $(el).text();
      });
      console.log(body);
      console.log();
      
      let abcd = [];
      $(".abcd").each((i, el) => {
        abcd[i] = $(el).text();
      });
      console.log(abcd);
      console.log();

      let efgh = [];
      $(".efgh > span").each((i, el) => {
        efgh[i] = $(el).text();
      });
      console.log(efgh);
      console.log();
      
      let kota_attr = [];
      $("cite").each((i, el) => {
        kota_attr[i] = $(el).attr("city");
      });
      console.log(kota_attr);
      console.log();
      
      let kota_cont = [];
      $("cite").each((i, el) => {
        kota_cont[i] = $(el).text();
      });
      console.log(kota_cont);
      console.log();
      
      let kota_attr_cont = [];
      $("cite[city='serang']").each((i, el) => {
        kota_attr_cont[i] = $(el).text();
      });
      console.log(kota_attr_cont);
      console.log();
      
      let a1 = [];
      $("a[jsname='jjjj']").each((i, el) => {
        a1[i] = $(el).text();
      });
      console.log(a1);
      console.log();
      
      let a2 = [];
      $("a[jsname='jjjj']").each((i, el) => {
        a2[i] = $(el).attr("href");
      });
      console.log(a2);
      console.log();
    });
};

getOrganicData();
```


## html file
+ Result
  ```bash
  <!DOCTYPE html>
  <html>

    <head>
    <title>Title of the document</title>
    </head>

    <body>

      <div class="abcd">
        <div class="efgh">
          <span class="iiii">Apple</span>
          <span>Cat</span>
        </div>

        <div class="efgh">
          <a jsname="jjjj" href="https://www.google.com/">Google</a>
        </div>

        <div class="efgh">
          <cite city="serang">Surabaya</cite>
          <cite>Malang</cite>
        </div>
      </div>

    </body>

  </html>
  ```
+ Snippet
  ```js
  console.log(response.body);
  ```

## elem body to text
+ Result
  ```bash
  [
    '\n' +
      '  \n' +
      '    \n' +
      '      \n' +
      '        Apple\n' +
      '        Cat\n' +
      '      \n' +
      '\n' +
      '      \n' +
      '        Google\n' +
      '      \n' +
      '\n' +
      '      \n' +
      '        Surabaya\n' +
      '        Malang\n' +
      '      \n' +
      '    \n' +
      '  \n' +
      '  \n' +
      '\n' +
      '\n'
  ]
  ```
+ Snippet
  ```js
  let body = [];
  $("body").each((i, el) => {
    body[i] = $(el).text();
  });
  console.log(body);
  console.log();
  ```

## class abcd to text
+ Result
  ```bash
  [
    '\n' +
      '      \n' +
      '        Apple\n' +
      '        Cat\n' +
      '      \n' +
      '\n' +
      '      \n' +
      '        Google\n' +
      '      \n' +
      '\n' +
      '      \n' +
      '        Surabaya\n' +
      '        Malang\n' +
      '      \n' +
      '    '
  ]
  ```
+ Code
  ```js
  let abcd = [];
  $(".abcd").each((i, el) => {
    abcd[i] = $(el).text();
  });
  console.log(abcd);
  console.log();
  ```


## class efgh, elem span to text
+ Result
  ```bash
  [ 'Apple', 'Cat' ]
  ```
+ Code
  ```js
  let efgh = [];
  $(".efgh > span").each((i, el) => {
    efgh[i] = $(el).text();
  });
  console.log(efgh);
  console.log();
  ```


## elem cite, attr city
+ Result
  ```bash
  [ 'serang', undefined ]
  ```
+ Code
```js
let kota_attr = [];
$("cite").each((i, el) => {
  kota_attr[i] = $(el).attr("city");
});
console.log(kota_attr);
console.log();
```

      
## elem cite to text
+ Result
  ```bash
  [ 'Surabaya', 'Malang' ]
  ```
+ Code
```js
let kota_cont = [];
$("cite").each((i, el) => {
  kota_cont[i] = $(el).text();
});
console.log(kota_cont);
console.log();
```

## elem attr to text
+ Result
  ```bash
  [ 'Surabaya' ]
  ```
+ Code
  ```js
  let kota_attr_cont = [];
  $("cite[city='serang']").each((i, el) => {
    kota_attr_cont[i] = $(el).text();
  });
  console.log(kota_attr_cont);
  console.log();
  ```


## elem attr to text
+ Result
  ```bash
  [ 'Google' ]
  ```
+ Code
```js
let a1 = [];
$("a[jsname='jjjj']").each((i, el) => {
  a1[i] = $(el).text();
});
console.log(a1);
console.log();
```


## elem attr attr
+ Result
  ```bash
  [ 'https://www.google.com/' ]
  ```
+ Code
  ```js
  let a2 = [];
  $("a[jsname='jjjj']").each((i, el) => {
    a2[i] = $(el).attr("href");
  });
  console.log(a2);
  console.log();
  ```
