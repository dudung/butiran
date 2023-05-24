# grain.py
# grain module
# Sparisoma Viridi | https://github.com/dudung

# 20230524
#   1843 Correct butiran.color2 --> butiran.entity.color2.
# 20220917
#   1613 Remove sys.path.insert(0, '../../butiran') line.
# 20220916
#   1642 Correct Color to Color2.
# 20220914
#   1755 Learn to make this module.
#   1843 Use Vect3 module.
#   1925 Set __str__ with JSON format.
#   XXXX sys.path.insert(0, '../../butiran') line.

from butiran.math.vect3 import Vect3
from butiran.entity.color2 import Color2

class Grain:
  def __init__(self, id="0000", m=0, d=0, q=0, b=0):
    self.id = id
    self.m = m
    self.d = d
    self.q = q
    self.b = b
    self.color = Color2() 
    self.r = Vect3()
    self.v = Vect3()
    self.a = Vect3()
  
  def __str__(self):
    str = '{\n'
    str += f'  "id": "{self.id}"' + ',\n'
    str += f'  "m": {self.m}' + ',\n'
    str += f'  "d": {self.d}' + ',\n'
    str += f'  "q": {self.q}' + ',\n'
    str += f'  "b": {self.b}' + ',\n'
    str += f'  "color": {self.color}' + ',\n'
    str += f'  "r": {self.r}' + ',\n'
    str += f'  "v": {self.v}' + ',\n'
    str += f'  "a": {self.a}' + '\n'
    str += '}'
    return str