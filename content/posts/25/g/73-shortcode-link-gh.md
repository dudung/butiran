+++
title = 'shortcode link/gh'
date = '2025-07-26T07:34:25+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = ['butiran', 'link']
categories = ['shortcode']
url = '25g73'
+++

<!-- more -->

## shortcode
```html
{{ $parts := split (index .Params 0) "." }}
{{ $repo := index $parts 0 }}
{{ $folder := index $parts 1 }}
<a href="https://github.com/dudung/
{{ $repo }}/blob/main/{{ $folder }}/
README.md" target="_blank" rel="noopener">
  <code>{{ $repo }}.{{ $folder }}</code>
</a>
```

## usage
```
{{</* link/gh 25g72.01 */>}}
```

{{< link/gh 25g72.01 >}}


## notes
+ There is discussion in developing the shortcode [^gpt-4o_2025].


## refs
[^gpt-4o_2025]: GPT-4o, "Shortcode vs Full URL", ChatGPT, 26 Jul 2025, url https://chatgpt.com/share/688422f9-c880-800a-86df-6a10c6c8a237 [20250726].
