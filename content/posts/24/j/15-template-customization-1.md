+++
title = 'template customization 1'
date = 2024-10-11T21:03:19+07:00
draft = false
tags = ['bug2', 'hugo']
authors = ['viridi']
url = '24j15'
+++
First theme customization of a new Hugo site following initial setting.

<!--more-->

In previous post with title [first post again](../0000) customization is only in `layouts/partials/footer.html`. Here more customizations in various files are given.

1. Create content of `layouts/posts/single.html` is as follow.
    ```
    {{ define "main" }}
      <h1>{{ .Title }}</h1>

      {{ $dateMachine := .Date | time.Format "2006-01-02T15:04:05-07:00" }}
      {{ $dateHuman := .Date | time.Format ":date_long" }}
      
      {{- range .Params.authors }}
        {{- with $.Site.GetPage "taxonomyTerm" (printf "authors/%s" (urlize .)) }}
          <figure class='authors'>
            <!--img src="{{ .Params.photo }}" alt=""/ -->
            <figcaption>
              <a href="{{ .Permalink }}">{{ .Params.name }}</a>
            </figcaption>
          </figure>
        {{ end }}
      {{ end }}
      
      <div class='readingtimedate'>
        {{ partial "reading-time.html" . }} &middot;
        <time datetime="{{ $dateMachine }}">{{ $dateHuman }}</time>
      </div>
      
      {{ .Content }}
      {{ partial "terms.html" (dict "taxonomy" "tags" "page" .) }}
      
      {{ partial "posts/math.html" . }}
    {{ end }}
    ```
2. Create content of `layouts/partials/reading-time.html` is as follow.
    ```
    {{ .ReadingTime }} min{{ if (ne .ReadingTime 1) }}s{{ end }} read
    ```
3. Create content of `layouts/partials/posts/math.html` is as follow.
    ```
    {{- if or (.Params.math) (.Site.Params.math) (.Params.katex) (.Site.Params.katex) -}}

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css"
        integrity="sha384-vKruj+a13U8yHIkAyGgK1J3ArTLzrFGBbBc0tDp4ad/EyewESeXE/Iv67Aj8gKZ0" crossorigin="anonymous">
      {{/* The loading of KaTeX is deferred to speed up page rendering */}}
      <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.js"
        integrity="sha384-PwRUT/YqbnEjkZO0zZxNqcxACrXe+j766U2amXcgMg5457rve2Y7I6ZJSm2A0mS4" crossorigin="anonymous"></script>

    <!--
    url https://github.com/KaTeX/KaTeX/tree/main/contrib/mhchem [20240412]
    -->
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/contrib/mhchem.min.js" integrity="sha384-ifpG+NlgMq0kvOSGqGQxW1mJKpjjMDmZdpKGq3tbvD3WPhyshCEEYClriK/wRVU0"  crossorigin="anonymous"></script>
    <!-- -->    
        
      <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/contrib/auto-render.min.js"
        integrity="sha384-+VBxd3r6XgURycqtZ117nYw44OOcIax56Z4dCRWbxyPt0Koah1uHoK0o4+/RRE05" crossorigin="anonymous"
        onload="renderMathInElement(document.body,
          {
            delimiters: [
              {left: '$$', right: '$$', display:true},
              {left: '$', right: '$', display:false},
              {left: '\\(', right: '\\)', display: false},
              {left: '\\[', right: '\\]', display: true}
            ]
          }
        );"></script>
    {{- end -}}
    ```
4. Create content of `layouts/_default/baseof.html` is as follow.
    ```
    <!DOCTYPE html>
    <html lang="{{ or site.Language.LanguageCode site.Language.Lang }}" dir="{{ or site.Language.LanguageDirection `ltr` }}">
    <head>
      {{ partial "head.html" . }}
    </head>
    <body>
      <header>
        {{ partial "header.html" . }}
        
        {{ if .HasShortcode "blank/scatter" }}
          {{ partial "script/inner.html" . }}
          {{ partial "script/chartjs.html" . }}
        {{ end }}

        {{ if .HasShortcode "blank/svgpath" }}
          {{ partial "script/inner.html" . }}
        {{ end }}
      </header>
      <main>
        {{ block "main" . }}{{ end }}
      </main>
      <footer>
        {{ partial "footer.html" . }}
      </footer>

      {{ if .Store.Get "hasMermaid" }}
        <script type="module">
          import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.esm.min.mjs';
          mermaid.initialize({ startOnLoad: true });
        </script>
      {{ end }}
    </body>
    </html>
    ```
5. Create content of `layouts/_default/_markup/render-codeblock-mermaid.html` as follow.
    ```
    <pre class="mermaid">
      {{- .Inner | safeHTML }}
    </pre>
    {{ .Page.Store.Set "hasMermaid" true }}
    ```
6. Create content of `content/authors/viridi/_index.md` as follow.
    ```
    +++
    name = 'Sparisoma Viridi'
    twitter = '@6unpnp'
    +++
    Sparisoma Viridi is granular physicist who likes doing programming.
    ```
Without Step 6 for an author page, even when Step 1 is performed, the link will not be shown in a post. Step 4 is for including any partials by checking first the existance of the related shortcodes files. And support for Mermaid in Step 5 is performed using code block render hooks [^hugo_2024] instead of shortcodes [^pattekkat_2022]. There is also support for a KaTeX extension, mhchem [^mchem_2024]


[^hugo_2024]: Hugo Authors, "Code block render hooks", Hugo, 14 Jun 2024, url https://gohugo.io/render-hooks/code-blocks/ [20241012].
[^pattekkat_2022]: Navendu Pattekkat, "Adding Diagrams to Your Hugo Blog With Mermaid", Navendu.me, 26 Aug 2022, url https://navendu.me/posts/adding-diagrams-to-your-hugo-blog-with-mermaid/ [20241012].

[^mchem_2024]: KaTeX Contributors, "mhchem extension", KaTeX, GitHub, 2 Jul 2024, url https://github.com/KaTeX/KaTeX/tree/main/contrib/mhchem [20241012].
