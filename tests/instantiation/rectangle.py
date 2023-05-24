# triangle.py
# unit test of rectangle module
# Sparisoma Viridi | https://github.com/dudung

# 20230525
#   0425 Start test of rectangle module.
#   0428 Pass instantiation test.

from butiran.math.vect3 import Vect3
from butiran.entity.color2 import Color2
from butiran.entity.rectangle import Rectangle

if True:
  rec = Rectangle(
    m=2.73,
    p0=Vect3(0, 0, 2),
    p1=Vect3(1, 0, 2),
    p2=Vect3(0, 1, 2),
    p3=Vect3(1, 1, 2),
    color=Color2('#0f0', '#ff0')
  )
  
  print(rec)

"""
$ python rectangle.py
{
  "id": "0000",
  "p0": { "x": 0, "y": 0, "z": 2 },
  "p1": { "x": 1, "y": 0, "z": 2 },
  "p2": { "x": 0, "y": 1, "z": 2 },
  "p2": { "x": 1, "y": 1, "z": 2 },
  "m": 2.73,
  "q": 0,
  "b": 0,
  "color": { "stroke": "#000", "fill": "#fff" },
}
"""
