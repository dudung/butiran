# test_grain.py
# unit test of grain module
# Sparisoma Viridi | https://github.com/dudung

# add folder butiran to path -- 20220914
import sys
sys.path.insert(0, '../../butiran')

# import Grain class
from butiran.grain import Grain

# set False to True to show the results of a test block

# initialize an instance -- 20220914
if True:
  g = Grain()
  print(g)
  g.id = "0001"
  print(g)