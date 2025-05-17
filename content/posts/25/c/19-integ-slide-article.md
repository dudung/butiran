+++
title = 'integ slide-article'
date = '2025-03-08T03:49:17+07:00'
draft = false
math = true
type = 'notes'
authors = ['viridi', 'arimasen', 'renik', 'dasch']
tags = ['hugo', 'template']
categories = ['notes']
url = '25c19'
[ref]
author = 'Sparisoma Viridi'
title = 'integ slide-article'
source = 'notes'
date = '8 Mar 2025'
updated = 'not yet'
url = 'https://dudung.github.io/notes/25c19/'
accessed = '20250308'
+++

+ It integrates a slide and an article in a Hugo post.
+ The slide can be considered as summary of the article.
+ To view the slide, display a post in a browser full screen mode.
+ Displayed vertical scroll bar showing that there is other part below the slide, which is the article.
+ Current limitation: One article can only has one slide.
+ Usage workflow might be necessary to prepare in order to inform how this approach can hande a task more efficient.

<!--more-->

Write an article to express your thought and then adapt it as slide for presentation seems inefficient. This note is an example that both can be written at the same time in a Hugo post. Current limitation is that it only supports single slide. It can be considered that the slide is simply summary of the article. In presentation just display the post in full screen.

## background
This year I obtain some research grant directly or indirectly and also in process of applying some. Seeing the situation a plan how to manamage them is required in order to not miss any. Especially, there are debts from a grant that is received in two successive years but the outputs are still rejected. A solid plan is need to manage on-going and new projects. The indirect and not-yet are also interesting and consume time. Without proper time management I can not imagine how to handle them in efficient way.

## loads
A simple model can be used to view loads due to the projects, e.g. for project $i$ the load is

$$\tag{1}
L_i = f_i(t_w, s_w, p_w, c_w, ..),
$$

where $t_w$ is for time allocation in a week, $s_w$ is for schedule in a week, $p_w$ is progress in a week, $c_w$ is communication in a week, and other factors. The allocation time and schedule are separated since it might be that a project requires e.g. weekly meeting but the other only monthly meeting, so that even the allocation time the same, but the load in each week due to different project is different.

## idea
This style of a Hugo post can be considered as piece of puzzle for the integrated solution in managing the works. At least for the courses, a brainstroming in the form of an artile, can integrated with the slide. It will reduce time to find which article or document related to a slide. Or when it is required to draft something, just write an article then resume it on the slide part. Later, the slide can be simple captured and paste to a presentation, e.g. using Microsoft PowerPoint.

## workflow
For a taks the workflow can visualized as follow

{{< mermaid >}}
graph LR
  B --> I --> C
  C --"Idea"--> P1
  C --"Draft"--> P2
  C --"Other"--> N
  N --> O --> E
  P2 --> P1
  P1 --> P2
  B(["Begin"])
  I[/"Taks"/]
  C{"Type"}
  E(["End"])
  O[/"Note"/]
  subgraph N[" "]
    P1["Slide"]
    P2["Article"]
  end
{{< /mermaid >}}

where it is still discussable, since it is a new approach. The condition "Other" is another possible sequence in creating slide and article parts.

## template
The important lines in `layouts\notes\single.html` are as follow.

```html
{{ $content := .RawContent }}
{{ $parts := split $content "split-mark" }}    

<div class="slide-content">
    {{ index $parts 0 | markdownify }}
</div>

<div class="article-container">
  
  <div class="article-title">
    <h1>{{ .Title }}</h1>
  </div>

  <ul class='authors-container'>
  {{- range .Params.authors }}
    {{- with $.Site.GetPage "taxonomyTerm" (printf "authors/%s" (urlize .)) }}
      <li class='author'>
        <a href="{{ .Permalink }}">{{ .Params.name }}</a>
      </li>
    {{ end }}
  {{ end }}
  </ul>

  {{ $dateMachine := .Date | time.Format "2006-01-02T15:04:05 07:00" }}
  <!--{{ $dateHuman := .Date | time.Format ":date_long" }}-->
  {{ $dateHuman := .Date | time.Format "2 Jan 2006" }}
  <div class='readingtimedate'>
    <time datetime="{{ $dateMachine }}">{{ $dateHuman }}</time>
    &middot;
    {{ partial "reading-time.html" . }}
  </div>
  
  <div class="article-content">
    {{ index $parts 1 | markdownify }}
  </div>

</div>
```
where the `split-mark` is `< !--more-->` but without space between `<` and `!`. Or you can use other mark. In a Hugo post the mark has already defined and use to separate excerpt and content. That is the reason why the mark is used here.

## documentation
This note can be considered as initial documentation. Further enhancement might later be released when I have sufficient energy and left passion.

## others
I am quite satisfied with this achievement. Even it is small for other people, but for me it helps to buid my confidence that I am able to realize an idea. It is really relieving and I hope it does help me to make my diverse taks more efficient.

## to-do
+ Consider whether multi-slide feature is necessary or it just adds complexity than ease.
+ Find a way to hide the vertical scroll bar in full screen mode (or presentation mode).
+ Think of automatice resuming process in creating the slide part. Perhaps using AI? But it will not suitable for SSG like Hugo.

## closing
A layout for Hugo post that integrate slide for summary and article for full explanation, derivation, process and others, has been developed. It only supports single slide is the current limitation.

## refs
Following are discussion with GPT-4o and GPT-4o mini (there is no more free access).

+ GPT-4o, GPT-4o mini, "Split Content Layout", Chat GPT, 8 Mar 2025, url https://chatgpt.com/share/67cbf9af-a014-800a-9777-492f89231319 [20250308].
+ GPT-4o, "Date format in Hugo", Chat GPT, 8 Mar 2025, url https://chatgpt.com/share/67cbf9e3-9364-800a-a03f-77e348f02792 [20250308].
+ GPT-4o, "Inline List CSS", Chat GPT, 8 Mar 2025, url https://chatgpt.com/share/67cbfa13-b960-800a-9dbb-44b3494d748c [20250308].
