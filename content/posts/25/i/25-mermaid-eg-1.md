+++
title = 'mermaid eg-1'
date = '2025-09-06T05:09:42+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = []
categories = ['mermaid']
url = '25i25'
+++

<!-- more -->

## result
{{< mermaid >}}
flowchart
  %% sg1
  subgraph " "
    direction TB
    B --> I1 --> I2 --> o1a
  end

  %% sg2
  subgraph " "
    direction TB
    o1b --> P1 --> P2 --> o2a
    o4b ---> P2
  end
  
  %% sg3
  subgraph " "
    direction TB
    o2b --> C1
    C1 --"Y"--> P3 --> o4a
    C1 --"N"---> o3a
  end
  
  %% sg4
  subgraph " "
    direction TB
    o3b --> O1 --> O2 --> E
  end
  
  %% elements
  B(["Begin"])
  I1[/"Input 1"/]
  I2[/"Input 2"/]
  P1["Process 1"]
  P2["Process 2"]
  P3["Process 3"]
  C1{"i < n"}
  O1[/"Output 1"/]
  O2[/"Output 2"/]
  E(["End"])
  
  %% connectors
  o1a(("1")):::conn
  o1b(("1")):::conn
  o2a(("2")):::conn
  o2b(("2")):::conn
  o3a(("3")):::conn
  o3b(("3")):::conn
  o4a(("4")):::conn
  o4b(("4")):::conn
  
  %% classes
  classDef conn fill:#484, stroke:#040, color:#fff
{{< /mermaid >}}


## code
```
flowchart
  %% sg1
  subgraph " "
    direction TB
    B --> I1 --> I2 --> o1a
  end

  %% sg2
  subgraph " "
    direction TB
    o1b --> P1 --> P2 --> o2a
    o4b ---> P2
  end
  
  %% sg3
  subgraph " "
    direction TB
    o2b --> C1
    C1 --"Y"--> P3 --> o4a
    C1 --"N"---> o3a
  end
  
  %% sg4
  subgraph " "
    direction TB
    o3b --> O1 --> O2 --> E
  end
  
  %% elements
  B(["Begin"])
  I1[/"Input 1"/]
  I2[/"Input 2"/]
  P1["Process 1"]
  P2["Process 2"]
  P3["Process 3"]
  C1{"i < n"}
  O1[/"Output 1"/]
  O2[/"Output 2"/]
  E(["End"])
  
  %% connectors
  o1a(("1")):::conn
  o1b(("1")):::conn
  o2a(("2")):::conn
  o2b(("2")):::conn
  o3a(("3")):::conn
  o3b(("3")):::conn
  o4a(("4")):::conn
  o4b(("4")):::conn
  
  %% classes
  classDef conn fill:#484, stroke:#040, color:#fff
```


## notes
+ There are still not any workarounds for styling a subgraph using classDef [^gpt-5_2025a].
+ Until now there is no available Mermaid colour scheme baked into Hugo/Chroma the way there are for mainstream languages [^gpt-5_2025b].
+ Some Mermaid keywords and values can be colored differently in `render-codeblock-mermaid.html` [^gpt-5_2025c].
+ This will used in other notes, e.g. [25i20](/butiran/25i20/).


## refs
[^gpt-5_2025a]: GPT-5, "Mermaid subgraph customization", ChatGPT, 6 Sep 2025, url https://chatgpt.com/share/68bb6665-cf38-800a-97b2-3c373cd586cc [20250906].
[^gpt-5_2025b]: GPT-5, "Show Mermaid code Hugo and no default color palette", ChatGPT, 6 Sep 2025, url https://chatgpt.com/share/68bb7531-df58-800a-8d82-aee7a4f58038 [20250906].
[^gpt-5_2025c]: GPT-5, "Mermaid code colour scheme in Hugo with render-codeblock", ChatGPT, 6 Sep 2025, url https://chatgpt.com/share/68bb8400-4fd4-800a-82ce-c50e15bee0b0 [20250906].
