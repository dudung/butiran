---
title: "st & sd for 3s"
date: 2023-10-12T05:41:00+07:00
authors: ['Sparisoma Viridi']
tags: ['rn6086']
draft: false
math: true
url: "0092"
---
{{< toc >}}


## idea
+ How to use system thinking and system dynamics for 3S concept?
  {{< mermaid >}}
  flowchart LR
    SG <--> SF <--> SC <--> SG
    SF(("Safety"))
    SC(("Security"))
    SG(("Safeguards"))
    style SF color:#fff, fill:#292, stroke:#040, stroke-width:2px, width:200px
    style SC color:#fff, fill:#229, stroke:#004, stroke-width:2px
    style SG color:#fff, fill:#922, stroke:#400, stroke-width:2px 
  {{< /mermaid >}}
+ It can be considered that there functions
  $$\tag{1}
  {\rm SF} = f({\rm SC}, {\rm SG}),
  $$
  $$\tag{2}
  {\rm SC} = g({\rm SG}, {\rm SF}),
  $$
  $$\tag{3}
  {\rm SG} = h({\rm SF}, {\rm SC}),
  $$
  where SF, SC, and SF stand for safety, security, safeguards, respectively.


## 3s concepts
+ The 3S relationship is important to protecting the public and environment as well as managing risks associated with loss of nuclear material as a function of its usefulness in constructing a weapon or sabotage within a facility
itself, which shoulod create a balance between safe peaceful use of nuclear energy and nuclear non-proliferation ([Hanks, 2013](https://www.nrc.gov/docs/ML1318/ML13189A006.pdf)).
+ The concepts of safety, security, and safeguards are all related to ensuring protection and minimizing risks, but they have distinct meanings and applications in various contexts, such as in technology, healthcare, and the military ([GPT-3.5, 2023](https://chat.openai.com/share/58893a0d-3e99-4faa-bcee-b94b49fa4632)).


  ### safety
  - Safety is a broad concept that refers to the condition of being free from harm, danger, or risk. It encompasses measures and practices designed to prevent accidents, injuries, or harm to people, property, or the environment.
  - Safety often involves proactive steps, risk assessments, and the implementation of safety procedures and guidelines.
  - Examples of safety measures include using seatbelts in cars, wearing protective gear in hazardous workplaces, and implementing safety protocols in laboratories or industrial settings.
  
  ### security
  - Security is a concept related to protecting assets, systems, information, or entities from unauthorized access, damage, or harm. It often involves safeguarding against intentional threats, such as theft, vandalism, cyberattacks, or espionage.
  - Security measures can be physical, like installing locks and security cameras, or digital, like using firewalls and encryption to protect data.
  - Security encompasses practices and technologies designed to maintain the confidentiality, integrity, and availability of resources, including personal information, data, and critical infrastructure.

  ### safeguards
  - Safeguards are protective measures or mechanisms put in place to prevent unwanted or undesirable outcomes, whether they relate to safety or security.
  - Safeguards can be proactive or reactive and often involve layers of defense to mitigate risks and vulnerabilities.
  - In the context of nuclear technology and materials, safeguards refer to measures implemented to prevent the proliferation of nuclear weapons. International agreements and organizations, such as the International Atomic Energy Agency (IAEA), play a crucial role in ensuring that nuclear materials are used for peaceful purposes and are not diverted for military applications.


## details
+ It can be modeled as follow.
  {{< mermaid >}}
  flowchart LR
    OP1 --"&#x2795;"--> RS
    OP2 --"(&#x2795;)"--> AC & TH
    Safety --"&#x2796;"--> OP1
    Security --"&#x2796;"--> OP1
    MP -..- AC & TH
    
    subgraph Safety
      direction LR
      AC --"harm"--> People
      AC --"damage"--> Property
      AC --"detoriate"--> Environment
    end
    subgraph Security
      direction LR
      TH --"steal"--> Assets
      TH --"intrude"--> Systems
      TH --"spy"--> Information
    end
    subgraph Safeguards;
      MP
    end
    MP(["Measure<br>prevention"])
    AC[/"Accidents"/]
    style AC color:red, stroke:red, fill:#fcc
    TH[/"Threats"/]
    style TH color:red, stroke:red, fill:#fcc
    OP1(("Operation"))
    OP2(("Operation"))
    RS[/"Results"/]
    style RS color:green, stroke:green, fill:#cfc
    
  {{< /mermaid >}}
+ The verbs are so chosen to differ the actions between targets. This proposal might be subjective.
+ Loops:
  - Balancing loop 1: Operation $\rightarrow$ Accidents $\rightarrow$ Safety $\rightarrow$ Operation.
  - Balancing loop 2: Operation $\rightarrow$ Threats $\rightarrow$ Security $\rightarrow$ Operation.


## notes
+ [system thinking - system dynamics](../0088/)