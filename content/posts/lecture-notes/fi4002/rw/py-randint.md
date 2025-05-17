---
title: "py randint"
date: 2023-09-21T09:57:00+07:00
authors: ['Sparisoma Viridi']
tags: ['fi4002']
draft: false
math: true
url: "0058"
---
{{< toc >}}


# code
```python
import random as rnd

xmin = 3
xmax = 7
Nx = xmax - xmin + 1

for i in range(10):
  x = [0] * Nx

  Ni = 200
  for i in range(Ni):
    xi = rnd.randint(xmin, xmax)
    x[xi - xmin] += 1
  
  print(x)
```
url https://onecompiler.com/python/3zn6p7r2b

## result
```bash
[50, 31, 43, 34, 42]
[31, 40, 46, 42, 41]
[40, 41, 49, 35, 35]
[39, 41, 49, 41, 30]
[47, 38, 38, 37, 40]
[45, 49, 34, 38, 34]
[41, 37, 39, 41, 42]
[29, 34, 47, 54, 36]
[27, 34, 55, 46, 38]
[51, 25, 46, 40, 38]
```

## chart
{{< chart 50 250 >}}
{
  type: 'bar',
  data: {
    labels: [3, 4, 5, 6, 7],
    datasets: [
      {
        label: '1st',
        data: [50, 31, 43, 34, 42],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: '2nd',
        data: [31, 40, 46, 42, 41],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
     },
      {
        label: '3rd',
        data: [40, 41, 49, 35, 35],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: '4th',
        data: [39, 41, 49, 41, 30],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
     },
      {
        label: '5th',
        data: [47, 38, 38, 37, 40],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: '5th',
        data: [45, 49, 34, 38, 34],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: '6th',
        data: [41, 37, 39, 41, 42],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: '8th',
        data: [29, 34, 47, 54, 36],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: '9th',
        data: [27, 34, 55, 46, 38],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: '10th',
        data: [51, 25, 46, 40, 38],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ]
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Occurence'
        },
        ticks: {
          beginAtZero: true
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Number'
        }
      }],
    },
    plugins: {
      legend: false
    }
  }
}
{{< /chart >}}
