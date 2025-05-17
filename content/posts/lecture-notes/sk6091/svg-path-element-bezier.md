---
title: "svg <path> element - bezier"
date: 2023-10-29T03:59:00+07:00
authors: ['Sparisoma Viridi']
tags: ['sk6091']
draft: false
math: true
url: "0125"
---
{{< toc >}}


## refs
+ Basic shapes ([MDN, 2023](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes)).
+ Paths ([MDN, 2023](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths)).
+ &lt;text&gt; ([MDN, 2023](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text)).
+ Answer to "vertical alignment of text element in SVG" ([West & Currie, 2016](https://stackoverflow.com/a/12250444/9475509))


## circle
{{< html >}}
<svg
  version="1.1" xmlns="http://www.w3.org/2000/svg"
  width="200" height="200"
  style="background: #eee;">
    <circle cx="100" cy="100" r="50"/>
</svg>
{{< /html >}}
```svg
<svg
  version="1.1" xmlns="http://www.w3.org/2000/svg"
  width="200" height="200"
  style="background: #eee;">
    <circle cx="100" cy="100" r="50"/>
</svg>
```


## line
{{< html >}}
<svg
  version="1.1" xmlns="http://www.w3.org/2000/svg"
  width="200" height="200"
  style="background: #eee;">
    <line x1="50" x2="150" y1="50" y2="150"
      stroke="black" stroke-width="5" />
</svg>
{{< /html >}}
```svg
<svg
  version="1.1" xmlns="http://www.w3.org/2000/svg"
  width="200" height="200"
  style="background: #eee;">
    <line x1="50" x2="150" y1="50" y2="150"
      stroke="black" stroke-width="5" />
</svg>
```

## text
{{< html >}}
<svg
  version="1.1" xmlns="http://www.w3.org/2000/svg"
  width="200" height="200"
  style="background: #eee;">
    <text x="100" y="100" text-anchor="middle" 
      alignment-baseline="middle">(100, 100)</text>
    <circle cx="100" cy="100" r="5" fill="red" />
</svg>
{{< /html >}}
```svg
<svg
  version="1.1" xmlns="http://www.w3.org/2000/svg"
  width="200" height="200"
  style="background: #eee;">
    <text x="100" y="100" text-anchor="middle" 
      alignment-baseline="middle">(100, 100)</text>
    <circle cx="100" cy="100" r="5" fill="red" />
</svg>
```

## circle-line-circle
{{< html >}}
<svg
  version="1.1" xmlns="http://www.w3.org/2000/svg"
  width="200" height="200"
  style="background: #eee;">
    <circle cx="150" cy="50" r="4"/>
    <line x1="150" y1="50" x2="50" y2="150"  
      stroke="black" stroke-width="2" />
    <circle cx="50" cy="150" r="4"/>
</svg>
{{< /html >}}
```svg
<svg
  version="1.1" xmlns="http://www.w3.org/2000/svg"
  width="200" height="200"
  style="background: #eee;">
    <circle cx="150" cy="50" r="4"/>
    <line x1="150" y1="50" x2="50" y2="150"  
      stroke="black" stroke-width="2" />
    <circle cx="50" cy="150" r="4"/>
</svg>
```


## path bezier
{{< html >}}
<svg
  version="1.1" xmlns="http://www.w3.org/2000/svg"
  width="200" height="200"
  style="background: #eee;">
    <path d="M 20 150 Q 100 50 180 150"
      stroke="black" stroke-width="3" fill="none" />
    <circle cx="20" cy="150" r="4" />
    <circle cx="100" cy="50" r="4" fill="red" />
    <circle cx="180" cy="150" r="4" />
    <line x1="20" y1="150" x2="100" y2="50"  
      stroke="red" stroke-width="1" stroke-dasharray="5 5" />
    <line x1="100" y1="50" x2="180" y2="150"  
      stroke="red" stroke-width="1" stroke-dasharray="5 5" />
    <text x="20" y="150" text-anchor="start" alignment-baseline="before-edge">(20, 150)</text>
    <text x="180" y="150" text-anchor="end" alignment-baseline="before-edge">(180, 150)</text>
    <text x="100" y="50" text-anchor="middle" alignment-baseline="after-edge">(100, 50)</text>
</svg>
{{< /html >}}
```svg
<svg
  version="1.1" xmlns="http://www.w3.org/2000/svg"
  width="200" height="200"
  style="background: #eee;">
    <path  d="M 20 150 Q 100 50 180 150"
      stroke="black" stroke-width="3" fill="none" />
</svg>
```

## more points 1
{{< html >}}
<svg
  version="1.1" xmlns="http://www.w3.org/2000/svg"
  width="520" height="320"
  style="background: #eee;">
    <path 
      d="
        M 20 150
        Q 100 50 180 150
        Q 260 250 340 150
        Q 420 50 500 150
      "
      stroke="black" stroke-width="3" fill="none" />
    <circle cx="20" cy="150" r="4" />
    <circle cx="100" cy="50" r="4" fill="red" />
    <circle cx="180" cy="150" r="4" />
    <circle cx="260" cy="250" r="4" fill="red" />
    <circle cx="340" cy="150" r="4" />
    <circle cx="420" cy="50" r="4" fill="red" />
    <circle cx="500" cy="150" r="4" />
    <line x1="20" y1="150" x2="100" y2="50"  
      stroke="red" stroke-width="1" stroke-dasharray="5 5" />
    <line x1="100" y1="50" x2="180" y2="150" 
      stroke="red" stroke-width="1" stroke-dasharray="5 5" />
    <line x1="180" y1="150" x2="260" y2="250" 
      stroke="red" stroke-width="1" stroke-dasharray="5 5" />
    <line x1="340" y1="150" x2="260" y2="250" 
      stroke="red" stroke-width="1" stroke-dasharray="5 5" />
    <line x1="340" y1="150" x2="420" y2="50" 
      stroke="red" stroke-width="1" stroke-dasharray="5 5" />
    <line x1="420" y1="50" x2="500" y2="150" 
      stroke="red" stroke-width="1" stroke-dasharray="5 5" />
    <text x="20" y="150" text-anchor="start" alignment-baseline="before-edge">(20, 150)</text>
    <text x="180" y="150" text-anchor="end" alignment-baseline="before-edge">(180, 150)</text>
    <text x="100" y="50" text-anchor="middle" alignment-baseline="after-edge">(100, 50)</text>
    <text x="260" y="250" text-anchor="middle" alignment-baseline="before-edge">(260, 250)</text>
    <text x="340" y="150" text-anchor="end" alignment-baseline="after-edge">(340, 150)</text>
    <text x="420" y="50" text-anchor="middle" alignment-baseline="after-edge">(420, 50)</text>
    <text x="500" y="150" text-anchor="end" alignment-baseline="before-edge">(500, 150)</text>
</svg>
{{< /html >}}
```svg
<svg
  version="1.1" xmlns="http://www.w3.org/2000/svg"
  width="520" height="320"
  style="background: #eee;">
    <path 
      d="
        M 20 150
        Q 100 50 180 150
        Q 260 250 340 150
        Q 420 50 500 150
      "
      stroke="black" stroke-width="3" fill="none" />
</svg>
```


## more points 1 (T instead of Q)
{{< html >}}
<svg
  version="1.1" xmlns="http://www.w3.org/2000/svg"
  width="520" height="320"
  style="background: #eee;">
    <path 
      d="
        M 20 150
        Q 100 50 180 150
        T 340 150
        T 500 150
      "
      stroke="black" stroke-width="3" fill="none" />
    <circle cx="20" cy="150" r="4" />
    <circle cx="100" cy="50" r="4" fill="red" />
    <circle cx="180" cy="150" r="4" />
    <circle cx="260" cy="250" r="4" fill="red" />
    <circle cx="340" cy="150" r="4" />
    <circle cx="420" cy="50" r="4" fill="red" />
    <circle cx="500" cy="150" r="4" />
    <line x1="20" y1="150" x2="100" y2="50"  
      stroke="red" stroke-width="1" stroke-dasharray="5 5" />
    <line x1="100" y1="50" x2="180" y2="150" 
      stroke="red" stroke-width="1" stroke-dasharray="5 5" />
    <line x1="180" y1="150" x2="260" y2="250" 
      stroke="red" stroke-width="1" stroke-dasharray="5 5" />
    <line x1="340" y1="150" x2="260" y2="250" 
      stroke="red" stroke-width="1" stroke-dasharray="5 5" />
    <line x1="340" y1="150" x2="420" y2="50" 
      stroke="red" stroke-width="1" stroke-dasharray="5 5" />
    <line x1="420" y1="50" x2="500" y2="150" 
      stroke="red" stroke-width="1" stroke-dasharray="5 5" />
    <text x="20" y="150" text-anchor="start" alignment-baseline="before-edge">(20, 150)</text>
    <text x="180" y="150" text-anchor="end" alignment-baseline="before-edge">(180, 150)</text>
    <text x="100" y="50" text-anchor="middle" alignment-baseline="after-edge">(100, 50)</text>
    <text x="260" y="250" text-anchor="middle" alignment-baseline="before-edge">(260, 250)</text>
    <text x="340" y="150" text-anchor="end" alignment-baseline="after-edge">(340, 150)</text>
    <text x="420" y="50" text-anchor="middle" alignment-baseline="after-edge">(420, 50)</text>
    <text x="500" y="150" text-anchor="end" alignment-baseline="before-edge">(500, 150)</text>
</svg>
{{< /html >}}
```svg
<svg
  version="1.1" xmlns="http://www.w3.org/2000/svg"
  width="520" height="320"
  style="background: #eee;">
    <path 
      d="
        M 20 150
        Q 100 50 180 150
        T 340 150
        T 500 150
      "
      stroke="black" stroke-width="3" fill="none" />
</svg>
```


## more points 2
{{< html >}}
<svg
  version="1.1" xmlns="http://www.w3.org/2000/svg"
  width="520" height="320"
  style="background: #eee;">
    <path 
      d="
        M 20 150
        Q 100 50 180 150
        Q 260 250 400 150
        Q 420 50 500 150
      "
      stroke="black" stroke-width="3" fill="none" />
    <circle cx="20" cy="150" r="4" />
    <circle cx="100" cy="50" r="4" fill="red" />
    <circle cx="180" cy="150" r="4" />
    <circle cx="260" cy="250" r="4" fill="red" />
    <circle cx="400" cy="150" r="4" />
    <circle cx="420" cy="50" r="4" fill="red" />
    <circle cx="500" cy="150" r="4" />
    <line x1="20" y1="150" x2="100" y2="50"  
      stroke="red" stroke-width="1" stroke-dasharray="5 5" />
    <line x1="100" y1="50" x2="180" y2="150" 
      stroke="red" stroke-width="1" stroke-dasharray="5 5" />
    <line x1="180" y1="150" x2="260" y2="250" 
      stroke="red" stroke-width="1" stroke-dasharray="5 5" />
    <line x1="400" y1="150" x2="260" y2="250" 
      stroke="red" stroke-width="1" stroke-dasharray="5 5" />
    <line x1="400" y1="150" x2="420" y2="50" 
      stroke="red" stroke-width="1" stroke-dasharray="5 5" />
    <line x1="420" y1="50" x2="500" y2="150" 
      stroke="red" stroke-width="1" stroke-dasharray="5 5" />
    <text x="20" y="150" text-anchor="start" alignment-baseline="before-edge">(20, 150)</text>
    <text x="180" y="150" text-anchor="end" alignment-baseline="before-edge">(180, 150)</text>
    <text x="100" y="50" text-anchor="middle" alignment-baseline="after-edge">(100, 50)</text>
    <text x="260" y="250" text-anchor="middle" alignment-baseline="before-edge">(260, 250)</text>
    <text x="400" y="150" text-anchor="end" alignment-baseline="after-edge">(400, 150)</text>
    <text x="420" y="50" text-anchor="middle" alignment-baseline="after-edge">(420, 50)</text>
    <text x="500" y="150" text-anchor="end" alignment-baseline="before-edge">(500, 150)</text>
</svg>
{{< /html >}}
```svg
<svg
  version="1.1" xmlns="http://www.w3.org/2000/svg"
  width="520" height="320"
  style="background: #eee;">
    <path 
      d="
        M 20 150
        Q 100 50 180 150
        Q 260 250 340 150
        Q 420 50 500 150
      "
      stroke="black" stroke-width="3" fill="none" />
</svg>
```


## more points 2 (T instead of Q)
{{< html >}}
<svg
  version="1.1" xmlns="http://www.w3.org/2000/svg"
  width="600" height="320"
  style="background: #eee;">
    <path 
      d="
        M 20 150
        Q 100 50 180 150
        T 400 150
        T 500 150
      "
      stroke="black" stroke-width="3" fill="none" />
    <circle cx="20" cy="150" r="4" />
    <circle cx="100" cy="50" r="4" fill="red" />
    <circle cx="180" cy="150" r="4" />
    <circle cx="260" cy="250" r="4" fill="red" />
    <circle cx="400" cy="150" r="4" />
    <circle cx="540" cy="50" r="4" fill="red" />
    <circle cx="500" cy="150" r="4" />
    <line x1="20" y1="150" x2="100" y2="50"  
      stroke="red" stroke-width="1" stroke-dasharray="5 5" />
    <line x1="100" y1="50" x2="180" y2="150" 
      stroke="red" stroke-width="1" stroke-dasharray="5 5" />
    <line x1="180" y1="150" x2="260" y2="250" 
      stroke="red" stroke-width="1" stroke-dasharray="5 5" />
    <line x1="400" y1="150" x2="260" y2="250" 
      stroke="red" stroke-width="1" stroke-dasharray="5 5" />
    <line x1="400" y1="150" x2="540" y2="50" 
      stroke="red" stroke-width="1" stroke-dasharray="5 5" />
    <line x1="540" y1="50" x2="500" y2="150" 
      stroke="red" stroke-width="1" stroke-dasharray="5 5" />
    <text x="20" y="150" text-anchor="start" alignment-baseline="before-edge">(20, 150)</text>
    <text x="180" y="150" text-anchor="end" alignment-baseline="before-edge">(180, 150)</text>
    <text x="100" y="50" text-anchor="middle" alignment-baseline="after-edge">(100, 50)</text>
    <text x="260" y="250" text-anchor="middle" alignment-baseline="before-edge">(260, 250)</text>
    <text x="400" y="150" text-anchor="end" alignment-baseline="after-edge">(400, 150)</text>
    <text x="540" y="50" text-anchor="middle" alignment-baseline="after-edge">(540, 50)</text>
    <text x="500" y="150" text-anchor="end" alignment-baseline="before-edge">(500, 150)</text>
</svg>
{{< /html >}}
```svg
<svg
  version="1.1" xmlns="http://www.w3.org/2000/svg"
  width="520" height="320"
  style="background: #eee;">
    <path 
      d="
        M 20 150
        Q 100 50 180 150
        T 400 150
        T 500 150
      "
      stroke="black" stroke-width="3" fill="none" />
</svg>
```


## arbitrary form with Z
{{< html >}}
<svg
  version="1.1" xmlns="http://www.w3.org/2000/svg"
  width="500" height="320"
  style="background: #eee;">
    <path 
      d="
        M 150 150
        Q 150 50 250 50
        T 350 150
        T 250 250
        Z
      "
      stroke="#f88" stroke-width="3" fill="#fcc" />
    <circle cx="150" cy="150" r="4" fill="red" />
    <circle cx="250" cy="50" r="4" fill="red" />
    <circle cx="350" cy="150" r="4" fill="red" />
    <circle cx="250" cy="250" r="4" fill="red" />
    <text x="150" y="150" text-anchor="end" alignment-baseline="before-edge">(150, 150)</text>
    <text x="250" y="50" text-anchor="middle" alignment-baseline="after-edge">(250, 50)</text>
    <text x="350" y="150" text-anchor="start" alignment-baseline="middle">(350, 150)</text>
    <text x="250" y="250" text-anchor="middle" alignment-baseline="before-edge">(250, 250)</text>
</svg>
{{< /html >}}
```svg
<svg
  version="1.1" xmlns="http://www.w3.org/2000/svg"
  width="600" height="320"
  style="background: #eee;">
    <path 
      d="
        M 150 150
        Q 150 50 250 50
        T 350 150
        T 250 250
        Z
      "
      stroke="#f88" stroke-width="3" fill="#fcc" />
</svg>
```


## arbitrary form for domain & boundary
{{< html >}}
<svg
  version="1.1" xmlns="http://www.w3.org/2000/svg"
  width="550" height="320"
  style="background: #eee;">
    <path 
      d="
        M 150 150
        Q 150 50 250 50
        T 400 150
        T 300 250
        T 150 150
      "
      stroke="#f88" stroke-width="3" fill="#fcc" />
    <circle cx="150" cy="150" r="4" fill="red" />
    <circle cx="250" cy="50" r="4" fill="red" />
    <circle cx="400" cy="150" r="4" fill="red" />
    <circle cx="300" cy="250" r="4" fill="red" />
    <text x="150" y="150" text-anchor="end" alignment-baseline="middle">(150, 150)</text>
    <text x="250" y="50" text-anchor="middle" alignment-baseline="after-edge">(250, 50)</text>
    <text x="400" y="150" text-anchor="start" alignment-baseline="middle">(400, 150)</text>
    <text x="300" y="250" text-anchor="middle" alignment-baseline="before-edge">(300, 250)</text>
    <text x="165" y="235" text-anchor="middle" alignment-baseline="middle">&part;&Omega;</text>
    <text x="270" y="170" text-anchor="middle" alignment-baseline="middle">&Omega;</text>
</svg>
{{< /html >}}
```svg
<svg
  version="1.1" xmlns="http://www.w3.org/2000/svg"
  width="600" height="320"
  style="background: #eee;">
    <path 
      d="
        M 150 150
        Q 150 50 250 50
        T 400 150
        T 300 250
        T 150 150
      "
      stroke="#f88" stroke-width="3" fill="#fcc" />
</svg>
```
