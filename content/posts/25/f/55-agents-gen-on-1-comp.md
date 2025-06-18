+++
title = 'agents gen on 1-comp'
date = '2025-06-19T04:26:41+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = ['abm']
categories = ['python']
url = '25f55'
math = true
+++

<!-- more -->

Generate agents with type `48` ($t_A$), `43` ($t_B$) and `41` ($t_C$) using Python for aor simulation using JS [^viridi_2025a].

```py
# Generate agents for abm-aor simulation
# 20250619
# Sparisoma Viridi
# https://github.com/dudung

# packages
import random as rnd

# type
tA = 48
tB = 43
tC = 41
tZ = [tA, tB, tC]

# region
x1 = 31
y1 = 10
x2 = 47
y2 = 50

# concentration
c = [0.1, 0.1, 0.8]

# agents
for y in range(y1, y2 + 1):
  for x  in range(x1, x2 + 1):
    
    r = rnd.random()
    
    if r > c[0] + c[1]:
      t = 2
    elif r > c[0]:
      t = 1
    else:
      t = 0
    
    print("AGENT", x, y, tZ[t])
```

Above code is available on OneCompiler [^viridi_2025b] and can be executed there, and

```sh
AGENT 31 10 41
AGENT 32 10 41
AGENT 33 10 41
AGENT 34 10 41
..
AGENT 44 50 41
AGENT 45 50 43
AGENT 46 50 41
AGENT 47 50 41
```

is an output sample.


## notes
[^viridi_2025a]: Sparisoma Viridi, "gran mix simul aor abm", butiran, 18 Jun 2025, url [https://dudung.github.io/butiran/25f54/](/butiran/25f54/) [20250619].
[^viridi_2025b]: Sparisoma Viridi, "Generate agents for abm-aor simulation", OneCompiler, 19 Jun 2025, url https://onecompiler.com/python/43n6bzrm7 [20250619].
