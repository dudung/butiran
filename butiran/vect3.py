# 20220519
# 1909 __init__, _str__ and tested ok.
# 1915 __add__, __sub__ and tested ok.
# 1928 __mul__, __rmul__ and tested ok.

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

  def __mul__(self, other):
    r = Vect3()
    if isinstance(other, int) | isinstance(other, float):
      r.x = self.x * other
      r.y = self.y * other
      r.z = self.z * other
    elif isinstance(other, Vect3):
      r.x = self.y * other.z - self.z * other.y
      r.y = self.z * other.x - self.x * other.z
      r.z = self.x * other.y - self.y * other.x
    return r

  def __rmul__(self, other):
    r = Vect3()
    if isinstance(other, int) | isinstance(other, float):
      r = self.__mul__(other)
    return r