+++
title = 'med enhanced 2d scatplot'
date = '2025-09-08T21:43:29+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = []
categories = ['medium']
url = '25i34'
+++

<!-- more -->

## info
+ title Enhanced 2-d scatter plots
+ subtitle Encoding more dimensions with python matplotlib
+ url [82aa6ec95be3](https://medium.com/p/82aa6ec95be3)
+ date 08-sep-2025


## content
Steps how to add more dimensions to a regular 2-d scattter plots are given in this story. It is assumed that you are already familiar with Python, Matplotlib, Pandas, dan NumPy.

### Data in CSV
Suppose that there is a CSV file with following content.

Press enter or click to view image in full size

It is not a good CSV file, since there is a lot of unnecessary space before and after semicolor ; character, which is used as separator. Name of the file is railway_jakarta_bogor.csv or you can name it as you wish, but notice the name in the upcoming codes.

### Clean unnecessary space
Following lines of code is used to clearn the unnecessary space.

```py
import pandas as pd

df = pd.read_csv(
    'railway_jakarta_bogor.csv',
    sep=';',
    skipinitialspace=True
)
df.columns = df.columns.str.strip()
for col in ['Elev', 'Tracks', 'Platforms']:
    df[col] = pd.to_numeric(df[col],
                            errors='coerce')
```

Then there is also a function to convert n+abc in km to nabc m for position of a train station from a reference station.

```py
import pandas as pd

def kmplus_to_meters(value):
    """
    Convert a 'X+YYY' string to total meters.
    e.g. '2+395' -> 2395
    """
    if pd.isna(value):
        return None
    parts = str(value).split('+')
    if len(parts) == 2:
        km, m = parts
        return int(km) * 1000 + int(m)
    else:
        return pd.to_numeric(value, errors='coerce')
```

### Result and code
Following is a 2-d scatter plot with two additional dimensions.

Press enter or click to view image in full size

Horizontal axis is for longitude, while vertical axis is for latitude. Marker size is proportional to station number of tracks, and marker color is for station elevation, where blue color for small elevation value and red color for high elevation value. Then, it is a four-dimensional plot.

```py
x = df['Long']
y = df['Lat']
t = [i*40 for i in df['Tracks']]

e = np.array([i*5 for i in df['Elev']])
n = plt.Normalize(
    vmin=e.min(), vmax=e.max())
cmap = cm.seismic
colors = cmap(n(e))

import matplotlib.pyplot as plt

plt.figure(figsize=(4.6, 4.6))
plt.grid()
plt.xlabel('Long')
plt.ylabel('Lat')
plt.xticks(
    [106.78, 106.80, 106.82,
     106.84, 106.86])
plt.ylim([106.78, 106.86])
plt.yticks([-6.8, -6.6, -6.4,
            -6.2, -6])
plt.ylim([-6.8, -6.0])
plt.plot(x, y, ':k')
plt.scatter(x, y, s=t, c=colors)
plt.show()
```

Above is the code to produce previous plot.

### Closing
After reading this story, you are able to
+ create a simple and common 2-d scatter plot using Matplolib in Python,
+ read CSV file and clear unnecessary space before and after a separator character, and
+ enhance the 2-d scatter plot up to two additional dimension.