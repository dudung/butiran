+++
title = 'fetch backend'
date = '2025-07-19T09:00:06+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = ['js']
categories = ['butiran']
url = '25g54'
+++

<!-- more -->

{{< script/loader >}}
src/25e41.js
{{< /script/loader >}}

{{< script/runner id="cnt1" >}}
const cnt = document.getElementById("cnt1");
cnt.style.display = "flex";

const style2 = {
  width: "300px",
  height: "200px",
  overflowY: "scroll",
};
const txa = createElement("textarea", style2);
txa.id = "txa1";

const style3 = {
  height: "25px",
  width: "60px",
};
const btn = createElement("button", style3);
btn.innerHTML = "Fetch";

cnt.appendChild(txa);
cnt.appendChild(btn);

btn.addEventListener("click", () => {
  console.log("click");

  /* fetch("http://localhost:5500/") */
  fetch("https://butiran.pythonanywhere.com/")
    .then(response => response.text())
    .then(data => {
      txa.value = data;
    })
    .catch(error => txa.value += "Error fetching data:" + error);
})
{{< /script/runner >}}
