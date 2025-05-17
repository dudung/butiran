+++
title = 'js-abm on hugo-post'
date = '2025-03-31T02:47:53+07:00'
type = 'notes'
authors = ['viridi']
tags = ['abm']
categories = ['js']
url = '25c70'
[ref]
author = 'Sparisoma Viridi'
title = 'js-abm on hugo-post'
source = 'notes, 31 Mar 2025'
updated = '-'
url = 'https://dudung.github.io/notes/25c70/'
accessed = '20250331'
+++

{{< columns >}}
+ result
+ code
+ experiment
{{< /columns >}}

{{< columns >}}
+ refs
{{< /columns >}}

<!--more-->

A discussion [^masduki_2025], trigger the implementation of developed method [^viridi_2018] in characterizing previous experiments [^widartiningsih_2025] to get the probability matrix for agent movement.


## result
Following is the simulation UI.

{{< script/loader >}}
butiran.min.js
abmphasemat.js
{{< /script/loader >}}


{{< script/runner id="cnt" >}}
const cnt = document.getElementById("cnt");
cnt.style.display = "inline-block";

function main() {
  // Set material phase
  // 0 = solid, 1 = liquid, 2 = gas, 3 = granular,
  // 4 = to-center, 5 = to-corner,
  // 6 = two center-\, 7 = two center-/, 8 = one-center,
  // 9 = clear center, 10 = horizontal, 11 = vertical,
  // 12 = confined fluid,
  // 13 = circular center-iso, 14 = circular center-out
  // 15 = convection center-down, 16 = center up
  // 17 = two-cw-loop,
  // 18 = two-center-\, 19 four-center
  //phase = 5;
  
  // Initialize values
  //initialize(phase);
  
  // Configure visual elements
  configure(cnt);
  
  // Start simulation
  //start();
}

main();
{{< /script/runner >}}


## code
For monodispersed granular materials (options 0 -- 4) following are the parameters

```js
var pGra1 = [
  0.000, 0.000, 0.000, 0.100,
  0.800, 0.100, 0.000, 0.000
];
var pGra2 = [
  0.000, 0.000, 0.000, 0.175,
  0.650, 0.175, 0.000, 0.000
];
var pGra3 = [
  0.000, 0.000, 0.000, 0.250,
  0.500, 0.250, 0.000, 0.000
];
var pGra4 = [
  0.000, 0.000, 0.000, 0.325,
  0.350, 0.325, 0.000, 0.000
];
var pGra5 = [
  0.000, 0.000, 0.000, 0.400,
  0.200, 0.400, 0.000, 0.000
];
```

and

```js
var pSol = [
  0.000, 0.000, 0.000, 0.000,
  1.000, 0.000, 0.000, 0.000		
];
var pLiq = [
  0.060, 0.110, 0.110, 0.125, 
  0.250, 0.125, 0.110, 0.110
];
var pGas = [
  0.125, 0.125, 0.125, 0.125, 
  0.125, 0.125, 0.125, 0.125
];
```

for other monodispersed phases (options 5 -- 7).


## experiment
Experiment with code is documented here.


## refs
[^masduki_2025]: F. Masduki, P. M. Widartiningsih, S. Nurafni, "Private communication", Mar 2025.
[^viridi_2018]: S. Viridi, F. Haryanto, "Agent-based Model and its Potential in Simulating Some Physical Systems", IOP Conference Series: Materials Science and Engineering, vol 599, no 1, p 012008, 2018, url http://doi.org/10.1088/1757-899X/599/1/012008.
[^widartiningsih_2025]: P. M. Widartiningsih, M. I. R. Putra, D. P. P. Aji, A. N. F. Rudiawan, S. Viridi, "Experimental investigation of pile characteristics of non-spherical particles mixtures: pile height and angle of repose", Journal of Physics: Conference Series, vol 2243, no 1, p 012079, 2021, url http://doi.org/10.1088/1742-6596/2243/1/012079.
