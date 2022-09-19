# test_force_graviational.py
# unit test of gravitational module
# Sparisoma Viridi | https://github.com/dudung

# 20220919
#   1848 Test instantiation.

from butiran.color2 import Color2
from butiran.math.vect3 import Vect3
from butiran.grain import Grain
from butiran.force.gravitational import Gravitational

if True:
  g = Vect3(0, -10, 0)
  print(g)
  
  gravitational = Gravitational(field=g)
  print(gravitational)
  
  grain = Grain(id="0002", m = 1.5)
  print(grain)
  
  fg = gravitational.force(grain)
  print(fg)