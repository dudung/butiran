# test_color.py
# unit test of color module
# Sparisoma Viridi | https://github.com/dudung

# add folder butiran to path -- 20220914
import sys
sys.path.insert(0, '../../butiran')

# import Grain class
from butiran.color import Color

# set False to True to show the results of a test block

# initialize an instance -- 20220914
if True:
  c = Color()
  print(c)

# instantiate with parameters -- 20220915
if True:
  c2 = Color('#00f', '#eef')
  print(c2)