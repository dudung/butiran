+++
title = 'flowchart and mermaid'
date = 2024-04-06T01:15:00+07:00
draft = false
math = true
tags = ['flowchart', 'mermaid']
url = '2002'
authors = ['viridi']
+++
Short intro about fowchart and the use of Mermaid <!--more-->


## intro
The activity of using flowchart, or flowcharting, is a means of graphically stating ways of solving information handling problems, as people use the terms in working with computers[^chapin_1970]. It is a graphical representation of a process, where each process step is represented by a different symbol that contains a brief description of the process step [^karan_2023]. In process industry, flowcharts are used to indicate flow of the product during various stages or the process, where it is a combination of an outline process chart and the flow diagram, where each operation is represented by the appropriate shape of the equipment [^kiran_2019].

Flowchars are used in a wide variety of disciplines and fields, from software development to education to business and beyond, that might be used for document a process, identify potential breakdowns and bottlenecks in a process, visualize dependencies in a process, automate a manual process, visualize the flow of data, plan a project, identify the right person to own a task or project, troubleshoot technical issues, and make a decision that involves multiple variables [^ward_2021].

Remember the purpose when begin to use flow chart, since readability is probably the most important aspect of a flowchart,  where as the diagrammatic representation of a process, the flowchart aims to offer a visual description of a process to help us understand what is going on, but flowcharts can get a bit out of control and you can end up with something so complicated that it defeats the purpose of having one [^rila_2021].

Then how to create a flowchart? There are at least about 15 best software that can help you in creating flowcharts online and offline [^york_2024]. Not included on the list, there is also Mermaid. Mermaid is a powerful JavaScript library that can build a variety of charts and diagrams from a specialized flavor of Markdown, where one of them is flowchart [^elland_2023]. With Mermaid you have to code for creating flocharts. Rather than using traditional method to manually create flowcharts, there are several advantages in generating flowcharts as code, e.g. dynamic, editable, efficient, and quick to create [^hira_2023]. 


## types
Type of process flowcharts represent and their purpose determine their types as follow [^developer_2023], where the first four are the main types, while the last six are additional sepecific purposes types.

+ **Document flowchart**. These type is designed to show the existing controls over the document flow through the components of the system, e.g. various business units, and it is read from left to right.
+ **Data flowchart**. The controls governing data flows within the system and is used primarily to show the channels through which data is transmitted throughout the system, which focuses on channels of data transmission, rather than how control flow is represented as in previous type, are represented using this type of flowchart.
+ **System flowchart**. This type represent the flow of data to and through the main components of the system such as programs, storage media, data entry, processors, and communication networks.
+ **Program flowchart**. The controls placed internally in a program within a system are represented using this type of flowchart.
+ **Swimlane flowchart**. This type segments different functionalities into separate lanes, e.g. a swimlane diagram may be created with routes for the work processes performed by other organizational areas like human resources, operations, and accounting.
+ **Workflow flowchart**. In order to to document workflows that involve tasks, documents, and information in offices this type is used.
+ **Cross-functional flowcharts**. This type of flowchart is usually used to delineate who does what in a cross-functional team, since it represents who is responsible for ensuring that different functions are executed and when they are executed.
+ **Event-driven process chain flowchart**. To document or plan a business process, which is driven by event, this type of flowchart is used. 
+ **Specification and description language flowchart**. This type is used to brainstorm computer algorithms based on three basic components – system definition, block, and process, which illustrates the modeling language used to show how event-driven applications work in real-time, e.g. used in aviation, automotive, communication, and medical industries.
+ **Influence diagram**. It is a visual representations of decision problems, where the main purpose  is to outline critical elements like roadblocks or objectives to achieve at different points.

Only program flowchart is discussed further here.


## symbols
There are at least about 24 symbols used in flowchart [^ramuthi_2024], but only the first six are discussed here.


