# test_force_magnetic.py
# unit test of magnetic module
# Sparisoma Viridi | https://github.com/dudung

# 20220917
#   1617 Add sys.path.insert(0, '../../butiran') line.
#   1618 Import necessary modules and test instantiation.

import sys
sys.path.insert(0, '../../butiran')

from butiran.color2 import Color2
from butiran.math.vect3 import Vect3
from butiran.grain import Grain
from butiran.force.magnetic import Magnetic

if True:
  fB = Magnetic()
  print(fB)

if True:
  fB = Magnetic(Vect3(-1, 2, 3.5))
  print(fB)

if True:
  Bfield = Vect3(1.2, -2.3, 3.4)
  fB = Magnetic(field=Bfield)
  print(fB)