---
title: "fun with random number"
date: 2023-10-19T08:00:00+07:00
authors: ['Sparisoma Viridi']
tags: ['is3999']
draft: false
math: true
url: "0102"
---
{{< toc >}}


## introduction
+ A random number is a number generated using a large set of numbers and a mathematical algorithm which gives equal probability to all numbers occurring in the specified distribution, which are most commonly produced with the help of a random number generator ([Rouse, 2016](https://www.techopedia.com/definition/31706/random-number)).
+ It is a number which is generated for, or part of, a set exhibiting statistical randomness, where the statistical randomness is a characteristic where a numeric sequence is said to be statistically random when it contains no recognisable patterns or regularities ([WHS, 2021](http://whs-blogs.co.uk/teaching/what-is-a-random-number-and-what-is-the-random-number-generator/)).
+ A random number is a number chosen as if by chance from some specified distribution such that selection of a large set of these numbers reproduces the underlying distribution and almost always, such numbers are also required to be independent, so that there are no correlations between successive numbers
([Weisstein, 2023](https://mathworld.wolfram.com/RandomNumber.html)).


## random function
There is a function to generate random float number ([MND, 2023](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random?retiredLocale=de))
> The `Math.random()` static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.


## random number $\in [0, 1)$
+ Result
  ```
  0.7322
  0.7564
  0.5447
  0.5297
  0.0453
  0.2310
  0.4751
  0.9178
  0.1715
  0.5252
  ```
+ Code https://onecompiler.com/javascript/3zqvkr9k2
  ```js
  // set repetition
  N = 10;

  // set digit
  M = 4

  // generate random number
  for(var i = 0; i < N; i++) {
    x = Math.random();
    xs = x.toFixed(M)
    console.log(xs);
  }

  ```


## integer random number
+ Result
  ```
  [
    7, 4, 2, 5, 5, 4, 4, 5, 4, 4,
    2, 9, 7, 5, 4, 2, 6, 3, 4, 2,
    7, 6, 5, 5, 8, 7, 9, 3, 8, 8,
    3, 8, 6, 8, 9, 3, 2, 2, 3, 2
  ]
  ```
+ Code https://onecompiler.com/javascript/3zqvnpgc7
```js
// set repetition
N = 40;

// set range of integer
imin = 2;
imax = 9;


// create empty array
a = [];

// generate random number
for(var i = 0; i < N; i++) {
  x = Math.random();
  y = x * (imax - imin + 1) + imin;
  z = Math.floor(y);
  a.push(z);
}

console.log(a);
```


## randint in-house function
+ Result
  ```
  [
    11, 11, 11, 11, 12, 12, 13, 13, 13, 13, 14, 14,
    15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16,
    16, 16, 17, 17, 17, 18, 18, 18, 19, 20, 20, 21,
    21, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23,
    24, 24, 24, 24, 25, 25, 25, 25, 26, 26, 26, 26,
    27, 27, 28, 28, 28, 28, 28, 28, 29, 29, 29, 30,
    30, 30, 31, 31, 31, 31, 31, 32, 32, 33, 33, 33,
    35, 35, 35, 36, 36, 36, 37, 37, 37, 37, 37, 39,
    39, 40, 40, 40
  ]
  [
    25, 26, 12, 22, 25, 33, 21, 28, 16, 40, 13, 16,
    13, 31, 24, 18, 24, 28, 25, 23, 35, 22, 22, 37,
    37, 16, 22, 32, 31, 28, 33, 20, 15, 31, 36, 31,
    29, 26, 30, 37, 29, 31, 37, 15, 15, 23, 13, 15,
    39, 36, 22, 21, 27, 37, 30, 11, 18, 16, 17, 14,
    20, 13, 17, 32, 35, 25, 19, 28, 23, 11, 40, 33,
    24, 15, 17, 26, 16, 15, 29, 26, 28, 16, 24, 16,
    35, 11, 23, 16, 18, 27, 14, 36, 28, 22, 11, 30,
    12, 40, 39, 23
  ]
  ```
+ Code https://onecompiler.com/javascript/3zqvpgq53
  ```js
  // create randint function
  function randint(imin, imax) {
    x = Math.random();
    y = x * (imax - imin + 1) + imin;
    z = Math.floor(y);
    return z;
  }

  // create randintn
  function randintn(imin, imax, N) {
    a = [];
    for(var i = 0; i < N; i++) {
      a.push(randint(imin, imax))
    }
    return a;
  }

  // create array of integer random numbers
  x = randintn(11, 40, 100)
  y = [...x];
  console.log(y.sort());
  console.log(x);
  ```

## application(s)
+ [Random HTTP headers User-Agent: One way to reduce being blocked while web scraping](https://medium.com/@6unpnp/random-http-headers-user-agent-23bcdd8c0537).