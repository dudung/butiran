---
title: "pip install music fail"
date: 2022-04-14T21:54:01+07:00
lastmod: 2022-04-15T13:59:00+07:00
author: viridi
mathjax: false
mermaid: true
chartjs: false
tags: ['python', 'pip', 'install', 'music', 'not-solved']
url: "0058"
draft: false
---
Paket Python dengan nama `music` [[1](#r01)] coba diinstal dan ditemui banyak masalah.


## install 0.7b2
Lakukan instalasi versi terkini [[1](#r01)].

```
PS L:\home\cookbook\notebook> pip install music
Collecting music
  Downloading music-0.7b2-py3-none-any.whl (15 kB)
Requirement already satisfied: matplotlib in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from music) (3.5.1)
Requirement already satisfied: numpy in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from music) (1.22.3)
Requirement already satisfied: colorama in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from music) (0.4.4)
Collecting termcolor
  Downloading termcolor-1.1.0.tar.gz (3.9 kB)
  Preparing metadata (setup.py) ... done
Collecting sympy
  Downloading sympy-1.10.1-py3-none-any.whl (6.4 MB)
     ---------------------------------------- 6.4/6.4 MB 278.7 kB/s eta 0:00:00
Collecting scipy
  Downloading scipy-1.8.0-cp310-cp310-win_amd64.whl (37.0 MB)
     ---------------------------------------- 37.0/37.0 MB 167.8 kB/s eta 0:00:00
Requirement already satisfied: packaging>=20.0 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music) (21.3)
Requirement already satisfied: fonttools>=4.22.0 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music) (4.31.2)
Requirement already satisfied: python-dateutil>=2.7 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music) (2.8.2)
Requirement already satisfied: pyparsing>=2.2.1 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music) (3.0.7)
Requirement already satisfied: cycler>=0.10 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music) (0.11.0)
Requirement already satisfied: pillow>=6.2.0 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music) (9.0.1)
Requirement already satisfied: kiwisolver>=1.0.1 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music) (1.4.0)
Collecting mpmath>=0.19
  Downloading mpmath-1.2.1-py3-none-any.whl (532 kB)
     ---------------------------------------- 532.6/532.6 KB 93.9 kB/s eta 0:00:00
Requirement already satisfied: six>=1.5 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from python-dateutil>=2.7->matplotlib->music) (1.16.0)
Building wheels for collected packages: termcolor
  Building wheel for termcolor (setup.py) ... done
  Created wheel for termcolor: filename=termcolor-1.1.0-py3-none-any.whl size=4848 sha256=60e520cba6cc24a324ffd122633ae4f538643c28c895a75f74ce2efb1a904622
  Stored in directory: c:\users\sparisoma viridi\appdata\local\pip\cache\wheels\a1\49\46\1b13a65d8da11238af9616b00fdde6d45b0f95d9291bac8452
Successfully built termcolor
Installing collected packages: termcolor, mpmath, sympy, scipy, music
Installing collected packages: termcolor, mpmath, sympy, scipy, music
Successfully installed mpmath-1.2.1 music-0.7b2 scipy-1.8.0 sympy-1.10.1 termcolor-1.1.0
```

```
PS L:\home\cookbook\notebook> pip check
No broken requirements found.
```

```
PS L:\home\cookbook\notebook> python ..\python\hello\hello_music.py
Traceback (most recent call last):
  File "L:\home\cookbook\python\hello\hello_music.py", line 2, in <module>
    import music as M, numpy as n
  File "C:\Users\Sparisoma Viridi\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\LocalCache\local-packages\Python310\site-packages\music\__init__.py", line 1, in <module>
    from . import core, utils, tables, synths, effects, structures, singing
  File "C:\Users\Sparisoma Viridi\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\LocalCache\local-packages\Python310\site-packages\music\utils.py", line 5, in <module>
    from . import core
ImportError: cannot import name 'core' from partially initialized module 'music' (most likely due to a circular import) (C:\Users\Sparisoma Viridi\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\LocalCache\local-packages\Python310\site-packages\music\__init__.py)
```

```
PS L:\home\cookbook\notebook> pip uninstall music
Found existing installation: music 0.7b2
Uninstalling music-0.7b2:
  Would remove:
    c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages\music-0.7b2.dist-info\*
    c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages\music\*
Proceed (Y/n)? y
  Successfully uninstalled music-0.7b2
```

```
PS L:\home\cookbook\notebook> pip check
No broken requirements found.
```


## install music 0.7b1
Lakukan downgrade ke versi sebelumnya [[2](#r02)].

```
PS L:\home\cookbook\notebook> pip install music==0.7b1
Collecting music==0.7b1
  Downloading music-0.7b1-py3-none-any.whl (15 kB)
Requirement already satisfied: colorama in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from music==0.7b1) (0.4.4)
Requirement already satisfied: scipy in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from music==0.7b1) (1.8.0)
Requirement already satisfied: sympy in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from music==0.7b1) (1.10.1)
Requirement already satisfied: numpy in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from music==0.7b1) (1.22.3)
Requirement already satisfied: termcolor in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from music==0.7b1) (1.1.0)
Requirement already satisfied: matplotlib in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from music==0.7b1) (3.5.1)
Requirement already satisfied: fonttools>=4.22.0 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music==0.7b1) (4.31.2)
Requirement already satisfied: pyparsing>=2.2.1 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music==0.7b1) (3.0.7)
Requirement already satisfied: cycler>=0.10 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music==0.7b1) (0.11.0)
Requirement already satisfied: python-dateutil>=2.7 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music==0.7b1) (2.8.2)
Requirement already satisfied: kiwisolver>=1.0.1 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music==0.7b1) (1.4.0)
Requirement already satisfied: packaging>=20.0 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music==0.7b1) (21.3)
Requirement already satisfied: pillow>=6.2.0 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music==0.7b1) (9.0.1)
Requirement already satisfied: mpmath>=0.19 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from sympy->music==0.7b1) (1.2.1)
Requirement already satisfied: six>=1.5 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from python-dateutil>=2.7->matplotlib->music==0.7b1) (1.16.0)
Installing collected packages: music
Successfully installed music-0.7b1
```

```
PS L:\home\cookbook\notebook> pip check
No broken requirements found.
```

```
PS L:\home\cookbook\python\hello> python hello_music.py
Traceback (most recent call last):
  File "L:\home\cookbook\python\hello\hello_music.py", line 2, in <module>
    import music as M, numpy as n
  File "C:\Users\Sparisoma Viridi\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\LocalCache\local-packages\Python310\site-packages\music\__init__.py", line 1, in <module>
    from .utils import H
  File "C:\Users\Sparisoma Viridi\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\LocalCache\local-packages\Python310\site-packages\music\utils.py", line 5, in <module>
    from . import core
ImportError: cannot import name 'core' from partially initialized module 'music' (most likely due to a circular import) (C:\Users\Sparisoma Viridi\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\LocalCache\local-packages\Python310\site-packages\music\__init__.py)
```

```
PS L:\home\cookbook\python\hello> pip uninstall music==0.7b1
Found existing installation: music 0.7b1
Uninstalling music-0.7b1:
  Would remove:
    c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages\music-0.7b1.dist-info\*
    c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages\music\*
Proceed (Y/n)? y
  Successfully uninstalled music-0.7b1
```

```
PS L:\home\cookbook\python\hello> pip check
No broken requirements found.
```

```
PS L:\home\cookbook\python\hello> pip cache purge
Files removed: 178
```

```
PS L:\home\cookbook\python\hello> pip check
No broken requirements found.
```

## install music 0.6b0
Lakukan downgrade ke versi sebelumnya lagi [[3](#r03)], tidak berurutan dengan waktu rilis.

```
PS L:\home\cookbook\python\hello> pip install music==0.6b0
Collecting music==0.6b0
  Downloading music-0.6b0.tar.gz (47 kB)
     ---------------------------------------- 47.5/47.5 KB 125.7 kB/s eta 0:00:00
  Preparing metadata (setup.py) ... done
Requirement already satisfied: sympy in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from music==0.6b0) (1.10.1)
Requirement already satisfied: numpy in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from music==0.6b0) (1.22.3)
Requirement already satisfied: scipy in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from music==0.6b0) (1.8.0)
Requirement already satisfied: colorama in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from music==0.6b0) (0.4.4)
Requirement already satisfied: termcolor in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from music==0.6b0) (1.1.0)
Requirement already satisfied: matplotlib in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from music==0.6b0) (3.5.1)
Requirement already satisfied: pyparsing>=2.2.1 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music==0.6b0) (3.0.7)
Requirement already satisfied: fonttools>=4.22.0 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music==0.6b0) (4.31.2)
Requirement already satisfied: kiwisolver>=1.0.1 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music==0.6b0) (1.4.0)
Requirement already satisfied: python-dateutil>=2.7 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music==0.6b0) (2.8.2)
Requirement already satisfied: packaging>=20.0 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music==0.6b0) (21.3)
Requirement already satisfied: pillow>=6.2.0 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music==0.6b0) (9.0.1)
Requirement already satisfied: cycler>=0.10 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music==0.6b0) (0.11.0)
Requirement already satisfied: mpmath>=0.19 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from sympy->music==0.6b0) (1.2.1)
Requirement already satisfied: six>=1.5 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from python-dateutil>=2.7->matplotlib->music==0.6b0) (1.16.0)
Building wheels for collected packages: music
  Building wheel for music (setup.py) ... done
  Created wheel for music: filename=music-0.6b0-py3-none-any.whl size=46041 sha256=e830f6d7755c349d0cf89c9f5dd79e7d11b22b44f2294255eeb295c6d35f7e91
  Stored in directory: c:\users\sparisoma viridi\appdata\local\pip\cache\wheels\57\38\50\c46fd474a1fe70de85378f93f73c26a16c53f65b1824df7fb5
Successfully built music
Installing collected packages: music
Successfully installed music-0.6b0
```

```
PS L:\home\cookbook\python\hello> pip check
No broken requirements found.
```

```
PS L:\home\cookbook\python\hello> python hello_music.py
fatal: Too many arguments.

usage: git clone [<options>] [--] <repo> [<dir>]

    -v, --verbose         be more verbose
    -q, --quiet           be more quiet
    --progress            force progress reporting
    --reject-shallow      don't clone shallow repository
    -n, --no-checkout     don't create a checkout
    --bare                create a bare repository
    --mirror              create a mirror repository (implies bare)
    -l, --local           to clone from a local repository
    --no-hardlinks        don't use local hardlinks, always copy
    -s, --shared          setup as shared repository
    --recurse-submodules[=<pathspec>]
                          initialize submodules in the clone
    --recursive ...       alias of --recurse-submodules
    -j, --jobs <n>        number of submodules cloned in parallel
    --template <template-directory>
                          directory from which templates will be used
    --reference <repo>    reference repository
    --reference-if-able <repo>
                          reference repository
    --dissociate          use --reference only while cloning
    -o, --origin <name>   use <name> instead of 'origin' to track upstream
    -b, --branch <branch>
                          checkout <branch> instead of the remote's HEAD
    -u, --upload-pack <path>
                          path to git-upload-pack on the remote
    --depth <depth>       create a shallow clone of that depth
    --shallow-since <time>
                          create a shallow clone since a specific time
    --shallow-exclude <revision>
                          deepen history of shallow clone, excluding rev
    --single-branch       clone only one branch, HEAD or --branch
    --no-tags             don't clone any tags, and make later fetches not to follow them
    --shallow-submodules  any cloned submodules will be shallow
    --separate-git-dir <gitdir>
                          separate git dir from working tree
    -c, --config <key=value>
                          set config inside the new repository
    --server-option <server-specific>
                          option to transmit
    -4, --ipv4            use IPv4 addresses only
    -6, --ipv6            use IPv6 addresses only
    --filter <args>       object filtering
    --remote-submodules   any cloned submodules will use their remote-tracking branch
    --sparse              initialize sparse-checkout file to include only files at root

install git if you want singing facilities
Traceback (most recent call last):
  File "L:\home\cookbook\python\hello\hello_music.py", line 2, in <module>
    import music as M, numpy as n
  File "C:\Users\Sparisoma Viridi\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\LocalCache\local-packages\Python310\site-packages\music\__init__.py", line 3, in <module>
    from . import legacy
  File "C:\Users\Sparisoma Viridi\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\LocalCache\local-packages\Python310\site-packages\music\legacy\__init__.py", line 1, in <module>
    from . import pieces
  File "C:\Users\Sparisoma Viridi\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\LocalCache\local-packages\Python310\site-packages\music\legacy\pieces\__init__.py", line 1, in <module>
    from .testSong2 import TestSong2
  File "C:\Users\Sparisoma Viridi\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\LocalCache\local-packages\Python310\site-packages\music\legacy\pieces\testSong2.py", line 3, in <module>
    synth=M.synths.CanonicalSynth()
  File "C:\Users\Sparisoma Viridi\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\LocalCache\local-packages\Python310\site-packages\music\synths.py", line 36, in __init__
    s.tables = M.tables.Basic()
  File "C:\Users\Sparisoma Viridi\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\LocalCache\local-packages\Python310\site-packages\music\tables.py", line 10, in __init__
    self.makeTables(size)
  File "C:\Users\Sparisoma Viridi\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\LocalCache\local-packages\Python310\site-packages\music\tables.py", line 15, in makeTables
    foo=n.linspace(-1,1,size/2,endpoint=False)
  File "<__array_function__ internals>", line 180, in linspace
  File "C:\Users\Sparisoma Viridi\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\LocalCache\local-packages\Python310\site-packages\numpy\core\function_base.py", line 120, in linspace
    num = operator.index(num)
TypeError: 'float' object cannot be interpreted as an integer
```

Diperoleh pesan kesalahan yang berbeda.


## install music 0.7b.0
Instal ke versi yang lebih baru dari sebelumnya [[4](#r04)] dengan cara menyertakan versinya [[5](#r05)].

```
PS L:\home\cookbook> pip install music==0.7b.0
Collecting music==0.7b.0
  Downloading music-0.7b0.tar.gz (47 kB)
     ---------------------------------------- 47.4/47.4 KB 139.6 kB/s eta 0:00:00
  Preparing metadata (setup.py) ... done
Requirement already satisfied: sympy in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from music==0.7b.0) (1.10.1)
Requirement already satisfied: numpy in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from music==0.7b.0) (1.22.3)
Requirement already satisfied: scipy in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from music==0.7b.0) (1.8.0)
Requirement already satisfied: colorama in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from music==0.7b.0) (0.4.4)
Requirement already satisfied: termcolor in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from music==0.7b.0) (1.1.0)
Requirement already satisfied: matplotlib in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from music==0.7b.0) (3.5.1)
Requirement already satisfied: pyparsing>=2.2.1 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music==0.7b.0) (3.0.7)
Requirement already satisfied: pillow>=6.2.0 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music==0.7b.0) (9.0.1)
Requirement already satisfied: python-dateutil>=2.7 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music==0.7b.0) (2.8.2)
Requirement already satisfied: fonttools>=4.22.0 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music==0.7b.0) (4.31.2)
Requirement already satisfied: kiwisolver>=1.0.1 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music==0.7b.0) (1.4.0)
Requirement already satisfied: cycler>=0.10 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music==0.7b.0) (0.11.0)
Requirement already satisfied: packaging>=20.0 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music==0.7b.0) (21.3)
Requirement already satisfied: mpmath>=0.19 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from sympy->music==0.7b.0) (1.2.1)
Requirement already satisfied: six>=1.5 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from python-dateutil>=2.7->matplotlib->music==0.7b.0) (1.16.0)
Building wheels for collected packages: music
  Building wheel for music (setup.py) ... done
  Created wheel for music: filename=music-0.7b0-py3-none-any.whl size=45328 sha256=ca1163d54e5ef03283e0c906890e25ecbc054c9fb29eaca4e9b7e323b5810dcb
  Stored in directory: c:\users\sparisoma viridi\appdata\local\pip\cache\wheels\77\9a\ea\4c46afaa466ac2232ec598670a599d2b2e120321369e46fcc5
Successfully built music
Installing collected packages: music
  Attempting uninstall: music
    Found existing installation: music 0.6b0
    Uninstalling music-0.6b0:
      Successfully uninstalled music-0.6b0
Successfully installed music-0.7b0
```

Terlihat instalasi berjalan dengan baik dan

```
PS L:\home\cookbook> pip check
No broken requirements found.
```

tidak ada kebergantungan yang putus. Akan tetapi

```
PS L:\home\cookbook\python\hello> python hello_music.py
Traceback (most recent call last):
  File "L:\home\cookbook\python\hello\hello_music.py", line 2, in <module>
    import music as M, numpy as n
  File "C:\Users\Sparisoma Viridi\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\LocalCache\local-packages\Python310\site-packages\music\__init__.py", line 1, in <module>
    from .utils import H
  File "C:\Users\Sparisoma Viridi\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\LocalCache\local-packages\Python310\site-packages\music\utils.py", line 5, in <module>
    from . import core
  File "C:\Users\Sparisoma Viridi\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\LocalCache\local-packages\Python310\site-packages\music\core\__init__.py", line 1, in <module>
    from .functions import *
  File "C:\Users\Sparisoma Viridi\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\LocalCache\local-packages\Python310\site-packages\music\core\functions.py", line 275, in <module>
    foo = n.linspace(-1, 1, Lt/2, endpoint=False)
  File "<__array_function__ internals>", line 180, in linspace
  File "C:\Users\Sparisoma Viridi\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\LocalCache\local-packages\Python310\site-packages\numpy\core\function_base.py", line 120, in linspace
    num = operator.index(num)
TypeError: 'float' object cannot be interpreted as an integer
```

masih diperoleh pesan kesalahan yang sama dengan sebelumnya.


## upgrade
Dicoba untuk upgrade.

```
PS L:\home\cookbook\python\hello> pip install music --upgrade
Requirement already satisfied: music in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (0.7b0)
Collecting music
  Downloading music-0.7b2-py3-none-any.whl (15 kB)
Requirement already satisfied: colorama in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from music) (0.4.4)
Requirement already satisfied: sympy in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from music) (1.10.1)
Requirement already satisfied: termcolor in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from music) (1.1.0)
Requirement already satisfied: matplotlib in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from music) (3.5.1)
Requirement already satisfied: scipy in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from music) (1.8.0)
Requirement already satisfied: numpy in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from music) (1.22.3)
Requirement already satisfied: pillow>=6.2.0 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music) (9.0.1)
Requirement already satisfied: kiwisolver>=1.0.1 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music) (1.4.0)
Requirement already satisfied: cycler>=0.10 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music) (0.11.0)
Requirement already satisfied: pyparsing>=2.2.1 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music) (3.0.7)
Requirement already satisfied: python-dateutil>=2.7 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music) (2.8.2)
Requirement already satisfied: fonttools>=4.22.0 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music) (4.31.2)
Requirement already satisfied: packaging>=20.0 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from matplotlib->music) (21.3)
Requirement already satisfied: mpmath>=0.19 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from sympy->music) (1.2.1)
Requirement already satisfied: six>=1.5 in c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages (from python-dateutil>=2.7->matplotlib->music) (1.16.0)
Installing collected packages: music
  Attempting uninstall: music
    Found existing installation: music 0.7b0
    Uninstalling music-0.7b0:
      Successfully uninstalled music-0.7b0
Successfully installed music-0.7b2
```

Dan setelah dicoba

```
PS L:\home\cookbook\python\hello> python hello_music.py
Traceback (most recent call last):
  File "L:\home\cookbook\python\hello\hello_music.py", line 2, in <module>
    import music as M, numpy as n
  File "C:\Users\Sparisoma Viridi\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\LocalCache\local-packages\Python310\site-packages\music\__init__.py", line 1, in <module>
    from . import utils, tables, synths, effects, structures, singing, core
  File "C:\Users\Sparisoma Viridi\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\LocalCache\local-packages\Python310\site-packages\music\utils.py", line 5, in <module>
    from . import core
ImportError: cannot import name 'core' from partially initialized module 'music' (most likely due to a circular import) (C:\Users\Sparisoma Viridi\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\LocalCache\local-packages\Python310\site-packages\music\__init__.py)
```

diperoleh bahwa kembali pada pesan kesalahan awal yang diperoleh.


## uninstall
Periksaa kebergantungan paket.

```
PS L:\home\cookbook\python\hello> pip show music
Name: music
Version: 0.7b2
Summary: music is a python package for making music and sounds, based on the MASS framework
Home-page: https://github.com/ttm/music
Author: Renato Fabbri
Author-email: renato.fabbri@gmail.com
License: MIT
Location: ..
Requires: colorama, matplotlib, numpy, scipy, sympy, termcolor
Required-by:
```

```
PS L:\home\cookbook\python\hello> pip show colorama
Name: colorama
Version: 0.4.4
Summary: Cross-platform colored terminal text.
Home-page: https://github.com/tartley/colorama
Author: Jonathan Hartley
Author-email: tartley@tartley.com
License: BSD
Location: ..
Requires:
Required-by: ipython, music
```

```
PS L:\home\cookbook\python\hello> pip show sympy
Name: sympy
Version: 1.10.1
Summary: Computer algebra system (CAS) in Python
Home-page: https://sympy.org
Author: SymPy development team
Author-email: sympy@googlegroups.com
License: BSD
Location: ..
Requires: mpmath
Required-by: music
```

```
PS L:\home\cookbook\python\hello> pip show mpmath
Name: mpmath
Version: 1.2.1
Summary: Python library for arbitrary-precision floating-point arithmetic
Home-page: http://mpmath.org/
Author: Fredrik Johansson
Author-email: fredrik.johansson@gmail.com
License: BSD
Location: ..
Requires:
Required-by: sympy
```

```
PS L:\home\cookbook\python\hello> pip show scipy
Name: scipy
Version: 1.8.0
Summary: SciPy: Scientific Library for Python
Home-page: https://www.scipy.org
Author:
Author-email:
License: BSD
Location: ..
Requires: numpy
Required-by: music
```

```
PS L:\home\cookbook\python\hello> pip show termcolor
Name: termcolor
Version: 1.1.0
Summary: ANSII Color formatting for output in terminal.
Home-page: http://pypi.python.org/pypi/termcolor
Author: Konstantin Lepa
Author-email: konstantin.lepa@gmail.com
License: MIT
Location: c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages
Requires:
Required-by: music
```

```
PS L:\home\cookbook\python\hello> pip show numpy
Name: numpy
Version: 1.22.3
Summary: NumPy is the fundamental package for array computing with Python.
Home-page: https://www.numpy.org
Author: Travis E. Oliphant et al.
Author-email:
License: BSD
Location: c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages
Requires:
Required-by: matplotlib, music, scipy
```

Informasi kebergantungan yang telah diperoleh dapat disarikan sebagai berikut.

<div class="mermaid">
graph LR;
  A(colorama)
  B(matplotlib)
  C(numpy)
  D(scipy)
  E(sympy)
  F(termcolor)
  G(music)
  I(ipython)
  J(mpmath)
  L(cycler)
  M(fonttools)
  N(kiwisolver)
  O(packaging)
  P(pillow)
  Q(pyparsing)
  R(python-dateutil)
  P-->B;
  Q-->B;
  R-->B;
  A-->G;
  A-->I;
  B-->G;
  C-->G;
  D-->G;
  E-->G;
  F-->G;
  J-->E;
  C-->D;
  C-->B;
  L-->B;
  M-->B;
  N-->B;
  O-->B;
</div>
Gambar <a name='fig1'>1</a>. Kebergantungan antar paket terkait dengan paket `music`.

Dengan melihat Gambar [1](#fig1) maka dapat diuninstal `mpmath`, `sympy`, `scipy`, `termcolor`.

```
PS L:\home\cookbook\python\hello> pip uninstall mpmath
Found existing installation: mpmath 1.2.1
Uninstalling mpmath-1.2.1:
  Would remove:
    c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages\mpmath-1.2.1.dist-info\*
    c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages\mpmath\*
Proceed (Y/n)? y
  Successfully uninstalled mpmath-1.2.1
```

```
PS L:\home\cookbook\python\hello> pip uninstall sympy
Found existing installation: sympy 1.10.1
Uninstalling sympy-1.10.1:
  Would remove:
    c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\scripts\isympy.exe
    c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages\isympy.py
    c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages\sympy-1.10.1.dist-info\*
    c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages\sympy\*
    c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\share\man\man1\isympy.1
Proceed (Y/n)? y
  Successfully uninstalled sympy-1.10.1
```

```
PS L:\home\cookbook\python\hello> pip uninstall scipy
Found existing installation: scipy 1.8.0
Uninstalling scipy-1.8.0:
  Would remove:
    c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages\scipy-1.8.0.dist-info\*
    c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages\scipy\*
Proceed (Y/n)? y
  Successfully uninstalled scipy-1.8.0
```

```
PS L:\home\cookbook\python\hello> pip uninstall termcolor
Found existing installation: termcolor 1.1.0
Uninstalling termcolor-1.1.0:
  Would remove:
    c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages\termcolor-1.1.0.dist-info\*
    c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages\termcolor.py
Proceed (Y/n)? y
  Successfully uninstalled termcolor-1.1.0
```

```
PS L:\home\cookbook\python\hello> pip check
music 0.7b2 requires scipy, which is not installed.
music 0.7b2 requires sympy, which is not installed.
music 0.7b2 requires termcolor, which is not installed.
```

```
PS L:\home\cookbook\python\hello> pip uninstall music
Found existing installation: music 0.7b2
Uninstalling music-0.7b2:
  Would remove:
    c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages\music-0.7b2.dist-info\*
    c:\users\sparisoma viridi\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages\music\*
Proceed (Y/n)? y
  Successfully uninstalled music-0.7b2
```

```
PS L:\home\cookbook\python\hello> pip cache purge
Files removed: 6
```

```
PS L:\home\cookbook\python\hello> pip check
No broken requirements found.
```

Dan selesai. Sebagai penutup paket `music-0.7b2` belum berhasil diinstal dengan `pip`.


## notes
1. <a name='r01'></a>Renato Fabbri, "music 0.7b2", PiPY, Python Software Foundation, 5 Apr 2022, url <https://pypi.org/project/music/0.7b2/> [20220414].
2. <a name='r02'></a>Renato Fabbri, "music 0.7b1", PiPY, Python Software Foundation, 10 Jan 2022, url <https://pypi.org/project/music/0.7b1/> [20220414].
3. <a name='r03'></a>Renato Fabbri, "music 0.6b0", PiPY, Python Software Foundation, 1 May 2019, url <https://pypi.org/project/music/0.6b0/> [20220414].
4. <a name='r04'></a>Renato Fabbri, "music 0.7b0", PiPY, Python Software Foundation, 12 May 2019, url <https://pypi.org/project/music/0.7b0/> [20220414].
5. <a name='r05'></a>SkelliBoi, "'how to upgrade a package using pip to a specific version' Code Answer", Grepper, 16 Mar 2020, url <https://www.codegrepper.com/code-examples/python/how+to+upgrade+a+package+using+pip+to+a+specific+version> [20220415].

{{< citeas >}}
