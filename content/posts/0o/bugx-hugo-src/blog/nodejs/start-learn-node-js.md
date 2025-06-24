---
title: "start learn node.js"
date: 2022-05-11T19:18:00+07:00
lastmod: 2022-05-12T06:03:00+0700
author: viridi
mathjax: false
mermaid: false
chartjs: true
tags: ['node.js', 'start']
url: "0069"
draft: false
---
Node.js merupakan suatu platform untuk pengembangan program JavaScript mandiri (standalone) yang berjalan tanpa kebergantungan pada aplikasi di host, sebagaimana suatu piranti lunak penjelajah web (web browser) bekerja [[1](#r01)]. Platform ini dibangun di atas mesin JavaScript V8 Google Chrome untuk mengembangkan aplikasi oneline chat, situs video streaming, aplikasi single-page, dan lainnya, serta digunakan oleh berbagai perusahaan besar dan startup seperti Netflix, PayPal NASA, Walmart sebagai contohnya [[2](#r02)]. Node.js yang bukan merupakan framework ataupun bahasa pemrograman sebagaimana kebanyakan orang salah mengerti dan memahaminya, sering digunakan untuk membuat layanan back-end dan karena menggunakan JavaScript memudahkan programmer yang sudah terbiasa menggembangkan aplikasi front-end dengan JavaScript untuk beralih ke mengembangkan aplikasi dengan platform ini [[3](#r03)]. Disamping terdapat keuntungan menggunakan Node.js terdapat pula kekurangannya yang perlu diperhatikan dalam pengembangan aplikasi [[4](#r04)]. Setelah melakukan instalasi Node.js suatu web server dapat dengan mudah dibangun [[5](#r05)], yang akan disinggung dengan singkat di sini.


## version
Saat ini digunakan

```powershell
PS L:\home\cookbook> node --version
v16.14.2
```

Node.js versi 16.14.2 yang dirilis pada 17 Maret 2022 [[6](#r06)].


## web server
Web server dapat dibuat dengan menggunakan kode berikut [[5](#r05)].

```js
/*
  app.js
  First web server
  
  url https://nodejs.org/en/docs/guides/getting-started-guide/
  [20220511].
*/
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

yang kemudian dijalankan dengan

```ps
PS L:\home\cookbook\node.js\hello> node app.js
Server running at http://127.0.0.1:3000/
```

dan dapat dilihat pada penjelajah web, e.g. Google Chrome.

![](/bugx/img/nodejs/hello/nodejs-hello-world.png)

Gambar <a name='fig1'>1</a>. Web server sederhana dengan Node.js dengan Google Chrome pada <http://localhost:3000>.

Hasil menjalankan program `app.js` diberikan pada Gambar [1](#fig1).


## express
Untuk dapat menggunakan framework Express [[7](#r07)] perlu dilakukan instalasi

```powershell
PS L:\home\cookbook\node.js\hello> npm install express

added 57 packages, and audited 58 packages in 18s

7 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
npm notice
npm notice New minor version of npm available! 8.5.0 -> 8.9.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v8.9.0
npm notice Run npm install -g npm@8.9.0 to update!
npm notice
```

sehingga dapat dijalankan

```powershell
PS L:\home\cookbook\node.js\hello> node app-express
Server ready
```

dengan hasilnya diberikan pada Gambar [2](#fig2).

![](/bugx/img/nodejs/hello/nodejs-express-hello-world.png)

Gambar <a name='fig2'>2</a>. Web server sederhana Node.js dengan framework Express dilihat menggunakan Google Chrome pada <http://localhost:3000>.

Bila pada konsole ditekan Ctrl-C dan Google Chrome dilakukan refresh akan diperoleh hasil seperti Gambar [3](#fig3).

![](/bugx/img/nodejs/hello/nodejs-express-hello-world-ctrl-c.png)

Gambar <a name='fig3'>3</a>. Tampilan Google Chrome saat web server dimatikan dengan Ctrl-C pada konsol.

```js
/*
  app-express.js
  First web server with Express
  
  url https://nodejs.dev/learn/how-to-exit-from-a-nodejs-program
  [20220511].
*/
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hi!');
});

const server = app.listen(3000, () => console.log('Server ready'));

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated');
  });
});
```

Gambar [2](#fig2) diperoleh dengan menjalan program `app-express.js`.


## query and cmd args
Argument dapat diberikan pada command line saat web server dipanggil, misalnya melalui Windows PowerShell.

![](/bugx/img/nodejs/hello/demo-http-url-query-cmd-arg-0.png)

Gambar <a name='fig4'>4</a>. Web server dibuat dengan Node.js dipanggil melalui Windows PowerShell command line.

Dan saat suatu penjelajah internet dibuka, e.g. Google Chrome, dapat diberikan query pada address bar yang juga dapat ditangkap oleh program web server.

![](/bugx/img/nodejs/hello/demo-http-url-query-cmd-arg-1a.png)<br>
![](/bugx/img/nodejs/hello/demo-http-url-query-cmd-arg-1b.png)<br>
![](/bugx/img/nodejs/hello/demo-http-url-query-cmd-arg-1c.png)<br>
![](/bugx/img/nodejs/hello/demo-http-url-query-cmd-arg-1d.png)<br>
![](/bugx/img/nodejs/hello/demo-http-url-query-cmd-arg-1e.png)<br>
![](/bugx/img/nodejs/hello/demo-http-url-query-cmd-arg-1f.png)<br>
![](/bugx/img/nodejs/hello/demo-http-url-query-cmd-arg-1g.png)

Gambar <a name='fig5'>5</a>. Web server dibuat dengan Node.js yang ditampilkan dengan Google Chrome dan query terkait yang diberikan.

Dua contoh terakhir menggambarkan bahwa untuk spasi ` ` &nbsp; akan digantikan dengan `%20` dan karakter caret `^` dengan `%5E`.

```js
/*
  demo_http_url_query_cmd_arg.js
  Read query string and command line arguments
  
  url https://www.w3schools.com/nodejs/nodejs_http
  .asp [20220511].
  url https://nodejs.dev/learn/nodejs-accept-arguments
  -from-the-command-line [20220512].
*/

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);
```

Selanjutnya dapat ditelusuri lebih lanjut informasi lebih lanjut mengenai command line argument [[8](#r08)] dan query string [[9](#r09)].


## notes
1. <a name='r01'></a>Stephan Augsten, "Stephan Augsten", Dev Insider, 8 Des 2020, url <https://www.dev-insider.de/was-ist-nodejs-a-972703/> [20220511].
2. <a name='r02'></a>Taha Sufiyan, "What is Node.js: A Comprehensive Guide", Simplilearn, 3 Jun 2021, url <https://www.simplilearn.com/tutorials/nodejs-tutorial/what-is-nodejs> [20220511].
3. <a name='r03'></a>anuupadhyay, "Introduction to Node.js", GeeksforGeeks, 10 Nov 2021, url <https://www.geeksforgeeks.org/introduction-to-node-js/> [20220511].
4. <a name='r04'></a>altexsoft, "The Good and the Bad of Node.js Web App Development", AltexSoft, 21 Oct 2019, url <https://www.altexsoft.com/blog/engineering/the-good-and-the-bad-of-node-js-web-app-development/> [20220511].
5. <a name='r05'></a>Node.js, "How do I start with Node.js after I installed it?", Node.js API reference documentation, OpenJS Foundation, url <https://nodejs.org/en/docs/guides/getting-started-guide/> [20220511].
6. <a name='r06'></a>"Node.js", v16.14.2, OpenJS Foundation, 17 Mar 2022, url <https://nodejs.org/download/release/v16.14.2/> [20220511]
7. <a name='r07'></a>T. J. Holowaychuk, Douglas Christopher Wilson, Other Contributors, "express", version 4.18.1,  NPM, 29 Apr 2022, url <https://www.npmjs.com/package/express> [20220511].
8. <a name='r08'></a>Node.js, "Node.js, accept arguments from the command line", OpenJS Foundation, url <https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line> [20220512].
9. <a name='r09'></a>-, "Node.js HTTP Module", W3 Schools, Refsnes Data, 2022, url <https://www.w3schools.com/nodejs/nodejs_http.asp> [20220512].

{{< citeas >}}
