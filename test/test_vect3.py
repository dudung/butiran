# test_vect3.py
# unit test of vect3 module
# Sparisoma Viridi | https://github.com/dudung

# add folder butiran to path -- 20220914
import sys
sys.path.insert(0, '../../butiran')

# import Vect3 class
from butiran.vect3 import Vect3

# set False to True to show the results of a test block

# initialize an instance -- 20220519
if False:
  r = Vect3()
  print(r)

  r = Vect3(1)
  print(r)

  r = Vect3(1, 2)
  print(r)

  r = Vect3(1, 2, 3)
  print(r)

  r = Vect3(x=2)
  print(r)

  r = Vect3(y=2)
  print(r)

  r = Vect3(z=3)
  print(r)

  r = Vect3(y=2, x=1)
  print(r)

# overload addition operator -- 20220519
if False:
  r1 = Vect3(1, 2, 3)
  r2 = Vect3(-1, -2, -3)
  r3 = r1 + r2
  print(r1, '+', r2, '=', r3)

# overload substraction operator -- 20220519
if False:
  r1 = Vect3(1, -2, 3)
  r2 = Vect3(-1, 2, -3)
  r3 = r1 - r2
  print(r1, '-', r2, '=', r3)

# overload multiplication operator -- 20220519
if False:
  r = Vect3(1, -2, 3)
  c = 2
  s = r * c
  print(r, '*', c, '=', s)
  t = c * r
  print(c, '*', r, '=', t)
  u = s * t
  print(s, '*', t, '=', u)

# overload or operator -- 20220519
if False:
  r1 = Vect3(-1, 2, -3)
  r2 = Vect3(-5, -2, 1)
  l = r1 | r2
  print(r1, '|', r2, '=', l)

# overload truediv operator -- 20220519
if False:
  r = Vect3(-1, 2, -3)
  c = 4
  s = r / c
  print(r, '/', c, '=', s)

# define len method -- 20220520
if False:
  r = Vect3(3, 4, 12)
  l = r.len()
  print('|', r, '| =', l)

  r = Vect3(3, 0, 4)
  l = r.len()
  print('|', r, '| =', l)

# overload rshift operator -- 20220520
if False:
  r = Vect3(3, 4, 0)
  u1 = r >> 1
  print(r, '>> 1 =', u1)
  u4 = r >> 4
  print(r, '>> 4 =', u4)

# remind assign operator and define copy method -- 20220520
if False:
  r = Vect3(3, 4, 0)
  s = r
  t = r.copy()
  s.x = 100
  print('r =', r)
  print('s = r =', s)
  print( 't = r.copy() =', t)

# overload negative operator -- 20220520
if False:
  r = Vect3(3, 4, -11)
  s = -r
  print("r =", r)
  print("s =", s)