# grain
A spherical grain object


## instantiation
Syntax

`Grain([id[, m[, d[, [q, [b]]]]])`

+ `id`: identification in string, e.g. `0001`, default `0000`.
+ `m` : mass, e.g. `0.5`, default `0`.
+ `d` : diameter, e.g. `1.2`, default `0`.
+ `q` : charge, e.g. `-0.1`, default `0`.
+ `b` : binding, e.g. `0`, default `0`.

Code

```python
g = Grain()
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
  "color": { "stroke": "#000", "fill": "#fff" },
  "r": { "x": 0, "y": 0, "z": 0 },
  "v": { "x": 0, "y": 0, "z": 0 },
  "a": { "x": 0, "y": 0, "z": 0 }
}
```