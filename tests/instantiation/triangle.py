# triangle.py
# unit test of triangle module
# Sparisoma Viridi | https://github.com/dudung

# 20230524
#   0514 Start test of triangle module.
#   1738 Rename r0, r1, r2, to p0, p1, p2

from butiran.math.vect3 import Vect3
from butiran.entity.color2 import Color2
from butiran.entity.triangle import Triangle

if True:
  tie = Triangle(
    m=1.23,
    p0=Vect3(0, 0, 2),
    p1=Vect3(1, 0, 2),
    p2=Vect3(0, 1, 2),
    color=Color2('#0f0', '#ff0')
  )
  
  print(tie)

"""
$ python triangle.py
{
  "id": "0000",
  "p0": { "x": 0, "y": 0, "z": 2 },
  "p1": { "x": 1, "y": 0, "z": 2 },
  "p2": { "x": 0, "y": 1, "z": 2 },
  "m": 1.23,
  "q": 0,
  "b": 0,
  "color": { "stroke": "#000", "fill": "#fff" },
}
"""
