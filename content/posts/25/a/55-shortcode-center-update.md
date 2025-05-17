+++
title = 'shortcode center update'
date = '2025-01-25T04:17:49+07:00'
draft = false
type = 'slides'
authors = ['viridi']
tags = ['shortcodes']
url = '25a55'
[ref]
author = 'GPT-40'
title = 'Center table in div'
source = 'ChatGPT'
created = '25 Jan 2025'
updated = ''
url = 'https://chatgpt.com/share/67940468-de28-800a-9676-f4ef1c271555'
accessed = '20250125'
+++

+ Shortcode
```html
<div style="display: flex; justify-content: center;">{{ .Inner | markdownify }}</div>
```

+ Usage
```toml
{{</* center */>}}Some text to center{{</* /center */>}}
```
