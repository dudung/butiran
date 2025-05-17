+++
title = 'shortcode fsize'
date = '2025-01-17T17:38:05+07:00'
draft = false
type = 'slides'
authors = ['viridi']
tags = ['hugo']
url = '25a48'
[ref]
author = 'GPT-40'
title = 'Font size and line-height'
source = 'ChatGPT'
created = '17 Jan 2025'
updated = ''
url = 'https://chatgpt.com/share/678a335b-928c-800a-9882-9a8f837744cb'
accessed = '20250117'
+++

+ Shortcode
```html
<div style="font-size: {{ .Get 0 | default '1' }}em; line-height: calc({{ .Get 0 | default '1' }}em * 1.5);">{{ .Inner }}</div>
```

+ Usage
```toml
{{</* fsize 0.8 */>}}B: Bachelor, M: Magister, D: Doktor.{{</* /fsize */>}}
```
