+++
title = 'list of tasks'
date = '2025-04-04T08:22:46+07:00'
draft = false
type = 'notes'
authors = ['viridi']
tags = ['tasklist']
categories = ['list']
url = '25d08'
[ref]
author = 'Sparisoma Viridi'
title = 'unfinished tasks'
source = 'notes, 4 Apr 2025'
updated = ''
url = 'https://dudung.github.io/notes/25d08/'
accessed = '20250404'
+++

{{< columns >}}
+ intro
+ tasks
{{< /columns >}}

{{< columns >}}
+ refs
{{< /columns >}}

<!--more-->

This note is the first implementation of a shortcode named `tasklist` [^viridi_2025].


## intro
Failing to complete a task creates underlying cognitive tension, which is what makes a person keep coming back to it, is known as Zeigarnik effect [^sawhney_2020]. Unfinished tasks create constant, low-Level anxiety, which is unpleasant and mentally exhausting [^zwierzanski_2024]. The tasks that drain a person the most often are not even the big ones, because the brain tricks him into thinking they are bigger, harder, and more complicated than they actually are [^white_2025]. On the other hand, the annoyance of having all of them on the to-do list may motivate the person to tackle them at the next opportunity, which is known as Ovsiankina effect [^rose_2022].

There is suggestion that whenever possible, use milestones or other progress indicators to visually indicate the way forward and highlight when the task is incomplete, which can increase the chances of completing the task [^barten_2021]. For that purpose the `tasklist` shortcode is developed.


## tasks
Following are tasks indicated as finished and unfinished, which might be used as initial information for a daily note, a to-do list created daily, hat unfortunately has limitation of number of tasks every day. That is also the other reason in creating this shortcode.

{{< tasklist >}}
25c32 | 7 | 1
25c12 | 7 | 1 
{{< /tasklist >}}

{{< tasklist >}}
25c61 | 1 | 1
25c46 | 1 | 1
25c44 | 6 | 1
25c28 | 9 | 2
25a21 | 13 | 1 | y
{{< /tasklist >}}

{{< tasklist >}}
25d12 | 8 | 1 | y
25d11 | 1 | 1
25d10 | 3 | 1
25d09 | 1 | 1
25c27 | 3 | 1
25c26 | 3 | 1
25c16 | 7 | 1 | y
{{< /tasklist >}}

{{< tasklist >}}
25c58 | 5 | 1
25c56 | 3 | 1
25c49 | 4 | 1
25c48 | 13 | 1
25c47 | 5 | 1
25b67 | 6 | 2
{{< /tasklist >}}

{{< tasklist >}}
25d01 | 4 | 2
25c40 | 4 | 1
{{< /tasklist >}}

{{< tasklist >}}
25d07 | 1 | 1 | y
{{< /tasklist >}}

After a task is complete, it will have status of 2 in a daily note and then it will be excluded in the next day daily note in order to reduce number of displayed tasks. To trace it, just progate the daily notes.


## refs
[^barten_2021]: Sebastien Berten, "The effects of Zeigarnik and Ovsyankina", US-Republic, 22 Jul 2021, url https://www.ux-republic.com/en/the-effects-of-zeigarnik-and-dovsyankina/ [20250404].
[^rose_2022]: Hannah Rose, "The psychology of unfinished tasks", Ness lab, 14 Jun 2022, url https://nesslabs.com/unfinished-tasks [20250404].
[^sawhney_2020]: Vasundhara Sawhney, "Why Your Brain Dwells on Unfinished Tasks", Harvard Bussiness Review, 12 Oct 2020, url https://hbr.org/2020/10/why-your-brain-dwells-on-unfinished-tasks [20250404].
[^viridi_2025]: Sparisoma Viridi, "tasklist shortcode", notes, 3 Apr 2025, (4 apr 2025), url https://dudung.github.io/notes/25d04/ [20250404].
[^white_2025]: Lorelai White, "Why unfinished tasks drain your energy -and how to fix it", Medium, 16 Feb 2025, url https://medium.com/p/fff401f6273a [20250404].
[^zwierzanski_2024]: Michael Zwierzanski, "Unfinished Tasks Are Quietly Sabotaging Your Confidence and Peace of Mind", Medium, 10 Sep 2024, url https://medium.com/p/9af4f5ae679e [20250404].
