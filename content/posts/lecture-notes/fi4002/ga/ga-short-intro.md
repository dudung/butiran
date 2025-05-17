---
title: "ga short intro"
date: 2023-09-23T19:07:00+07:00
authors: ['Sparisoma Viridi']
tags: ['fi4002']
draft: false
math: true
url: "0062"
---
{{< toc >}}


## introduction
+ Genetic algorithm or GA is an algorithm for optimization, which can avoid to land on local optimum in while searching global otimum ([Binus, 2018](https://socs.binus.ac.id/2018/12/08/genetic-algorithm/)).
+ This heuristic search is inspired by Charles Darwin's theory of natural evolution, which reflects the process of natural selection where the fittest individuals are selected for reproduction in order to produce offspring of the next generation ([Mallawaarachchi, 2017](https://towardsdatascience.com/introduction-to-genetic-algorithms-including-example-code-e396e98d8bf3)).
+ It is intelligent exploitation of random search provided with historical data to direct the search into the region of better performance in solution space, where it commonly used to generate high-quality solutions for optimization problems and seach problems ([overide, 2023](https://www.geeksforgeeks.org/genetic-algorithms/)).


## applications
+ One of the major applicaton of GA is the travelling salesman problem and this algorithm is also widely used in the field of robotics ([Pedamkar, 2023](https://www.educba.com/what-is-genetic-algorithm/)).
+ At least there are 10 real-life applications of GA, which are traveling salesman problem, vehicle routing problem, financial markets, manufacturing system, mechanical engineering design, data clustering and mining, image processing, neural networks, wireless sensor networks, and medical science ([Verma, 2022](https://analyticsindiamag.com/10-real-life-applications-of-genetic-optimization/))
+ There is also a list of applications of GA categorized according to the fields, e.g. i) natural sciences, mathematics, and computer science, ii) earth sciences, finance and economics, iii) social sciences, iv) industry, management, and engineering, v) biological science and bioinformatics, vi) general applications, vii) physics, and viii) others ([Wikipedia, 2023](https://en.wikipedia.org/w/index.php?oldid=1173413907)).


## terminology
+ There are some terms used in GA ([Muthee, 2021](https://www.section.io/engineering-education/the-basics-of-genetic-algorithms-in-ml/)), which are
  - Population, which is a subset of all probable solutions that can solve the given problem,
  - Chromosome, which is one of the solution in the population,
  - Gene, which is an element in a chromosome,
  - Allele, which is the value give to a gene in a specific chromosome,
  - Fitness function, that maps the solution to its suitability in solving the problem,
  - Genetic operators, which are used to change the genetic composition of next generation from information of previous generation.
+ Other term is individual, which is encoded in a chromosome ([Ray, 2016](https://stackoverflow.com/a/39740926/9475509)).


## schematic
+ Hierarchical relations between allele, gene, chromosome, and population can be illustrated as follow

{{< html >}}
<style>
:root {
  --gene-background: darkgreen;
  --gene-background-dark: #efe;
  --gene-color: white;
  --gene-color-dark: green;
  --hg-allele: magenta;
  --hg-allele-dark: red;
  --hg-gene: darkcyan;
  --hg-gene-dark: cyan;
  --hg-chromosome: red;
  --hg-chromosome-dark: darkred;
}

body.colorscheme-dark div.gene{
  background: var(--gene-background-dark);
  color: var(--gene-color-dark);
}

body.colorscheme-light div.hg-allele {
  color: var(--hg-allele);
}

body.colorscheme-dark div.hg-allele {
  color: var(--hg-allele-dark);
}

body.colorscheme-light div.hg-gene {
  background: var(--hg-gene);
}

body.colorscheme-dark div.hg-gene {
  background: var(--hg-gene-dark);
}

body.colorscheme-light div.hg-chromosome {
  background: var(--hg-chromosome);
  padding: 3px;
}

body.colorscheme-dark div.hg-chromosome {
  background: var(--hg-chromosome-dark);
  border: 1px solid var(--hg-chromosome);
  padding: 0px;
}


.gene {
  width: 26px;
  height: 26px;
  display: inline-block;
  font-size: 100%;
  font-family: Arial;
  font-weight: bold;
  background: var(--gene-background);
  color: var(--gene-color);
}

.chromosome {
  width: 250px;
  height: 34px;
  border: 1px solid currentcolor;
  margin: 2px;
  display:inline-block;
  font-size: 100%;
  padding: 2px;
}

.population {
  width: 276px;
  height: 300px;
  border: 1px solid currentcolor;
  display:inline-block;
  padding: 10px;
}
</style>
<div class="population">
   &nbsp; &nbsp; Allele &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gene 
  <div class="chromosome">
    <div class="gene">1</div>
    <div class="gene hg-allele">1</div>
    <div class="gene hg-allele">0</div>
    <div class="gene">0</div>
    <div class="gene">0</div>
    <div class="gene">1</div>
    <div class="gene hg-gene">0</div>
    <div class="gene">0</div>
  </div>
  <br />
  <div class="chromosome">
    <div class="gene">0</div>
    <div class="gene">0</div>
    <div class="gene">0</div>
    <div class="gene">1</div>
    <div class="gene">0</div>
    <div class="gene">0</div>
    <div class="gene">1</div>
    <div class="gene">1</div>
  </div>
  <br />
  <div class="chromosome hg-chromosome">
    <div class="gene">0</div>
    <div class="gene">0</div>
    <div class="gene">1</div>
    <div class="gene">1</div>
    <div class="gene">0</div>
    <div class="gene">0</div>
    <div class="gene">0</div>
    <div class="gene">0</div>
  </div>
  <br />
  Chromosome
  <br />
  &middot; &middot; &middot;
  <br />
  <br />
  <div class="chromosome">
    <div class="gene">0</div>
    <div class="gene">1</div>
    <div class="gene">0</div>
    <div class="gene">1</div>
    <div class="gene">0</div>
    <div class="gene">1</div>
    <div class="gene">1</div>
    <div class="gene">1</div>
  </div>
</div>
<br /> Population
{{< /html >}}

+ Notice that in this case allele has only two possible values, which are 0 and 1.


## chromosome
+ Each chromosome has two representation ([Gad, 2018](https://towardsdatascience.com/introduction-to-optimization-with-genetic-algorithm-2f5001d9964b))
  - genotype, which is the set of genes representing the chromosome,
  - fenotype, which is the actual physical representation of the chromosome.
+ Solution in phenotype space or actual solution space is encoded to solution in genotype space or computational space, and it is decoded back in opposite direction ([Tutorials Point, 2023](https://www.tutorialspoint.com/genetic_algorithms/genetic_algorithms_fundamentals.htm)).

{{< mermaid >}}
flowchart
  subgraph I["Individual"]
    direction LR
    G --"decoding"---> F
    F --"encoding"---> G
    F(["Phenotype space<br>(actual solution space)<br><br>a solution"])
    G(["Genotype space<br>(computational space)<br><br>11001010"])
  end
  style I rx:50, ry:50;
{{< /mermaid >}}


## flowchart
+ How GA works can be simplified as follow ([Sharma, 2022](https://vidyasheela.com/post/gentle-introduction-to-genetic-algorithm))

{{< mermaid >}}
flowchart TB
  B --> PI --> FC --> o1a
  o1b --> SC
  SC --"N"--> S --> o2a
  SC --"Y"--> SR --> E
  o2b --> GO --> o3a
  C -.- M
  o3b --> FC
  FC["Fitness<br>calculation"]
  SC{"Stop<br>criteria"}
  B(["Begin"])
  E(["End"])
  o1a(("1"))
  o1b(("1"))
  o2a(("2"))
  o2b(("2"))
  o3a(("3"))
  o3b(("3"))
  S["Selection"]
  subgraph PI["Population initialization"]
    direction TB
    FS --"encoding"--> GS
    FS(["Phenotype space<br>e.g. 1st route,<br>2nd route, .."])
    GS(["Genotype space<br>e.g. 1928564370",<br>1234056789, ..])
  end
  subgraph GO["Genetic operations"]
    direction LR
    C["Crossover"]
    M["Mutation"]
  end
  subgraph SR["Show result"]
    direction TB
    GS2 --"decoding"--> FS2
    FS2(["Phenotype space<br>e.g. best route"])
    GS2(["Genotype space<br>e.g. 6438570192".])
  end
  style PI rx:20, ry:20;
  style GO rx:20, ry:20;
  style SR rx:20, ry:20;
{{< /mermaid >}}
+ Operators are used in encoding-decoding, selection, crossover and mutation.


## operators
There are four operator categories used in GA during the search process, which are ([Katoch et al., 2021](https://doi.org/10.1007/s11042-020-10139-6))
+ Encoding: binary, octal, hexadecimal, permutation, value, tree;
+ Selection: roulette wheel, rank, tournament, Boltzmann, stochastic unversal;
+ Crossover: single point, k-point, uniform, partially mapped, order, precedence preserving, shuffle, reduced surrogate, cycle;
+ Mutation: displacement, inversion, scramble, bit flipping, reversing.


## encoding
+ There are some encoding techniques in Genetic Algorithm, e.g. binary, value, and order ([Garg, 2021](https://medium.com/geekculture/encoding-techniques-in-genetic-algorithm-371bccbe4bf7)).
+ There encoding schemes in Genetic Algorithm accompanied with the analysis ([Kumar, 2013](https://garph.co.uk/ijarie/mar2013/1.pdf)).
+ Different problem may require different encoding ([Samanta, 2016](https://cse.iitkgp.ac.in/~dsamanta/courses/archive/sca/Slides/SCA%20GA-03.pdf)).
+ A proper genetic encoding will enable an efficient computational implementation ([Gaggero, 2020](https://www.hindawi.com/journals/mpe/2020/1203248/)).


## codes
+ Optimization of sum of square $x$ using roulette selection, single point crossover, and mutation is available in Python ([Shirol & Iriondo, 2021](https://pub.towardsai.net/genetic-algorithm-ga-introduction-with-example-code-e59f9bc58eaf)).
+ Modification of string to match target string using crossover and mutation is available in C++ and Python ([overide, 2023](https://www.geeksforgeeks.org/genetic-algorithms/)).
+ Maximazing array to make all elements one and a continues function is available in Python ([Brownlee, 2021](https://machinelearningmastery.com/simple-genetic-algorithm-from-scratch-in-python/))
+ Implementation Traveling salesman problem is available in JavaScript ([Doglio, 2023](https://blog.bitsrc.io/javascript-meets-genetics-how-to-create-genetic-algorithms-ab7796e01280)).
+ Application of GA for particles driving themselves around a track is available in JavaScript ([Garrigan, 2021](https://dev.to/lukegarrigan/genetic-algorithms-in-javascript-mc3)).
+ GA for population whose target is to type a certain string is available in JavaScript ([This Dot, 2019](https://www.thisdot.co/blog/quick-intro-to-genetic-algorithms-with-a-javascript-example/)).
