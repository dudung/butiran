# test_color2.py
# unit test of color module
# Sparisoma Viridi | https://github.com/dudung

# 20220916 Rename Color to Color2.

# 20220918
#   0746 Add environmental variable PYTHONPATH L:\home\butiran.
#   0747 Comment import sys and sys.path.insert lines.

# add folder butiran to path -- 20220914
#import sys
#sys.path.insert(0, '../../butiran')

# import Grain class
from butiran.color2 import Color2

# set False to True to show the results of a test block

# initialize an instance -- 20220914
if True:
  c = Color2()
  print(c)

# instantiate with parameters -- 20220915
if True:
  c2 = Color2('#00f', '#eef')
  print(c2)