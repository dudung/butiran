# test_vect2.py
# unit test of vect2 module
# Sparisoma Viridi | https://github.com/dudung

# add folder butiran to path -- 20220914
import sys
sys.path.insert(0, '../../butiran')

# import Vect2 class
from butiran.math.vect2 import Vect2

# set False to True to show the results of a test block

# initialize an instance -- 20220520
if True:
  r = Vect2()
  print(r)
  
  r = Vect2(1)
  print(r)
  
  r = Vect2(1, 2)
  print(r)
  
  r = Vect2(x=2)
  print(r)
  
  r = Vect2(y=2)
  print(r)
  
  r = Vect2(y=2, x=1)
  print(r)

# overload addition operator -- 20220520
if False:
  r1 = Vect2(1, 2)
  r2 = Vect2(-1, -2)
  r3 = r1 + r2
  print(r1, '+', r2, '=', r3)

# overload substraction operator -- 20220520
if False:
  r1 = Vect2(1, -2)
  r2 = Vect2(-1, 2)
  r3 = r1 - r2
  print(r1, '-', r2, '=', r3)

# overload multiplication operator -- 20220520
if False:
  r = Vect2(-1, -2)
  c = 2
  s = r * c
  print(r, '*', c, '=', s)
  t = c * r
  print(c, '*', r, '=', t)

# overload or operator -- 20220520
if False:
  r1 = Vect2(-1, 2)
  r2 = Vect2(-5, -1)
  l = r1 | r2
  print(r1, '|', r2, '=', l)

# overload truediv operator -- 20220520
if False:
  r = Vect2(-1, 2)
  c = 4
  s = r / c
  print(r, '/', c, '=', s)

# define len method -- 20220520
if False:
  r = Vect2(3, 4)
  l = r.len()
  print('|', r, '| =', l)

  r = Vect2(8, 6)
  l = r.len()
  print('|', r, '| =', l)

# overload rshift operator -- 20220520
if False:
  r = Vect2(6, 8)
  u1 = r >> 1
  print(r, '>> 1 =', u1)
  u4 = r >> 4
  print(r, '>> 4 =', u4)

# remind assign operator and define copy method -- 20220520
if False:
  r = Vect2(3, 4)
  s = r
  t = r.copy()
  s.x = 100
  print('r =', r)
  print('s = r =', s)
  print( 't = r.copy() =', t)

# overload negative operator -- 20220520
if False:
  r = Vect2(3, -2)
  s = -r
  print("r =", r)
  print("s =", s)