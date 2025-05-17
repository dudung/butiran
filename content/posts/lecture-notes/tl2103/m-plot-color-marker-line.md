---
title: "m plot color marker line"
date: 2023-09-28T05:54:00+07:00
authors: ['Sparisoma Viridi']
tags: ['tl2103']
draft: false
math: true
url: "0072"
---
{{< toc >}}


## direction
+ Sign in to MathWorks at https://matlab.mathworks.com/.
+ Notice available hours for MATLAB Online (basic).
+ Open MATLAB Online (basic).
+ Create New Script.
+ Press CTRL+S to save.
+ Give a name for the empty file about to be saved, e.g. `plot_color_marker_line.m`.
+ Click Save button.
+ Start to write the code.
+ Run the code.
+ Save figure as PDF.
+ Download it to local folder.
+ Upload it to https://cloudconvert.com/pdf-to-svg.
+ Convert it to PDF.
+ Download SVG file.

## code
```matlab
% create empty arrays
x1 = []; y1 = [];
x2 = []; y2 = [];
x3 = []; y3 = [];
x4 = []; y4 = [];
x5 = []; y5 = [];
x6 = []; y6 = [];

% initial and incremental values
x = 0;
dx = 0.25;

% generate data
while x <= 10
    % data 1
    if 0 <= x & x <= 2
        x1 = [x1 x];
        f1 = x^2;
        y1 = [y1 f1];
    end

    % data 2
    if 2 <= x & x <= 3
        x2 = [x2 x];
        f2 = 4 * (x - 2) + 4;
        y2 = [y2 f2];
    end

    % data 3
    if 3 <= x & x <= 5
        x3 = [x3 x];
        f3 = 12 - (x - 5)^2;
        y3 = [y3 f3];
    end
    
    % data 4
    if 5 <= x & x <= 6
        x4 = [x4 x];
        f4 = 12;
        y4 = [y4 f4];
    end

    % data 5
    if 6 <= x & x <= 8
        x5 = [x5 x];
        f5 = 12 - (x - 6)^2;
        y5 = [y5 f5];
    end
    
    % data 6
    if 8 <= x & x <= 10
        x6 = [x6 x];
        f6 = 6 + 2*(x - 9)^2;
        y6 = [y6 f6];
    end
    
    x = x + dx;
end

% plot results
plot( ...
    x1, y1, '-or', ...
    x2, y2, '-*g', ...
    x3, y3, '-sb', ...
    x4, y4, '-+m', ...
    x5, y5, '-dk', ...
    x6, y6, '-xc' ...
);
grid on;
xlabel("x");
ylabel("y");
```

&nbsp;
{{< svg "img/tl2103/plot_color_marker_line.svg" >}}


## linespec
LineSpec | Line | Marker | Color
:-:   | :-: | :-:          | :-:
`-or` | `-` | `o` &#x25cb; | `r` red
`-*g` | `-` | `*` &ast;    | `g` green
`-sb` | `-` | `s` &#x25a1; | `b` blue
`-+m` | `-` | `+` &plus;   | `m` magenta
`-dk` | `-` | `d` &#x25C7; | `k` black
`-xc` | `-` | `x` &times;  | `c` cyan


## equations
+ For $0 \le x \le 2$
  $$\tag{1}
  y = x^2.
  $$
  ```matlab
  % data 1
  if 0 <= x & x <= 2
      x1 = [x1 x];
      f1 = x^2;
      y1 = [y1 f1];
  end
  ```

+ For $2 \le x \le 3$
  $$\tag{2}
  y = 4(x-2) + 4.
  $$
  ```matlab
  % data 2
  if 2 <= x & x <= 3
      x2 = [x2 x];
      f2 = 4 * (x - 2) + 4;
      y2 = [y2 f2];
  end
  ```

+ For $3 \le x \le 5$
  $$\tag{3}
  y = 12 - (x - 5)^2.
  $$
  ```matlab
  % data 3
  if 3 <= x & x <= 5
      x3 = [x3 x];
      f3 = 12 - (x - 5)^2;
      y3 = [y3 f3];
  end
  ```

+ For $5 \le x \le 6$
  $$\tag{4}
  y = 12.
  $$
  ```matlab
  % data 4
  if 5 <= x & x <= 6
      x4 = [x4 x];
      f4 = 12;
      y4 = [y4 f4];
  end
  ```

+ For $6 \le x \le 8$
  $$\tag{5}
  y = 12 - (x - 6)^2.
  $$
  ```matlab
  % data 5
  if 6 <= x & x <= 8
      x5 = [x5 x];
      f5 = 12 - (x - 6)^2;
      y5 = [y5 f5];
  end
  ```

+ For $8 \le x \le 10$
  $$\tag{6}
  y = 6 + 2(x - 9)^2.
  $$
  ```matlab
  % data 6
  if 8 <= x & x <= 10
      x6 = [x6 x];
      f6 = 6 + 2*(x - 9)^2;
      y6 = [y6 f6];
  end
  ```

+ And for all ranges

$$\tag{7}
y = \left\\{
\begin{array}{cc}
x^2, & 0 \le x \le 2, \newline
4(x-2) + 4, & 2 \le x \le 3, \newline
12 - (x - 5)^2, & 3 \le x \le 5, \newline
12, & 5 \le x \le 6, \newline
12 - (x - 6)^2, & 6 \le x \le 8, \newline
6 + 2(x - 9)^2, & 8 \le x \le 10.
\end{array}
\right.
$$