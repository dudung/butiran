---
title: "m pollutant data"
date: 2023-09-27T22:33:00+07:00
authors: ['Sparisoma Viridi']
tags: ['tl2103']
draft: false
math: true
url: "0071"
---
{{< toc >}}


## direction
+ You are tasked to analyze air pollution data collected from a monitoring station in Jakarta. You want to create line plots to visualize how the concentrations of two different pollutants (PM2.5 and NO2) vary over time.
+ Allow users to input data.
+ Provide an option to either generate two line plots (one for each parameter) in one graph or in two subplots within the same figure.
+ To terminate data entry, user can enter “-1“ for PM2.5 concentration or you may set some other value.
+ Output
```
>> plot1
Choose the plot style:
1. Two Plots in One Graph
2. Two Subplots in One Figure
Enter you choice (1 or 2): 2
Input data for Time Point 1 (Enter -1 to finish):
Enter PM2.5 concentration (ug/m3): 23
Enter N02 concentration (ppb): 20
Input data for Time Point 2 (Enter -1 to finish):
Enter PM2.5 concentration (ug/m3): 32
Enter N02 concentration (ppb): 15
Input data for Time Point 3 (Enter -1 to finish):
Enter PM2.5 concentration (ug/m3): -1
```

## code
```matlab
% menu for plotting graphs
disp("Choose the plot style:");
disp("1. Two Plots in One Graph");
disp("2. Two Subplots in One Figure");
choice = input("Enter you choice (1 or 2): ");

% data time point
time = [];
% data PM2.5 = 23, 32
pm2_5 = [];
% data for N02 concentration = 20, 15
NO2 = [];

% start inputting
i = 1;
x = 0;
while true
    fprintf("Input data for Time Point %i (Enter -1 to finish):\n", i);
    x = input("Enter PM2.5 concentration (ug/m3):");
    if x == -1
        break
    else
        pm2_5 = [pm2_5 x];
    end
    x = input("Enter N02 concentration (ppb):");
    if x == -1
        break
    else
        NO2 = [NO2 x];
    end
    
    time = [time i];
    i = i + 1;
end

% display time, pm2_5, NO2 for checking
disp(time);
disp(pm2_5);
disp(NO2);

% plot graphs with condition
if choice == 1
  subplot(1, 1, 1);
  plot(time, pm2_5, 'ob', time, NO2, 'dr');
  grid on;
else
  subplot(2, 1, 1);
  plot(time, pm2_5, 'ob');
  grid on;
  
  subplot(2, 1, 2);
  plot(time, NO2, 'dr');
  grid on;
end
```

## result 1
```bash
Choose the plot style:
1. Two Plots in One Graph
2. Two Subplots in One Figure
Enter you choice (1 or 2): 
1

Input data for Time Point 1 (Enter -1 to finish):
Enter PM2.5 concentration (ug/m3):
23
Enter N02 concentration (ppb):
20
Input data for Time Point 2 (Enter -1 to finish):
Enter PM2.5 concentration (ug/m3):
32
Enter N02 concentration (ppb):
15
Input data for Time Point 3 (Enter -1 to finish):
Enter PM2.5 concentration (ug/m3):
-1
     1     2

    23    32

    20    15
```

{{< svg "img/tl2103/pollutant_graph_1.svg" >}}


## result 2
```bash
Choose the plot style:
1. Two Plots in One Graph
2. Two Subplots in One Figure
Enter you choice (1 or 2): 
2

Input data for Time Point 1 (Enter -1 to finish):
Enter PM2.5 concentration (ug/m3):
23
Enter N02 concentration (ppb):
20
Input data for Time Point 2 (Enter -1 to finish):
Enter PM2.5 concentration (ug/m3):
32
Enter N02 concentration (ppb):
15
Input data for Time Point 3 (Enter -1 to finish):
Enter PM2.5 concentration (ug/m3):
-1
     1     2

    23    32

    20    15
```

{{< svg "img/tl2103/pollutant_graph_2a.svg" >}}
{{< svg "img/tl2103/pollutant_graph_2b.svg" >}}


## notes
+ Matlab plot and save as PDF using https://matlab.mathworks.com/
+ PDF to SVG using https://cloudconvert.com/pdf-to-svg
