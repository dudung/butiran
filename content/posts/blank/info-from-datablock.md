+++
title = 'Info from datablock'
date = 2024-01-11T18:56:49+07:00
draft = false
tags = ['hugo']
+++
Display scatter chart using Chart.js.
<!--more-->


## shortcodes
Make `datablock.html` in `layouts\shortcodes\blank` to get information of datablock.

```
{{ $r := ( .Inner | chomp) }}
{{ $seed := "foo" }}
{{ $id := delimit (shuffle (split (md5 $seed) "" )) "" }}

<div id="{{ $id }}"></div>

<script>
var r = {{ ( .Inner | chomp) }};
var lines = r.split('\n');
lines.shift();
lines = lines.join('\n');
block = lines.split('\n\n');

var info = [];
var n = 0;
for(b of block) {
  let rows = b.split('\n');
  let cols = rows[0].split(',');
  let Nrows = rows.length;
  let Ncols = cols.length;
  info.push({block: n, rows: Nrows, cols: Ncols});
  n += 1
}

var text = "";
for(o of info) {
  text += "blok " + o['block'] + ': ';
  text += "rows = " + o['rows'] + ', ';
  text += "cols = " + o['cols'] + '<br>';
  text += '<br>';
}

var div = document.getElementById("{{ $id }}");
//div.innerHTML = JSON.stringify(info);
div.innerHTML = text;
//console.log(info);
</script>
</div>
```

## result
{{< datablock >}}
1
2
3

1,4,16
2,32,64

10,100
20,200
30,300
40,400

1,2,3,4,5,6
7,8,9,0,9,8
7,6,5,4,3,2
1,0,1,2,3,4
5,6,7,8,9,0
{{< /datablock >}}


## usage
```
{{</* blank/datablock */>}}
1
2
3

1,4,16
2,32,64

10,100
20,200
30,300
40,400

1,2,3,4,5,6
7,8,9,0,9,8
7,6,5,4,3,2
1,0,1,2,3,4
5,6,7,8,9,0
{{</* /blank/datablock */>}}
```
