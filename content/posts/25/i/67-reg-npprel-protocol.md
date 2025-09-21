+++
title = 'reg npprel-protocol'
date = '2025-09-21T15:32:56+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = []
categories = ['butiran']
url = '25i67'
+++

<!-- more -->

Previous approach to launch a Hugo post via link in a HTML page hosted locally is still inconvenient due to absolute path to the file [^viridi_2025a]. Here better approach is reported as sugggested in a discussion with GPT-5 [^gpt-5_2025a]. Steps to create own URL Protocol in Windows seems obvious [^tare_2024], but not for me until today. 


## demo
As example {{< link/npprel "25/i/67-reg-npprel-protocol.md" "edit" >}} this post. Click no the link `edit` will open Notepad++ editing the post.


## shortcode
Content of `link/npprel.html` in `layouts/shortcodes/` is as follow

```html
<a href="npprel:///{{ .Get 0 }}">{{ if .Get 1 }}{{ .Get 1 }}{{ else }}edit{{ end }}</a>
```

and

```go
{{</* link/npprel "25/i/67-reg-npprel-protocol.md" "edit" */>}}
```

is how to use it.


## handler
Content of `npprel.py` in `setup/npprel/` is as follow

```py
import os, sys, subprocess, urllib.parse

# --- Notepad++ path per machine ---
NOTEPADPP = r"C:\Program Files\Notepad++\notepad++.exe"

# This script is in <repo>\setup\npprel\npprel.py
script_dir = os.path.dirname(os.path.abspath(__file__))

# repo root is two levels up
repo_root = os.path.abspath(os.path.join(script_dir, os.pardir, os.pardir))

if len(sys.argv) < 2:
    sys.exit("Usage: npprel.py <url>")

url = sys.argv[1]  # e.g. npprel://content/post/my-post.md
parsed = urllib.parse.urlparse(url)
rel_path = urllib.parse.unquote(parsed.path).lstrip("/")
folder_path = "content/posts/"
full_path = os.path.normpath(os.path.join(repo_root, folder_path, rel_path))

print(full_path)

if not os.path.exists(full_path):
    subprocess.run([NOTEPADPP])  # just open N++ if missing
else:
    subprocess.run([NOTEPADPP, full_path])
```

and it will be called  when `npprel://` url protocol is clicked in a HTML file.


## installer
Content of `install-npprel.bat` in `setup/` is as follow

```batch
@echo off
echo Installing npprel:// protocol handler...

REM Use Python in the standard user path
set PYTHON_PATH=%LOCALAPPDATA%\Programs\Python\Python312\python.exe
set SCRIPT_PATH=%~dp0npprel.py

REM Build a temporary reg file with correct paths
set TMPREG=%TEMP%\npprel.reg

REM Escape backslashes for .reg
set "PYTHON_PATH_ESC=%PYTHON_PATH:\=\\%"
set "SCRIPT_PATH_ESC=%SCRIPT_PATH:\=\\%"

(
echo Windows Registry Editor Version 5.00
echo.
echo [HKEY_CURRENT_USER\Software\Classes\npprel]
echo @="URL:npprel Protocol"
echo "URL Protocol"=""
echo.
echo [HKEY_CURRENT_USER\Software\Classes\npprel\shell\open\command]
echo @="\"%PYTHON_PATH_ESC%\" \"%SCRIPT_PATH_ESC%\" \"%%1\""
) > "%TMPREG%"

reg import "%TMPREG%"

echo.
echo npprel:// protocol installed.
pause
```

where it should be executed to add `npprel://` url protocol to Windows registry.


## Steps
Following are steps to enable `npprel://` url protocol in a HTML page generated from a Hugo post.

1. Create a folder `setup/npprel/`.  
2. Inside it add `install-npprel.bat` and `npprel.py`.  
3. Run `install-npprel.bat` to create a temporary `.reg` file and import it to register the `npprel://` protocol.  
4. Create a shortcode file `link/npprel.html` in your Hugo project.  
5. Use that shortcode in a Hugo post to insert a `npprel://` link.  
6. Run `hugo` to build the site.  
7. Open the generated HTML page from the post.  
8. Click the `npprel://` link to launch your handler script.  

Original version and full explanation of the steps is available [].


## to-do
+ Perform a pull request in another machine to test whether it also works.
+ Add note to previous note about `npp://` protocol that will be kept only for historical purpose.


## refs
[^tare_2024]: Avinash Tare, "How to create own URL Protocol In Windows", DEV Community, 6 Aug 2024, url https://dev.to/avinash_tare/how-to-create-own-url-protocol-in-windows-42bj [20250921].
[^gpt-5_2025a]: GPT-5, "Fix Hugo path issue for npprel", ChatGPT, 21 Sep 2025, url https://chatgpt.com/share/68cfba4b-4730-800a-88ab-44efb3042440 [20250921].
[^gpt-5_2025b]: GPT-5, "Register custom URL protocol", ChatGPT, 21 Sep 2025, url https://chatgpt.com/share/68cfeaf9-03d0-800a-bb07-149118c5ac24 [20250921].
[^viridi_2025a]: Sparisoma Viridi, "reg npp protocol", butiran, 21 Sep 2025, url [https://dudung.github.io/butiran/25i66/](/butiran/25i66/) [20250921].
