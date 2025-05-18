+++
title = 'rev ml species id'
date = 2024-03-11T10:11:00+07:00
draft = false
tags = ['nt7091']
url = '1979'
+++
Machine learning for species identifikation: Short review for research proposal
<!--more-->

+ [rev_ml_species_id.pdf](https://osf.io/6fsy9)
  - Archino et al. (2021) 3
  - B et al. (2023) 11
  - Bartlett et al. (2022) 18
  - Gupta et al. (2021) 28

## archino_2021
### purposes
+ This study is designed for automated detection and identification of three habitat-forming brown macroalgae within the Island Bay to Houghton Bay study region (Taputeranga Marine Reserve) in Wellington.

### observations
+ It uses underwater towed video imagery and surveys a total of 32 towed video transects, 12 in January 2019 and additional 20 in August 2020.
+ The surveyed area was designed to include a broad variety of reef sites with variable macroalgal cover and species composition, rather than
overlapping for temporal comparisons.
+ This study was conducted along an approximately 1.7 km section of exposed coastline encompassing Island Bay and Houghton Bay, on the Wellington south coast.
+ Taxonomies levels: two species (Ecklonia radiata and Lessonia variegata), one genus (Carpophyllum spp.: Carpophyllum flexuosum and Carpophyllum maschalocarpum), and a grouping of all macroalgae present.

### results
+ This study successfully shows that ML is significantly faster than traditional video analysis and is a cost-effective approach to post-process video imagery, and that will improve as more data are collected.
+ The ML models performed well at detecting and distinguishing between closely related species (Lessonia and Ecklonia), highlighting the accurate fine-tuned performance of thesemodels.
+ NIWA's 'seaweedai' Python package for programming ML models is advanced and will require ongoing maintenance and updating.


## b_2023
### purpose
+ A image-based identification system of  bird species identification is

### results
+ Proposed system using Random Forest algorithm with more features achieves accuracy of 80%, higher than existing system with Support Vector Machine and Decision Tree algorithms which has only 69% of accuracy.


## bartlett_2022
### purposes
+ An artificial intelligence (AI) machine-learning species indentifier, that takes as input locality data and a small number of the morphological parameters, has been developed.

### method
+ Informasion encoding in the form characters, where each features have different length and various possible values (continuous or discrete).
+ Base software was Python with its packages (PyTorch, SciPy, pandas, NumPy, dill, reverse_geocoder, etc).
+ Five optimizer were used, which are SGD, Adam, AdamW, Adam+AMSGrad, AdamW+AMSGrad.

### results
+ A novel way to attempt identifying collections to species or section is presented, which indicates that the approach of using character-based information as input to a machine learning algorithm shows significant promise.
+ The developed system was able to identify 77% correctly with its highest probabilistic match, 96% within its three likely determinations and over 99% of collections within its five most likely determinations.


## gupta_2021
### purposes
+ The scientific classification of a species demands prior knowledge for identification, which is suitable for machine learning based system.
+ Automatic identification using machine learning model can be used to reduce time, cost, and labor.

### methods
+ Google teachable machine (GTM) is a fairly new graphical user interface (GUI) based tool introduced in 2019, that is based on TensorFlow, which is Javascript library of ML algorithms.
+ It does not require coding or scripting skills to build ML models (Carney et al. 2020).

### results
+ It shows that the ML model can be developed with ease using GTM and incorporated in mobile and website or can be directly excess with the shareable link.
+ The key strengths of this study are its user-friendly online ML platform and accessibility after training the cricket classification model.
+ ML model can be trained on the GTM platform for image-based classification in biological sciences, including insect classification (current study only uses two cricket species).


## refs
+ [`qbwa7`](https://osf.io/qbwa7) **`(Archino et al., 2021)`** R. D'Archino, A. C. G. Schimel, C. Peat, T. Anderson, "Automated detection of large brown macroalgae using machine learning algorithms—a case study from Island Bay, Wellington", New Zealand Aquatic Environment and Biodiversity Report, no 263, Fisheries New Zealand, Jun 2021, url https://docs.niwa.co.nz/library/public/NZAEBR-263.pdf [20240311].
+ [`9qktc`](https://osf.io/9qktc) **`(B & Juliet, 2023)`** Persia Abishal B, Sujitha Juliet, "Image-Based Bird Species Identification Using Machine Learning", 2023 9th International Conference on Advanced Computing and Communication Systems (ICACCS), Coimbatore, India, 2023, pp 1963-1968, url https://doi.org/10.1109/ICACCS57279.2023.10113103.
+ [`nck8h`](https://osf.io/nck8h) **`(Bartlett et al., 2022)`** Peter Bartlett, Ursula Eberhardt, Nicole Schütz, Henry J. Beker, "Species determination using AI machine-learning algorithms: Hebeloma as a case study", IMA Fungus [IMA Fungus], vol 13, no, p 13, Jun 2022, url https://doi.org/10.1186/s43008-022-00099-x.
+ **`(Gramener, 2021)`** Gramener, "Species Detection With Machine Learning: Simplifying Efforts for Conservation Organizations", Medium, 21 Sep 2021, url https://medium.com/p/3d97b3d1f65e [20240311].
+ [`qxr8s`](https://osf.io/qxr8s) **`(Gupta & Homchan, 2021)`** Yash Munnalal Gupta, Somjit Homchan, "Short communication: Insect detection using a machine learning model", Nusantara Bioscience [Nus Biosci], vol 13, no 1, p 68-72, May 2021, url https://doi.org/10.13057/nusbiosci/n130110.
+ **`(Huot et al., 2023)`** Matthieu Huot, Fraser Dalgleish, David Beauchesne, Michel Piché, Philippe Archambault, "Machine learning for underwater laser detection and differentiation of macroalgae and coral", Frontiers in Remote Sensing [Front Remote Sens], vol 4, no, p 1135501, Jun 2023, url https://doi.org/10.3389/frsen.2023.1135501.
+ **`(Kaur & Kaur, 2019)`** Surleen Kaur, Prabhpreet Kaur, "Plant Species Identification based on Plant Leaf Using Computer Vision and Machine Learning Techniques", Journal of Multimedia Information System [J Multimed Inf Syst], vol 6, no 2, p 49-60, Jun 2019, url https://doi.org/10.33851/JMIS.2019.6.2.49.
+ **`(Labrighli et al., 2022)`** Khaoula Labrighli, Chouaib Moujahdi, Jalal El Oualidi, Laila Rhazi, "Artificial Intelligence for Automated Plant Species Identification: A Review", International Journal of Advanced Computer Science and Applications [Int J Adv Comput Sci Appl, IJACSA], vol 13, no 10, p 814-825, Oct 2022, url http://dx.doi.org/10.14569/IJACSA.2022.0131097.
+ **`(Malik et al., 2023)`** Hassaan Malik, Ahmad Naeem, Shahzad Hassan, Farman Ali, Rizwan Ali Naqvi, Dong Keon Yon, "Multi-classification deep neural networks for identification of fish species using camera captured images", PLoS ONE [PLOS ONE], vol 18, no 4, p e0284992, 2023, url https://doi.org/10.1371/journal.pone.0284992.
+ **`(Ning et al., 2022)`**
Hongwei Ning, Rui Li, Teng Zhou, "Machine learning for microalgae detection and utilization", Frontier in Marince Science [Front Mar Sci], vol 9, no, p 947394, Jul 2022, url https://doi.org/10.3389/fmars.2022.947394.
+ **`(Picek et al., 2022)`** Lukáš Picek, Milan Šulc, Yash Patel, Jiří Matas, "Plant recognition by AI: Deep neural nets, transformers, and kNN in deep embeddings", Frontiers in Plant Science [Front Plant Sci], vol 13, no, p 787527, Sep 2022, url https://doi.org/10.3389/fpls.2022.787527.
+ **`(Rajabizadeh & Rezgh, 2021)`**
Mahdi Rajabizadeh, Mansoor Rezgh, "A comparative study on image-based snake identification using machine learning", Scientific Report [Sci Rep], vol 11, no, p 19142, Sep 2021, url https://doi.org/10.1038/s41598-021-96031-1.
+ **`(Thangarasu et al., 2019)`** Rajasekaran Thangarasu, Vishnu Kumar Kaliappan, Raguvaran Surendran, Kandasamy Sellamuthu, Jayasheelan Palanisamy, "Recognition Of Animal Species On Camera Trap Images Using Machine Learning And Deep Learning Models", International Journal of Scientific & Technology Research [Int J Sci Technol Res], vol 8, no 10, p, Oct 2019, url https://www.ijstr.org/research-paper-publishing.php?month=oct2019#:~:text=2613%2D2622 [20240311].
+ **`(Xu et al., 2022)`**
Linquan Xu, Linji Xu, Yuying Chen, Yuantao Zhang, Jixiang Yang, "Accurate Classification of Algae Using Deep Convolutional Neural Network with a Small Database", ACS EST Water [ACS EST Water], vol 2, no 11, p 1921–1928, Nov 2022, url https://doi.org/10.1021/acsestwater.1c00466.
+ **`(Yasir et al., 2023)`** Anas Yassir, Said Jai Andaloussi, Ouail Ouchetto, Kamal Mamza, Mansour Serghini, "Acoustic fish species identification using deep learning and machine learning algorithms: A systematic review", Fisheries Research [Fish Res], vol 266, no, p 106790, Oct 2023, url https://doi.org/10.1016/j.fishres.2023.106790.
