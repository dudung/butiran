# grain
A spherical grain


## instantiation
Syntax

`Grain([id[, m[, d[, q[, b]]]]])`

+ `id`: identification in string, e.g. `0092`, default `0000`.
+ `m` : mass, e.g. `0.5`, default `0`.
+ `d` : diameter, e.g. `1.2`, default `0`.
+ `q` : charge, e.g. `-0.1`, default `0`.
+ `b` : artificial property, e.g. `5.3`, default `0`.

Code

```python
g = Grain()
g.r = Vect3(1, 2, 3)
g.color = Color2('#0f0', '#ff0')
print(g)
```

Output

```json
{
  "id": "0000",
  "m": 0,
  "d": 0,
  "q": 0,
  "b": 0,
  "color": { "stroke": "#0f0", "fill": "#ff0" },
  "r": { "x": 1, "y": 2, "z": 3 },
  "v": { "x": 0, "y": 0, "z": 0 },
  "a": { "x": 0, "y": 0, "z": 0 }
}
```