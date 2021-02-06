from vect3 import Vect3

a = Vect3(1, 2, 3)
print(a.to_string())

b = Vect3(3, 6, 0)
print(b.to_string())

d = 2

c1 = Vect3.mul(a, d)
print(c1.to_string())

c2 = Vect3.div(a, 3.0)
print(c2.to_string())
