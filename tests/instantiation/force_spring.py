# test_force_spring.py
# unit test of spring module
# Sparisoma Viridi | https://github.com/dudung

# 20230516
#   1627 Test instantiation.
#   1636 It can calculate spring force in diagonal line.

from butiran.math.vect3 import Vect3
from butiran.grain import Grain
from butiran.force.spring import Spring

if True:
  p = Vect3(0, 0, 0)
  print(p)
  
  spring = Spring(length=1, constant=2, pivot=p)
  print(spring)
  
  grain = Grain(id="0009", m = 2.5)
  grain.r = Vect3(3.6, 4.8, 0)
  print(grain)
  
  fs = spring.force(grain)
  print(fs)
