+++
title = 'index.html hugo code 3'
date = 2024-10-06T20:25:00+07:00
draft = false
math = true
tags = ['bug', 'hugo', 'index-html']
authors = ['viridi']
url = '24j04'
+++
List of modifications of `index.html` in a Hugo site<!--more-->

Landing page of a Hugo site is `layouts/index.html` and the page has been modified as follow
+ `06-Oct-2024` Show only posts contained in a list.
+ `05-Oct-2024` Show posts only with index greater and equal to 282.
+ `06-Jul-2024` Show all posts.

Detailed content of the HTML page is given below.

Version 6 Oct 2024 is as follow.
```python
{{ define "main" }}
  <main aria-role="main">
    <header class="homepage-header">
      <h1>from codes to granular systems</h1>
      {{ with .Params.subtitle }}
        <span class="subtitle">{{ . }}</span>
      {{ end }}
    </header>
    <div class="homepage-content">
      <!-- Note that the content for index.html,
      as a sort of list page, will pull from
      content/_index.md -->
      {{ .Content }}
    </div>
    
    {{ $max := len .Site.RegularPages }}
    {{ $index :=  sub $max 1 }}
    
    {{ $urls := slice "2118" "2127" "2128" "2129" }}
    
    {{ range where .Site.RegularPages ".Params.url" "in" $urls }}
      <code style="color: #7b7;">{{ printf "%04d" $index }}</code>
      <code>
        <x style="color: #aaa;">{{ .Params.url }}</x>
        {{/* .{{ printf "%04d" $index */}}
        {{ dateFormat "02-Jan-2006" .Date }}
      </code>
      <a href="{{ .RelPermalink }}">{{ .LinkTitle }}</a>
      
      {{ $index = sub $index 1 }}
    {{ end }}
   
{{ end }}
```

Version 5 Oct 2024 is as follow.

```python
{{ define "main" }}
  <main aria-role="main">
    <header class="homepage-header">
      <h1>from codes to granular systems</h1>
      {{ with .Params.subtitle }}
        <span class="subtitle">{{ . }}</span>
      {{ end }}
    </header>
    <div class="homepage-content">
      <!-- Note that the content for index.html,
      as a sort of list page, will pull from
      content/_index.md -->
      {{ .Content }}
    </div>
    
    {{ $max := len .Site.RegularPages }}
    {{ $index :=  sub $max 1 }}

    {{ range sort .Site.RegularPages ".Params.url" "desc" }}
      
      {{ if ge $index 282 }}
        <code style="color: #7b7;">{{ printf "%04d" $index }}</code>
        <code>
          <x style="color: #aaa;">{{ .Params.url }}</x>
          {{/* .{{ printf "%04d" $index */}}
          {{ dateFormat "02-Jan-2006" .Date }}
        </code>
        <a href="{{ .RelPermalink }}">{{ .LinkTitle }}</a>
        
        {{ $index = sub $index 1 }}
      {{ end }}
    {{ end }}
   
{{ end }}
```

Version 6 Jul 2024 is as follow.

```html
{{ define "main" }}
  <main aria-role="main">
    <header class="homepage-header">
      <h1>from codes to granular systems</h1>
      {{ with .Params.subtitle }}
        <span class="subtitle">{{ . }}</span>
      {{ end }}
    </header>
    <div class="homepage-content">
      <!-- Note that the content for index.html,
      as a sort of list page, will pull from
      content/_index.md -->
      {{ .Content }}
    </div>
    
    {{ $max := len .Site.RegularPages }}
    {{ $index :=  sub $max 1 }}
    
    {{ range sort .Site.RegularPages ".Params.url" "desc" }}
        <code>
          <x style="color: #aaa;">{{ .Params.url }}</x>
          {{/* .{{ printf "%04d" $index */}}
          {{ dateFormat "02-Jan-2006" .Date }}
        </code>
        <a href="{{ .RelPermalink }}">{{ .LinkTitle }}</a>
        
        {{ $index = sub $index 1 }}
    {{ end }}
   
{{ end }}
```

