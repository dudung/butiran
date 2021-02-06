# butiran
Python package for simulation of granular system

```
L:\home\butiran\src\py>py setup.py sdist bdist_wheel
C:\Users\Sparisoma Viridi\AppData\Local\Programs\Python\Python39\python.exe: can't open file 'L:\home\butiran\src\py\setup.py': [Errno 2] No such file or directory

L:\home\butiran\src\py>cd butiran

L:\home\butiran\src\py\butiran>py setup.py sdist bdist_wheel
usage: setup.py [global_opts] cmd1 [cmd1_opts] [cmd2 [cmd2_opts] ...]
   or: setup.py --help [cmd1 cmd2 ...]
   or: setup.py --help-commands
   or: setup.py cmd --help

error: invalid command 'bdist_wheel'

L:\home\butiran\src\py\butiran>py -m pip bdist_wheel
ERROR: unknown command "bdist_wheel" - maybe you meant "wheel"

L:\home\butiran\src\py\butiran>py -m pip wheel
ERROR: You must give at least one requirement to wheel (see "pip help wheel")

L:\home\butiran\src\py\butiran>py -m pip install wheel
Collecting wheel
  Downloading wheel-0.36.2-py2.py3-none-any.whl (35 kB)
Installing collected packages: wheel
  WARNING: The script wheel.exe is installed in 'C:\Users\Sparisoma Viridi\AppData\Local\Programs\Python\Python39\Scripts' which is not on PATH.
  Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.
Successfully installed wheel-0.36.2

1640 Try again.
L:\home\butiran\src\py\butiran>py setup.py sdist bdist_wheel
running sdist
running egg_info
creating butiran.egg-info
writing butiran.egg-info\PKG-INFO
writing dependency_links to butiran.egg-info\dependency_links.txt
writing top-level names to butiran.egg-info\top_level.txt
writing manifest file 'butiran.egg-info\SOURCES.txt'
reading manifest file 'butiran.egg-info\SOURCES.txt'
writing manifest file 'butiran.egg-info\SOURCES.txt'
warning: sdist: standard file not found: should have one of README, README.rst, README.txt, README.md

running check
warning: check: missing required meta-data: url

creating butiran-0.0.1
creating butiran-0.0.1\butiran.egg-info
creating butiran-0.0.1\math
copying files to butiran-0.0.1...
copying setup.py -> butiran-0.0.1
copying butiran.egg-info\PKG-INFO -> butiran-0.0.1\butiran.egg-info
copying butiran.egg-info\SOURCES.txt -> butiran-0.0.1\butiran.egg-info
copying butiran.egg-info\dependency_links.txt -> butiran-0.0.1\butiran.egg-info
copying butiran.egg-info\top_level.txt -> butiran-0.0.1\butiran.egg-info
copying math\__init__.py -> butiran-0.0.1\math
copying math\vect3.py -> butiran-0.0.1\math
Writing butiran-0.0.1\setup.cfg
creating dist
Creating tar archive
removing 'butiran-0.0.1' (and everything under it)
running bdist_wheel
running build
running build_py
creating build
creating build\lib
creating build\lib\math
copying math\vect3.py -> build\lib\math
copying math\__init__.py -> build\lib\math
installing to build\bdist.win-amd64\wheel
running install
running install_lib
creating build\bdist.win-amd64
creating build\bdist.win-amd64\wheel
creating build\bdist.win-amd64\wheel\math
copying build\lib\math\vect3.py -> build\bdist.win-amd64\wheel\.\math
copying build\lib\math\__init__.py -> build\bdist.win-amd64\wheel\.\math
running install_egg_info
Copying butiran.egg-info to build\bdist.win-amd64\wheel\.\butiran-0.0.1-py3.9.egg-info
running install_scripts
creating build\bdist.win-amd64\wheel\butiran-0.0.1.dist-info\WHEEL
creating 'dist\butiran-0.0.1-py3-none-any.whl' and adding 'build\bdist.win-amd64\wheel' to it
adding 'math/__init__.py'
adding 'math/vect3.py'
adding 'butiran-0.0.1.dist-info/METADATA'
adding 'butiran-0.0.1.dist-info/WHEEL'
adding 'butiran-0.0.1.dist-info/top_level.txt'
adding 'butiran-0.0.1.dist-info/RECORD'
removing build\bdist.win-amd64\wheel
```

```
#	
#	url https://www.freecodecamp.org/news/build-your-first-python-package/
#	20210206
#	1637 Try python setup.py sdist bdist_wheel
#	1639 

ERROR: You must give at least one requirement to wheel (see "pip help wheel")
```

Add `.gitignore` according to https://gist.github.com/GhostofGoes/94580e76cd251972b15b4821c8a06f59
```
# Editors
.vscode/
.idea/

# Vagrant
.vagrant/

# Mac/OSX
.DS_Store

# Windows
Thumbs.db

# Source for the following rules: https://raw.githubusercontent.com/github/gitignore/master/Python.gitignore
# Byte-compiled / optimized / DLL files
__pycache__/
*.py[cod]
*$py.class

# C extensions
*.so

# Distribution / packaging
.Python
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
*.egg-info/
.installed.cfg
*.egg
MANIFEST

# PyInstaller
#  Usually these files are written by a python script from a template
#  before PyInstaller builds the exe, so as to inject date/other infos into it.
*.manifest
*.spec

# Installer logs
pip-log.txt
pip-delete-this-directory.txt

# Unit test / coverage reports
htmlcov/
.tox/
.nox/
.coverage
.coverage.*
.cache
nosetests.xml
coverage.xml
*.cover
.hypothesis/
.pytest_cache/

# Translations
*.mo
*.pot

# Django stuff:
*.log
local_settings.py
db.sqlite3

# Flask stuff:
instance/
.webassets-cache

# Scrapy stuff:
.scrapy

# Sphinx documentation
docs/_build/

# PyBuilder
target/

# Jupyter Notebook
.ipynb_checkpoints

# IPython
profile_default/
ipython_config.py

# pyenv
.python-version

# celery beat schedule file
celerybeat-schedule

# SageMath parsed files
*.sage.py

# Environments
.env
.venv
env/
venv/
ENV/
env.bak/
venv.bak/

# Spyder project settings
.spyderproject
.spyproject

# Rope project settings
.ropeproject

# mkdocs documentation
/site

# mypy
.mypy_cache/
.dmypy.json
dmypy.json
```