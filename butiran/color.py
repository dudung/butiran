# color.py
# color module
# Sparisoma Viridi | https://github.com/dudung

# 20220914
#   2039 Learn to make this module.

# add folder butiran to path -- 20220914
import sys
sys.path.insert(0, '../../butiran')

class Color:
  def __init__(self, stroke='#000', fill='#fff'):
    self.stroke = stroke
    self.fill = fill
  
  def __str__(self):
    str = '{ '
    str += f'"stroke": "{self.stroke}"' + ', '
    str += f'"fill": "{self.fill}"'
    str += ' }'
    return str