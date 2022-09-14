# grain.py
# grain module
# Sparisoma Viridi | https://github.com/dudung

# 20220914
#   Learn to make this module

#from math.vect3 import Vect3

class Grain:
  def __init__(self, m=0, d=0, q=0):
    self.m = m
    self.d = d
    self.q = q
  
  def __str__(self):
    str = '{\n'
    str += f'  "m": {self.m}' + ',\n'
    str += f'  "d": {self.d}' + ',\n'
    str += f'  "q": {self.q}\n'
    str += '}'
    return str