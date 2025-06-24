+++
title = 'log terms and new hugo site'
date = 2024-05-01T07:26:00+07:00
draft = false
math = true
tags = ['log', 'hugo', 'github pages']
url = '2027'
authors = ['viridi']
+++
Search the right term for new blog on GitHub <!--more-->


## intro
The term log might sound familiar to some people. Long time before computer era, a form of log entry record-keeping, that was used since the first captains sailed Earth’s seas in ancient history, is known as Captain's log, which records what was happening on a mission and to record historical facts for future generations [^wu_2017]. In computing context a log is the automatically produced and time-stamped documentation of events relevant to a particular system, where virtually all software applications and systems produce log files [^wigmore_2014].

Then related to inventory, there is a log tracks the movement of commodity, including materials and goods, by code, where it records movement of full cases and units, which is known a inventory log [^beening_2002]. Similar to commodity, there is patient log, which records detailed information about clinical encounter with patient [^exxat_2024]. For materials as given in a course, there is lecture log that records short description of the material covered in each lecture [^petrides_2012]. Even the last three examples of logs given are in computer era, they exist before the time when hard copy forms still be used.

Previous examples are intended for private use or at least institutional use. Then with the internet and its spirits [^bahba_2014], other types of logs arise such as blog, vlog, slog [^ghebremichael_2019] and plog [^harper_2023], which stand for weblog, video blog, sound log, and photoblog. Notice that the second is not sound blog, sound log, which is the recorded audio file of a blog post.

I would like to make the log, as much as possible, in plain text with additional features if necessary, e.g. LaTeX with MathJax or KaTeX, diagrams with Mermaid, formatted text with Markdown, sheet music with abcjs, molecules visualization with 3Dmol.js, charts with Chart.js, and others with HTML.


## new github pages
In order to implement the log a repository, whose name is `nou` or notes on unstructured, is created, cloned, updated, and set up with workflow. Following are the steps and related sub-steps to create new GitHub Pages from a new repository.

### create new repository
1. Visit https://github.com/new.
2. It might be required to login first.
3. Fill repository name, e.g. nou.
4. Change until it is available.
5. Write description, e.g. notes on unstructured.
6. Choose Public.
7. Check Add a README file.
8. Add .gitignore, choose any template, e.g Go.
9. Choose appropriate license, e.g. MIT License.
10. Click the green button, Create repository, at bottom right.

### edit .gitignore
1. Visit https://github.com/dudung/nou, if not redirected automatically.
2. Notice that `dudung` is the GitHub username in this example.
3. Click `.gitignore` file.
4. Edit the file, click 🖉 icon.
5. Erase all lines.
6. Add following lines
```
# shortcuts
cmd.lnk

# folders
public
```
7. Click green button, Commit changes..., on top right.
8. Click green button, Commit changes, on bottom right.
9. Visit the repository page, e.g. https://github.com/dudung/nou.

### clone repository to local folder
1. On Windows, open File Explorer, with  ⊞ + E.
2. Navigate to drive or folder where `nou` repository will be cloned.
3. Right click with mouse to open context menu, choose Show more options.
4. Choose Open Git Bash here.
5. Type `git clone https://github.com/dudung/nou nou` and press Enter.
6. Type `cd nou` and press Enter.

### create cmd shortcut
1. On Windows, open `nou` folder using File Explorer.
2. Right click with mouse to open context menu, choose New, then Shortcut.
3. Type cmd.
4. Click Next button, on bottom right.
5. Rename it from cmd.exe to cmd.
6. Click Finish button, on bottom right.
7. Right click on new created icon, cmd, choose Properties.
8. Delete value on Start in field.
9. Click OK button, on the bottom.

### copy files from previous repository
1. Visit https://github.com/dudung/to.
2. Copy `assets\css` and its content to `nou`.
3. Copy `layouts` and all its content to `nou`.
4. Copy `themes` and all its content to `nou`.
5. Copy `hugo.toml` to `nou`.
6. Copy `content/authors` and its content to `nou`.
7. Copy `content/about` and its content `nou` and modify what necessary.
8. Create `content/posts` and copy some posts.

### run hugo
1. Click `cmd` on `nou`.
2. Edit `hugo.toml` by modifying following lines
```
baseURL = 'https://dudung.github.io/nou'
title = 'nou'
```
2. Type `hugo server`.
3. Visit http://localhost:1313/nou/ with a web browser.
4. On cmd windown, Press CTRL+C to stop the service.

### update remote repository
1. On Git Bash window, type `git add .` and press Enter.
2. Type `git commit -a -m "new, update"` and press Enter.
3. Type `git push` and press Enter.

### set workflow on remote repository
1. Visit settings page https://github.com/dudung/nou/settings.
2. Choose Pages https://github.com/dudung/nou/settings/pages.
3. Choose Source to GitHub Actions.
4. Click browse all workflows https://github.com/dudung/nou/actions/new.
5. Type `hugo` on Search workflows field.
6. Click Configure button on Hugo.
7. Click green button, Commit changes..., on top right.
8. Click green button, Commit changes, on bottom right.
9. Visit repo page https://github.com/dudung/nou.
10. Wait the yellow circle &bull; to turn to green check mark &check;.
11. Visit https://dudung.github.io/nou/, the GitHub Pages for nou repo.

### update local repository
1. On Git Bash window, type `git pull` to update local files with the workflow.
2. Navigate to `.github/workflows/` to see `hugo.yml` file for Hugo workflow.

After performing above steps
+ Remore repository is https://github.com/dudung/nou.
+ GitHub Pages https://dudung.github.io/nou/.
+ Local folder `nou`.
+ Local host [http://localhost:1313/nou/](http://localhost:1313/nou/).

## notes
[^bahba_2014]: Pete Bahba, "What's the spirit of the internet? Freedom, equality，customize?", Quora, 31 Aug 2024, url https://qr.ae/pswoMp [20240501].
[^exxat_2024]: -, "Adding Patient Logs", Exxat, 9 Feb 2024, url https://helpcenter.exxat.com/hc/en-us/articles/15365707728273-Adding-Patient-Logs [20240501].
[^beening_2002]: Sally Benning, "USDA Commodity Inventory Log", Department of Agriculture, 2 May 2002, url https://www.agriculture.pa.gov/Food/food_assistance/The%20Emergency%20Food%20Assistance%20Program/Documents/TEFAP%20Inventory%20Log.pdf [20240501].
[^ghebremichael_2019]: Niyat Ghebremichael, "What is the difference between a blog, vlog and slog?", Zooma, 26 Feb 2019, url https://zooma.agency/en/learn/content-creation/what-is-the-difference-between-a-blog-vlog-and-slog [20240501].
[^harper_2023]: Jayden Harper, "Plogging for Beginners: Tips for Creating Impressive Plog", VanceAI, 12 Dec 2023, url https://vanceai.com/posts/create-impressive-plog/ [20240501].
[^petrides_2012]: George Petrides, "Lecture log", TMA4155 Kryptografi, introduksjon, Institutt for matematiske fag, NTNU, 7 Nov 2012, url https://wiki.math.ntnu.no/tma4155/2012h/log [20240501].
[^wigmore_2014]: Ivy Wigmore, "log (log file)", TechTarget, 5 Nov 2014, url https://www.techtarget.com/whatis/definition/log-log-file [20240501].
[^wu_2017]: Cindy Wu, "The Captain’s Log", Medium, 8 Jun 2017, url https://medium.com/p/fc858f5794f3 [20240501].
