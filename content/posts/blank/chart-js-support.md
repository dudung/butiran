+++
title = 'Chart.js support'
date = 2024-01-11T15:48:59+07:00
draft = false
tags = ['hugo']
+++
Add support for [Chart.js](https://www.chartjs.org/) via shortcodes.
<!--more-->


## shortcodes
Create `chart.html` in `\layouts\shortcodes` with following content

```
{{ $w := default "100" (.Get 0) }}
{{ $h := default "300" (.Get 1) }}
{{ $r := ( .Inner | chomp) }}
{{ $seed := "foo" }}
{{ $id := delimit (shuffle (split (md5 $seed) "" )) "" }}

<div style="width: {{ $w }}%;height: {{ $h }}px;margin: 0 auto">
    <canvas id="{{ $id }}"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>

<!-- Previous url does not work.
<script src="https://cdn.jsdelivr.net/npm/chart.js/dist/chart.min.js"></script>
-->

<script type="text/javascript">
    var ctx = document.getElementById('{{ $id }}').getContext('2d');
    var options = {{ $r | safeJS }};
    new Chart(ctx, options);
</script>
```

as provided by [Eric Shen](https://github.com/shen-yu/hugo-chart/blob/master/layouts/shortcodes/chart.html) with change of script url.


## result
{{< chart >}}
{
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Bar Chart',
            data: [12, 19, 18, 16, 13, 14],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
}
{{< /chart >}}


## usage

```
{{</* chart */>}}
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Bar Chart',
            data: [12, 19, 18, 16, 13, 14],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
}
{{</* /chart */>}}
```