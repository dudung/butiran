---
title: "hugo-chart xy scatter"
date: 2023-09-14T03:39:00+08:00
authors: ['Sparisoma Viridi']
tags: ['xx1000']
draft: false
math: true
url: "0044"
---
{{< toc >}}

## result
{{< chart 80 300 >}}
{
  type: 'scatter',
  data:
  {
    datasets: [
      {
        label: 'wander = 0',
        pointRadius: 4,
        pointBackgroundColor: "rgba(255,0,0,0.5)",
        showLine: true,
        fill: false,
        borderColor: "rgba(255,0,0,0.5)",
        lineTension: 0.0,
        data:
        [
          {x: 10, y:0.020},
          {x: 20, y:0.030},
          {x: 30, y:0.095},
          {x: 40, y:0.155},
          {x: 50, y:0.175},
          {x: 60, y:0.220},
          {x: 70, y:0.240}
        ]
      },
      {
        label: 'wander = 10',
        pointRadius: 4,
        pointBackgroundColor: "rgba(0,0,255,0.5)",
        showLine: true,
        fill: false,
        borderColor: "rgba(0,0,255,0.5)",
        lineTension: 0.0,
        data:
        [
          {x: 10, y:0.025},
          {x: 20, y:0.075},
          {x: 30, y:0.125},
          {x: 40, y:0.190},
          {x: 50, y:0.190},
          {x: 60, y:0.175}
        ]
      },
    ]
  },
  options: {
    scales: {
      xAxes: [{
        scaleLabel: {
        display: true,
        labelString: 'weight of alignment'
        }
      }],
      yAxes: [{
        scaleLabel: {
        display: true,
        labelString: 'ACI'
        }
      }]    
    }
  }
}
{{< /chart >}}


## refs
+ hugo-chat ([Shen et al., 2023](https://github.com/shen-yu/hugo-chart))
+ https://stackoverflow.com/a/36954310/9475509


## test
```md
{{</* chart 80 300 */>}}
{
  type: 'scatter',
  data:
  {
    datasets: [
      {
        label: 'wander = 0',
        pointRadius: 4,
        pointBackgroundColor: "rgba(255,0,0,0.5)",
        showLine: true,
        fill: false,
        borderColor: "rgba(255,0,0,0.5)",
        lineTension: 0.0,
        data:
        [
          {x: 10, y:0.020},
          {x: 20, y:0.030},
          {x: 30, y:0.095},
          {x: 40, y:0.155},
          {x: 50, y:0.175},
          {x: 60, y:0.220},
          {x: 70, y:0.240}
        ]
      },
      {
        label: 'wander = 10',
        pointRadius: 4,
        pointBackgroundColor: "rgba(0,0,255,0.5)",
        showLine: true,
        fill: false,
        borderColor: "rgba(0,0,255,0.5)",
        lineTension: 0.0,
        data:
        [
          {x: 10, y:0.025},
          {x: 20, y:0.075},
          {x: 30, y:0.125},
          {x: 40, y:0.190},
          {x: 50, y:0.190},
          {x: 60, y:0.175}
        ]
      },
    ]
  },
  options: {
    scales: {
      xAxes: [{
        scaleLabel: {
        display: true,
        labelString: 'weight of alignment'
        }
      }],
      yAxes: [{
        scaleLabel: {
        display: true,
        labelString: 'ACI'
        }
      }]    
    }
  }
}
{{</* /chart */>}}
```
