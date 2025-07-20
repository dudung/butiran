+++
title = 'grain conf viewer'
date = '2025-07-20T05:28:23+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = []
categories = []
url = '25g57'
+++

<!-- more -->

## notes
+ The term is chosen grain configuration instead of particle configuration, since it gives more nuance in the domain of granular physics [^gpt-4o_2025a].
+ As initial format several properties are considered, which are particle ID and types, x, y, z positions, fill and stroke colors [^gpt-4o_2025b].
+ The grain configuration viewer will be designed in a Hugo post using a shortcode with inline JS, but later will be ported to external JS for the simulation [^gpt-4o_2025c].
+ The use of frontmatter in enhancing CSV is advisable from a discussion[^gpt-4o_2025f].
+ Version number starts from 0.1 since it is not stable [^gpt-4o_2025e].
+ The shortcode will placed under `viewer` folder for future development of other viewer [^gpt-4o_2025f].
+ Progress of this note is tracked daily in [25g56](/butiran/25g56/) note.


## inputs
+ Metadata and content of version 0.1 is as follow.
  ```csv
  ---
  version: 0.1
  description: Simple grain configuration
  columns: id type x y z d fill stroke
  units: - - mm mm mm mm - -
  ---
  000 A 1.00 1.00 0.00 0.1 #fee #a00
  001 B 2.00 1.00 0.00 0.2 #efe #0a0
  002 C 3.00 1.00 0.00 0.3 #eef #00a
  003 D 3.00 2.00 0.00 0.4 #ffe #aa0
  004 E 1.00 2.00 0.00 0.5 #eff #0aa
  005 F 1.00 3.00 0.00 0.6 #fef #a0a
  006 G 2.00 3.00 0.00 0.7 #fff #aaa
  007 H 3.00 3.00 0.00 0.8 #888 #000
  ```

## results
{{< viewer/grain >}}
---
version: 0.1
description: Simple grain configuration
columns: id type x y z d fill stroke
units: - - mm mm mm mm - -
---
000 A 1.00 1.00 0.00 0.1 #fee #a00
001 B 2.00 1.00 0.00 0.2 #efe #0a0
002 C 3.00 1.00 0.00 0.3 #eef #00a
003 D 3.00 2.00 0.00 0.4 #ffe #aa0
004 E 1.00 2.00 0.00 0.5 #eff #0aa
005 F 1.00 3.00 0.00 0.6 #fef #a0a
006 G 2.00 3.00 0.00 0.7 #fff #aaa
007 H 3.00 3.00 0.00 0.8 #888 #000
{{< /viewer/grain >}}


## refs
[^gpt-4o_2025a]: GPT-4o, "On the Terminology of Particle and Grain Configurations in Computational Materials Simulations", ChatGPT, 20 Jul 2025, url https://chatgpt.com/share/687c1d67-0180-800a-ad74-c53c7feaf6ef [20250720].
[^gpt-4o_2025b]: GPT-4o, "Designing a CSV-Based Format for 2D Granular Particle Visualization", ChatGPT, 20 Jul 2025, url https://chatgpt.com/share/687c212a-09c8-800a-a2fa-3275c832ca9d [20250720].
[^gpt-4o_2025c]: GPT-4o, "Integrating Simulation Visuals in Scientific Blogging with Hugo and JavaScript", ChatGPT, 20 Jul 2025, url https://chatgpt.com/share/687c23bd-baf8-800a-b924-0b2c5677a03c [20250720].
[^gpt-4o_2025d]: GPT-4o, "Designing a Flexible CSV Format with Frontmatter for Grain Configuration Data", ChatGPT, 20 Jul 2025, url https://chatgpt.com/share/687c5bdd-00e8-800a-8973-d7507c433f73 [20250720].
[^gpt-4o_2025e]: GPT-4o, "Versioning Strategy and Compatibility Guidelines for Particle Configuration Formats", ChatGPT, 20 Jul 2025, url https://chatgpt.com/share/687c5dea-ea2c-800a-b7f1-2d0a511e7f02 [20250720].
[^gpt-4o_2025f]: GPT-40, "Viewer Shortcode Design: Specific vs Multi-Type Approaches in Hugo", ChatGPT, 20 Jul 2025, url https://chatgpt.com/share/687c6a33-2aa4-800a-a25e-d3fa550754c2 [20250720].
