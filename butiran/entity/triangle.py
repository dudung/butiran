# triangle.py
# triangle module
# Sparisoma Viridi | https://github.com/dudung

# 20230524
#   0508 Start this module.

from butiran.math.vect3 import Vect3
from butiran.entity.color2 import Color2

class Triangle:
  def __init__(
    self, id="0000", m=0, q=0, b=0,
    color=Color2(),
    r0=Vect3(0, 0, 0),
    r1=Vect3(1, 0, 0),
    r2=Vect3(0, 1, 0)
  ):
    self.id = id
    self.r0 = r0
    self.r1 = r1
    self.r2 = r2
    self.m = m
    self.q = q
    self.b = b
    self.color = Color2() 
  
  def __str__(self):
    str = '{\n'
    str += f'  "id": "{self.id}"' + ',\n'
    str += f'  "r0": {self.r0}' + ',\n'
    str += f'  "r1": {self.r1}' + ',\n'
    str += f'  "r2": {self.r2}' + ',\n'
    str += f'  "m": {self.m}' + ',\n'
    str += f'  "q": {self.q}' + ',\n'
    str += f'  "b": {self.b}' + ',\n'
    str += f'  "color": {self.color}' + ',\n'
    str += '}'
    return str
