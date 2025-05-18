+++
title = 'writing experiment a month'
date = 2024-05-05T17:35:00+07:00
draft = false
math = true
tags = ['writing', 'nou']
url = '2031'
authors = ['viridi']
+++
End of a month of experiment in writing a post a day <!--more-->


## intro
It begins with migration of some old posts to nou on 5 Apr 2024 with a post the milestone [^viridi_2024]. I have tried to, at least, write a post a day, a nine-minutes post if possible, or simply a post with only intro and refs &ge; 3. There are 31 posts created, but onlye few of them have 9 minutes length, while the rest only has between 1-3 minutes.


## files
Content of `index.html` in `layouts` folder.
```html
{{ define "main" }}
  <main aria-role="main">
    <header class="homepage-header">
      <h1>notes on unstructured</h1>
      {{ with .Params.subtitle }}
        <span class="subtitle">{{ . }}</span>
      {{ end }}
    </header>
    <div class="homepage-content">
      <!-- Note that the content for index.html, as a sort of list page, will pull from content/_index.md -->
      {{ .Content }}
    </div>
    
    {{ $max := len .Site.RegularPages }}
    {{ $index :=  sub $max 1 }}
    
    {{ $num := slice 2 60 16 35 10 93 26 }}
    {{ $n0 := index $num 0 }}
    {{ $n1 := add $n0 (index $num 1) }}
    {{ $n2 := add $n1 (index $num 2) }}
    {{ $n3 := add $n2 (index $num 3) }}
    {{ $n4 := add $n3 (index $num 4) }}
    {{ $n5 := add $n4 (index $num 5) }}
    {{ $n6 := add $n5 (index $num 6) }}
    
    {{/* range sort .Site.RegularPages ".Params.url" "desc" */}}
    {{ range sort .Site.RegularPages ".Params.url" "desc" }}
        
        {{ if eq $index (sub $max 1) }}
          <div class="tocsec">
            <code class="tocseccol">nou(&infin;):</code> 
          </div>
        {{ end }}
        
        <code>
          <x style="color: #aaa;">{{ .Params.url }}</x>
          {{/* .{{ printf "%04d" $index */}}
          {{ dateFormat "02-Jan-2006" .Date }}
        </code>
        <a href="{{ .RelPermalink }}">{{ .LinkTitle }}</a>
        {{/* .Summary */}}
        
        {{ if eq $index $n0 }}
          <div class="tocsec">
            <code class="tocseccol">&alpha;({{ index $num 0 }}):</code>
          </div>
        {{ end }}

        {{ if eq $index $n1 }}
          <div class="tocsec">
            <code class="tocseccol">ek({{ index $num 1 }}):</code>
          </div>
        {{ end }}
        
        {{ if eq $index $n2 }}
          <div class="tocsec">
            <code class="tocseccol">wp({{ index $num 2 }}):</code>
          </div>
        {{ end }}
        
        {{ if eq $index $n3 }}
          <div class="tocsec">
            <code class="tocseccol">blank({{ index $num 3 }}):</code>
          </div>
        {{ end }}

        {{ if eq $index $n4 }}
          <div class="tocsec">
            <code class="tocseccol">log({{ index $num 4 }}):</code>
          </div>
        {{ end }}

        {{ if eq $index $n5 }}
          <div class="tocsec">
            <code class="tocseccol">o({{ index $num 5 }}):</code>
          </div>
        {{ end }}

        {{ if eq $index $n6 }}
          <div class="tocsec">
            <code class="tocseccol">to({{ index $num 6 }}):</code> 
          </div>
        {{ end }}
        
        {{ $index = sub $index 1 }}
        
    {{ end }}
   
{{ end }}
```

Content of `main.css` in `assets/css` folder.
```css
body {
  color: #222;
  font-family: sans-serif;
  line-height: 1.5;
  margin: 1rem;
  max-width: 768px;
  text-align: justify;
}

header {
  border-bottom: 1px solid #222;
  margin-bottom: 1rem;
}

/* to overwrite header border-bottom style */
.homepage-header {
  border-bottom: 0px solid #222;
}

footer {
  border-top: 1px solid #222;
  margin-top: 1rem;
}

a {
  color: #00e;
  text-decoration: none;
  text-align: left;
  word-wrap: break-word;
  word-break: break-word;
  word-break: break-all;
  overflow-wrap: break-word;
  -ms-word-break: break-all;
}

pre {
  padding: 1em;
}

ul.menu-item li {
  display: inline-block;
  margin: 5px;
}

nav {
  text-align: right;
}

.author {
  font-size:110%;
}
.readingtimedate {
  color: #999;
}

.footnotes {
  border-top: 0px solid #222;
  > hr {
     display: none;
   }
  > ol > li:not(:first-child):not(:last-child) {
    margin: -1em 0;
  }
}

// footnote link
a[href^="#fn:"],
// Back to footnote link
a[href^="#fnref:"] {
  text-decoration: none;
  color: $orange;
  font-family: monospace;
}
a[href^="#fn:"]:before{ content: '[' }
a[href^="#fn:"]:after{ content: ']' }


div.tags {
  > ul > li {
    display: inline-block;
  }
  > ul > li:not(:last-child):after {
    content: ', ';
  }
  > ul {
    display: inline;
    border: 0px black solid;
    padding-left: 0px;
  }
}

/*
ul.authors {
  > li {
    display: inline-block;
  }
  > li:not(:last-child):after {
    content: ', ';
  }
  display: inline;
  border: 0px black solid;
  padding-left: 0px;
}
*/

figure.authors {
  display: inline-block;
  border: 0px black solid;
  margin-left: 0px;
  > figcaption {
    border: 0px black solid;
    float: right;
    margin-left: 10px;
  }
}

.tocsec {
  display: inline;
}

.tocseccol {
  color: #faa;
}
```


## notes
[^viridi_2024]: Sparisoma Viridi, "Have no Idea", nou, 5 Apr 2024, url https://dudung.github.io/nou/2001/ [20240505].
