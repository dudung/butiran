+++
title = 'equivalent strain'
date = '2025-01-31T06:01:09+07:00'
draft = false
type = 'slides'
authors = ['viridi']
tags = ['ansys', 'strain']
url = '25a69'
math = true
[ref]
author = 'Dragana Jandric'
title = 'Mechanical Strain in Deformation Analysis – Lesson 5: Evaluating Strain Results'
source = 'Ansys'
created = '23 May 2020'
updated = ''
url = 'https://innovationspace.ansys.com/courses/wp-content/uploads/sites/5/2020/05/Lesson-5-Evaluate-Strain-Results.pdf'
accessed = '20250131'
+++
<!--mode-->

+ It is a scalar representation of strain tensor
{{< fsize "1" >}}
$$\tag{1}
\begin{array}{rcl}
\displaystyle \varepsilon_{\rm eqv} & = & \displaystyle  \frac{1}{1 + \nu} \left[ \frac{1}{2} (\varepsilon _{xx} - \varepsilon _{yy})^2 + \frac{1}{2} (\varepsilon _{yy} - \varepsilon _{zz})^2  \right. \newline \newline
& & \displaystyle \left.
+\frac{1}{2} (\varepsilon _{zz} - \varepsilon _{xx})^2 + 3(\varepsilon _{xy}^2 + \varepsilon _{yz}^2 + \varepsilon _{zx}^2) \right] ^{1/2}
\end{array}
$$
{{< /fsize >}}
and a straightforward variable reporting strain results over a body.