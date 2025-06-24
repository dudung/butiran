---
title: "floating object box n fluids"
date: 2023-11-07T04:53:00+07:00
authors: ['Sparisoma Viridi']
tags: ['fi1101']
draft: false
math: true
url: "0144"
---
{{< toc >}}


## floating | buoyant | sinking - 1 fluid
{{< html >}}
<svg
  version="1.1" xmlns="http://www.w3.org/2000/svg"
  width="200" height="200"
  style="background: #eee;">
    <path d="M 20 60 L 20 180 L 180 180 L 180 60"
      stroke="black" stroke-width="0" fill="#8a8" />
    <path d="M 20 40 L 20 180 L 180 180 L 180 40"
      stroke="black" stroke-width="3" fill="none" />
    <rect x="60" y="100" width="90" height="80"
      stroke="black" stroke-width="2" fill="rgba(255, 0, 0, 0.3)" />
    <text x="110" y="90" text-anchor="middle" 
      alignment-baseline="middle" style="font-style: italic; font-family:Times;">A</text>
    <text x="80" y="130" text-anchor="middle" 
      alignment-baseline="middle" style="font-style: italic; font-family:Times;">&rho;</text>
    <text x="88" y="136" text-anchor="middle" 
      alignment-baseline="middle" style="font-size:75%; font-family:Times;">1</text>
    <text x="35" y="155" text-anchor="middle" 
      alignment-baseline="middle" style="font-style: italic; font-family:Times;"">&rho;</text>
    <text x="43" y="161" text-anchor="middle" 
      alignment-baseline="middle" style="font-size:75%; font-family:Times;"">2</text>
    <text x="162" y="140" text-anchor="middle" 
      alignment-baseline="middle" style="font-style: italic; font-family:Times;">h</text>
    <text x="170" y="146" text-anchor="middle" 
      alignment-baseline="middle" style="font-family:Times; font-size:75%">2</text>
</svg>
<svg
  version="1.1" xmlns="http://www.w3.org/2000/svg"
  width="200" height="200"
  style="background: #eee;">
    <path d="M 20 60 L 20 180 L 180 180 L 180 60"
      stroke="black" stroke-width="0" fill="#aaf" />
    <path d="M 20 40 L 20 180 L 180 180 L 180 40"
      stroke="black" stroke-width="3" fill="none" />
    <rect x="60" y="80" width="90" height="80"
      stroke="black" stroke-width="2" fill="rgba(255, 0, 0, 0.3)" />
    <text x="110" y="72" text-anchor="middle" 
      alignment-baseline="middle" style="font-style: italic; font-family:Times;">A</text>
    <text x="80" y="100" text-anchor="middle" 
      alignment-baseline="middle" style="font-style: italic; font-family:Times;">&rho;</text>
    <text x="88" y="106" text-anchor="middle" 
      alignment-baseline="middle" style="font-size:75%; font-family:Times;">1</text>
    <text x="35" y="155" text-anchor="middle" 
      alignment-baseline="middle" style="font-style: italic; font-family:Times;"">&rho;</text>
    <text x="43" y="161" text-anchor="middle" 
      alignment-baseline="middle" style="font-size:75%; font-family:Times;"">2</text>
    <text x="162" y="120" text-anchor="middle" 
      alignment-baseline="middle" style="font-style: italic; font-family:Times;">h</text>
    <text x="170" y="126" text-anchor="middle" 
      alignment-baseline="middle" style="font-family:Times; font-size:75%">2</text>
</svg>
<svg
  version="1.1" xmlns="http://www.w3.org/2000/svg"
  width="200" height="200"
  style="background: #eee;">
    <path d="M 20 60 L 20 180 L 180 180 L 180 60"
      stroke="black" stroke-width="0" fill="#48f" />
    <path d="M 20 40 L 20 180 L 180 180 L 180 40"
      stroke="black" stroke-width="3" fill="none" />
    <rect x="50" y="30" width="90" height="80"
      stroke="black" stroke-width="2" fill="rgba(255, 0, 0, 0.3)" />
    <text x="100" y="20" text-anchor="middle" 
      alignment-baseline="middle" style="font-style: italic; font-family:Times;">A</text>
    <text x="70" y="50" text-anchor="middle" 
      alignment-baseline="middle" style="font-style: italic; font-family:Times;">&rho;</text>
    <text x="78" y="56" text-anchor="middle" 
      alignment-baseline="middle" style="font-size:75%; font-family:Times;">1</text>
    <text x="40" y="155" text-anchor="middle" 
      alignment-baseline="middle" style="font-style: italic; font-family:Times;"">&rho;</text>
    <text x="48" y="161" text-anchor="middle" 
      alignment-baseline="middle" style="font-size:75%; font-family:Times;"">3</text>
    <text x="155" y="50" text-anchor="middle" 
      alignment-baseline="middle" style="font-style: italic; font-family:Times;">h</text>
    <text x="163" y="56" text-anchor="middle" 
      alignment-baseline="middle" style="font-family:Times; font-size:75%">1</text>
    <text x="155" y="85" text-anchor="middle" 
      alignment-baseline="middle" style="font-style: italic; font-family:Times;">h</text>
    <text x="163" y="91" text-anchor="middle" 
      alignment-baseline="middle" style="font-family:Times; font-size:75%">3</text>
</svg>{{< /html >}}

$$\tag{1}
\rho_2 \le \rho_1, \ \ \ \ \ \ \ \ \rho_2 = \rho_1, \ \ \ \ \ \ \ \ \rho_3 = \left( 1 + \frac{h_1}{h_3} \right) \rho_1
$$


