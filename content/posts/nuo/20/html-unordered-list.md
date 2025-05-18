+++
title = 'html unordered list'
date = 2024-04-07T03:25:00+07:00
draft = false
math = true
tags = ['html', 'ul', 'li', 'css']
url = '2003'
authors = ['viridi']
+++
The use of HTML &lt;ul&gt; element and its &lt;li&gt; element customization <!--more-->


## intro
In a HTML file an unordered list of items, which is typically rendered as a bulleted list, is represented by the `<ul>` HTML element [^mdncontributors_2024] with the items represented by some `<li>` elements [^leverenz_2023]. Marker for the bullet of `<li>` element can be set to disc, circle, square, or without marker using CSS `list-style-type` property of the element [^fitzgerald_2023]. Further customization using CSS makes the choices for the bullet unlimited [^lemonaki_2021] and it is also possible to change the `<li>` elements layout, e.g. arranged in horizontal direction [^singh_2024], for website navigation bar [^roy_2022].

Some simple examples of using `<ul>` and `<li>` elements, with default style using only HTML, advanced by CSS only, also further with the help of CSS selectors [^rajora_2023], are given here.


## default
Following HTML code

```html
There are some animals that able to
<ul>
<li>fly</li>
<li>swim</li>
<li>run</li>
</ul>
and many others.
```

will produce

{{< div "background: #f8f8f8; padding: 10px 20px;" >}}
There are some animals that able to
<ul>
<li>fly</li>
<li>swim</li>
<li>run</li>
</ul>
and do many others.
{{< /div >}}

as the result. An unordered list can also be placed in other an unordered list. Let us advance the previous as follow

```html
There are some animals that able to
<ul>
  <li>fly</li>
  <ul>
    <li>bird</li>
    <li>bat</li>
    <li>butterfly</li>
  </ul>
  <li>swim</li>
  <ul>
    <li>fish</li>
    <li>octopus</li>
    <li>cetacean</li>
    <ul>
      <li>dolphin</li>
      <li>porpoise</li>
      <li>whale</li>
      <ul>
        <li>orca</li>
        <li>narwhal</li>
        <li>beluga</li>
      </ul>
    </ul>
    <li>crocodile</li>
  </ul>
  <li>run</li>
  <ul>
    <li>ostrich</li>
    <li>cheetah</li>
    <li>lizard</li>
    <li>spider</li>
  </ul>
</ul>
and do many others.
```

to produce

{{< div "background: #f8f8f8; padding: 10px 20px;" >}}
There are some animals that able to
<ul>
  <li>fly</li>
  <ul>
    <li>bird</li>
    <li>bat</li>
    <li>butterfly</li>
  </ul>
  <li>swim</li>
  <ul>
    <li>fish</li>
    <li>octopus</li>
    <li>cetacean</li>
    <ul>
      <li>dolphin</li>
      <li>porpoise</li
>
      <li>whale</li>
      <ul>
        <li>orca</li>
        <li>narwhal</li>
        <li>beluga</li>
      </ul>
    </ul>
    <li>crocodile</li>
  </ul>
  <li>run</li>
  <ul>
    <li>ostrich</li>
    <li>cheetah</li>
    <li>lizard</li>
    <li>spider</li>
  </ul>
</ul>
and do many others.
{{< /div >}}

In a `<ul>` element every `<li>` element can be substitued with another `<ul>` element, which makes nested unordered list. Notice that indentations are used just to make the code easier to read but do not affect the result, e.g.

```html
There are some animals that able to
<ul>
  <li>fly</li>
  <ul><li>bird</li><li>bat</li><li>butterfly</li></ul>
  <li>swim</li>
  <ul><li>fish</li><li>octopus</li><li>cetacean</li>
    <ul><li>dolphin</li><li>porpoise</li><li>whale</li>
      <ul><li>orca</li><li>narwhal</li><li>beluga</li></ul>
    </ul>
    <li>crocodile</li>
  </ul>
  <li>run</li>
  <ul><li>ostrich</li><li>cheetah</li><li>lizard</li><li>spider</li></ul>
</ul>
and do many others.
```

