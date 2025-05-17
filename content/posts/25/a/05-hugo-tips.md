+++
title = 'hugo tips'
date = '2025-01-05T05:09:11+07:00'
draft = false
tags = ['rust-dev']
authors = ['viridi']
url = '25a05'
+++
Some tips while running Hugo with drafts and CSS modification.

<!--more-->

+ Use post format
  ```
  +++
  title = 'hugo tips'
  date = '2025-01-05T05:09:11+07:00'
  draft = false
  tags = ['rust-dev']
  authors = ['viridi']
  url = '25a05'
  +++
  Some tips while running Hugo with drafts and CSS modification.

  <!--more-->
  ```

+ Force browsers to fetch the updated CSS
  ```
  <link rel="stylesheet" href="/css/main.css?v={{ now.Unix }}">
  ```

+ Clear hugo cache
  ```
  hugo server -D --cleanDestinationDir
  ```
+ Run hugo in development mode
  ```
  hugo server -D --environment development

  ```
+ Include reference as page footnote
  ```
  {{</* ref */>}}
  Author, "Title", Source, dd Mmm yyyy, {{< url "https://" >}} [yyyymmdd].
  {{</* /ref */>}}
```
