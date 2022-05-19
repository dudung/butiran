# to try a unit test from root folder use
# python -m test.test_vect3

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

# overload addition operator -- 20220519
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

# overload or binary operator -- 20220519
if True:
  r1 = Vect3(-1, 2, -3)
  r2 = Vect3(-5, -2, 1)
  l = r1 | r2
  print(r1, '|', r2, '=', l)