will produce the same as previous result, but as it can be seen, it is not so easy to read compared to previous code.


## border
Before using CSS to customize a unordered list, let us first use CSS to show area of `<ul>` and `<li>` elements. Following code

```html
<style>
ul.fruit0 {
  border: 1px solid blue;
  > li {
    border: 1px solid red;
  }
}
</style>

<ul class="fruit0">
  <li>Apple</li>
  <li>Banana</li>
  <li>Cucumber</li>
  <li>Durian</li>
</ul>
```

will produce

{{< div "background: #f8f8f8; padding: 10px 20px;" >}}
<style>
ul.fruit0 {
  border: 1px solid blue;
  > li {
    border: 1px solid red;
  }
}
</style>

<ul class="fruit0">
  <li>Apple</li>
  <li>Banana</li>
  <li>Cucumber</li>
  <li>Durian</li>
</ul>
{{< /div >}}

showing area of `<ul>` and `<li>` elements with blue and red borders, respectively.


## margin
Let us modify margin of the `<ul>` element first from its default value to `50px 40px 30px 20px` and

{{< div "background: #f8f8f8; padding: 10px 20px;" >}}
<style>
ul.fruit1 {
  border: 1px solid blue;
  margin: 50px 40px 30px 20px;
  > li {
    border: 1px solid red;
  }
}
</style>

<ul class="fruit1">
  <li>Apple</li>
  <li>Banana</li>
  <li>Cucumber</li>
  <li>Durian</li>
</ul>
{{< /div >}}

is the result. Top-margin is `50px`, right-margin is `40px`, bottom-margin is `30px`, and left-margin is `20px`. These margins if from its parent element. The modified sytle is

```css
ul.fruit1 {
  border: 1px solid blue;
  margin: 50px 40px 30px 20px;
  > li {
    border: 1px solid red;
  }
}
```

Notice the difference from previous `<style>` element. From now, if other HTML elements are the same, only content of `<style>` element is showed.

Let us now change only margin of `<li>` element as follow

```
ul.fruit2 {
  border: 1px solid blue;
  > li {
    border: 1px solid red;
    margin: 0px 100px 10px 40px;
  }
}
```

and get

{{< div "background: #f8f8f8; padding: 10px 20px;" >}}
<style>
ul.fruit2 {
  border: 1px solid blue;
  > li {
    border: 1px solid red;
    margin: 0px 100px 10px 40px;
  }
}
</style>

<ul class="fruit2">
  <li>Apple</li>
  <li>Banana</li>
  <li>Cucumber</li>
  <li>Durian</li>
</ul>
{{< /div >}}

as the result. Notice that those margins affecting layout of `<li>` elements inside its parent element, which is the `<ul>` element. It also affecting between elements within the same parent element.


## padding
After studying margin style in brief, let us now do that for padding.

Following style

```css
ul.fruit3 {
  border: 1px solid blue;
  padding: 40px 30px 20px 10px;
  > li {
    border: 1px solid red;
  }
}
```

will produce

{{< div "background: #f8f8f8; padding: 10px 20px;" >}}
<style>
ul.fruit3 {
  border: 1px solid blue;
  padding: 40px 30px 20px 10px;
  > li {
    border: 1px solid red;
  }
}
</style>

<ul class="fruit3">
  <li>Apple</li>
  <li>Banana</li>
  <li>Cucumber</li>
  <li>Durian</li>
</ul>
{{< /div >}}

as the result. Notice that padding is affecting its child elements, where in this case are the `<li>` elements.

Then following result is obtained

{{< div "background: #f8f8f8; padding: 10px 20px;" >}}
<style>
ul.fruit4 {
  border: 1px solid blue;
  > li {
    border: 1px solid red;
    padding: 40px 30px 20px 10px;
  }
}
</style>

