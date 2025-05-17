---
title: "hugo shortcode button"
date: 2023-09-09T05:05:00+07:00
authors: ['Sparisoma Viridi']
tags: ['xx1000']
draft: false
math: true
url: "0037"
---
{{< toc >}}

## introduction
+ Hugo Shortcodes are specialized markdown syntax that can be used to extend basic markdown, which can be considered as templates that can be called from Hugo markdown files to add HTML snippets to the final rendered HTML ([Hicks, 2020](https://tangenttechnologies.ca/blog/hugo-shortcodes/)).
+ Shortcodes are add short snippets of Hugo code, Markdown, or HTML to a page ([Chef, 2023](https://docs.chef.io/style/shortcodes/)).
+ Shortcodes are simple snippets inside the content files calling built-in or custom templates ([Lahoti, 2020](https://codingnconcepts.com/hugo/custom-shortcode-hugo/)).
+ A Hugo shortcode is a chunk of Go Template code that can be used within a Hugo content file ([Ink, 2023](https://www.ii.com/hugo-shortcodes/#_what_is_a_hugo_shortcode)).
+ Shortcodes can with or without Markdown ([Modi, 2023](https://ox-hugo.scripter.co/test/posts/source-block-md-with-hugo-shortcodes/)].


## partials
+ Partials and shortcodes are two features that allow to create reusable snippets of code that can be used in a Hugo site ([Learning Hugo, 2022](https://www.learninghugo.com/09-partials-and-shortcodes/))
+ Shortcodes only work in markdown file, not template files, then to have the type of functionality that shortcodes provide but in template, use a partial template instead ([James, 2022](https://digitaldrummerj.me/hugo-built-in-shortcodes/)).
+ There is dicussion started whether shortcodes and partials could be unified ([trombonehero, 2015](https://discourse.gohugo.io/t/could-shortcodes-and-partials-be-unified/1348)).


## javascript
+ Hugo standard shortcodes using JavaScript in showing GitHub gist, instagram, and tweet ([Hugo, 2019](https://www.engino.co.uk/form-elements/shortcodes/)).
+ Other JavaScript library, e.g. Galleria, can also be used in Hugo markdown file using shortcode ([moreno, 2017](https://discourse.gohugo.io/t/solved-javascript-in-shortcodes/8346)).
+ It can show also visual element such as textarea for counting words reponsively ([Borchers, 2022](https://cborchers.com/2020/12/08/how-to-include-javascript-in-your-hugo-website-or-blog-for-cool-applications/)).


## button
+ The `<button>` HTML element is an interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology, and then be used in submitting form or opening dialog ([Mozilla, 2023](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button))
+ The type attribute in any button tags can have value of `button`, `reset`, or `submit`, where any has different function ([Kyrnin, 2020](https://www.thoughtco.com/input-type-button-3468604)).
+ Instead of using `<button>` tag, a clickable button can also be displayed using `<input>` tag and set its type attribute value to `button`.



## code
+ A button can be display using HTML as follow
  ```html
  <button type="button">Button caption</button>
  ```
+ To accept a parameter previous snippet will be modified to
  ```html
  <button type="button">{{ index .Params 0 }}</button>
  ```
  and saved to `layouts/shortcodes/button.html`.
+ And it is used as
  ```md
  {{</* button "A button to click" */>}}
  ```

## result
+ It simply shows a button with given caption \
  \
  {{< button "A button to click" >}}


## to-do
+ Create v2 of button shortcode that accepts style.
+ Add JavaScript to handle the onclick event.