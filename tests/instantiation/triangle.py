# triangle.py
# unit test of triangle module
# Sparisoma Viridi | https://github.com/dudung

# 20230524
#   0514 Start test of triangle module.

from butiran.math.vect3 import Vect3
from butiran.entity.color2 import Color2
from butiran.entity.triangle import Triangle

if True:
  tie = Triangle(
    m=1.23,
    r0=Vect3(0, 0, 2),
    r1=Vect3(1, 0, 2),
    r2=Vect3(0, 1, 2),
    color=Color2('#0f0', '#ff0')
  )
  
  print(tie)

"""
$ python triangle.py
{
  "id": "0000",
  "r0": { "x": 0, "y": 0, "z": 2 },
  "r1": { "x": 1, "y": 0, "z": 2 },
  "r2": { "x": 0, "y": 1, "z": 2 },
  "m": 1.23,
  "q": 0,
  "b": 0,
  "color": { "stroke": "#000", "fill": "#fff" },
}
"""
