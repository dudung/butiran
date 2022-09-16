# vect3
A 3-d vector


## instantiation
Syntax

`Vect3([x[, y[, z]]])`

+ `x`: x-coordinate, e.g. `1.5`, default `0`.
+ `y`: y-coordinate, e.g. `-2`, default `0`.
+ `z`: z-coordinate, e.g. `100.2`, default `0`.

Code

```python
r = Vect3(y=0.2)
r.z = 159
print(r)
```

Output

```json
{ "x": 0, "y": 0.2, "z": 159 }
```