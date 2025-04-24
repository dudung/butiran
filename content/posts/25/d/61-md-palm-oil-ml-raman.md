+++
title = 'md palm-oil ml-raman'
date = '2025-04-24T20:04:56+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = ['md', 'ml', 'raman']
categories = ['res']
url = '25d61'
+++

<!-- more -->

+ `24-apr-2025` [`q2uhp`](https://osf.io/q2uhp) Initial discussion on ui for exhibition in oct-2025.


## elements
+ Hardware is portable Raman.
+ Data acquisition is YSW-5001 Spectral Analysis Software [^yixist_2024].
+ Data processing is Contrastive Spectra Matching program [^li_2022a] with available dataset [^li_2022b] according to a published work [^li_2022c], which is conducted by W team.
+ Data visualization is UI by HZH team [^hzh_2025].

{{< mermaid >}}
flowchart LR
S --> R --> P --> U
S(["Sample"])
R(["Portable Raman"])
P(["Data processing"])
U(["UI"])
{{< /mermaid >}}

Fig 1. Worflow design on 24-apr-2025.


## refs
[^hzh_2025]: Hilman, Zulham, Hermanto, "Initial discussion on ui design", Zoom, 24 Apr 2025, url https://itb-ac-id.zoom.us/j/99568317150 [20250424].
[^li_2022a]: Bo Li, "Contrastive spectra matching", GitHub, 25 Feb 2022, url[https://github.com/lyn1874/raman_spectra_matching_with_contrastive_learning](https://github.com/lyn1874/raman_spectra_matching_with_contrastive_learning/tree/676306d9ccf95987b7dbf1afbba029600c467696)
[^li_2022b]: Bo Li, Mikkel Nørgaard Schmidt, Tommy Sonne Alstrøm, "Datasets for replicating the paper 'Raman Spectrum Matching with Contrastive Representation Learning'", DTU Data, 4 Jul 2022, url https://doi.org/10.11583/DTU.20222331.v1.
[^li_2022c]: Bo Li, Mikkel N. Schmidt, Tommy S. Alstrøm, "Raman spectrum matching with contrastive representation learning", Analyst, vol 147, no 10, p 2238-2246, url http://dx.doi.org/10.1039/D2AN00403H.
[^yixist_2024]: -, "YSW-5001 Spectral Analysis Software", YIXIST Technology, 2024, url https://www.yixist.com/ysw-5001-spectral-analysis-software/ [20250424].