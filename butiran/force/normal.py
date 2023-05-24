# normal.py
# module for normal force between spherical particle and triangle
# Sparisoma Viridi | https://github.com/dudung

# 20230524
#   1734 Start this module.

from butiran.math.vect3 import Vect3
from butiran.entity.grain import Grain
from butiran.entity.triangle import Triangle

class Normal:
  def __init__(self, constant=1, damping=0):
    self.constant = constant
    self.damping = damping
  
  def __str__(self):
    str = '{\n'
    str += f'  "constant": "{self.constant}"' + ',\n'
    str += f'  "damping": "{self.damping}"' + ',\n'
    str += '}'
    return str
  
  def force(self, grain, triangle):
    assert isinstance(grain, Grain)
    assert isinstance(triangle, Triangle)
    r = grain.r
    p0 = triangle.p0
    p1 = triangle.p1
    p2 = triangle.p2
    l = 0.5 * grain.d
    k = self.constant
    """
    d = Vect3.len(r1 - r2)
    u = (r1 - r2) >> 1
    fr = -k * min(0, d - l) * u
    
    v1 = grain1.v
    v2 = grain2.v
    g = self.damping
    fv = -g * (v1 - v2)
    
    f = fr + fv
    return f
    """
