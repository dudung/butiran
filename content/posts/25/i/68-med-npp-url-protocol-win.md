+++
title = 'med npp url protocol win'
date = '2025-09-21T20:25:40+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = []
categories = ['medium']
url = '25i68'
+++

<!-- more -->

## info
+ title URL protocol to launch Notepad++
+ subtitle Create a protocol in Windows registry and use it on a Hugo post
+ url [0228e5e57e05](https://medium.com/p/0228e5e57e05)
+ data 21-sep-2025


## content
Click on npp:// protocol will call npp.bat that later launch Notepad++.
First part of an URI, before the : character, is scheme, which indicates which protocol the browser must use to fetch the resource and it determines how the rest of the URI is structured and interpreted (MDN contributors, 2025). Suppose that you want to create a protocol that does something when the link is clicked, e.g. open a file with certain application, etc. There is straight forward information to create it in Windows by creating a reg file and import it to Windows registry (Tare, 2024). The idea is how to create a protocol that allows a link to a file, when it is clicked, it will launch Notepad++ to edit the file. There is a note (actually a Hugo post) about the process to get it works (Viridi, 2025). Brief steps and the requirements to create such protocol and use it in a Hugo post are given in this story.

### Protocol name
Since its purpose is to launch Notepad++ then the protocol is simply npp://. So, it you want to open C:\temp\README.md with a link then use it as

<a href="npp://C:/temp/README.md">Edit with Notepad++</a>
which is very intuitive, right?

### Required files
There are three files required, beside the Markdown file — the Hugo post, which are a reg file for defining protocol in Windows registry, a batch file for handler, and a HTML file for Hugo shortcode.

### Reg file
Suppose it has the name npp.reg with following content.

```
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\npp]
"URL Protocol"=""

[HKEY_CLASSES_ROOT\npp\shell\open\command]
@="\"C:\\Tools\\npp.bat\" \"%1\""r
To import the content to Windows registry, just click it.
```

Press enter or click to view image in full size

Right click on npp.reg file will open a context menu.
You can choose Open or Open with Registry Editor.

Press enter or click to view image in full size

Confirmation after open npp.reg file.
Just click Yes to proceed.

Press enter or click to view image in full size

Click OK to close the dialog box.

### Batch file
A batch file npp.bat is required with following content.

```
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

It will perform some text manipulations such as removing npp://, replace all / with \, and remove the first backslah to prevent the link to the file to be a relative path.

Notice in the las line of reg file npp.reg, this batch file npp.bat is called.

### Hugo shortcode
To include the protocol npp:// before a text of a filename and its path, a shortcode is required, e.g. npp.html which is in the folder layouts/shortcodes.

```
<a href="npp:///{{ .Get 0 }}">{{ if .Get 1 }}{{ .Get 1 }}{{ else }}edit{{ end }}</a>
```

It simply has only a line. It creates an <a> element with the protocol npp:// prepending the filename and its path from first argument {{ .Get 0 }}and diplays text from second argument {{ .Get 1 }} if available.

### Demo
Suppose that there is a post with shortcode using the protocol.

Press enter or click to view image in full size

The text “edit” with blue color use the protocol npp://.
Click on the text “edit” will open a dialog box.

Press enter or click to view image in full size

Dialog box for confirmation before opening npp.bat file.
Click left button with text “Open npp.bat” to proceed.

Press enter or click to view image in full size

Notepad++ is opened and it shows the file for editing.
The protocol opens Notepad++ showing content of the file for editing.

### Steps
Following are steps to use the protocol in a Hugo post.

1. Create npp.reg and double-click it to merge its contents into the Windows Registry.
2. Create npp.bat and save it as C:\Tools\npp.bat.
3. Create a Hugo shortcode file named npp.html in layouts/shortcodes/.
4. Use the shortcode in your content (in a Hugo post): \
{{< link/npp "X:/path/to/a-post.md" "open" >}}
5. Click the generated link to open the file in Notepad++.

### Summaries
After reading this story, you are able to

+ Create a new URL protocol, and what it does to the rest of URI, in a reg file
+ Import reg file to Window registry
+ Create a Hugo shortcode to wrap a text with the protocol.
+ Use the shortcode in a Hugo post.
+ Click a link with the protocol to open Notepad++ showing content of a file.

### Refs
+ Avinash Tare, “How to create own URL Protocol In Windows”, DEV Community, 6 Aug 2024, url https://dev.to/avinash_tare/how-to-create-own-url-protocol-in-windows-42bj [20250921].
+ MDN contributors, “URI schemes”, MDN Web Docs, 23 Jul 2025, url https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Schemes [2025091].
+ Sparisoma Viridi, “reg npp-protocol”, butiran, 21 Sep 2025, url https://dudung.github.io/butiran/25i67/ [20250921].
