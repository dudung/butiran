+++
title = 'illust riim prop'
date = '2025-02-25T21:28:03+07:00'
draft = false
authors = ['viridi']
type = 'slides'
tags = ['prop']
categories = ['res']
url = '25b90'
+++

+ Relations of parameters with productivity of red ginger.

{{< mermaid >}}
graph TD
  A[Red Ginger Productivity] 

  %% Environmental Factors
  B1[Soil Moisture] -->|Optimal Range| A
  B2[Soil pH] -->|6.0 - 6.8| A
  B3[Temperature] -->|"25-30°C"| A
  B4[Humidity] -->|70-90%| A
  B5[Light Intensity] -->|Partial Shade| A

  %% Water Balance Factors
  B1.1[Rainfall] --> B1
  B1.2[Irrigation] --> B1
  B1.3[Evapotranspiration] -->|Reduces| B1
  B1.4[Deep Percolation] -->|Leaching Effect| B1

  %% Soil Nutrients
  C[Soil Nutrients] --> A
  C1[Macronutrients N P K] --> C
  C2[Micronutrients Zn Fe Mg] --> C
  C3[Organic Matter] --> C
  C4[Microbial Activity] --> C

  %% Feedback Loops
  A -->|Growth Rate| B1
  A -->|Nutrient Uptake| C
  B1 -->|Influences| C4
  C4 -->|Affects| C
{{< /mermaid >}}
+ Draft is on [1NGPx](https://docs.google.com/document/d/x1NGPqPHyb9sgrJowzL916cLSraoPz0UPr/edit).