<ul class="fruit4">
  <li>Apple</li>
  <li>Banana</li>
  <li>Cucumber</li>
  <li>Durian</li>
</ul>
{{< /div >}}

using

```css
ul.fruit4 {
  border: 1px solid blue;
  > li {
    border: 1px solid red;
    padding: 40px 30px 20px 10px;
  }
}
```

as the style. Since child element of a `<li>` element is fruit name, then in it adds padding inside the element.


## margin, border, padding
The three CSS properties, margin, border, and padding, have same value formats, which are

+ all-sides, e.g. `margin: 10px;`,
+ top-bottom right-left, e.g. `border: 4px 8px;`,
+ top right bottom left, e.g. `padding: 10px 30px 5px 20px;`.

Or it can also be set for each side separetely
+ top side only, e.g. `border-top: 10px;`,
+ right side only, e.g. `padding-right: 2px;`,
+ bottom side only, e.g. `margin-bottom: 5px;`,
+ left side only, e.g. `border-left: 4px;`.


## markers
There are four default options for `<li>` element bullet, which are three markers `disc`, `circle`, `square`, and addition no marker `none`. Let us use following code, where the style is set in each `<li>` element directly.

{{< div "background: #f8f8f8; padding: 10px 20px;" >}}
<ul>
  <li>Default</li>
  <li style='list-style-type: disc;'>Apple</li>
  <li style='list-style-type: circle;'>Banana</li>
  <li style='list-style-type: square;'>Coconut</li>
  <li style='list-style-type: none;'>Durian</li>
</ul>
{{< /div >}}

Above result is obtained using following code

```html
<ul>
  <li>Default</li>
  <li style='list-style-type: disc;'>Apple</li>
  <li style='list-style-type: circle;'>Banana</li>
  <li style='list-style-type: square;'>Coconut</li>
  <li style='list-style-type: none;'>Durian</li>
</ul>
```

Notice that default marker is `disc`.

Is it possible to user other markers for `<li>` element? Yes, it is possible. Even each `<li>` element can have different marker. See following result.

{{< div "background: #f8f8f8; padding: 10px 20px;" >}}
<style>
ul.food0 {
  list-style-type: none;
  > li:nth-child(1)::before { content: "🥐 " }
  > li:nth-child(2)::before { content: "🍩 " }
  > li:nth-child(3)::before { content: "🍔 " }
  > li:nth-child(4)::before { content: "🍕 " }
  > li:nth-child(5)::before { content: "🍣 " }
  > li:nth-child(6)::before { content: "🌮 " }
}
</style>

<ul class="food0">
  <li>Croissant</li>
  <li>Doughnut</li>
  <li>Hamburger</li>
  <li>Pizza</li>
  <li>Sushi</li>
  <li>Taco</li>
</ul>
{{< /div >}}

Above result is obtained using following code

```html
<style>
ul.food0 {
  list-style-type: none;
  > li:nth-child(1)::before { content: "🥐 " }
  > li:nth-child(2)::before { content: "🍩 " }
  > li:nth-child(3)::before { content: "🍔 " }
  > li:nth-child(4)::before { content: "🍕 " }
  > li:nth-child(5)::before { content: "🍣 " }
  > li:nth-child(6)::before { content: "🌮 " }
}
</style>

<ul class="food0">
  <li>Croissant</li>
  <li>Doughnut</li>
  <li>Hamburger</li>
  <li>Pizza</li>
  <li>Sushi</li>
  <li>Taco</li>
</ul>
```

