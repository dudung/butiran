# python -m test.test_vect3

# import Vect3 class
from butiran.vect3 import Vect3

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

# overload addition operator
if False:
  r1 = Vect3(1, 2, 3)
  r2 = Vect3(-1, -2, -3)
  r3 = r1 + r2
  print(r1, "+", r2, "=", r3)

# overload addition operator
if False:
  r1 = Vect3(1, -2, 3)
  r2 = Vect3(-1, 2, -3)
  r3 = r1 - r2
  print(r1, "-", r2, "=", r3)
