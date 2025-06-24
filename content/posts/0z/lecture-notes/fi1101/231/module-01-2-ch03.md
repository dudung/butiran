---
title: "m01-2: vectors"
date: 2023-08-19T20:14:00+07:00
authors: ['Alexander Iskandar', 'Sparisoma Viridi']
tags: ['fi1101']
draft: false
math: true
url: "0013"
---
Copyright © 2018 John Wiley & Sons, Inc. and primarily advanced by Prof. A. Iskandar[.](https://drive.google.com/drive/folders/1Q3BrFUVQ5Sseneaz2XDNbN8ByFQO6U9u)


## 3-1 Vectors and Their Components (1 of 15)
Learning Objectives
+ 3.01 Add vectors by drawing them in head-to-tail arrangements, applying the commutative and associative laws.
+ 3.02 Subtract a vector from a second one.
+ 3.03 Calculate the components of a vector on a given coordinate system, showing them in a drawing.
+ 3.04 Given the components of a vector, draw the vector and determine its magnitude and orientation.
+ 3.05 Convert angle measures between degrees and radians.


## 3-1 Vectors and Their Components (2 of 15)
+ Physics deals with quantities that have both size and direction
+ A vector is a mathematical object with size and direction
+ A vector quantity is a quantity that can be represented by a vector
  - Examples: position, velocity, acceleration
  - Vectors have their own rules for manipulation
+ A scalar is a quantity that does not have a direction
  - Examples: time, temperature, energy, mass
  - Scalars are manipulated with ordinary algebra


## 3-1 Vectors and Their Components (3 of 15)
+ The simplest example is a displacement vector
+ If a particle changes position from A to B, we represent this by a vector arrow pointing from A to B.

> Gambar (a) tiga vector A --> B, A' --> B' dan A" --> B" dengan arah dan besar yang sama, akan tetapi posisi A, A', A" dan B, B', B" tidak berhimpit.

> Gambar (b) Vector A --> melalui path berbeda: langsung (merah), hurus s (kelabu biru), setengah lingkaran dan s (merah muda keputihan)

Figure 3-1

+ In (a) we see that all three arrows have the same magnitude and direction: they
are identical displacement vectors.
+ In (b) we see that all three paths correspond to the same displacement
vector. The vector tells us nothing about the actual path that was taken between A and B.


## 3-1 Vectors and Their Components (4 of 15)
+ The vector sum, or resultant
  - Is the result of performing vector addition
  - Represents the net displacement of two or more displacement vectors
$$\tag{3-1}
\vec{s} = \vec{a} + \vec{b},
$$
  - Can be added graphically as shown:
  

## 3-1 Vectors and Their Components (5 of 15)
> Gambar (a) Vector A --> B Actual path rounded zigzag, vector B --> C, vector A --> C Net displacement is vector sum.

> Gambar (b) $\vec{a}$, $\vec{b}$, $\vec{c}$, To add $\vec{a}$ and $\vec{b}$ drawm them head to tail. This is the resulting vector, from tail of $\vec{a}$ to head of $\vec{b}$.

Figure 3-2


## 3-1 Vectors and Their Components (6 of 15)
+ Vector addition is commutative
  - We can add vectors in any order
$$\tag{3-2}
\vec{a} + \vec{b} = \vec{b} + \vec{a}
$$ (commutative law).

> Gambar $\vec{a}$ ke kanan atas, disambung $\vec{b}$ ke kanan bawah; $\vec{b}$ ke kanan bawah, disambung $\vec{a}$ ke kanan atas; resultannya mendatar, Start --> Finish dengan catatan di atas garisnya $\vec{a} + \vec{b}$ dan di bawah garisnya $\vec{b} + \vec{a}$.

> Keterangan: You get the same vector result for either order of adding vectors.

Figure 3-3


## 3-1 Vectors and Their Components (7 of 15)
+ Vector addition is associative
  - We can group vector addition however we like
$$\tag{3-3}
(\vec{a} + \vec{b}) + \vec{c} = \vec{a} + (\vec{b} + \vec{c})
$$ (associative law).

> Keterangan: You get the same vector result for any order of adding vectors.

> Gambar kiri: resultan $\vec{a} + (\vec{b} + \vec{c})$ ke kanan bawah, $\vec{a}$ ke kanan atas, tegak ke bawah $\vec{b} + \vec{c}$.

> Gambar tengah: $\vec{a}$ kanan atas, $\vec{b}$ kanan bawah, keduanya bersatu dengan $\vec{a} + \vec{b}$, $\vec{c}$ ke kiri bawah, resultannya $\vec{a} + \vec{b} + \vec{c}$ ke kanan bawah, tegak ke atas $\vec{b} + \vec{c}$.

> Gambar kanan: ke kanan atas $\vec{a} + \vec{b}$, ke kiri bawah $\vec{c}$, dan resultannya $(\vec{a} + \vec{b}) + \vec{c}$.


## 3-1 Vectors and Their Components (8 of 15)
+ A negative sign reverses vector direction \
  $$\vec{b} + (-\ve{b}) = 0.
+ We use this to define vector substraction
$$\tag{3-4}
\vec{d} = \vec{a} - \vec{b} = \vec{a} + (-\vec{b})
$$

> Gambar vector $\vec{b}$ dan $-\vec{b}$, sejajar tetapi berlawanan arahnya.

Figure (3-5)

> Gmabar (a) vektor $\vec{a}$ dan $\vec{b}$, $-\vec{b}$.

> Gambar (b) vektor $\vec{a}$ dan $\vec{b}$, resultannya $\vec{d} = \vec{a} - \vec{b}$.

> Note head-to-tail arrangement for addition (of $\vec{a}$ with $-\vec{b}$).

Figure (3-6)


## 3-1 Vectors and Their Components (9 of 15)
+ These rules hold for all vectors, whether they represent displacement, velocity, etc.
+ Only vectors of the same kind can be added
  - (distance) + (distance) makes sense
  - (distance) + (velocity) does not


## 3-1 Vectors and Their Components (10 of 15)
Checkpoint 1 \
The magnitudes of displacements $\vec{a}$ and $\vec{b}$ are 3 m and 4 m, respectively, and $\vec{c} = \vec{a} + \vec{b}$. Considering various orientations of $\vec{a}$ and $\vec{b}$, what are (a) the maximum possible magnitude for
$\vec{c}$ and (b) the minimum possible magnitude?

Answer: \
(a) 3 m + 4 m = 7 m \
(b) 4 m − 3 m = 1 m


## 3-1 Vectors and Their Components (11 of 15)
+ Rather than using a graphical method, vectors can be added by components o A component is the projection of a vector on an axis
  - The process of finding components is called resolving the vector
+ The components of a vector can be positive or negative.
+ They are unchanged if the vector is shifted in any direction (but not rotated).

> Gambar vector $\vec{b} = (7 \ \hat{x} - 5 \ \hat{y}) \ {\rm m}$, digambarkan komponen-komponennya $b_x$ pada arah $x$ dan $b_y$ pada arah $y$, "This is the $x$ component of the vector.", "This is the $y$ component of the vector.", kedua sumbu dengan satuan m, grid kotak berukuran 1 m &times; 1 m.

Figure (3-8)


## 3-1 Vectors and Their Components (12 of 15)
+ Components in two dimensions can be found by:
$$\tag{3-5}
a_x = a \cos \theta, \ \ \ \ {\rm and} \ \ \ \ a_y = a \sin \theta,
$$
+ Where $θ$ is the angle the vector makes with the positive $x$ axis, and a is the vector length
+ The length and angle can also be found if the components
are known
$$\tag{3-6}
a = \sqrt{a_x^2 + a_y^2} \ \ \ \ {\rm and} \ \ \ \ \tan \theta = \frac{a_y}{a_x}
$$
+ Therefore, components fully define a vector


## 3-1 Vectors and Their Components (13 of 15)
+ In the three-dimensional case we need more components to specify a vector
  - $(a, \theta, \phi)$ or $(a_x, a_y, a_z)$


## 3-1 Vectors and Their Components (14 of 15)
Checkpoint 2 \
In the figure, which of the indicated methods for combining the $x$ and $y$ components of vector aԦ are proper to determine that vector?

> Gambar vektor-vektor selalu membentuk segitiga

> (a) $a_x < 0$, $a_y < 0$, vektro $a$ SE. (ax, ay from origin)

> (b) $a_x < 0$, $a_y < 0$, vektro $a$ NW. (ax, ay from origin)

> (c) $a_x < 0$, $a_y < 0$, vektro $a$ SW. (left then down)

> (d) $a_x < 0$, $a_y < 0$, vektro $a$ SW. (down then left)

> (e) $a_x < 0$, $a_y < 0$, vektro $a$ NE. (left then down)

> (e) $a_x < 0$, $a_y < 0$, vektro $a$ SW. (all from origin)

Answer: choices (c), (d), and (f) show the components properly arranged to form the vector


## 3-1 Vectors and Their Components (15 of 15)
+ Angles may be measured in degrees or radians
+ Recall that a full circle is 360 &deg;, or 2 $\pi$ rad
$$
40 \degree \ \frac{2\pi \ {\rm rad}}{360 \degree} = 0.70 \ {\rm rad}
$$
+ Know the three basic trigonometric functions

> Gambar segitiga sikus-siku tegak: Sudut di kaki kiri ($\theta$), bidang miring (Hypotenuse), alas (Leg adjacent to $\theta$), tinggi (Leg opposite $\theta$)

> $$
\sin \theta = \frac{\rm leg \ opposite \ \theta}{\rm hypotenuse}
$$

> $$
\cos \theta = \frac{\rm leg \ adjacent \ \theta}{\rm hypotenuse}
$$

> $$
\tan \theta = \frac{\rm leg \ opposite \ \theta}{\rm leg \ adjacent \ \theta}
$$

Figure (3-11)