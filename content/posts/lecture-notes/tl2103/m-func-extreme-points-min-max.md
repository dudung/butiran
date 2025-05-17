---
title: "m func extreme points min max"
date: 2023-10-02T16:11:00+07:00
authors: ['Sparisoma Viridi']
tags: ['tl2103']
draft: false
math: true
url: "0079"
---
{{< toc >}}


## a quadratic function
+ There is a function $p(x) = x^2 - 12x + 27$.
+ Its derivative, or $p\'(x)$, is $q(x) = 2x - 12$.
+ Plot of $p(x)$ and $q(x)$ are as follow.
  {{< svg "img/tl2103/function_extreme_points_min.svg" >}}
+ Its root are $x = 3$ and $x = 9$.
+ Its extreme is located at $x = 6$, which is maximum.


## plot code
+ To create previous plot of $p(x)$ and $q(x)$ following lines of code are used.
  ```m
  % function_extreme_points_min

  % clear previous states
  clear;

  % define range of x
  xbeg = 0;
  xend = 10;

  % define a polynomial via its coefficients
  a = [1 -12 27];

  % create data for ploting (x, px)
  x = [];
  px = [];
  for i = xbeg:xend
      x = [x i];
      px = [px polyval(a, i)];
  end

  % calculate derivative
  b = polyder(a);

  % create data for ploting (x, qx)
  x = [];
  qx = [];
  for i = xbeg:xend
      x = [x i];
     qx = [qx polyval(b, i)];
  end

  % plot functions px and qx
  plot(x, px, 'rs-', x, qx, 'bo-');
  xlim([xbeg xend]);
  legend('p(x)', 'q(x)', ...
      'location', 'northeast');
  xlabel('x');
  ylabel('y');
  grid on;
  ```

## finding root
+ Result is as follow.
  ```
  >> function_extreme_points_min
  p(x) = x^2 - 12*x + 27
  root-1 = 3.00
  root-2 = 9.00
  ```
+ Additional lines of code to the previous one.
  ```m
  % create symbolic function for p(x)
  ps = poly2sym(a);

  % create numerical function from string
  fpx = inline(ps);

  % find roots
  root1 = fzero(fpx, 0);
  root2 = fzero(fpx, 10);

  % show results
  fprintf("p(x) = %s\n", ps);
  fprintf("root-1 = %.2f\n", root1);
  fprintf("root-2 = %.2f\n", root2);
  ```
+ It is used previous defined `a` for $p(x)$.


## finding extreme points
+ Result is as follow.
  ```
  Extreme is at x = 6.00
  Second derivative value on extreme = 2.00.
  It is > 0, so it is a minimum point.
  ```
+ It uses derivative, which is represented in `b` as obtained using `b = polyder(a);`.
+ The function `fzero` is used again for for $q(x)$ instead for $p(x)$.
+ The additional code is as follow.
  ```m
  % create symbolic function for q(x)
  qs = poly2sym(b);

  % create numerical function from string
  fqx = inline(qs);

  % find root
  extreme = fzero(fqx, 0);

  % get next derivative
  c = polyder(b);

  % create symbolic functio for r(x)
  rs = poly2sym(c);

  % check value of extreme derivative
  ved = polyval(c, extreme);
  fprintf('Extreme is at x = %.2f\n', extreme);

  % show analysis
  fprintf(['Second derivative value on extreme' ...
      ' = %.2f.\n'], ved);
  if ved > 0
      fprintf('It is > 0, so it is a minimum point.')
  elseif ved < 0
      fprintf('It is < 0, so it is a maximum point.')
  else
      fprintf('It is = 0, so it is an inflection point.')
  end
  ```

## other case
+ Function $p(x) = -x^2 + 12x - 32$.
+ Results are as follow.
  ```
  >> function_extreme_points_max
  p(x) = 12*x - x^2 - 32
  root-1 = 4.00
  root-2 = 8.00
  Extreme is at x = 6.00
  Second derivative value on extreme = -2.00.
  It is < 0, so it is a maximum point.
  ```
+ Plot of $p(x)$ and $q(x)$ is given below.
  {{< svg "img/tl2103/function_extreme_points_max.svg" >}}
+ Full lines of code are as follow.
```m
% function_extreme_points_min

% clear previous states
clear;

% define range of x
xbeg = 0;
xend = 10;

% define a polynomial via its coefficients
a = [-1 12 -32];

% create data for ploting (x, px)
x = [];
px = [];
for i = xbeg:xend
    x = [x i];
    px = [px polyval(a, i)];
end

% calculate derivative
b = polyder(a);

% create data for ploting (x, qx)
x = [];
qx = [];
for i = xbeg:xend
    x = [x i];
   qx = [qx polyval(b, i)];
end

% plot functions px and qx
plot(x, px, 'rs-', x, qx, 'bo-');
xlim([xbeg xend]);
legend('p(x)', 'q(x)', ...
    'location', 'northeast');
xlabel('x');
ylabel('y');
grid on;
%{%}

% create symbolic function p(x)
ps = poly2sym(a);

% create function from string
fpx = inline(ps);

% find roots
root1 = fzero(fpx, 0);
root2 = fzero(fpx, 10);

% show results
fprintf("p(x) = %s\n", ps);
fprintf("root-1 = %.2f\n", root1);
fprintf("root-2 = %.2f\n", root2);
%}

% create symbolic function for q(x)
qs = poly2sym(b);

% create numerical function from string
fqx = inline(qs);

% find root
extreme = fzero(fqx, 0);

% get next derivative
c = polyder(b);

% create symbolic functio for r(x)
rs = poly2sym(c);

% check value of extreme derivative
ved = polyval(c, extreme);
fprintf('Extreme is at x = %.2f\n', extreme);

% show analysis
fprintf(['Second derivative value on extreme' ...
    ' = %.2f.\n'], ved);
if ved > 0
    fprintf('It is > 0, so it is a minimum point.')
elseif ved < 0
    fprintf('It is < 0, so it is a maximum point.')
else
    fprintf('It is = 0, so it is an inflection point.')
end
```