+ Oval, ellipse, rounded rectangle are for start and finish.
  {{< mermaid >}}
  flowchart TD
    A(["Begin"])
    B(["End"])
  {{< /mermaid >}}
  ```
  {{</* mermaid */>}}
  flowchart TD
    A(["Begin"])
    B(["End"])
  {{</* /mermaid */>}}
  ```
+ Rectangle is for process.
  {{< mermaid >}}
  flowchart TD
    P1["Calculate"]
    P2["Sort"]
  {{< /mermaid >}}
  ```
  {{</* mermaid */>}}
  flowchart TD
    P1["Calculate"]
    P2["Sort"]
  {{</* /mermaid */>}}
  ```
+ Trapezium is for input and output.
  {{< mermaid >}}
  flowchart TD
    I[/"Read"/]
    O[/"Display"/]
  {{< /mermaid >}}
  ```
  {{</* mermaid */>}}
  flowchart TD
    I[/"Read"/]
    O[/"Display"/]
  {{</* /mermaid */>}}
  ```
+ Diamond is for decision.
  {{< mermaid >}}
  flowchart TD
    \{"If x > 0"}
  {{< /mermaid >}}
  ```
  {{</* mermaid */>}}
  flowchart TD
    {"If x > 0"}
  {{</* /mermaid */>}}
  ```
+ Circle is for connector.
  {{< mermaid >}}
  flowchart TD
    \(("1"))
  {{< /mermaid >}}
  ```
  {{</* mermaid */>}}
  flowchart TD
    (("1"))
  {{</* /mermaid */>}}
  ```
+ Arrow is for flow direction.
  {{< mermaid >}}
  flowchart LR
    A ---> B
    A["&nbsp;"]
    B["&nbsp;"]
    style A fill:none, stroke-width:0;
    style B fill:none, stroke-width:0;
  {{< /mermaid >}}
  ```
  {{</* mermaid */>}}
  flowchart TD
    A ---> B
    A["&nbsp;"]
    B["&nbsp;"]
    style A fill:none, stroke-width:0;
    style B fill:none, stroke-width:0;
  {{</* /mermaid */>}}
  ```
  The arrow actually can not be drawn without origin and destination symbols. In order to show only the arrow, CSS is used to hide the symbols, and space is used as string to display.


## directions
Flowchart normally has top-bottom direction, but with current Mermaid version it can has top-bottom (TB), left-right (LR), bottom-top (BT) directions, and right-left (RL).

+ TB direction
  {{< mermaid >}}
  flowchart TB
    A --> B
  {{< /mermaid >}}
  ```
    {{</* mermaid */>}}
    flowchart TB
      A --> B
    {{</* /mermaid */>}}
  ```
+ LR direction
  {{< mermaid >}}
  flowchart LR
    A --> B
  {{< /mermaid >}}
  ```
  {{</* mermaid */>}}
  flowchart LR
    A --> B
  {{</* /mermaid */>}}
  ```
+ BT direction
  {{< mermaid >}}
  flowchart BT
    A --> B
  {{< /mermaid >}}
  ```
    {{</* mermaid /*>}}
  flowchart BT
    A --> B
  {{</* /mermaid */>}}
  ```
+ RL direction
  {{< mermaid >}}
  flowchart RL
    A --> B
  {{< /mermaid >}}
  ```
    {{</* mermaid */>}}
  flowchart RL
    A --> B
  {{</* /mermaid */>}}
  ```

Using this direction feature, you can change direction of the flowchart without changing the whole code but only the option.


## nodes id
Following are some flowchart examples without and with the use of nodes id

+ Without nodes ide
  {{< mermaid >}}
  flowchart LR
    First --> Second --> Third
  {{< /mermaid >}}
  ```
  {{</* mermaid */>}}
  flowchart LR
    First --> Second --> Third
  {{</* /mermaid */>}}
  ```
  This approach does not accomodate when the text containing spaces.
