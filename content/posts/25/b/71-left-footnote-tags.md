+++
title = 'left footnote tags'
date = '2025-02-21T08:14:07+07:00'
authors = ['viridi']
type = 'slides'
tags = ['partials', 'footer']
categories = ['hugo']
url = '25b71'
+++

+ `layouts\partials\terms.html`
```html
{{ if eq $page.Params.type "slides" }}
  {{- with $page.GetTerms $taxonomy }}
    <ul class="tags-footer-left">
      {{- range . }}
        <li><a href="{{ .RelPermalink }}">{{ .LinkTitle | lower }}</a></li>
      {{- end }}
    </ul>
  {{- end }}
{{ else }}
  {{- with $page.GetTerms $taxonomy }}
    {{- $label := (index . 0).Parent.LinkTitle }}
    <div>
      <div>{{ $label }}:</div>
      <ul>
        {{- range . }}
          <li><a href="{{ .RelPermalink }}">{{ .LinkTitle }}</a></li>
        {{- end }}
      </ul>
    </div>
  {{- end }}
{{ end }}
```
+ `static\css\slides.css`
```css
/* footer-left for tags */

.tags-footer-left {
  padding: 0;
  margin: 0;
  list-style: none;
  display: inline-block;
}

.tags-footer-left li {
  display: inline-block;
}

.tags-footer-left li:not(:last-child)::after {
  content: ",";
  margin-right: 0;
}

.slide-footer-left {
  position: absolute;
  margin: auto;
  left: calc(0.05 * var(--height));
  bottom: calc(0.02 * var(--height));
  text-align: center;
  font-size: calc(0.03 * var(--height));
  width: calc(0.4 * var(--height));
  color: #888;
  height: calc(0.045 * var(--height));
  border: 0px solid #4f81bd;
}
```
+ `layouts\slides\single.html`
```html
<div class="slide-container">
  ..
  
  <div class="slide-footer-left">
    {{ partial "terms.html" (dict "taxonomy" "tags" "page" .) }}
  </div>
  
  ..
</div>
```
