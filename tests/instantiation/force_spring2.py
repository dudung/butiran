# force_spring2.py
# unit test of spring2 module
# Sparisoma Viridi | https://github.com/dudung

# 20230522
#   1914 Test instantiation.
#   1818 Finish the test.

from butiran.math.vect3 import Vect3
from butiran.grain import Grain
from butiran.force.spring2 import Spring2

if True:
  spring2 = Spring2(length=1, constant=2, damping=0)
  print(spring2)
  
  grain1 = Grain(id="0009", m = 2.5)
  grain1.r = Vect3(1, 0, 0)
  print(grain1)
  
  grain2 = Grain(id="0009", m = 2.5)
  grain2.r = Vect3(2.4, 0, 0)
  print(grain2)
  
  fs2 = spring2.force(grain1, grain2)
  print(fs2)


"""
$ python force_spring2.py
{
  "length": "1",
  "constant": "2",
  "damping": "0",
}
{
  "id": "0009",
  "m": 2.5,
  "d": 0,
  "q": 0,
  "b": 0,
  "color": { "stroke": "#000", "fill": "#fff" },
  "r": { "x": 1, "y": 0, "z": 0 },
  "v": { "x": 0, "y": 0, "z": 0 },
  "a": { "x": 0, "y": 0, "z": 0 }
}
{
  "id": "0009",
  "m": 2.5,
  "d": 0,
  "q": 0,
  "b": 0,
  "color": { "stroke": "#000", "fill": "#fff" },
  "r": { "x": 2.4, "y": 0, "z": 0 },
  "v": { "x": 0, "y": 0, "z": 0 },
  "a": { "x": 0, "y": 0, "z": 0 }
}
{ "x": 0.7999999999999998, "y": 0.0, "z": 0.0 }
"""