+++
title = 'tasklist shortcode'
date = '2025-04-03T18:42:23+07:00'
draft = false
math = true
type = 'notes'
authors = ['viridi']
tags = ['tasklist']
categories = ['shortcode']
url = '25d04'
[ref]
author = 'Sparisoma Viridi'
title = 'tasklist shortcode'
source = 'notes, 3 Apr 2025'
updated = '4 apr 2025'
url = 'https://dudung.github.io/notes/25d04/'
accessed = '20250404'
+++

{{< columns >}}
+ result
+ shortcode
+ css
+ usage
{{< /columns >}}

{{< columns >}}
+ notes
+ to-do
+ refs
{{< /columns >}}

<!--more-->

It is an evolution of previous shortcode [^viridi_2025a], which only lists available unfinished (also remembered) tasks and shows only general information as overview. To test a long title task, a dummy note is created [^viridi_2025b].


## results
Following is the current result of this shortcode.

{{< tasklist >}}
25d07 | 1 | 1
25d06 | 48 | 2
25d05 | 20 | 1
25d04 | 2 | 2
25d03 | 1 | 2
25d02 | 1 | 2
25d01 | 4 | 2
25d00 | 1 | 2
{{< /tasklist >}}

The status at lower right corner of each task can have value of 0 (not started), 1 (in progress), 2 (completed), where daily note should have 2 by the end of the day when it is created.

For simplicity, updates show how many times a task has been further processed, with each consecutive processing separated by at least half a day.


## shortcode
Following is the shortcode `tasklist` in `layouts/shortcodes`.

```html
{{ $styles := resources.Get "css/tasklist.css" | resources.Minify | resources.Fingerprint }}
<link rel="stylesheet" href="{{ $styles.RelPermalink }}">


{{ $urls := slice }}
{{ $updates := slice }}
{{ $status := slice }}

{{ range split (trim .Inner " \n\r\t") "\n" }}
  {{ $parts := split . " | " }}
  {{ $urls = $urls | append (index $parts 0) }}
  {{ $updates = $updates | append (index $parts 1) }}
  {{ $status = $status | append (index $parts 2) }}
{{ end }}

<div class="task-list-container">
  {{ range $i, $url := $urls }}
    {{ $matchedPages := where site.RegularPages "Params.url" $url }}
    {{ if gt (len $matchedPages) 0 }}
      {{ $page := index $matchedPages 0 }}
      <div class="task">
        <div class="task-header">
          <div class="task-url">{{ $page.Params.url }}</div>
          <div class="task-date">{{ dateFormat "2-Jan-2006" $page.Params.date }}</div>
        </div>
        
        <div class="task-title"><a href="{{ $page.RelPermalink }}">{{ $page.Title }}</a></div>
        
        <div class="task-footer">
          <div class="task-updates">{{ strings.Repeat (int (index $updates $i)) "▮" }}</div>
          <div class="task-status">{{ (index $status $i) }}</div>
        </div>
      </div>
    {{ end }}
  {{ end }}
</div>
```

The character for updates can be modified by simply replacing "▮" with other character.


## css
The shortcode requires following CSS named `tasklist.css`

```css
.task-list-container {
  padding: 10px;
  text-align: left;
}

.task {
  border: 1px solid blue;
  border-radius: 8px;
  display: inline-block;
  padding: 4px 6px;
  margin: -1.5px 0px;
  word-break: break-all;
  font-size: 80%;
  background: #f4f4f4;
  border: 1px solid #ccc;
  height: 96px;
  width: 110px;
  scrollbar-color: #4f81bd #f1f1f1;
  scrollbar-width: thin;
  overflow: auto;
  line-height: 18.7px;
}

.task-header {
  display: flex;
}

.task-url {
  flex: 1;
  font-family: monospace;
}

.task-date {
  flex: none;
  font-family: monospace;
}

.task-title {
  scrollbar-color: #4f81bd #f1f1f1;
  scrollbar-width: thin;
  overflow: auto;
  height: 3.5em;
  padding-bottom: 1em;
}

.task-footer {
  display: flex;
}

.task-updates {
  flex: 1;
  letter-spacing: -2px;
  color: #4f81bd;
  font-family: monospace;
}

.task-status {
  flex: none;
  font-family: monospace;
}
```

which is located in `assets/css`.


## usage
To use the shortcode put following lines

```php
{{</* tasklist */>}}
25d06 | 1 | 2
25d05 | 1 | 1
25d04 | 2 | 2
25d03 | 1 | 2
25d02 | 1 | 2
25d01 | 4 | 2
25d00 | 1 | 2
{{</* /tasklist */>}}
```

in a Hugo post, or note in this repository.


## notes
+ Suggestion about alternatives for the progress bar does not work well, since syntax for Hugo `strings.Repeat` uses wrong order of arguments [^gp4-4o_2025].
+ Solution is given on Hugo [strings.Repeat page](https://gohugo.io/functions/strings/repeat/).


## to-do
+ Post this note on Medium as story with topics of Hugo SSG, shortcodes, or other related terms or phrases.


## refs
[^viridi_2025a]: Sparisoma Viridi, "progress shortcode", notes, 27 Mar 2025, (-), url https://dudung.github.io/notes/25c65/ [20250327].
[^viridi_2025b]: Sparisoma Viridi, "post with long title just for testing vertical scrollbar in task-title in task", notes, 4 Apr 2025, (-), url https://dudung.github.io/notes/25d06/ [20250404].
[^gp4-4o_2025]: GPT-4o, "Task Monitoring and Status", Chat GPT, 4 Apr 2025, url https://chatgpt.com/share/67ef2677-e934-800a-b17b-87d55f52e432 [20250404]
