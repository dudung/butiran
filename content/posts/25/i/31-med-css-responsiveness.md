+++
title = 'med css responsiveness'
date = '2025-09-07T20:28:39+07:00'
authors = ['viridi']
draft = true
type = 'notes'
tags = []
categories = []
url = '25i31'
+++

<!-- more -->

## info
+ title CSS responsiveness issues
+ subtitle Showing the problem and not yet the solution
+ url [fc47ed17f272](https://medium.com/p/fc47ed17f272)
+ date 07-sep-2025


## content
Normally when I update my Hugo site I do not really care about what it looks in smartphone. But today as I creating calendar card, that is showing day, date, month and year, it behaves differently in notebook screen and in smartphone screen. The first has screen with 2880×1800 pixels, while the second has screen with 720×1612 pixels.

I do not understand about it, but it comes from CSS responsiveness (GPT-5, 2025). This story does not show the solution of the problem, but it just shows the problems. Feel free to comment if you have the solution. I really appreciate that.

### The consistent
Firts is the consistent appearance.

Press enter or click to view image in full size

Appearance of category card in notebook screen (left) and smartphone screen (right).
The cards show consistent logo, number of posts in a category, and title of the category.

```html
<style>
.category-card {
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between; /* space between top row and bottom */
  width: 80px;
  height: 80px;
  margin: 0.3em;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 4px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-sizing: border-box;
  text-decoration: none;
  color: inherit;
}
.category-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 3px 8px rgba(0,0,0,0.12);
}
.category-card .top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
}
.category-card .logo-container {
  width: 20px;
  height: 20px;
  display:flex;
  align-items:center;
  justify-content:center;
}
.category-card img, .category-card svg {
  max-width: 100%;
  max-height: 100%;
}
.category-card .count {
  font-size: 0.75em;
  color:#888;
}
.category-card .title-wrapper {
  flex: 1;
  display: flex;
  align-items: center;      /* vertically center if short */
  justify-content: center;
  text-align: center;
  padding: 0 6px;
}
.category-card .title {
  font-weight: 600;
  font-size: 0.85em;
  line-height: 1.1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;    /* up to 3 lines */
  overflow: hidden;
  word-break: break-word;
}
</style>

<a class="category-card" href="{{ .Get "link" }}">
  <div class="top-row">
    {{ with .Get "logo" }}
    <div class="logo-container">
      <img src="{{ . }}" alt="{{ $.Get "name" }} logo" loading="lazy">
    </div>
    {{ end }}
    <div class="count">{{ .Get "count" }}</div>
  </div>
  <div class="title-wrapper">
    <div class="title">{{ .Get "name" }}</div>
  </div>
</a>
Code for category card is given above.
```

### The inconsistent
Second is the inconsistent appearance.

Press enter or click to view image in full size

Appearance of calendar card in notebook screen (left) and smartphone screen (right).
In notebook screen the calendar card show good layout of day name, date, month year, but not in smartphone screen.

```html
{{/* 
Usage:
{{</* card/calendar "sun-07.09.25" "/my-post/" */>}}
*/}}

{{ $input := .Get 0 }}
{{ $link := .Get 1 }}
{{ $bgcolor := .Get 2 | default "#ffffff" }}

{{/* split dayname and date part */}}
{{ $parts := split $input "-" }}
{{ $dayname := upper (index $parts 0) }}
{{ $datepart := index $parts 1 }}

{{/* split dd.mm.yy */}}
{{ $dparts := split $datepart "." }}
{{ $day := index $dparts 0 }}

{{/* month string, strip leading zeros safely */}}
{{ $monthNumStr := index $dparts 1 }}


{{/* strip all leading zeros safely */}}
{{ $monthNumClean := replaceRE "^0+" "" $monthNumStr }}
{{ if eq $monthNumClean "" }}
  {{ $monthNumClean = "0" }}
{{ end }}
{{ $monthNum := int $monthNumClean }}


{{ $yearShort := index $dparts 2 }}
{{ $year := printf "20%s" $yearShort }}

{{/* month abbreviation (index is zero-based, monthNum is 1-based) */}}
{{ $months := slice "Jan" "Feb" "Mar" "Apr" "May" "Jun" "Jul" "Aug" "Sep" "Oct" "Nov" "Dec" }}
{{ $monthName := "" }}
{{ if and (ge $monthNum 1) (le $monthNum 12) }}
  {{ $monthName = index $months (sub $monthNum 1) }}
{{ end }}

<div class="calendar-card">
<a href="/butiran/{{- $link -}}/">
  <div class="calendar-card-content" style="background: {{- $bgcolor -}};">
    <div class="calendar-day">{{ $dayname }}</div>
    <div class="calendar-date">{{ $day }}</div>
    <div class="calendar-monthyear">{{ $monthName }} {{ $year }}</div>
  </div>
</a>
</div>

<style>
.calendar-card, a{
  display: inline-block;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  margin-top: 2px;
}

.calendar-card-content {
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0.5rem;
}

.calendar-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.25);
}

.calendar-day {
  font-size: 0.6rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #555;
}

.calendar-date {
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.2;
}

.calendar-monthyear {
  font-size: 0.6rem;
  color: #777;
}
</style>
```

Above is code for calendar card.

### Closing
After reading this story you have been informed about

+ an example of Hugo shortcode showing category card that behaves consistently in notebook screen and in smartphone screen,
+ an example of Hugo shortcode showing calendar card that behaves inconsistently in notebook screen and in smartphone screen, that as expected in the first device but unexpected in the second device,
+ the source of the issue, which is CSS responsiveness.

---

+ GPT-5, “CSS responsiveness issues”, ChatGPT, 7 Sep 2025, url https://chatgpt.com/share/68bd7f2b-ca44-800a-aee4-6ac6ade47df5 [20250907].
