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
src/25g54.js
{{< /script/loader >}}

{{< script/runner id="cnt1" >}}
main_25g54();
{{< /script/runner >}}


## app.py
```py
# flask --app app run --debug --port=5500

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": [
    "http://localhost:1313",
    "https://dudung.github.io",
    "https://dudung.github.io/butiran"
]}})

@app.route("/")
def home():
    print("Request from Origin:", request.headers.get("Origin"))
    return "a response from butiran-backend on pythonanywhere"
```

## in post
```js
main_25g54();

function main_25g54() {
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
    
    const baseURL = location.hostname.includes("localhost")
      ? "http://localhost:5500/"
      : "https://butiran.pythonanywhere.com/";
    
    fetch(baseURL)
      .then(response => response.text())
      .then(data => {
        txa.value = data;
      })
      .catch(error => txa.value += "Error fetching data:" + error);
  })
}
```