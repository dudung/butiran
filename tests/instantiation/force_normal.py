# force_normal.py
# unit test of normal module
# Sparisoma Viridi | https://github.com/dudung

# 20230524
#   1837 Test instantiation.
#   1910 Pass test but only for one side of triangle,
#        which is the \hat{n} side.

from butiran.math.vect3 import Vect3
from butiran.entity.color2 import Color2
from butiran.entity.grain import Grain
from butiran.entity.triangle import Triangle
from butiran.force.normal import Normal

if True:
  normal = Normal(constant=2, damping=0)
  print(normal)
  
  grain = Grain(id="0099", m=4, d=2)
  grain.r = Vect3(0.3, 0.3, 0.9)
  print(grain)
  
  triangle = Triangle(
    m=10,
    p0=Vect3(0, 0, 0),
    p1=Vect3(1, 0, 0),
    p2=Vect3(0, 1, 0),
    color=Color2('#0f0', '#ff0')
  )
  print(triangle)
  
  fn = normal.force(grain, triangle)
  print(fn)


"""
$ python force_normal.py
force_normal.py
{
  "constant": "2",
  "damping": "0",
}
{
  "id": "0099",
  "m": 4,
  "d": 2,
  "q": 0,
  "b": 0,
  "color": { "stroke": "#000", "fill": "#fff" },
  "r": { "x": 0.3, "y": 0.3, "z": 0.9 },
  "v": { "x": 0, "y": 0, "z": 0 },
  "a": { "x": 0, "y": 0, "z": 0 }
}
{
  "id": "0000",
  "p0": { "x": 0, "y": 0, "z": 0 },
  "p1": { "x": 1, "y": 0, "z": 0 },
  "p2": { "x": 0, "y": 1, "z": 0 },
  "m": 10,
  "q": 0,
  "b": 0,
  "color": { "stroke": "#000", "fill": "#fff" },
}
{ "x": 0.0, "y": 0.0, "z": 0.19999999999999996 }
"""
