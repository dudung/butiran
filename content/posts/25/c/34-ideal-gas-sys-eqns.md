+++
title = 'ideal gas sys eqns'
date = '2025-03-12T17:23:35+07:00'
draft = false
math = true
type = 'notes'
authors = ['viridi']
tags = ['ideal-gas']
categories = ['equations']
url = '25c34'
+++

{{< columns >}}
+ equation of state
+ isobaric process
+ isochoric process
+ isothermal process
+ adiabatic process
+ heat capacity ratio
+ work
+ heat
{{< /columns >}}

{{< columns >}}
+ change in internal energy
+ cycle
+ entropy
+ the 1st law of thermodynamics
+ the 2nd law of thermodynamics
{{< /columns >}}


<!--more-->

Equations used in an ideal gas system are listed here, but they might be not complete.


## equation of state
Ideal gas obeys equation of state

$$\tag{1}
PV = nRT,
$$

known as the ideal gas law [^britannica_2025], with $P$ is pressure, $V$ is volume, $n$ is number of moles of gas, $R$ is universal gas constant, and $T$ is temperature.


## isobaric process
An isobaric process is a thermodynamic process in which the pressure remains constant [^jones_2019], where the state variables are

$$\tag{2a}
P_j = P_i,
$$

$$\tag{2b}
V_j \ne V_i,
$$

$$\tag{2c}
T_j \ne T_i,
$$

in this process from state $i$ to state $j$ and

$$\tag{2d}
\frac{V_j}{T_j} = \frac{V_i}{T_i}
$$

is relation between the two states.


## isochoric process
An isochoric process is a thermodynamic process during which the volume of the closed system undergoing such a process remains constant, that is exemplified by the heating or the cooling of the contents of a sealed, inelastic, undeformable container [^wikipedia_2024]. There state variables are

$$\tag{3a}
P_j \ne P_i,
$$

$$\tag{3b}
V_j = V_i,
$$

$$\tag{3c}
T_j \ne T_i,
$$

in this process from state $i$ to state $j$ and

$$\tag{3d}
\frac{P_j}{T_j} = \frac{P_i}{T_i}
$$

is relation between the two states.


## isothermal process
An isothermal process is A thermodynamic process that occurs at constant temperature [^kamran_2021], where the state variables are

$$\tag{4a}
P_j \ne P_i,
$$

$$\tag{4b}
V_j \ne V_i,
$$

$$\tag{4c}
T_j = T_i,
$$

in this process from state $i$ to state $j$ and

$$\tag{4d}
P_j V_j = P_i V_i
$$

is relation between the two states.


## adiabatic process
An adiabatic process is one in which no heat is gained or lost by the system [^nave_2017], where the state variables

$$\tag{5a}
P_j \ne P_i,
$$

$$\tag{5b}
V_j \ne V_i,
$$

$$\tag{5c}
T_j \ne T_i,
$$

in this process from state $i$ to state $j$ and

$$\tag{5d}
P_j V_j^\gamma = P_i V_i^\gamma
$$

is relation between the two states.


## specific heat ratio
It is an additional variable in ideal gas system [^hall_2021]

$$\tag{6}
\gamma = \frac{C_P}{C_V},
$$

where at different temperature different gas has different value[^knowino_2010]. The $C_P$ and $C_V$ are molar heat capacity at constant pressure and volume, respetively.


## work
From state $i$ to state $j$ work done by is defined as [^gans_2012]

$$\tag{7a}
W_{i \rightarrow j} = \int_{V_i}^{V_j} p dV.
$$

For isobaric process Eqn (7a) simply turns into

$$\tag{7b}
W_{i \rightarrow j}^{\rm isobaric} = p \Delta V = p (V_j - V_i).
$$

For isochoric process it becomes

$$\tag{7c}
W_{i \rightarrow j}^{\rm isochoric} = 0,
$$

since $V_j = V_i$. Then, for isothermal process $P = \frac{NRT}{V}$ that makes Eqn (7a)

$$\tag{7d}
W_{i \rightarrow j}^{\rm isothermal} = \int_{V_i}^{V_j} \frac{nRT}{V} dV = nRT \ln \left(  \frac{V_j}{V_i} \right).
$$

Finally, for adiabatic process

