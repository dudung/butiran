---
title: "water footprint citarum utilization"
date: 2023-10-27T07:04:00+07:00
authors: ['Phetviengkham Onexayvieng', 'Sparisoma Viridi']
tags: ['fi8093']
draft: false
math: true
url: "0119"
---
{{< toc >}}


## meetings
+ `13-nov-2023` Report current progress, the equations.
+ `30-oct-2023` Confirm the loop and add source of water.
+ `27-oct-2023` Start from simple loop and steps for information gathering.


## 13-nov-2023
+ It should begin about 0800 and is only for 1 hour.
+ The difference between water consumption and water utilization is now clear.
+ Find information about
  - For different products are there several paths between two main elements, or
  - There are different CLD for each product.
+ In firts two week of Dec will to Aus and progress report will be delivered online.


## 30-oct-2023
+ Increasing loop &rightarrow; balancing loop.
+ Equations: ETo for various types of crop, individual water need per time duration, 
+ Describe activities related to WU and WC to differ them.


## 27-oct-2023
+ A balancing loop from four variables (WC, WS, WD, WU).
  
  Symbol | Description
  :-: | :-
  WC | Water Consumption
  WS | Water Supply
  WD | Water Demmand
  WU | Water utilization

  {{< mermaid >}}
  flowchart LR
    WS --"(&#x2795;)"---> WD
    WD --"(&#x2795;)"---> WU
    WU --"(&#x2795;)"---> WC
    WC --"(&#x2796;)"---> WS
    WC(["WC"])
    WS(["WS"])
    WD(["WD"])
    WU(["WU"])
    linkStyle default color:magenta
  {{< /mermaid >}}
+ Relations (ideal)
  - ${\rm WD} = f_1({\rm WS})$
  - ${\rm WU} = f_2({\rm WD})$
  - ${\rm WC} = f_3({\rm WU})$
  - ${\rm WS} = f_4({\rm WC})$
+ Literature study
  - Good: There are $f_1$, $f_2$, $f_3$, $f_4$.
  - Medium:
    + There data, e.g. $\rm WD$ vs $\rm WS$.
    + Then related fitting function, e.g. ${\rm WD} = f_1({\rm WS})$, can be created.
  - Not good: Descriptive and qualitative statement or opinion about relation between parameters, e.g. $\rm WD$ vs $\rm WS$, based on years of experience.


## refs
+ Step-by-step stoks and flows: Improving the rigor of your thinking ([Aronson & Angelakis, 2016](https://thesystemsthinker.com/step-by-step-stocks-and-flows-improving-the-rigor-of-your-thinking/)).
+ Green, blue, and gray water ([Chat GPT 2023](https://chat.openai.com/share/da5c0994-86b4-4d22-bab3-1d2ace9abed6))


## files
+ `10-nov-2023` [Progress Report -7_Phetviengkham(30222751).pdf
](https://osf.io/32vxt)
+ `30-oct-2023` [Progress Report -6_Phetviengkham(30222751).pdf](https://osf.io/fdqpe)