## floating & sinking - 2 fluids
{{< html >}}
<svg
  version="1.1" xmlns="http://www.w3.org/2000/svg"
  width="200" height="200"
  style="background: #eee;">
    <path d="M 20 60 L 20 180 L 180 180 L 180 60"
      stroke="black" stroke-width="0" fill="#8a8" />
    <path d="M 20 130 L 20 180 L 180 180 L 180 130"
      stroke="black" stroke-width="0" fill="#48f" />
    <path d="M 20 40 L 20 180 L 180 180 L 180 40"
      stroke="black" stroke-width="3" fill="none" />
    <rect x="60" y="80" width="90" height="80"
      stroke="black" stroke-width="2" fill="rgba(255, 0, 0, 0.3)" />
    <text x="110" y="70" text-anchor="middle" 
      alignment-baseline="middle" style="font-style: italic; font-family:Times;">A</text>
    <text x="80" y="110" text-anchor="middle" 
      alignment-baseline="middle" style="font-style: italic; font-family:Times;">&rho;</text>
    <text x="88" y="116" text-anchor="middle" 
      alignment-baseline="middle" style="font-size:75%; font-family:Times;">1</text>
    <text x="35" y="95" text-anchor="middle" 
      alignment-baseline="middle" style="font-style: italic; font-family:Times;"">&rho;</text>
    <text x="43" y="101" text-anchor="middle" 
      alignment-baseline="middle" style="font-size:75%; font-family:Times;"">2</text>
    <text x="35" y="155" text-anchor="middle" 
      alignment-baseline="middle" style="font-style: italic; font-family:Times;"">&rho;</text>
    <text x="43" y="161" text-anchor="middle" 
      alignment-baseline="middle" style="font-size:75%; font-family:Times;"">3</text>
    <text x="162" y="144" text-anchor="middle" 
      alignment-baseline="middle" style="font-style: italic; font-family:Times;">h</text>
    <text x="170" y="150" text-anchor="middle" 
      alignment-baseline="middle" style="font-family:Times; font-size:75%">3</text>
    <text x="162" y="104" text-anchor="middle" 
      alignment-baseline="middle" style="font-style: italic; font-family:Times;">h</text>
    <text x="170" y="110" text-anchor="middle" 
      alignment-baseline="middle" style="font-family:Times; font-size:75%">2</text>
</svg>
{{< /html >}}

$$\tag{2}
h_2 \rho_2 + h_3 \rho_3 = \left( h_2 + h_3 \right) \rho_1
$$


## floating & buoyant & sinking - 3 fluids
{{< html >}}
<svg
  version="1.1" xmlns="http://www.w3.org/2000/svg"
  width="200" height="200"
  style="background: #eee;">
    <path d="M 20 40 L 20 100 L 180 100 L 180 40"
      stroke="black" stroke-width="0" fill="#48f" />
    <path d="M 20 100 L 20 140 L 180 140 L 180 100"
      stroke="black" stroke-width="0" fill="#8a8" />
    <path d="M 20 140 L 20 180 L 180 180 L 180 140"
      stroke="black" stroke-width="0" fill="#aaf" />
    <path d="M 20 20 L 20 180 L 180 180 L 180 20"
      stroke="black" stroke-width="3" fill="none" />
    <rect x="60" y="80" width="90" height="80"
      stroke="black" stroke-width="2" fill="rgba(255, 0, 0, 0.3)" />
    <text x="110" y="70" text-anchor="middle" 
      alignment-baseline="middle" style="font-style: italic; font-family:Times;">A</text>

    <text x="80" y="120" text-anchor="middle" 
      alignment-baseline="middle" style="font-style: italic; font-family:Times;">&rho;</text>
    <text x="88" y="126" text-anchor="middle" 
      alignment-baseline="middle" style="font-size:75%; font-family:Times;">1</text>

    <text x="35" y="70" text-anchor="middle" 
      alignment-baseline="middle" style="font-style: italic; font-family:Times;"">&rho;</text>
    <text x="43" y="76" text-anchor="middle" 
      alignment-baseline="middle" style="font-size:75%; font-family:Times;"">2</text>

    <text x="35" y="120" text-anchor="middle" 
      alignment-baseline="middle" style="font-style: italic; font-family:Times;"">&rho;</text>
    <text x="43" y="126" text-anchor="middle" 
      alignment-baseline="middle" style="font-size:75%; font-family:Times;"">3</text>

    <text x="35" y="155" text-anchor="middle" 
      alignment-baseline="middle" style="font-style: italic; font-family:Times;"">&rho;</text>
    <text x="43" y="161" text-anchor="middle" 
      alignment-baseline="middle" style="font-size:75%; font-family:Times;"">4</text>

    <text x="162" y="88" text-anchor="middle" 
      alignment-baseline="middle" style="font-style: italic; font-family:Times;">h</text>
    <text x="170" y="94" text-anchor="middle" 
      alignment-baseline="middle" style="font-family:Times; font-size:75%">2</text>

    <text x="162" y="120" text-anchor="middle" 
      alignment-baseline="middle" style="font-style: italic; font-family:Times;">h</text>
    <text x="170" y="126" text-anchor="middle" 
      alignment-baseline="middle" style="font-family:Times; font-size:75%">3</text>
      
    <text x="162" y="150" text-anchor="middle" 
      alignment-baseline="middle" style="font-style: italic; font-family:Times;">h</text>
    <text x="170" y="156" text-anchor="middle" 
      alignment-baseline="middle" style="font-family:Times; font-size:75%">4</text>
</svg>
{{< /html >}}

$$\tag{3}
h_2 \rho_2 + h_3 \rho_3 + h_4 \rho_4 = \left( h_2 + h_3 + h_4 \right) \rho_1
$$
