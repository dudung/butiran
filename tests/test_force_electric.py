# test_force_electric.py
# unit test of electric module
# Sparisoma Viridi | https://github.com/dudung

# 20220919
#   1855 Write instantiation, not yet tested.

from butiran.color2 import Color2
from butiran.math.vect3 import Vect3
from butiran.grain import Grain
from butiran.force.electric import Electric

if True:
  E = Vect3(1, 2.3, -1.5)
  print(E)
  
  electric = Electric(field=E)
  print(electric)
  
  grain = Grain(id="0003", m = 2, q = 4)
  print(grain)
  
  fE = electric.force(grain)
  print(fE)