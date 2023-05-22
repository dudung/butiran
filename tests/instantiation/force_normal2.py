# force_normal2.py
# unit test of normal2 module
# Sparisoma Viridi | https://github.com/dudung

# 20230523
#   0458 Test instantiation.
#   0504 Pass instantiation test.

from butiran.math.vect3 import Vect3
from butiran.grain import Grain
from butiran.force.normal2 import Normal2

if True:
  normal2 = Normal2(constant=2, damping=0)
  print(normal2)
  
  grain1 = Grain(id="0008", m=4, d=1)
  grain1.r = Vect3(0, 0, 0)
  print(grain1)
  
  grain2 = Grain(id="0009", m=4, d=2)
  grain2.r = Vect3(1, 0, 0)
  print(grain2)
  
  fn2 = normal2.force(grain1, grain2)
  print(fn2)


"""
$ python force_normal2.py
{
  "constant": "2",
  "damping": "0",
}
{
  "id": "0008",
  "m": 4,
  "d": 1,
  "q": 0,
  "b": 0,
  "color": { "stroke": "#000", "fill": "#fff" },
  "r": { "x": 0, "y": 0, "z": 0 },
  "v": { "x": 0, "y": 0, "z": 0 },
  "a": { "x": 0, "y": 0, "z": 0 }
}
{
  "id": "0009",
  "m": 4,
  "d": 2,
  "q": 0,
  "b": 0,
  "color": { "stroke": "#000", "fill": "#fff" },
  "r": { "x": 1, "y": 0, "z": 0 },
  "v": { "x": 0, "y": 0, "z": 0 },
  "a": { "x": 0, "y": 0, "z": 0 }
}
{ "x": -1.0, "y": 0.0, "z": 0.0 }
"""
