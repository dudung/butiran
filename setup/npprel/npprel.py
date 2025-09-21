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
full_path = os.path.normpath(os.path.join(repo_root, rel_path))

if not os.path.exists(full_path):
    subprocess.run([NOTEPADPP])  # just open N++ if missing
else:
    subprocess.run([NOTEPADPP, full_path])