+ With nodes id 
  {{< mermaid >}}
  flowchart LR
    A(("First step"))
    B["Second step"]
    C[/"Third step"/]
    A --> B --> C
  {{< /mermaid >}}
  ```
  {{</* mermaid */>}}
  flowchart LR
    A --> B --> C
    A(("First step"))
    B["Second step"]
    C[/"Third step"/]
  {{</* /mermaid */>}}
  ```
  Nodes id are A, B, and C. While declaring a node, a node id can be defined. Later, to create flow direction between two node, simple use nodes id of related nodes and an arrow connecting them.
+ Use style on node id
  {{< mermaid >}}
  flowchart LR
    A(("Rot"))
    B["Blau"]
    A --> B
    style A color: white, fill: red, stroke: blue, stroke-width: 4px;
    style B color: white, fill: blue, stroke: red, stroke-width: 4px;
  {{< /mermaid >}}
  ```
  {{</* mermaid */>}}
  flowchart LR
    A(("Rot"))
    B["Blau"]
    A --> B
    style A color: white, fill: red, stroke: blue, stroke-width: 4px;
    style B color: white, fill: blue, stroke: red, stroke-width: 4px;
  {{</* /mermaid */>}}
  ```
  It can be seen that fill color, stroke color and widhth, and also text color can be customized using CSS-like format. Notice that `color` keyword must be put before others or it will not work.


## example
Following is a flowchart example in sorting numbers using bubble sort algorithm [^gfg_2023].

{{< mermaid >}}
flowchart TB
  B --> I --> Init1 --> o1 --> Init2 --> o2 --> C1
  C1 --"N"--> Incj
  C1 --"Y"--> Swap --> Incj --> Cj --"Y"--> o2
  Cj --"N"--> Inci --> Ci --"Y"--> o1
  Ci --"N"--> O --> E
  Ci{"i &lt; n"}
  Cj{"j &le; n"}
  Swap["Swap x<sub>i</sub>, x<sub>j</sub>"]
  Inci["i = i+1"]
  Incj["j = j+1"]
  C1{"x<sub>i</sub> &gt; x<sub>j</sub>"}
  o1(("1"))
  o2(("2"))
  Init1["i = 1"]
  Init2["j = i + 1"]
  O[/"x<sub>1</sub>, x<sub>2</sub>, &hellip;, x<sub>n</sub>"/]
  I[/"x<sub>1</sub>, x<sub>2</sub>, &hellip;, x<sub>n</sub>"/]
  B(["Begin"])
  E(["End"])
{{< /mermaid >}}

Above flowchart is produced using following Mermaid code

```mermaid
{{</* mermaid */>}}
flowchart TB
  B --> I --> Init1 --> o1 --> Init2 --> o2 --> C1
  C1 --"N"--> Incj
  C1 --"Y"--> Swap --> Incj --> Cj --"Y"--> o2
  Cj --"N"--> Inci --> Ci --"Y"--> o1
  Ci --"N"--> O --> E
  Ci{"i &lt; n"}
  Cj{"j &le; n"}
  Swap["Swap x<sub>i</sub>, x<sub>j</sub>"]
  Inci["i = i+1"]
  Incj["j = j+1"]
  C1{"x<sub>i</sub> &gt; x<sub>j</sub>"}
  o1(("1"))
  o2(("2"))
  Init1["i = 1"]
  Init2["j = i + 1"]
  O[/"x<sub>1</sub>, x<sub>2</sub>, &hellip;, x<sub>n</sub>"/]
  I[/"x<sub>1</sub>, x<sub>2</sub>, &hellip;, x<sub>n</sub>"/]
  B(["Begin"])
  E(["End"])
{{</* /mermaid */>}}
```

Let us see what it would be when use LR option for flowchart direction.

