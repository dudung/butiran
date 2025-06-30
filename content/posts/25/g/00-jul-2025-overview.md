+++
title = 'jul 2025 overview'
date = '2025-07-01T03:49:09+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = []
categories = ['convention']
url = '25g00'
+++

<!-- more -->

This note gives guidance outlines the naming and url conventions for organizing monthly posts, where the structure allows for a clear historical evolution and supports both daily and non-daily entries [^gpt-4o_2025a], which also serves as the monthly overview and as an example of what a typical monthly overview post looks like [^gpt-4o_2025b].


## monthly overview
First post in a month covers:

+ Conventions (e.g. post structure, tags, numbering),
+ Guidelines (how to write, categorize, etc.),
+ Plans (goals, projects, intentions for the month),
+ Summaries or resumes (what happened or will happen),
+ Meta info (any behind-the-scenes notes),

where not all are implemented immediatly and also can be subject to change.


## post prefixes
+ `00` — Reserved for the monthly overview post.
+ `01` to `99` — Reserved for posts in the month (e.g. daily notes, reflections, event notes, topic-specific entries, users, etc).
+ Extended range — If needed, additional posts can use alphanumeric prefixes starting from `a0` to `a9`, then `b0` to `z9`.


## url structure
Each post URL consists of three parts:
+ Year: Two-digit year (e.g., `25` for 2025),
+ Month: One-letter code (`a` = January, `b` = February, ..., `l` = December),
+ Post ID: Two-digit or extended alphanumeric prefix (e.g., `00`, `15`, `98`, `a3`, `z7`).

Example URL:
+ `/25a00/` → January 2025 monthly overview,
+ `/25c22/` → March 15th daily note,
+ `/25g99/` → July 2025 miscellaneous post,
+ `/25la2/` → December 2025 overflow post.


## table
+ Status: 0 (unprocessed), 1 (processed).
+ Symbols: p (planned), s (started), u (unfinished), e (ended), c (continued), x (uncertain) [^viridi_2025a].


## notes
+ Current url structure is limited to 2099 [^gpt-4o_2025c] and must be later considered to advance.
+ Daily note will use `notelist` shortcode [^viridi_2025b] and it should be the first note in a day, but it might be not today.
+ The reserved numbers for daily note 1-31 are not comfortable when editing the note in current month folder.
  - Start from this month it will be as two months ago (as noticed on 13-jun-2025) [^viridi_2025c].
  - It is due to double information on the post number and the title, e.g. 01-mon-010725 post.
+ Plan to change h2 with a note pseudo link on 14-may-2025. &times;


## refs
[^gpt-4o_2025a]: GPT-4o, "Monthly Post Format Guidance", ChatGPT, 1 Jun 2025, url https://chatgpt.com/share/683b97dc-3dac-800a-84fd-c12cf89ae2b1 [20250601].
[^gpt-4o_2025b]: GPT-4o, "Monthly Posts Overview", ChatGPT, 1 Jun 2025, url https://chatgpt.com/share/683b93ee-edc4-800a-9b45-c237a225bba4 [20250601].
[^gpt-4o_2025c]: GPT-4o, "Chronological Post URL Scheme (2000–2099)", ChatGPT, 30 May 2025, url https://chatgpt.com/share/68398934-7154-800a-8615-8878d31be194  [20250601].
[^viridi_2025a]: Sparisoma Viridi, "thu 01.05.25", butiran, 1 May 2025, url [https://dudung.github.io/butiran/25e00/](/butiran/25e00/) [20250601].
[^viridi_2025b]: Sparisoma Viridi, "note list idea", butiran, 30 May 2025, url [https://dudung.github.io/butiran/25e65/](/butiran/25e65/) [20250601].
[^viridi_2025c]: Sparisoma Viridi, "fri 13.06.25", butiran, 13 Jun 2025, url [https://dudung.github.io/butiran/25f13/](/butiran/25f13/)
