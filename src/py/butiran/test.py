from vect3 import Vect3

a = Vect3(0, 3, 4)
print(a.strval())
print(a.len())
b = a.neg()
print(b.strval())
print(b.unit().strval())