$$\tag{7e}
W_{i \rightarrow j} = \int_{V_i}^{V_j} \frac{c}{V^\gamma} dV = \frac{c}{1-\gamma} (V_j^{1-\gamma} - V_i^{1-\gamma}).
$$

using $PV^\gamma = c$, where $c = nRTV^{\gamma - 1}$ is a constant. With help of Eqn (6) it can obtained that

$$\tag{7f}
1 - \gamma = 1 - \frac{C_P}{C_V} = \frac{C_V - C_P}{C_V} = - \frac{R}{C_V}.
$$

Substitute back the result to Eqn (7e) will produce

$$\tag{7g}
W_{i \rightarrow j} = \int_{V_i}^{V_j} \frac{c}{V^\gamma} dV = -\frac{c C_V}{R} (V_j^{1-\gamma} - V_i^{1-\gamma}).
$$

Then $c = nRT_i V_i^{\gamma - 1}$ at state $i$ and $c = nRT_j V_j^{\gamma - 1}$ at state $j$. Substitute both to Eqn (7g) will give

$$\tag{7h}
W_{i \rightarrow j}^{\rm adiabatic} =  -( n C_V T_j - n C_V T_i) = - n C_V (T_j - T_i) = - n C_V \Delta T.
$$


## heat
For process from state $i$ to state $j$, heat can be obtained from 

$$\tag{8a}
Q = \int n C(T) dT,
$$

where

$$\tag{8b}
C(T) = C_P,
$$

$$
Q = n C_P \Delta T
$$

for isobaric process,

$$\tag{8c}
C(T) = C_V,
$$

$$
Q = n C_V \Delta T
$$

for isochoric process,

$$\tag{8d}
C(T) = 0,
$$

$$
Q = 0
$$

for adiabatic process,

$$\tag{8e}
C(T) = C_{\rm eff} = \frac{1}{T} \frac{T}{V} \frac{dV}{dT},
$$

$$
Q = n R T \ln \frac{V_j}{V_i}
$$

for isothermal process, and

$$\tag{8f}
C(T) = C_{\rm process} = \frac{dQ}{ndT}
$$

for arbitrary process [^gpt4o_2025].


## change in internal energy
For any process, the change of internal energy is simply

$$\tag{9}
\Delta U = n C_V \Delta T,
$$

where $\Delta T = T_j - T_i$ with initial state $i$ and final state $j$.


## refs
[^britannica_2025]: The Editors of Encyclopaedia Britannica "ideal gas law", Encyclopedia Britannica, 12 Feb 2025, url https://www.britannica.com/science/ideal-gas-law [20250312].
[^gans_2012]: Paul J. Gans, "Calculating work done on an ideal gas", Physics Stack Exchange, 22 Oct 2012, url https://physics.stackexchange.com/a/41377/260719 [20250316].
[^gpt4o_2025]: GPT-4o, "Heat Transfer in Thermodynamics", Chat GPT, 17 Mar 2025, url https://chatgpt.com/share/67d751e3-e9a4-800a-8026-34fc108fda59 [20250317].
[^hall_2021]: Nancy Hall (ed), "Specific Heats", National Aeronautics and Space Administration, 13 May 2021, url https://www.grc.nasa.gov/www/k-12/airplane/specheat.html [20250313].
[^jones_2019]: Andrew Zimmerman Jones, "What Is Isobaric Process?", ThoughtCo, 30 Jun 2019, url https://www.thoughtco.com/p-2698984 [20250313].
[^kamran_2021]: Muhammad Kamran, "Thermodynamics for renewable energy systems", in Renewable Energy Conversion Systems, ch 2, p 21-51, 2021, url https://doi.org/10.1016/C2019-0-05410-6.
[^knowino_2010]: Knowino contributors, "Specific heat ratio", Knowino, an encyclopedia, 19 Dec 2010, url https://www.theochem.ru.nl/~pwormer/Knowino/knowino.org/w/index306d.html?oldid=4599 [20250313].
[^nave_2017]: Carl Rod Nave, "Adiabatic Process", HyperPhysics, 2017, url http://hyperphysics.phy-astr.gsu.edu/hbase/thermo/adiab.html [20250316].
[^wikipedia_2024]: Wikipedia contributors, "Isochoric process", Wikipedia, The Free Encyclopedia, 21 Jun 2024, url https://en.wikipedia.org/w/index.php?oldid=1230201749 [20250316].
