# grain.py
# unit test of grain module
# Sparisoma Viridi | https://github.com/dudung

# 20230516
#   1735 Remove name prefix 'test_' and move to instantiation folder.
# 20220918
#   0746 Add environmental variable PYTHONPATH L:\home\butiran.
#   0747 Comment import sys and sys.path.insert lines.

# add folder butiran to path -- 20220914
#import sys
#sys.path.insert(0, '../../butiran')

# import Grain
from butiran.grain import Grain

# import Vect3 and Color2 classes -- 20220917
from butiran.math.vect3 import Vect3
from butiran.color2 import Color2

# set False to True to show the results of a test block

# initialize an instance -- 20220914
if True:
  g = Grain()
  g.r = Vect3(1, 2, 3)
  g.color = Color2('#0f0', '#ff0')
  print(g)