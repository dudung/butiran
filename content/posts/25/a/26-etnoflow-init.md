+++
title = 'etnoflow package init'
date = '2025-01-09T12:42:50+07:00'
draft = false
type = 'slides'
tags = ['res', 'abm', 'ednoflow']
authors = ['viridi']
url = '25a26'
+++
<!--more-->

+ Repository \
url https://github.com/dudung/ednoflow [20240109]
+ Build and install
```bash
Microsoft Windows [Version 10.0.26100.2605]
(c) Microsoft Corporation. All rights reserved.

M:\ednoflow>v:\tf\Scripts\activate

(tf) M:\ednoflow>python -m build
* Creating isolated environment: venv+pip...
* Installing packages in isolated environment:
  - setuptools>=42
  - wheel
* Getting build dependencies for sdist...
C:\Users\Sparisoma Viridi\AppData\Local\Temp\build-env-1jqrk8a7\Lib\site-packages\setuptools\_distutils\dist.py:270: UserWarning: Unknown distribution option: 'tests_require'
  warnings.warn(msg)
C:\Users\Sparisoma Viridi\AppData\Local\Temp\build-env-1jqrk8a7\Lib\site-packages\setuptools\_distutils\dist.py:270: UserWarning: Unknown distribution option: 'test_suite'
  warnings.warn(msg)
running egg_info
creating src\ednoflow.egg-info
writing src\ednoflow.egg-info\PKG-INFO
writing dependency_links to src\ednoflow.egg-info\dependency_links.txt
writing requirements to src\ednoflow.egg-info\requires.txt
writing top-level names to src\ednoflow.egg-info\top_level.txt
writing manifest file 'src\ednoflow.egg-info\SOURCES.txt'
reading manifest file 'src\ednoflow.egg-info\SOURCES.txt'
adding license file 'LICENSE'
writing manifest file 'src\ednoflow.egg-info\SOURCES.txt'
* Building sdist...
C:\Users\Sparisoma Viridi\AppData\Local\Temp\build-env-1jqrk8a7\Lib\site-packages\setuptools\_distutils\dist.py:270: UserWarning: Unknown distribution option: 'tests_require'
  warnings.warn(msg)
C:\Users\Sparisoma Viridi\AppData\Local\Temp\build-env-1jqrk8a7\Lib\site-packages\setuptools\_distutils\dist.py:270: UserWarning: Unknown distribution option: 'test_suite'
  warnings.warn(msg)
running sdist
running egg_info
writing src\ednoflow.egg-info\PKG-INFO
writing dependency_links to src\ednoflow.egg-info\dependency_links.txt
writing requirements to src\ednoflow.egg-info\requires.txt
writing top-level names to src\ednoflow.egg-info\top_level.txt
reading manifest file 'src\ednoflow.egg-info\SOURCES.txt'
adding license file 'LICENSE'
writing manifest file 'src\ednoflow.egg-info\SOURCES.txt'
running check
creating ednoflow-0.0.1
creating ednoflow-0.0.1\src\ednoflow
creating ednoflow-0.0.1\src\ednoflow.egg-info
copying files to ednoflow-0.0.1...
copying LICENSE -> ednoflow-0.0.1
copying README.md -> ednoflow-0.0.1
copying pyproject.toml -> ednoflow-0.0.1
copying setup.py -> ednoflow-0.0.1
copying src\ednoflow\__init__.py -> ednoflow-0.0.1\src\ednoflow
copying src\ednoflow.egg-info\PKG-INFO -> ednoflow-0.0.1\src\ednoflow.egg-info
copying src\ednoflow.egg-info\SOURCES.txt -> ednoflow-0.0.1\src\ednoflow.egg-info
copying src\ednoflow.egg-info\dependency_links.txt -> ednoflow-0.0.1\src\ednoflow.egg-info
copying src\ednoflow.egg-info\requires.txt -> ednoflow-0.0.1\src\ednoflow.egg-info
copying src\ednoflow.egg-info\top_level.txt -> ednoflow-0.0.1\src\ednoflow.egg-info
copying src\ednoflow.egg-info\SOURCES.txt -> ednoflow-0.0.1\src\ednoflow.egg-info
Writing ednoflow-0.0.1\setup.cfg
Creating tar archive
removing 'ednoflow-0.0.1' (and everything under it)
* Building wheel from sdist
* Creating isolated environment: venv+pip...
* Installing packages in isolated environment:
  - setuptools>=42
  - wheel
* Getting build dependencies for wheel...
C:\Users\Sparisoma Viridi\AppData\Local\Temp\build-env-v0f5_oal\Lib\site-packages\setuptools\_distutils\dist.py:270: UserWarning: Unknown distribution option: 'tests_require'
  warnings.warn(msg)
C:\Users\Sparisoma Viridi\AppData\Local\Temp\build-env-v0f5_oal\Lib\site-packages\setuptools\_distutils\dist.py:270: UserWarning: Unknown distribution option: 'test_suite'
  warnings.warn(msg)
running egg_info
writing src\ednoflow.egg-info\PKG-INFO
writing dependency_links to src\ednoflow.egg-info\dependency_links.txt
writing requirements to src\ednoflow.egg-info\requires.txt
writing top-level names to src\ednoflow.egg-info\top_level.txt
reading manifest file 'src\ednoflow.egg-info\SOURCES.txt'
adding license file 'LICENSE'
writing manifest file 'src\ednoflow.egg-info\SOURCES.txt'
* Building wheel...
C:\Users\Sparisoma Viridi\AppData\Local\Temp\build-env-v0f5_oal\Lib\site-packages\setuptools\_distutils\dist.py:270: UserWarning: Unknown distribution option: 'tests_require'
  warnings.warn(msg)
C:\Users\Sparisoma Viridi\AppData\Local\Temp\build-env-v0f5_oal\Lib\site-packages\setuptools\_distutils\dist.py:270: UserWarning: Unknown distribution option: 'test_suite'
  warnings.warn(msg)
running bdist_wheel
running build
running build_py
creating build\lib\ednoflow
copying src\ednoflow\__init__.py -> build\lib\ednoflow
installing to build\bdist.win-amd64\wheel
running install
running install_lib
creating build\bdist.win-amd64\wheel
creating build\bdist.win-amd64\wheel\ednoflow
copying build\lib\ednoflow\__init__.py -> build\bdist.win-amd64\wheel\.\ednoflow
running install_egg_info
running egg_info
writing src\ednoflow.egg-info\PKG-INFO
writing dependency_links to src\ednoflow.egg-info\dependency_links.txt
writing requirements to src\ednoflow.egg-info\requires.txt
writing top-level names to src\ednoflow.egg-info\top_level.txt
reading manifest file 'src\ednoflow.egg-info\SOURCES.txt'
adding license file 'LICENSE'
writing manifest file 'src\ednoflow.egg-info\SOURCES.txt'
Copying src\ednoflow.egg-info to build\bdist.win-amd64\wheel\.\ednoflow-0.0.1-py3.12.egg-info
running install_scripts
creating build\bdist.win-amd64\wheel\ednoflow-0.0.1.dist-info\WHEEL
creating 'M:\ednoflow\dist\.tmp-c5lmrlk4\ednoflow-0.0.1-py3-none-any.whl' and adding 'build\bdist.win-amd64\wheel' to it
adding 'ednoflow/__init__.py'
adding 'ednoflow-0.0.1.dist-info/LICENSE'
adding 'ednoflow-0.0.1.dist-info/METADATA'
adding 'ednoflow-0.0.1.dist-info/WHEEL'
adding 'ednoflow-0.0.1.dist-info/top_level.txt'
adding 'ednoflow-0.0.1.dist-info/RECORD'
removing build\bdist.win-amd64\wheel
Successfully built ednoflow-0.0.1.tar.gz and ednoflow-0.0.1-py3-none-any.whl

(tf) M:\ednoflow>pip install dist\ednoflow-0.0.1-py3-none-any.whl
Processing m:\ednoflow\dist\ednoflow-0.0.1-py3-none-any.whl
Requirement already satisfied: numpy>=1.26.4 in v:\tf\lib\site-packages (from ednoflow==0.0.1) (1.26.4)
Requirement already satisfied: matplotlib>=3.8.4 in v:\tf\lib\site-packages (from ednoflow==0.0.1) (3.8.4)
Requirement already satisfied: pandas>=2.2.2 in v:\tf\lib\site-packages (from ednoflow==0.0.1) (2.2.2)
Requirement already satisfied: contourpy>=1.0.1 in v:\tf\lib\site-packages (from matplotlib>=3.8.4->ednoflow==0.0.1) (1.2.1)
Requirement already satisfied: cycler>=0.10 in v:\tf\lib\site-packages (from matplotlib>=3.8.4->ednoflow==0.0.1) (0.12.1)
Requirement already satisfied: fonttools>=4.22.0 in v:\tf\lib\site-packages (from matplotlib>=3.8.4->ednoflow==0.0.1) (4.51.0)
Requirement already satisfied: kiwisolver>=1.3.1 in v:\tf\lib\site-packages (from matplotlib>=3.8.4->ednoflow==0.0.1) (1.4.5)
Requirement already satisfied: packaging>=20.0 in v:\tf\lib\site-packages (from matplotlib>=3.8.4->ednoflow==0.0.1) (24.0)
Requirement already satisfied: pillow>=8 in v:\tf\lib\site-packages (from matplotlib>=3.8.4->ednoflow==0.0.1) (10.3.0)
Requirement already satisfied: pyparsing>=2.3.1 in v:\tf\lib\site-packages (from matplotlib>=3.8.4->ednoflow==0.0.1) (3.1.2)
Requirement already satisfied: python-dateutil>=2.7 in v:\tf\lib\site-packages (from matplotlib>=3.8.4->ednoflow==0.0.1) (2.9.0.post0)
Requirement already satisfied: pytz>=2020.1 in v:\tf\lib\site-packages (from pandas>=2.2.2->ednoflow==0.0.1) (2024.1)
Requirement already satisfied: tzdata>=2022.7 in v:\tf\lib\site-packages (from pandas>=2.2.2->ednoflow==0.0.1) (2024.1)
Requirement already satisfied: six>=1.5 in v:\tf\lib\site-packages (from python-dateutil>=2.7->matplotlib>=3.8.4->ednoflow==0.0.1) (1.16.0)
Installing collected packages: ednoflow
Successfully installed ednoflow-0.0.1

(tf) M:\ednoflow>pip show ednoflow
Name: ednoflow
Version: 0.0.1
Summary: granular flow dynamics for edge-node networks
Home-page: https://github.com/dudung/ednoflow
Author: Sparisoma Viridi
Author-email: dudung@gmail.com
License: MIT
Location: V:\tf\Lib\site-packages
Requires: matplotlib, numpy, pandas
Required-by:

(tf) M:\ednoflow>pip uninstall ednoflow
Found existing installation: ednoflow 0.0.1
Uninstalling ednoflow-0.0.1:
  Would remove:
    v:\tf\lib\site-packages\ednoflow-0.0.1.dist-info\*
    v:\tf\lib\site-packages\ednoflow\*
Proceed (Y/n)? y
  Successfully uninstalled ednoflow-0.0.1

(tf) M:\ednoflow>pip show ednoflow
WARNING: Package(s) not found: ednoflow
```

+ Update repository
```bash
Sparisoma Viridi@LAPTOP-FOL5T5OD MINGW64 /m/ednoflow (main)
$ git commit -a -m "new files"
[main f829cf1] new files
 4 files changed, 276 insertions(+)
 create mode 100644 src/ednoflow/core/agent.py
 create mode 100644 src/ednoflow/core/edge.py
 create mode 100644 src/ednoflow/core/network.py
 create mode 100644 src/ednoflow/core/node.py

Sparisoma Viridi@LAPTOP-FOL5T5OD MINGW64 /m/ednoflow (main)
$ git push
Enumerating objects: 12, done.
Counting objects: 100% (12/12), done.
Delta compression using up to 16 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (9/9), 3.21 KiB | 1.07 MiB/s, done.
Total 9 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 1 local object.
To https://github.com/dudung/ednoflow
   140a145..f829cf1  main -> main
```

+ Todo \
Set GitHub workflow for deploying package to PyPI.
