+++
title = 'generate synthetic data for ml'
date = 2024-04-21T22:19:00+07:00
draft = false
math = true
tags = ['synthetic data', 'machine learning', 'python']
url = '2017'
authors = ['viridi']
+++
How to generate synthetic data for ML understanding <!--more-->


## intro
In order to improve AI models, protect sensitive data, and mitigate bias, computer can augment or replace real data, where such kind of data known as synthetic data [^martineau_2023]. For illustrating how to generate synthetic data, a session has been prepared [^viridi_2024], where it is using available working code for the analysis [^browniee_2023].


## code
Dataset with two classes A and B is generated, with features X1, X2, X3 and output Y with following code.

```py
import random as rnd
n = 1000
xx = []; yy = []; zz = []; label=[]

xmin = 10; xmax = 50
ymin = 40; ymax = 90
zmin = 70; zmax = 90
for i in range(n//2):
    x = rnd.random() * (xmax - xmin) + xmin
    y = rnd.random() * (ymax - ymin) + ymin
    z = rnd.random() * (zmax - zmin) + zmin
    xx.append(x)
    yy.append(y)
    zz.append(z)
    label.append('A');

xmin = 30; xmax = 80
ymin = 20; ymax = 70
zmin = 10; zmax = 30
for i in range(n//2,n):
    x = rnd.random() * (xmax - xmin) + xmin
    y = rnd.random() * (ymax - ymin) + ymin
    z = rnd.random() * (zmax - zmin) + zmin
    xx.append(x)
    yy.append(y)
    zz.append(z)
    label.append('B');

import matplotlib.pyplot as plt
plt.scatter(yy, zz)
plt.show()

# https://www.geeksforgeeks.org/writing-csv-files-in-python/ [20240421]
import csv
 
# field names
fields = ['X1', 'X2', 'X3', 'Y']
 
# data rows of csv file
rows = []
for i in range(n):
    row = [
        f'{xx[i]:.3f}',
        f'{yy[i]:.3f}',
        f'{zz[i]:.3f}',
        label[i]
    ]
    rows.append(row)

# name of csv file
filename = "x123_y.csv"
 
# writing to csv file
with open(filename, 'w', newline='') as csvfile:
    # creating a csv writer object
    csvwriter = csv.writer(csvfile)
 
    # writing the fields
    csvwriter.writerow(fields)
 
    # writing the data rows
    csvwriter.writerows(rows)
```

And the data can be read using

```py
# Load dataset
url = "https://raw.githubusercontent.com/dudung/datasets/main/data/synthetic/x123_y.csv"
names = ['X1', 'X2', 'X3', 'Y']
dataset = read_csv(url, names=names, header=0)
```

where it has one line for header `X1,X2,X3,Y`. The dataset [`x123_y.csv`](https://raw.githubusercontent.com/dudung/datasets/main/data/synthetic/x123_y.csv") can be downloaded.


## analysis
The feature X3 plays important role in differing A and B classes.


## notes
[^browniee_2023]: Jason Browniee, “Your First Machine Learning Project in Python Step-By-Step”, Machine Learning Mastery, 26 Sep 2023, url https://machinelearningmastery.com/machine-learning-in-python-step-by-step/ [202400421].
[^martineau_2023]: Kim Martineau, "What is synthetic data?", IBM, 8 Feb 2023, url https://research.ibm.com/blog/what-is-synthetic-data [20240421].
[^viridi_2024]: Sparisoma Viridi, "ML synthetic data with Python", OSF, 21 Apr 2024, url https://osf.io/wqv3z [20240421].
