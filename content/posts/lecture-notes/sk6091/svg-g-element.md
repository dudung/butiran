---
title: "svg <g> element"
date: 2023-09-30T12:50:00+07:00
authors: ['Sparisoma Viridi']
tags: ['sk6091']
draft: false
math: true
url: "0075"
---
{{< toc >}}


## introduction
+ The `<g>` element groups all of its decendants in one group, which makes it is easy to add styles, transformation, interactivity, and even animations to the entire group of objects ([Soueidan, 2014](https://www.sarasoueidan.com/blog/structuring-grouping-referencing-in-svg/)).
+ Transformation applied to the `<g>` element are also performed on its child elements, and its attributes are inherited by its children, including core, styling, conditional, and presentation attributes ([taran910, 2022](https://www.geeksforgeeks.org/svg-g-element/)).
+ With `<g>` element the grouped elements can be reused as if they were a single element, that is an advantage compared to a nested `<svg>` element which cannot be the target of transformation itself ([Jenkov, 2014](https://jenkov.com/tutorials/svg/g-element.html)).
+  It can also group multiple elements to be referenced later with the `<use>` element ([MDN, 2023](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g)) and can apply the same style to a set of elements ([LeBeau, 2013](https://stackoverflow.com/a/17342735/9475509)).
