+++
title = 'stress-strain analysis for ml'
date = 2024-04-18T03:36:00+07:00
draft = false
math = true
tags = ['stress-strain', 'elasticity', 'machine learning']
url = '2014'
authors = ['viridi', 'widayani']
+++
Short intro about stress-stress analysis for machine learning <!--more-->


## intro
Two important concepts that describe the internal forces and deformations of a solid material when it is subjected to external loads are stress and strain, where stress is the force per unit area that acts on a cross-section of the material, while strain is the relative change in length or angle of a segment of the material, and since both stress and strain are related by the material's properties, such as elasticity, plasticity, and fracture, different types of stress and strain can be defined depending on the direction and nature of the loading, such as normal, shear, axial, bending, torsional, and thermal [^carrick_2023]. However, since different materials can exhibit very different stress-strain behaviors depending on their composition, structure, and loading conditions, the relationship between stress and strain is not always straightforward [^xometryteam_2023]. Hooke's law, that provides unique relationship between stress and strain, can be used to predict the deformations given on a test material by varying stresses acted upon it and its advanced form that relates all strain components to all stress componen resulting 9&times;9 matrix is known as generalized Hook’s law [^kumar_2019].

While applying strain and measure resulted stress a typical stress-strain curve can be obtained, which has linear elastic, strain hardening, necking regions that are charecterized by yield streng, ultimate strength, fracture points [^zych_2022]. The common data obtained from measurement systems are points in stress-strain coordinates, which is raw data.

Since raw data is rarely in a format that is consumable by an ML (machine learning) model, it has to be transformed into features in process called feature engineering, where feature is data that is used as the input for ML models to make predictions [^stumpf_2024]. These features or variables are individual properties generated from a dataset and used as input to ML models [^zvornicanin_2024]. The variables can be directly used or must be processed first through feature selection, which is the method of reducing the input variable to ML model by using only relevant data and getting rid of noise in data [^menon_2024]. The resulted features can be directely the selected variables or might be function of several variables using basis expansion methods [^user29449_2020].

For the case of stress-strain analysis, ML can use directly stress-strain data or first extract feature form it, e.g. yield streng, ultimate strength, fracture points, then input them to the ML model. This post gives overview of various curves in brief and some features are proposed.


## graph
A typical stress-strain curve is as follow, where it is drawn in arbitrary unit on both axes.

{{< scatter 80 320 >}}
B_XLABEL Strain
B_YLABEL Stress
B_SLABEL point,data
B_PCOLOR #800,#f88
B_PRADII 4,0
B_LVISIB false,true
B_LCOLOR none,#f88

0,0
8.6,19.2
18.25,27
21,22.3

0.0,0
8.6,19.2
9.0,19.7
9.1,19.8
9.6,20
9.8,19.9
9.9,19.85
10.3,19.35
10.4,19.3
10.5,19.2
10.9,19.2
11,19.25
11.5,19.8
16,25.5
16.5,26
17,26.5
17.5,26.8
18,27
18.5,27
19,26.9
19.5,26.4
20,25.3
21,22.3
{{< /scatter >}}

Figure 1. Stress-strain curve with yield streng, ultimate strength, fracture points and linear elastic, strain hardening, necking regions. 

Width each the regions are not always the same for different materials. This information can be used in categorizing process.

Table 1. Points on stress-strain curve.
&nbsp;&nbsp; Point &nbsp;&nbsp; | &nbsp;&nbsp; Strain &nbsp;&nbsp; | &nbsp;&nbsp; Stress &nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; Name
:-: | :-: | :-: | :-
A | 0 | 0 | -
B | 8.6 | 19.2 | yield strength
C | 18.25 | 27 | ultimate strength
D | 21 | 22.3 | fracture

From points in Table 1 the three regions can be defined as shown in Table 2, wheere only first region is clearly defined, while the others require further criteria.

Table 2. Regions on stress-strain curve.
&nbsp;&nbsp; Region | &nbsp;&nbsp;  Left Point &nbsp;&nbsp; | &nbsp;&nbsp; Right point
:- | :-: | :-:
linear elastic | A | B
strain hardening | B | C
necking | C | D

Information provided in Tables 1 and 2 can be the initial features of common stress-strain data to be fed to a ML model.


## notes
[^carrick_2023]: Edward Carrick, "How do you keep up with the latest research and developments in solid mechanics?", Mechanical Analysis -- Linkedin, 9 Mar 2023, url https://www.linkedin.com/advice/3/how-do-you-keep-up-latest-research-developments [20240418].
[^kumar_2019]: P. Kumar, M. Mahanty, A. Chattopadhyay, "An Overview of Stress-Strain Analysis for Elasticity Equations", in Elasticity of Materials - Basic Principles and Design of Structures, IntechOpen, 30 Jan 2019, url http://dx.doi.org/10.5772/intechopen.82066.
[^menon_2024]: Kartik Menon, "Feature Selection In Machine Learning: All You Need to Know", Simplilearn Solutions, 15 Feb 2024, url https://www.simplilearn.com/tutorials/machine-learning-tutorial/feature-selection-in-machine-learning [20240418].
[^stumpf_2024]: Kevin Stumpf, "What Is a Feature Platform for Machine Learning?", Tecton, 11 Apr 2024, url https://www.tecton.ai/blog/what-is-a-feature-platform/ [20240418].
[^user29449_2020]: User 29449, "Combine two feature vectors for a correct input of a neural network", Artificial Intelligence Stack Exchange, 6 May 2020, url https://ai.stackexchange.com/a/20966/82482 [20240418].
[^xometryteam_2023]: Team Xometry, "Stress vs. Strain: What Are the Key Differences?", Xometry, 10 May 2023, url https://www.xometry.com/resources/materials/stress-vs-strain/ [20240418].
[^zvornicanin_2024]: Enes Zvornicanin, Grzegorz Piwowarek, "What Is Feature Importance in Machine Learning?", Baeldung, 18 Mar 2024, url https://www.baeldung.com/cs/ml-feature-importance [20240418].
[^zych_2022]: Brendan Zych, "Analyzing a Stress-Strain Curve", Indium Corporation, 29 Jul 2022, url https://www.indium.com/interns/analyzing-a-stress-strain-curve.php [2024018].
