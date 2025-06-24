---
title: "add partials chartjs"
date: 2022-03-20T13:54:00+07:00
lastmod: 2022-03-20T14:08:00+0700
author: viridi
mathjax: false
mermaid: false
chartjs: true
tags: ['hugo', 'partials', 'chartjs', 'draft']
url: "0005"
draft: false
---
[[1](#r01)].

<canvas id="myChart" style="width:100%;max-width:390px"></canvas>

<script>
var xyValues1 = [
  {x:50, y:7},
  {x:60, y:8},
  {x:70, y:8},
  {x:80, y:9},
  {x:90, y:9},
  {x:100, y:9},
  {x:110, y:10},
  {x:120, y:11},
  {x:130, y:14},
  {x:140, y:14},
  {x:150, y:15}
];
var xyValues2 = [
  {x:50, y:17},
  {x:60, y:18},
  {x:70, y:18},
  {x:80, y:19},
  {x:90, y:19},
  {x:100, y:19},
  {x:110, y:20},
  {x:120, y:21},
  {x:130, y:24},
  {x:140, y:24},
  {x:150, y:25}
];

new Chart("myChart", {
  type: "scatter",
  data: {
    datasets: [
		{
			pointStyle: 'triangle',
      pointRadius: 4,
      pointBackgroundColor: "rgb(0,0,255)",
      backgroundColor: "rgba(255,99,132,0.4)",
      data: xyValues1,
			label: 'T1',
			showLine: true
    },
		{
      pointRadius: 4,
      pointBackgroundColor: "rgb(255, 0, 0)",
      backgroundColor: "rgba(132,99,255,0.4)",
      data: xyValues2,
			label: 'T2'
    },
	
		]
  },
  options: {
    scales: {
      x: {
				min: 10, max: 200, type: 'linear', position: 'top',
				title: {color: 'blue', display: true, text: 'x'}
			},
      y: {
				min: 2, max: 26,
				title: {color: 'blue', display: true, text: 'y'}
			},
    },
		plugins: {
			legend: {
				display: true,
				position: 'chartArea',
				textAlign: 'right',
			},
		},
  }
});
</script>

## notes
1. <a name='r01'></a>
