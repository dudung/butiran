# test_force_magnetic.py
# unit test of magnetic module
# Sparisoma Viridi | https://github.com/dudung

# 20220917
#   1617 Add sys.path.insert(0, '../../butiran') line.
#   1618 Import necessary modules and test instantiation.
#   1824 Change Bfield to B in the instantiation example.
# 20220918
#   0746 Add environmental variable PYTHONPATH L:\home\butiran.
#   0747 Comment import sys and sys.path.insert lines.

#import sys
#sys.path.insert(0, '../../butiran')

from butiran.color2 import Color2
from butiran.math.vect3 import Vect3
from butiran.grain import Grain
from butiran.force.magnetic import Magnetic

if False:
  fB = Magnetic()
  print(fB)

if False:
  fB = Magnetic(Vect3(-1, 2, 3.5))
  print(fB)

if False:
  B = Vect3(1.2, -2.3, 3.4)
  fB = Magnetic(field=B)
  print(fB)

if True:
  B = Vect3(0, 0, -1)
  print(B)
  
  magnetic = Magnetic(field=B)
  print(magnetic)
  
  grain = Grain(id="0001", m = 1, q = 1)
  grain.r = Vect3(1, 0, 0)
  grain.v = Vect3(0, 1, 0)
  print(grain)
  
  fB = magnetic.force(grain)
  print(fB)