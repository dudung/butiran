# Set search path to subfolder
import sys
sys.path.insert(0, "math")

# Import module in butiran for test
from vect3 import Vect3

# 20210206 1610
if False:
	a = Vect3(0, 3, 4)
	print(a.strval())
	print(a.len())
	b = a.neg()
	print(b.strval())
	print(b.unit().strval())
	
	# Previous tests are not documented.
