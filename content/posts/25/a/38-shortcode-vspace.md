+++
title = 'shortcode vspace'
date = '2025-01-15T05:07:40+07:00'
draft = false
type = 'slides'
authors = ['viridi']
tags = ['hugo']
url = '25a38'
[ref]
author = 'GPT-40'
title = 'Hugo Vertical Spacing Shortcode'
source = 'ChatGPT'
created = '15 Jan 2025'
updated = ''
url = 'https://chatgpt.com/share/6786e1e7-839c-800a-9a97-77bf75b2d47b'
accessed = '20250115'
+++

+ Shortcode
```html
<div style="height: {{ .Get 0 | default '1' }}em;"></div>
```

+ Usage
```toml
{{</* vspace 1.5 */>}}
```