{{< mermaid >}}
flowchart LR
  B --> I --> Init1 --> o1 --> Init2 --> o2 --> C1
  C1 --"N"--> Incj
  C1 --"Y"--> Swap --> Incj --> Cj --"Y"--> o2
  Cj --"N"--> Inci --> Ci --"Y"--> o1
  Ci --"N"--> O --> E
  Ci{"i &lt; n"}
  Cj{"j &le; n"}
  Swap["Swap x<sub>i</sub>, x<sub>j</sub>"]
  Inci["i = i+1"]
  Incj["j = j+1"]
  C1{"x<sub>i</sub> &gt; x<sub>j</sub>"}
  o1(("1"))
  o2(("2"))
  Init1["i = 1"]
  Init2["j = i + 1"]
  O[/"x<sub>1</sub>, x<sub>2</sub>, &hellip;, x<sub>n</sub>"/]
  I[/"x<sub>1</sub>, x<sub>2</sub>, &hellip;, x<sub>n</sub>"/]
  B(["Begin"])
  E(["End"])
{{< /mermaid >}}

It seems that flowchart with TB direction is better than with LR direction, even for the first user still requires to scroll the browser while reading it.

Previous flowchart is used to create Python code, where one of its implementation is as follow

```python
y = [9, 1, 3, 8, 2, 5, 4, 7, 6, 8, 0]
x = y.copy()

n = len(y)
for i in range(0, n-1):
  for j in range(i, n):
    if x[i] > x[j]:
      x[i], x[j] = x[j], x[i]

print('original:', y)
print('sorted-a:', x)
```

with

```batch
original: [9, 1, 3, 8, 2, 5, 4, 7, 6, 8, 0]
sorted-a: [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9]
```

as the result. The code  is available on OneCompiler [429gbrbse](https://onecompiler.com/python/429gbrbse). The term `sorted-a` means sorted in ascending order.

Notice that the code is simpler compared to the flowchart. For simple example as bubble sort algorithm, it can be understood without the help of flowchart, but for complex example, it is advisable to use flowchart before writing the code.


## notes
[^chapin_1970]: Ned Chapin, "Flowcharting With the ANSI Standard: A Tutorial", Computer Surveys, vol 2, no 2, p 119-146, url https://doi.org/10.1145/356566.356570.
[^developer_2023]: Web Developer, "A Comprehensive Guide to Flowchart Symbols and Notations for Process Workflows", Cavintek, 22 Nov 2023, url https://www.cflowapps.com/flowchart-symbols/ [20240406].
[^elland_2023]: Matt Eland, "How to Make Flowcharts with Mermaid.js", The New Dev's Guide -- Medium, 16 Apr 2023, url https://medium.com/p/799c1d07ec6a [20240406].
[^gfg_2023]: GfG, "Bubble Sort – Data Structure and Algorithm Tutorials", GeeksforGeeks, 21 Nov 2023, url https://www.geeksforgeeks.org/bubble-sort/ [20240406].
[^hira_2023]: Zira Hira, "How to Create Diagrams as Code with Mermaid, GitHub, and Visual Studio Code", freeCodeCamp, 6 Sep 2023, url https://www.freecodecamp.org/news/diagrams-as-code-with-mermaid-github-and-vs-code/ [20240406].
[^karan_2023]: Rashmi Karan, "What is a Flowchart? (With Examples)", Shiksha Online, 28 Sep 2023, url https://www.shiksha.com/online-courses/articles/flowcharts-with-examples/ [20240406].
[^kiran_2019]: D. R. Kiran,  "Product and process development", in Production Planning and Control, ch 16, p 223–246, 2019, url https://doi.org/10.1016/b978-0-12-818364-9.00016-0.
[^ramuthi_2024]: Danesh Ramuthi, "Flowchart Symbols and Meaning: A Complete Guide (2024)", Venngage, 29 Feb 2024, url https://venngage.com/blog/flowchart-symbols/ [20240406].
[^rila_2021]: Luciano Rila, "What is the significance of a flowchart?", University College London, 2 Jun 2021, url https://www.ucl.ac.uk/culture-online/case-studies/2021/jun/what-significance-flowchart [20240406].
[^ward_2021]: Shauna Ward, "What is a flowchart? — tips, examples, and templates", Mural, 19 Mar 2021, url https://www.mural.co/blog/flowcharts [20240406].
[^york_2024]: Alex York, "15 Best Flowchart Software Tools in 2024", ClickUp, 6 Mar 2024, url https://clickup.com/blog/flowchart-software/ [20240406].
