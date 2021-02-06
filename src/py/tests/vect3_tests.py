#	
#	vect3_tests.py
#	Test the module Vect3
#	
#	Sparisoma Viridi | https://github.com/dudung
#	
#	20210206
#	2005 Clean the test file for better readability.
# 2014 Read previous tests.
#	2106 Try to install and test the package, fail.
#	2128 Empty install_requires=[] and ok.
#	2226 Fix __init__.py file, just discover it.
# 2234 Test upload and install from TestPyPI and ok.
# 2239 Upload 0.0.8 to PyPI, install, test, and ok.
#	


# Run if True -- after installation
if True:
	from butiran.vect3 import Vect3
	
	a = Vect3()
	print("a = " + a.strval())


# Run if True -- before buid
if False:
	# Set search path to subfolder
	import sys
	sys.path.insert(0, "..")

	# Import module in butiran for test
	from butiran.vect3 import Vect3

	print("Test for class Vect3")
	
	a = Vect3(0, 3, 4)
	print("a = " + a.strval())
	print("|a| = " + str(a.len()))
	
	b = a.neg()
	print("-b = " + b.strval())
	print("^b = " + b.unit().strval())
	
	c = Vect3.add(a, b)
	print("a + b = " + c.strval())
	
	d = Vect3.sub(a, b)
	print("a - b = " + d.strval())
	
	e = Vect3(2, 0, 0)
	print("e = " + e.strval())
	
	f = Vect3.cross(e, a)
	print("e x a = " + f.strval())
