+++
title = 'floating menu notes'
date = '2025-02-16T17:44:19+07:00'
draft = false
type = 'slides'
authors = ['viridi']
tags = ['menu']
url = '25b25'
+++
<!--more-->

+ For `slides` and `decks` pages it uses `url` as the item.
+ For `talks` pages it requires a parameter named `slides` array in the Hugo front matter.
+ To maintain state and content of the floating menu, `localStorage` is required.
+ As other page is clicked from Home or via menu, the floating menu is reset and rebuilt, which can introduce delay in the future.
+ This note ends here for now.
