---
title: "hyperlink"
date: 2023-09-03T12:50:00+07:00
authors: ['Sparisoma Viridi']
tags: ['is3999']
draft: false
math: true
url: "0028"
---
{{< toc >}}

## a link
+ HTML links, which are also known as hyperlinks, are used to link other web resources to an HTML document, where the resources could be web pages, websites, texts, images, or other types of media ([Gupta, 2021](https://www.simplilearn.com/tutorials/html-tutorial/html-link)).
+ Links can also be used to trigger JavaScript but it is not recommended, because links that do not go anywhere should be replaced by buttons, since that is what the button element is for ([Heilmann, 2019](https://christianheilmann.com/2019/02/05/links-that-dont-go-anywhere-should-be-buttons/)).
+ A hyperlink is created using `<a>` element or anchor, which is the most important elements of HTML ([Leverenz, 2023](https://webdesign.tutsplus.com/html-element-a--cms-93838a)).


## html tags
+ In a document entitled HTML Tags, there is description of the first 18 HTML tags, `<title>`, `<nextid>`, `<a>`, `<isindex>`, `<plaintext>`, `<listing>`, `<p>`, `<h1>` … `<h6>`, `<address>`, `<hp1>`, `<hp2>` …, `<dl>`, `<dt>`, `<dd>`, `<ul>`, `<li>`, `<menu>` and `<dir>` ([Berners-Lee, 1991](https://www.webdesignmuseum.org/web-design-history/tim-berners-lee-published-a-document-called-html-tags-1991)).
+ Today there are about at least 30 HTML tags in HTML 5 ([MacTavish, 2022](https://medium.com/@zmactavish/30-html-tags-to-know-b0a85b122ded)).
+ Supports of tags for image, and audio & video are added in different version of HTML as the history tells ([Prasad, 2022](https://computerstudypoint.com/what-is-the-history-of-html/?expand_article=1)).


## html elements and tags
+ The concept of HTML elements and tags are closely related, to say in short, tags have elements in them, while elements are encapsulated in tags ([Singh, 2023](https://www.tutorialspoint.com/what-is-the-difference-between-html-elements-and-tags)).
+ Elements are made up of tags, but tags are not made up of elements, and elements are the building blocks or HTML ([Garbarino, 2023](https://www.newline.co/30-days-of-webdev/day-07-html-tags-and-elements-definitions-examples-and-relationships)).
+ An HTML element consists of a start tag, some content, and an end tag, there might be also some attributes in the tag such as class or id name ([Negi, 2023](https://www.scaler.com/topics/difference-between-html-elements-and-tags/)).


## example of tag and element
+ Loot at the following example.
  ```html
  <h2>A section</h2>

  <div>
  This is the first paragraph. This is the first paragraph.
  This is the first paragraph. This is the first paragraph.
  This is the first paragraph.
  </div>

  <div>
  And now this is the second paragraph. It is the second one.
  This is the second paragraph. Yes, it is.
  </div>
  ```
+ How many tags and elements used in the previous examples?
+ See the result on [OneCompiler/3zkfnwrge](https://onecompiler.com/html/3zkfnwrge), which is stil without style.


## element, tag, attribute, content
+ An element is defined using start tag, attribute, and end tag.
+ It might also has content.
  ```html
  <div id="par-1" class="normal" style="color:blue;">
  It is an example of a paragraph which is a div element,
  with id par-1, class normal, and font color blue.
  </div>
  ```
+ See the result on [OneCompiler/3zkfpf8ux](https://onecompiler.com/html/3zkfpf8ux).
+ This example has three attributes
  - id of `par-1`,
  - class of `normal`, and
  - style of `color:blue;`.
+ The last attribute changes the font color from black, as default color, to blue.


## url, uri, urn
+ While most developers know what a URL is, not everyone knows what a URI is, and even less knows about URNs, well not to mention that the relationships between theses terms is not always very clear ([Chiarelli, 2022](https://auth0.com/blog/url-uri-urn-differences/)).
+ In simple words, a URI can be a URN or a URL because both are subtypes of URI ([Miessler, 2005](https://danielmiessler.com/p/difference-between-uri-url/)).
+ URI is a string of characters used to identify or name a resource, which can include URLs, URNs, or other forms, where for URN the scheme is always `urn` and  it is used uniquely identify a resource without specifying its location, providing a persistent and globally unique name for the resource and the name remains valid even its data is moved to another location ([Smolchenko, 2023](https://levelup.gitconnected.com/understanding-the-differences-between-url-uri-and-urn-bd540dbde9d)).
+ Attribute `href` of `<a>` element can have value of a URL for other web document or URI fragment, the `#`, for section in the same the document ([Juviler, 2021](https://blog.hubspot.com/website/html-a-href)).


## href attribute and content
+ In an anchor element there are begin tag, attribute, content, and end tag.
  - begin tag `<a>`.
  - end tag `</a>`.
  - content is placed between begin and end tags.
  - attribute, e.g. `href="url"` is placed between `a` and `>` in begin tag.
+ Example of an anchor element
  ```html
  <a href="https://github.com/">GitHub</a>
  ```
  which produces result
  
  > [GitHub](https://github.com/)
  
  as in [OneCompiler/3zkguv5zc](https://onecompiler.com/html/3zkguv5zc).
+ Notice that the content or displayed text can be different than the actual the value of `href` attribute, which is the flexibility of anchor element.
