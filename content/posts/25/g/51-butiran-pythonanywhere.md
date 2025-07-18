+++
title = 'butiran pythonanywhere'
date = '2025-07-18T23:43:53+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = ['pythonanywhere']
categories = ['butiran']
url = '25g51'
+++

<!-- more -->

## app.py
```py
# flask --app app run --debug --port=5500

from flask import Flask, request

app = Flask(__name__)

@app.route("/")
def home():
    return "a response from butiran-backend on pythonanywhere"

```

## requirements.txt
```
blinker==1.9.0
click==8.2.1
colorama==0.4.6
Flask==3.1.1
gunicorn==23.0.0
itsdangerous==2.2.0
Jinja2==3.1.6
MarkupSafe==3.0.2
packaging==25.0
Werkzeug==3.1.3
```

## pythonanywhere
url https://butiran.pythonanywhere.com/


## github
url https://github.com/dudung/butiran-backend
