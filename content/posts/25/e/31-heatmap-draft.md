+++
title = 'heatmap draft'
date = '2025-05-17T03:39:42+07:00'
authors = ['viridi', 'purqon', 'aditya', 'irvianto']
draft = false
type = 'notes'
tags = ['ap', 'heatmap']
categories = []
url = '25e31'
+++

<!-- more -->

It is a draft of a heatmap for visualization of some sensors reading.


## demo
Following is a demo in draft stage.

{{< script/runner id="cnt1" >}}
const cnt = document.getElementById("cnt1");

with(cnt.style) {
  border = "1px solid #888";
  width = "400px";
  height = "300px";
  display = "flex";
}

const leftDiv = document.createElement("div");
with(leftDiv.style) {
  background = "#ccc";
  flex = "1";
}

const rightDiv = document.createElement("div");
with(rightDiv.style) {
  background = "#eee";
  flex = "3";
}

cnt.append(leftDiv);
cnt.append(rightDiv);


{{< /script/runner >}}


## notes
+ This note is part of research project led by [Acep Purqon](/butiran/authors/purqon) [^viridi_2025].
+ Notes related to js are [25c22](/butiran/25c22), [25c36](/butiran/25c36), [25c39](/butiran/25c39), [25c52](/butiran/25c52).


## refs
[^viridi_2025]: Sparisoma Viridi, "purqon ag res", butiran, 11 Dec 2024, url https://dudung.github.io/butiran/24l06/ [20250517].


