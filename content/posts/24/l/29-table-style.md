+++
title = 'table Style'
date = '2024-12-25T08:22:47+07:00'
draft = false
tags = ['css']
authors = ['viridi']
math = true
url = '24l29'
+++
<!--more-->

## example

No | ID | user | Full Name
-: | :-: | :- | :-
1   | 0023 | youngjedi | Isaac Einstein 
934 | 9975 | seahorse  | Rajesh Schumacher
33  | 0303 | mystique  | Java Isomov


## steps
+ To get the result immediately, use \
`hugo server -D --environment development`.
+ To modify the style, edit \
`\assets\css\main.css`.


## new code
```css
/* Style for table */
table {
  /* No gaps between borders */
  border-collapse: collapse;
  /* No spacing between cells */
  border-spacing: 0;
}

table th {
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  padding: 8px;
  background-color: #f2f2f2;
}

table td {
  /* Padding top/bottom right/left */
  padding: 0.25em 0.5em;
}

table tr:last-child td {
  border-bottom: 1px solid #000;
}

table tr:nth-child(odd) {
  /* White for even rows */
  background-color: #ffffff;
}

table tr:nth-child(even) {
  /* Light gray for odd rows */
  background-color: #f2f2f2;
}
```


## previous code
```css
table {
  border-collapse: collapse; /* Ensures there are no gaps between borders */
  border-spacing: 0; /* Removes any spacing between cells */
}

table th {
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  padding: 8px;
  background-color: #f2f2f2;
}

table td {
  padding-right: 2em;
}

table tr:last-child td {
  border-bottom: 1px solid #000;
}

table tr:nth-child(odd) {
  background-color: #ffffff; /* White for even rows */
}

table tr:nth-child(even) {
  background-color: #f2f2f2; /* Light gray for odd rows */
}
```