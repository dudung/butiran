# magnetic.py
# module for force of a moving charged point particle
# Sparisoma Viridi | https://github.com/dudung

# 20220917
#   1548 Start this module.
#   1614 Remove sys.path.insert(0, '../../butiran') line.
#   1628 Use isinstance() to assure field is Vect3.

from butiran.math.vect3 import Vect3
from butiran.grain import Grain

class Magnetic:
  def __init__(self, field=Vect3()):
    if(isinstance(field, Vect3)):
      self.field = field
    else:
      self.field = Vect3()
   
  def __str__(self):
    str = '{\n'
    str += f'  "field": "{self.field}"' + ',\n'
    str += '}'
    return str