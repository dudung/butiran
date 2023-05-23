# force_graviational2.py
# unit test of gravitational2 module
# Sparisoma Viridi | https://github.com/dudung

# 20230522
#   1848 Test instantiation.

import sys
# set configuration at the university, comment while at home
sys.path.insert(0, "D:\\butiran")

from butiran.color2 import Color2
from butiran.math.vect3 import Vect3
from butiran.grain import Grain
from butiran.force.gravitational2 import Gravitational2

if True:
  G = 5
  gravitational = Gravitational2(constant=G)
  print(gravitational)
  
  grain1 = Grain(id="0000", m=5)
  grain1.r = Vect3(0, 0, 0)
  print(grain1)
  
  grain2 = Grain(id="0034", m=10)
  grain2.r = Vect3(3, 4, 0)
  print(grain2)
  
  fg12 = gravitational.force(grain1, grain2)
  print(fg12)
  
  fg21 = gravitational.force(grain2, grain1)
  print(fg21)

"""
force_gravitational2.py
{
  "constant": "5",
}
{
  "id": "0000",
  "m": 5,
  "d": 0,
  "q": 0,
  "b": 0,
  "color": { "stroke": "#000", "fill": "#fff" },
  "r": { "x": 0, "y": 0, "z": 0 },
  "v": { "x": 0, "y": 0, "z": 0 },
  "a": { "x": 0, "y": 0, "z": 0 }
}
{
  "id": "0034",
  "m": 10,
  "d": 0,
  "q": 0,
  "b": 0,
  "color": { "stroke": "#000", "fill": "#fff" },
  "r": { "x": 3, "y": 4, "z": 0 },
  "v": { "x": 0, "y": 0, "z": 0 },
  "a": { "x": 0, "y": 0, "z": 0 }
}
{ "x": 6.0, "y": 8.0, "z": -0.0 }
{ "x": -6.0, "y": -8.0, "z": -0.0 }
"""
