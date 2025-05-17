+++
title = 'progresslist shortcode'
date = '2025-03-27T05:04:52+07:00'
draft = false
math = true
type = 'notes'
authors = ['viridi']
tags = ['progress']
categories = ['shortcode']
url = '25c65'
[ref]
author = 'Sparisoma Viridi'
title = 'progress shortcode'
source = 'notes, 27 Mar 2025'
updated = '-'
url = 'https://dudung.github.io/notes/25c65/'
accessed = '20250327'
+++

{{< columns >}}
+ result
+ shortcode
+ usage
+ to-do
+ notes
+ error fix
{{< /columns >}}

{{< columns >}}
+ refs
{{< /columns >}}

<!--more-->

To remember unfinished tasks a shortcode is build as a result from AI-assisted discussions [^gpt-4o_2025a], [^gpt-4o_2025b], [^gpt-4o_2025c], that must be analyzed, synthesized, and merged.


## result
{{< progresslist >}}
25c65 | 10%
25c64 | 40%
25c63 | 90%
25c62 | 25%
25c61 | 75%
25c60 | 30%
{{< /progresslist >}}

Notice that above result might be altered if the shortcode is modified.

+ [25c65](/notes/25c65/) `10%` progresslist shortcode \
..
+ [25c60](/notes/25c60/) `30%` mon 24.03.25

Above is current results with Markdown. Not exactly the same but similar, but at least it preserves the appearance when the shortcoe is modified.


## shortcode
Current shortcode is a follow.

```php
{{ $urls := slice }}
{{ $states := slice }}

{{ range split (strings.TrimSpace .Inner) "\n" }}
  {{ $parts := split . " | " }}
  {{ $urls = $urls | append (index $parts 0) }}
  {{ $states = $states | append (index $parts 1) }}
{{ end }}

<ul>
  {{ range $i, $url := $urls }}
    {{ $matchedPages := where site.RegularPages "Params.url" $url }}
    {{ if gt (len $matchedPages) 0 }}
      {{ $page := index $matchedPages 0 }}
      <li>
        <a href="{{ $page.RelPermalink }}"><code>{{ $page.Params.url }}</code></a>
        <code>{{ index $states $i }}</code>
        &nbsp;{{ $page.Title }}
      </li>
    {{ end }}
  {{ end }}
</ul>
```


## usage
```php
{{</* progresslist */>}}
25c65 | 10%
25c64 | 40%
25c63 | 90%
25c62 | 25%
25c61 | 75%
25c66 | 30%
{{</* /progresslist */>}}
```


## notes
+ This shortcode is used to list all unfinished tasks and put it in article part of a note. Then in the slide part of the note is list of handled tasks for the day, since in one day there will be only limited energy to finish tasks and slide can only contain 10 lines without scrolling.
+ This note is not listed to today daily-note due to limiation above. 
+ Further modification of the shortcode will be reported in other note refering to this one.


## to-do
+ Apply CSS to style the appearance.
+ Plan to use `flex` and `div` instead of `ul` and `li` to get better UX.
+ Use `notes` instead of `slide` for daily-note.


## error fix
As this note and its shortcode are deloyed to GitHub, it does not work and

```php
{{ range split (strings.TrimSpace .Inner) "\n" }}
```

should be replaced with

```php
{{ range split (strings.TrimSpace .Inner) "\n" }}
```

as suggested, where it can happen due to different Hugo versions installed locally and on GitHub [^gpt-4o_2025d].


## refs
[^gpt-4o_2025a]: GPT-4o, "Remove empty lines Hogo", Chat GPT, 27 Mar 2025, url https://chatgpt.com/share/67e48f2c-fa1c-800a-84fa-6a216b8ac1b0 [20250327].
[^gpt-4o_2025b]: GPT-4o, "Hugo filter by front matter", Chat GPT, 27 Mar 2025, url https://chatgpt.com/share/67e48f07-7c34-800a-8eb7-68ed7604caab [20250327].
[^gpt-4o_2025c]: GPT-4o, "Hugo Progress List Shortcode", Chat GPT, 27 Mar 2025, url https://chatgpt.com/share/67e48ebb-b874-800a-93a5-1c5e279d78e4 [20250327].
[^gpt-4o_2025d]: GPT-4o, "Hugo Shortcode GitHub Error", Chat GPT, 27 Mar 2025, url https://chatgpt.com/share/67e49729-f564-800a-90c8-5008295b5b33 [20250327].
