+++
title = 'reg npp-protocol'
date = '2025-09-21T05:14:34+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = []
categories = ['butiran']
url = '25i66'
+++

<!-- more -->

A Notepad++ launcher to make Hugo post editing easier is reported here. It uses a custom protocol and is informed to work on Windows [^gpt-5_2025a], but unfortunatelly it does not. A lot of modifications are required to make it works [^gpt-5_2025b]. It also requires a shortcode to convert link provided in a Hugo post to the `npp://` protocol [^gpt-5_2025c].


## batch file
Content of `npp.bat` located in `C:\Tools` is as follow.

```bat
@echo off
setlocal enabledelayedexpansion

:: get the incoming URL (quoted)
set "URL=%~1"

:: remove npp:// from the front
set "FILE=%URL:npp://=%"

:: replace forward slashes with backslashes
set "FILE=%FILE:/=\%"

:: remove the first backslash
for /f "tokens=1* delims=\" %%A in ("!FILE!") do (
    set "FILE=%%A%%B"
)

:: launch Notepad++ with the real path
"C:\Program Files\Notepad++\notepad++.exe" "%FILE%"

endlocal
```

This batch file is required to strip `npp://`, convert `/` to `\`, and remove the first `\`. The protocol is only needed to identify the protocol but must not be passed. Link to file in HTML file is different than link used in Windows. The first `\` will make the link relative to `C:\Windows\System32\`.


## reg file
Content of `npp.reg` is as follow.

```reg
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\npp]
"URL Protocol"=""

[HKEY_CLASSES_ROOT\npp\shell\open\command]
@="\"C:\\Tools\\npp.bat\" \"%1\""
```

It is a minimal registry file to register the protocol and to execute `npp.bat` when it is clicked.


## shortcode
Content of `npp.html` in `layouts/shortcode/link` is as follow.

```html
<a href="npp:///{{ .Get 0 }}">{{ if .Get 1 }}{{ .Get 1 }}{{ else }}edit{{ end }}</a>
```

As an illustration, you can {{< link/npp "M:/butiran/content/posts/25/i/66-reg-npp-protocol.md" "edit" >}} this post.


## steps
1. Create `npp.reg` and double-click it to merge its contents into the Windows Registry.
2. Create `npp.bat` and save it as `C:\Tools\npp.bat`.
3. Create a Hugo shortcode file named `npp.html` in `layouts/shortcodes/`.
4. Use the shortcode in your content: \
  `{{</* link/npp "X:/path/to/a-post.md" "open"  */>}}`
5. Click the generated link to open the file in Notepad++.

Above steps have been polished by GPT-5 [^gpt-5_2025d].


## notes
+ Creation of this note requires discussion with GPT-5.
+ unfortunatelly, GPT-5 does not give direct useable code.
+ Reporting error messages to it triggers GPT-5 to give solution the problem.
+ Debugging skill and prior knowledge are still required to take advantage of GPT-5 answers.
+ A better approach is proposed in newer note [^viridi_2025a] and this approach will not be installed in other machine than nb-amd-ryzen-7.


## to-do
+ Currently, the npp:// protocol requires an absolute path to a file, which is inconvenient when Hugo posts are saved in different folders on different computers. Support for relative paths is needed.
+ An Edit link in a Hugo post could be useful if it retrieves information from the front matter, enabling editing directly while navigating the site on the local server. This feature currently exists only when the HTML pages are served locally.
+ Create a Medium story about this note.

To-do items are also polished by GPT-5 [^gpt-5_2025e], but not the last one.

## refs
[^gpt-5_2025a]: GPT-5, "Notepad++ post launcher", ChatGPT, 21 Sep 2025, url https://chatgpt.com/share/68cf27e1-542c-800a-b6a8-66f33ed1ccbb [20250921].
[^gpt-5_2025b]: GPT-5, "Registry protocol setup", ChatGPT, 21 Sep 2025, url https://chatgpt.com/share/68cf7377-5d54-800a-a809-75a8f0a095ff [20250921].
[^gpt-5_2025c]: GPT-5, "Create Hugo shortcode", ChatGPT, 21 Sep 2025, url https://chatgpt.com/share/68cf73aa-23d8-800a-92cd-35dee4457627 [20250921].
[^gpt-5_2025d]: GPT-5, "Correct instruction formatting", ChatGPT, 21 Sep 2025, url https://chatgpt.com/share/68cf7b6d-9bc4-800a-b96d-2a814aef7ed5 [20250921].
[^gpt-5_2025e]: GPT-5, "Correct sentence structure", ChatGPT, 21 Sep 2025, url https://chatgpt.com/share/68cf81dd-70c0-800a-a578-0eacbb70a84c [20250921].
[^viridi_2025a]: Sparisoma Viridi, "reg npprel-protocol", butiran, 21 Sep 2025, url [https://dudung.github.io/butiran/25i67/](/butiran/25i67/) [20250921].