Notice that there is CSS selectors `:nth-child()` and `::before` to select the right `<li>` element and apply certaint style, which is particular marker in this case. You can find other HTML entities representing [food on &what;](https://www.amp-what.com/unicode/search/food) website and also other characters [^peterson_2023]. What would happen when `::before` is replaced with `::after`? Explore this feature and get your understanding about it.


## menu bar
Let us see the result first as follow.

{{< div "background: #f8f8f8; padding: 10px 20px;" >}}
<style>
ul.menu0 {
  list-style-type: none;
  overflow: hidden;
  background: #228;
  color: #ccc;
  padding-left: 0px;
  border-radius: 8px;
  > li {
    float: left;
    padding: 2px 16px;
  }
  > li:hover {
    color: white;
    cursor: pointer;
    background: #88f;
  }
}
</style>

<ul class="menu0">
  <li>File</li>
  <li>Edit</li>
  <li>Layout</li>
  <li>Style</li>
  <li>View</li>
  <li>Help</li>
</ul>
{{< /div >}}

As mouse is hovering an item on the menu bar, mouse cursor changes and also font and background colors. All are controlled using features supported by CSS. Required code for that is as follow.

```html
<style>
ul.menu0 {
  list-style-type: none;
  overflow: hidden;
  background: #228;
  color: #ccc;
  padding-left: 0px;
  border-radius: 8px;
  > li {
    float: left;
    padding: 2px 16px;
  }
  > li:hover {
    color: white;
    cursor: pointer;
    background: #88f;
  }
}
</style>

<ul class="menu0">
  <li>File</li>
  <li>Edit</li>
  <li>Layout</li>
  <li>Style</li>
  <li>View</li>
  <li>Help</li>
</ul>
```

How the style changes as the mouse hovering an element is set using `:hover` selector. After it leaving the element styles become the default again.


## circular menu
Based on previous knowledge about CSS, let us make a circular or radial menu as follow.

{{< div "background: #f8f8f8; padding: 10px 20px;" >}}
<style>
ul.menu1 {
  list-style-type: none;
  position: relative;
  margin-top: 0px;
  height: 210px;
  > li {
    border: 1px solid black;
    width: 120px;
    text-align: center;
    border-radius: 8px;
    color: white;
    background: black;
    position: absolute;
  }
  > li:hover {
    color: black;
    cursor: pointer;
    background: white;
  }
  > li:nth-child(1) { left: 200px; top: 0px; }
  > li:nth-child(2) { left: 280px; top: 50px; }
  > li:nth-child(3) { left: 300px; top: 100px; }
  > li:nth-child(4) { left: 280px; top: 150px; }
  > li:nth-child(5) { left: 200px; top: 200px; }
  > li:nth-child(6) { left: 120px; top: 150px; }
  > li:nth-child(7) { left: 100px; top: 100px; }
  > li:nth-child(8) { left: 120px; top: 50px; }
}
</style>

<ul class="menu1">
  <li>Visual</li>
  <li>Liguistic</li>
  <li>Logical</li>
  <li>Kinesthetic</li>
  <li>Musical</li>
  <li>Interpersonal</li>
  <li>Intrapersonal</li>
  <li>Naturalistic</li>
</ul>
{{< /div >}}

The menu is showing Gardner's mutliple intelligences [^cherry_2023]. It has features as in previous example, that is changing mouse cursor and also menu option text and background colors. The differences are it set each `<li>` elements with different position absolute to its parent element, whose relatively is positioned to futher parent element, the `<body>` element.

```html
<style>
ul.menu1 {
  list-style-type: none;
  position: relative;
  margin-top: 0px;
  height: 210px;
  > li {
    border: 1px solid black;
    width: 120px;
    text-align: center;
    border-radius: 8px;
    color: white;
    background: black;
    position: absolute;
  }
  > li:hover {
    color: black;
    cursor: pointer;
    background: white;
  }
  > li:nth-child(1) { left: 200px; top: 0px; }
  > li:nth-child(2) { left: 280px; top: 50px; }
  > li:nth-child(3) { left: 300px; top: 100px; }
  > li:nth-child(4) { left: 280px; top: 150px; }
  > li:nth-child(5) { left: 200px; top: 200px; }
  > li:nth-child(6) { left: 120px; top: 150px; }
  > li:nth-child(7) { left: 100px; top: 100px; }
  > li:nth-child(8) { left: 120px; top: 50px; }
}
</style>

<ul class="menu1">
  <li>Visual</li>
  <li>Liguistic</li>
  <li>Logical</li>
  <li>Kinesthetic</li>
  <li>Musical</li>
  <li>Interpersonal</li>
  <li>Intrapersonal</li>
  <li>Naturalistic</li>
</ul>
```

Above code is for previous circular menu. Notice the parts with CSS selector `:nth-child()`, which are containing `left` and `top` position of all `<li>` elements. You can modify these values to obtain different layout other than circular menu.


## what's next
I believe, using given knowledge about `<ul>` and `<li>` elements accompanied by CSS with its selector features you can make any kind of menus that you want, where only imagination is the limit. Furthermore, there are hundreds of inspiration of menus using only CSS, or enhanced with JS, available to learn [^muldoon_2024].

The use of JS, which is out of scope of this post, will make the process of creating menu easier. You can just define array for menu items, use `for` loop iterating over the array, create all items, and then add them to parent element. CSS selectors can also be used using JS, which make the use of them more convenient especially when they should be repeated for other elements.


## closing
After read this post, you will be able to view the `<ul>` and `<li>` elements in different way, hopefully. Instead of using them as bulleted list, they can also serve as menu, where the structure might be clearer compare to the menu using nested `<div>` elements. There is not only single solution for something. You can make menu with many ways, e.g. an older way with `<table>`, `<tr>`, and `<td>` elements; here with `<ul>` and `<li>` elements; or next with nested `<div>` and `<span>` elements, where all aproaches should produce the same result but with different limitation and ease of maintenance.


## notes
[^cherry_2023]: Kendra Cherry, "Gardner's Theory of Multiple Intelligences", Verywell Mind, 11 Mar 2023, url https://www.verywellmind.com/p-2795161 [20240407].
[^fitzgerald_2023]: Anna Fitzgerald, "How to Create an Unordered List in HTML [+Examples]", HubSpot, 15 Aug 2023, url https://blog.hubspot.com/website/unordered-list-html [20240407].
[^lemonaki_2021]: Dionysia Lemonaki, "HTML Bullet Points – How to Create an Unordered List with the <ul> Tag Example", freeCodeCamp, 30 Sep 2021, url https://www.freecodecamp.org/news/html-bullet-points-how-to-create-an-unordered-list-with-the-ul-tag-example/ [20240407].
[^leverenz_2023]: Andy Leverenz, "HTML Element: li", Envato Tuts+, 24 Oct 2024, url https://webdesign.tutsplus.com/html-element-li--cms-107838a [20240407].
[^mdncontributors_2024]: MDN contributors, "<ul>: The Unordered List element", MDN Web Docs, moz:lla, 26 Mar 2024, url https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul [20240407].
[^muldoon_2024]: Kevin Muldoon, "120 Great CSS Menu Tutorials", Jotform Blog, 2 Apr 2024, url https://www.jotform.com/blog/great-css-menu-tutorials/ [20240407].
[^peterson_2023]: Andrew J. Peterson, "&what; discover your character", NDP Software, 2023, url https://www.amp-what.com/ [20240407].
[^rajora_2023]: Harish Rajora, "A Complete Guide to CSS Selectors", Medium, 10 Nov 2023, url https://medium.com/p/0cf15377e1c3 [20240407].
[^roy_2022]: Kasturi Roy, "Navigation bar design best practices", WebFlow, 7 Dec 2022, url https://webflow.com/blog/navigation-bar-design [20240407].
[^singh_2024]: Amit Singh, "HTML Unordered Lists", GeeksforGeeks, 15 Mar 2024, url https://www.geeksforgeeks.org/html-unordered-lists/ [20240407].
