---
title: "m poly-4 root extreme"
date: 2023-10-02T21:32:00+07:00
authors: ['Sparisoma Viridi']
tags: ['tl2103']
draft: false
math: true
url: "0081"
---
{{< toc >}}


## direction
+ Create a program that can find the root value or extreme value of a single variable non-linear equation inputted by the user by entering the number of components of the equation in the form of an array.
  - The user cannot input an array with an element that is 0.
  - The maximum number of elements of the array is 5.
  - Use elements of vector (`poly2sym`, `polyder`, `polyval`, `inline`) for root and extreme value finding procedure.
+ Output is as follow.
  - Choice 1
  ```
  Input size of array (max 5): 3
  Make sure not to input for any element value of 0
  Value of array 1: 1
  Value of array 2: 5
  Value of array 3: 3

  Function = f(x) = x^2 + 5*x + 3

  Choose operation to be performed
  1. Find one root of the function
  2. Find extreme of the function
  Your choice: 1
  
  Input your initial guess: 3
  Found one root of the function, which is -0.697224
  >>
  ```  
  - Choice 2
  ```
  Input size of array (max 5): 3
  Make sure not to input for any element value of 0
  Value of array 1: 1
  Value of array 2: 5
  Value of array 3: 3

  Function = f(x) = x^2 + 5*x + 3

  Choose operation to be performed
  1. Find one root of the function
  2. Find extreme of the function
  Your choice: 2
  
  Input your initial guess: 3
  Extreme of the function is -3.25
  >>
  ```

## result of choice 1
```
>> poly_4_root_extreme
Input size of array (max 5):
3
Value of array 1:
1
Value of array 2:
5
Value of array 3:
3

Function = f(x) = 5*x + x^2 + 3
Choose operation to be performed
1. Find one root of the function
2. Find extreme of the function
Your choice:
1
Your initial guess:
3
Found one root of the function,which is -0.697224
```

## result of choice 2
```
>> poly_4_root_extreme
Input size of array (max 5):
3
Value of array 1:
1
Value of array 2:
5
Value of array 3:
3

Function = f(x) = 5*x + x^2 + 3
Choose operation to be performed
1. Find one root of the function
2. Find extreme of the function
Your choice:
2
Your initial guess:
3
Extreme of the function is -3.25
```

## code
```m
% poly_4_root_extreme

% repeat until n between 1 and 5 
n = 10;
while n > 5 | n < 1 
    n = input('Input size of array (max 5):');
end

% read the coefficents
a = [];
for i = 1:n
    fprintf('Value of array %d:', i);
    c = input('');
    a = [a c];
end
fprintf('\n');

% create and display function
fstr = poly2sym(a);
f = inline(fstr);
fprintf('Function = f(x) = %s\n', fstr);

% Ask operation
fprintf('Choose operation to be performed\n');
fprintf('1. Find one root of the function\n');
fprintf('2. Find extreme of the function\n');
choice = input('Your choice:');

initg = input("Your initial guess:");

if choice == 1
    root = fzero(f, initg);
    fprintf('Found one root of the function,');
    fprintf('which is %.6f', root);
else
    gstr = diff(fstr);
    g = inline(gstr);
    extreme = fzero(g, initg);
    fextreme = f(extreme);
    fprintf('Extreme of the function is ');
    fprintf('%.2f', fextreme);
end
```