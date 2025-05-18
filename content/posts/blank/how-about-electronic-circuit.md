+++
title = 'How about electronic circuit'
date = 2024-01-14T07:51:28+07:00
draft = false
+++
JS lib for drawing electronic circuit can not be found, and following is the current alternative.
<!--more-->


## plain text
```
            R1
     +----\/\/\----+
     |             |
     | +           >
 ε1 ---            < R2
     -             >
     |             |
     +----\/\/\/---+
             R3
```

## mermaid
{{< mermaid >}}
flowchart LR
  o1 --- R1 --- o2
  o2 --- R2 --- o3
  o4 --- R3 --- o3
  o1 --- E1 --- o4
  R1["R1"]
  R2["R2"]
  R3["R3"]
  E1(["&varepsilon;1"])
  o1((" ")); o2((" ")); o3((" ")); o4((" "));
{{< /mermaid >}}

```
{{</* mermaid */>}}
flowchart LR
  o1 --- R1 --- o2
  o2 --- R2 --- o3
  o4 --- R3 --- o3
  o1 --- E1 --- o4
  R1["R1"]
  R2["R2"]
  R3["R3"]
  E1(["&varepsilon;1"])
  o1((" ")); o2((" ")); o3((" ")); o4((" "));
{{</* /mermaid */>}}
```


## svg
{{< svgpath width=200 height=180 >}}
B_STYLE red,2,none # resistor 1
M 40 30
l 40 0 l 2.5 10
l 5 -20 l 5 20 l 5 -20 l 5 20 l 5 -20 l 5 20 l 5 -20
l 2.5 10 l 40 0

B_STYLE green,2,none # resistor 2
M 160 30
l 0 40 l 10 2.5 
l -20 5  l 20 5 l -20 5 l 20 5 l -20 5 l 20 5 l -20 5
l 10 2.5 l 0 40

B_STYLE blue,2,none # resistor 3
M 160 150
l -40 0 l -2.5 10
l -5 -20 l -5 20 l -5 -20 l -5 20 l -5 -20 l -5 20 l -5 -20
l -2.5 10 l -40 0

B_STYLE cyan,2,none # battery 1
M 40 150
l 0 -50
m -8 0 l 16 0
m -8 -10 l -20 0 l 40 0
m 0 -10 l 0 -10 m -5 5 l 10 0
m -25 15 l 0 -60 
{{< /svgpath >}}

```
{{</* blank/svgpath width=200 height=200 */>}}
B_STYLE red,3,none # resistor 1
M 40 30
l 40 0 l 2.5 10
l 5 -20 l 5 20 l 5 -20 l 5 20 l 5 -20 l 5 20 l 5 -20
l 2.5 10 l 40 0

B_STYLE green,3,none # resistor 2
M 160 30
l 0 40 l 10 2.5 
l -20 5  l 20 5 l -20 5 l 20 5 l -20 5 l 20 5 l -20 5
l 10 2.5 l 0 40

B_STYLE blue,3,none # resistor 3
M 160 150
l -40 0 l -2.5 10
l -5 -20 l -5 20 l -5 -20 l -5 20 l -5 -20 l -5 20 l -5 -20
l -2.5 10 l -40 0

B_STYLE cyan,3,none # battery 1
M 40 150
l 0 -50
m -8 0 l 16 0
m -8 -10 l -20 0 l 40 0
m 0 -10 l 0 -10 m -5 5 l 10 0
m -25 15 l 0 -60 
{{</* /blank/svgpath */>}}
```


## refs
Not quite meet the need, but inspiring
+ [[Feature Request] Electrical circuit diagrams](https://github.com/mermaid-js/mermaid/issues/2112#issuecomment-1632889991)
+ [An electronic circuit simulator in javascript](https://www.wiquid.fr/index.php/2022/11/22/a-circuit-simulator-in-javascript/)
+ [Logic Circuits](https://www.jointjs.com/demos/logic-circuits)
+ [Simplify Your Work in Power Electronics with Circuit Diagram Tool](https://synergycodes.com/blog/simplify-your-work-in-power-electronics/)
+ [CDN jointjs](https://www.jsdelivr.com/package/npm/jointjs)
+ [Question on SO, comment #3](https://stackoverflow.com/a/20620297/9475509)
