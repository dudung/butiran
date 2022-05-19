# 20220519
# 1909 __init__, _str__ and tested ok.
# 1915 __add__, __sub__ and tested ok.

class Vect3:
  def __init__(self, x=0, y=0, z=0):
    self.x = x
    self.y = y
    self.z = z

  def __str__(self):
    str = '('
    str += f'{self.x}' + ','
    str += f'{self.y}' + ','
    str += f'{self.z}'
    str += ')'
    return str

  def __add__(self, other):
    r = Vect3()
    r.x = self.x + other.x
    r.y = self.y + other.y
    r.z = self.z + other.z
    return r
  
  def __sub__(self, other):
    r = Vect3()
    r.x = self.x - other.x
    r.y = self.y - other.y
    r.z = self.z - other.z
    return r