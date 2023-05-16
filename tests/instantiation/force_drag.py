# force_drag.py
# unit test of drag module
# Sparisoma Viridi | https://github.com/dudung

# 20230516
#   1934 Test instantiation.
#   1937 Finish test, mach Pause zum Abendessen.

from butiran.math.vect3 import Vect3
from butiran.grain import Grain
from butiran.force.drag import Drag

if True:
  fluid_velocity = Vect3(-3, -4, 0)
  print(fluid_velocity)
  
  drag = Drag(coeff=2, field=fluid_velocity)
  print(drag)
  
  grain = Grain(id="0103", m = 0.5)
  grain.v = Vect3(3, 4, 0)
  print(grain)
  
  fd = drag.force(grain)
  print(fd)
