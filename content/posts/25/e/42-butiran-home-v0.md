+++
title = 'butiran home-v0'
date = '2025-05-21T18:41:13+07:00'
authors = ['viridi']
draft = true
type = 'notes'
tags = []
categories = ['butiran']
url = '25e42'
+++

<!-- more -->

It is archive for `home.html` and `hugo.toml`.


## home.html
This file is located in `/layouts/_default` from this butiran.

```html
{{ define "main" }}

  <main aria-role="main">
    <header class="homepage-header">
      {{ with .Params.subtitle }}
        <span class="subtitle">{{ . }}</span>
      {{ end }}
    </header>
    <div class="homepage-content">
      {{ .Content }}
    </div>
    
    {{ $key := "type" }}
    {{ $value := "talks" }}
    {{ $paramskey := (printf "Params.%s" $key) }}
    
    <!--
    url https://chatgpt.com/share/676fcffa-931c-800a-8ae9-3363762a8316 [20241228].
    -->
    <div class="posts-box-container">
      {{ $filteredPages := .Site.RegularPages }}
      {{ if in (slice "type" "title" "date") $key }}
        {{ $filteredPages = where .Site.RegularPages $paramskey "in" (slice $value) }}
      {{ else }}
        {{ $filteredPages = where .Site.RegularPages (printf "Params.%s" $key) "intersect" (slice $value) }}
      {{ end }}
      
      {{ $filteredPages := .Site.RegularPages }}
      {{ $paginator := .Paginate $filteredPages }}
      {{ range $paginator.Pages }}
      
        <div class="homepage-posts-box">
          <code class="homepage-post-date">
            {{ dateFormat "02-Jan-2006" .Date }}
          </code><br>
          <a href="{{ .RelPermalink }}">{{ .LinkTitle }}</a>
        </div>
      
      {{ end }}
    </div>

    <!--
    url https://chatgpt.com/share/674c42d8-7298-800a-9d2f-57af4c77c925 [20241201]
    -->
    <div class="pagination-container">
      <div class="pagination">
        <!-- "Previous" button -->
        {{ if $paginator.HasPrev }}
          <a href="{{ $paginator.Prev.URL }}" class="prev">&nbsp;&lt;&nbsp;</a>
        {{ end }}
        
        <!-- Numeric pagination -->
        {{ range $paginator.Pagers }}
          {{ if eq . $paginator }}
            <span class="current">{{ printf "%02d" .PageNumber }}</span> <!-- Current page -->
          {{ else }}
            <a href="{{ .URL }}" class="page">{{ printf "%02d" .PageNumber }}</a>
          {{ end }}
        {{ end }}
             
        <!-- "Next" button -->
        {{ if $paginator.HasNext }}
          <a href="{{ $paginator.Next.URL }}" class="next">&nbsp;&gt;&nbsp;</a>
        {{ end }}
      </div>
    </div>

  </main>
{{ end }}
```

Following lines are removed from `home.html`

```go
      {{ $filteredPages := .Site.RegularPages }}
      {{ if in (slice "type" "title" "date") $key }}
        {{ $filteredPages = where .Site.RegularPages $paramskey "in" (slice $value) }}
      {{ else }}
        {{ $filteredPages = where .Site.RegularPages (printf "Params.%s" $key) "intersect" (slice $value) }}
      {{ end }}
```

and will be kept here for furhter used.


## hugo.toml
This file is located in `/` from butiran.

```toml
baseURL = 'https://dudung.github.io/butiran'
languageCode = 'en-us'
title = 'butiran'
theme = 'default'

ignoreLogs = ['warning-goldmark-raw-html']
enableEmoji = true

[pagination]
pagerSize = 30

[taxonomies]
#  author = "authors"
#  tag = "tags"
#  category = "categories"

[[menu.main]]
  name = 'Home'
  weight = 0
  identifier = 'home'
  url = '/'

[params]
disableShortcodes = true
```

To enable individual shortcode, edit it and remove

```go
{{ if not site.Params.disableShortcodes }}

  <!-- shortcode -->

{{ end }}
```

the conditional block `{{ if .. }}` and `{{ end }}`.


## notes
+ Site build requires about 5541 ms - 6088 ms.
+ Change of a post now requires about 41 - 48 ms.
+ There is not any taxonomies used.
+ All shortcodes are disabled but `mermaid`, `style`, `script/loader`, and `script/runner`.
+ The required time is still consistent for several attempts.
