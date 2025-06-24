+++
title = 'where to find ml datasets'
date = 2024-04-14T21:42:00+07:00
draft = false
math = true
tags = ['machine learning', 'datasets']
url = '2010'
authors = ['viridi']
+++
Finding machine learning datasets <!--more-->


## intro
One of the challenges in entering machine learning (ML) world is to find the right datasets [^ailinkedin_2024]. Since it is a very important aspect, a university even provides information about it, e.g. on library website [^lan_2024]. And there are many posts, stories, articles about how to find them, e.g. list of datasets sources [^badr_2019][^hillier_2023][^luck_2021] or already grouped in categories [^gupta_2022][^rizzoli_2021], that can be found.

Once websites for datasets can be found, the datasets themselves might not easy to obtain as files in CSV, XLSX, or other formats. They can be still in raw format that must be first transformed, at least, to flat file in order to be used as dataset.

Some experiences in searching data are given in this post and processes to transform them as datasets are also suggested.


## etl
ETL, is an initialism [^turkel_2023], that stands for extract, transform, and load, which is a process to integrate data into a data warehouse in providing a reliable single source of truth (SSOT) necessary for business intelligence (BI) and various other needs, such as storage, data analytics, and machine learning [^haider_2024].

The ETL is a three-step process.

+ Data extraction
  - Extract raw data from relevant data sources, e.g. databases, files, etc.
  - Stored extracted data in landing zone called staging area temporarily.
+ Data transformation
  - Transform stored data in staging area to meet some required standards, e.g. perform data cleansing, data deduplication, joins & tree joins, normalization & de-normalization, merge, etc to maintain data integrity.
  - Store transformed data in staging area temporarily.
+ Data loading
  - Load transformed data from staging area to permanent storage system, e.g. a data warehouse, as well-structured data.

Normally, ETL is an automated process, but in this post it will be conducted manually as a learning process, and the source is the internet, that is global network of linked computers, servers, phones, and smart appliances that communicate with each other and able to fast exchange of information and files [^basumallick_2023].


## google
Let us begin with Google Dataset search

**Step 1**. Search datasets.

> https://datasetsearch.research.google.com/

which gives a text field for typing search phrases. Try to type

> composite stress-strain data

for obtaining stress-strain data of composite materials, which gives the [results](https://datasetsearch.research.google.com/search?query=composite%20stress-strain%20data) with 59 datasets.

**Step 2**. Filter the result for only XLSX file.

1. Stress-strain curves of uniaxial tension test subjected to quasi-static axial loads of RTV-2 material \
url https://doi.org/10.6084/m9.figshare.17430608.v1.
2. Fig. Stress vs. strain behavior of carbon composite with a nano mat of PAN-derived carbon fiber at the top of assembly \
url https://doi.org/10.6084/m9.figshare.6843638.v2.
3. RTV-2 and SWCNTs nanocomposites stress-strain curves \
url https://doi.org/10.6084/m9.figshare.17430572.v1.
4. Tensile test results of Nylon12 and its composites (3% and 5% of nanoclay) \
url https://doi.org/10.15131/shef.data.4063269.v1.
5. Data: Cure kinetics, glass transition advancement and chemo-rheological modelling of an epoxy vitrimer based on disulphide metathesis: dataset \
url https://doi.org/10.17862/cranfield.rd.22890563.v1.
6. Chemical compositions of cement and Slag w/%. \
url https://doi.org/10.1371/journal.pone.0297372.t002.
7. Data from: Restraint stress differentially regulates inflammation and glutamate receptor gene expression in the hippocampus of C57BL/6 and BALB/c mice \
url https://doi.org/10.6084/m9.figshare.4737154.v1.

They are reduced to only 7 datasets.

**Step 3**. Visit the sources and mine the data.

+ g-1. https://doi.org/10.6084/m9.figshare.17430608.v1. :heavy_check_mark:
  - `Name` RTV2_TENSILE.xlsx
  - `Size` 4.35 MB
  - `Link` https://figshare.com/ndownloader/files/32118758
  - `Info`
    + Materials: RTV-2 Elastosil 7600 (3 reps), Elastosil 7683 (3 reps)
    + Test Method: -
    + Spreadhseet: 1 sheet, 21155-2 rows, 6 columns
    + Others: 1 scatter plot, unit unclear but traceable
+ g-2. https://doi.org/10.6084/m9.figshare.6843638.v2. :heavy_check_mark:
  - `Name` S13_Fig.xlsx
  - `Size` 45.8 kB
  - `Link` https://figshare.com/ndownloader/files/12459251
  - `Info`
    + Materials: Carbon composite with a nano mat of PAN-derived carbon fiber at the top of assembly (1 rep)
    + Test Method: MTS EM Tension.msm
    + Spreadhseet: 1 sheet, 557-6 rows, 6 columns
    + Others: 1 scatter plot, 1 table specimen dimension
+ g-3. https://doi.org/10.6084/m9.figshare.17430572.v1. :heavy_check_mark:
  - `Name` SWCNTS-RTV2_TENSILE.xlsx
  - `Size` 2.07 MB
  - `Link` https://figshare.com/ndownloader/files/32118698
  - `Info`
    + Materials: RTV-2 and SWCNTs nanocomposites 3wt (3 reps), 4wt (3 reps), 5wt (3 reps)
    + Test Method: -
    + Spreadhseet: 3 sheets, 4905-2, 5143-2, 5518-2 rows, 6 columns
    + Others: 1 scatter plot
+ g-4. https://doi.org/10.15131/shef.data.4063269.v1. :heavy_check_mark:
  - `Name` 4063269.zip ("Neat Nylon 12 (N12).xlsx", "5%NEC+Nylon12.xlsx", "5%EC+Nylon12.xlsx", "3%NEC+Nylon12.xlsx", "3%EC+Nylon12.xlsx")
  - `Size` 107.12 kB, 111.25 kB, 113.98 kB, 77.26 kB, 101.62 kB
  - `Link` https://orda.shef.ac.uk/ndownloader/articles/4063269/versions/1
  - `Info`
    + Nylon12 and its composites (3% and 5% of nanoclay) (3 reps each)
    + Test Method: -
    + Spreadhseet:
      - 3 sheets; 893-7, 924-7, 838-7 rows; 4 columns
      - 3 sheets; 920-7, 773-7, 953-7 rows; 4 columns
      - 3 sheets; 972-7, 928-7, 898-7 rows; 4 columns
      - 1 sheet; 778-7, 760-7, 902-7 rows; 18-7 columns
      - 3 sheets; 904-7, 743-7, 891-7 rows; 4 columns
    + Others: Thickness, width, calculated columns
+ g-5. https://doi.org/10.17862/cranfield.rd.22890563.v1. :x:
  - `Name` 22890563.zip (Chemorheology-dataset.xlsx, Cure-kinetics-dataset.xlsx, Stress-relaxation-dataset.xlsx, Tg-advancement-dataset.xlsx)
  - `Size` 10.3 MB (80.80 kB, 145.8 kB, 27.25 kB, 10.05 MB)
  - `Link` https://cord.cranfield.ac.uk/ndownloader/articles/22890563/versions/1
  - `Info`
    + Materials: -
    + Test Method: -
    + Spreadhseet: 5, 5, 5, 18 sheets; 864-1, 201-1, 48-1 rows; 3, 5, 4, 3 columns
    + Others: It is not related to stress-strain data.
      - Time (s), Temperature (oC), Viscosity (Pa.s)
      - Time (s), Temperature (oC), alpha(-), dalphadt(1/s)
      - Time (s), Temperature (oC), Stress(MPa), Strain(%), Relaxation Modulus(Mpa)
      - Time (s), Temperature (oC), Heat Flow (Normalized) (J/g)
+ g-6. https://doi.org/10.1371/journal.pone.0297372.t002. :x:
  - `Name` -
  - `Size` -
  - `Link` https://doi.org/10.1371/journal.pone.0297372.t002
  - `Info`
    + Materials: CaO, Fe2O3, SiO2, Al2O3, MgO, SO3, Loss, Cement, Slag
    + Test Method: -
    + Spreadhseet: - sheets, - rows, - columns
    + Others: 1 table in PNG format and not about stress-strain data
+ g-7. https://doi.org/10.6084/m9.figshare.4737154.v1. :x:
  - `Name` ists_a_1298587_sm5273.xlsx
  - `Size` 11.89 kB
  - `Link` https://tandf.figshare.com/ndownloader/files/7733623
  - `Info`
    + Materials: -
    + Test Method: -
    + Spreadhseet: 1 sheets, 26 rows, 3 columns
    + Others: It is about gene and not related to stress-strain data: GRIA1, GRIA2, GRIA3, GRIA4, GRIN1, GRIN2A, GRIN2B, GRM1, GRM2, GRM3, GRM4, GRM5, IL1a, IL1b, IL1R1, IL2Rb, IL6, IL10, IL10RA, IL10RB, NFKB1, TNFA, TNFSF4, TNFSF6, TNFSF10

Then the are reduced to only 4 datasets groupd (there are at least one datasets or more in each group).


**Step 4**. Define filename and features in a flat file.


**Step 5**. Set standard to mantain integrity for all datasets.


## notes
[^ailinkedin_2024]: AI and the LinkedIn community, "You need to build a machine learning model. How can you find the right data set?", LinkedIn, 11 Jan 2024, url https://www.linkedin.com/advice/0/you-need-build-machine-learning-model-how-can-find-right-djtpc [20240414].
[^lan_2024]: Haoyong Lan, "Artificial Intelligence: Find Datasets", Carnegie Mellon University Libraries, 15 Jan 2024, url https://guides.library.cmu.edu/machine-learning [20240414].
[^badr_2019]: Will Badr, "Top Sources For Machine Learning Datasets", Towards Data Science -- Medium, 13 Jan 2019, url https://medium.com/p/bb6d0dc3378b [20240414].
[^basumallick_2023]: Chiradeep Basumallick, "What Is the Internet? Meaning, Working, and Types", Spiceworks, 22 Feb 2023, url https://www.spiceworks.com/tech/networking/articles/what-is-the-internet/ [20240415].
[^gupta_2022]: Satish Chandra Gupta, "50 Public Datasets for Machine Learning Projects", ML4Devs, 7 Jul 2022, url https://www.ml4devs.com/articles/datasets-for-machine-learning-and-data-science/ [20240414].
[^haider_2024]: Khurram Haider, "What is ETL? – Extract, Transform, Load Explained", Astera, 25 Mar 2024, url https://www.astera.com/type/blog/etl/ [20240415].
[^hillier_2023]: Will Hillier, "10 Great Places to Find Free Datasets for Your Next Project", CareerFoundry Blog, 9 Nov 2023, url https://careerfoundry.com/en/blog/data-analytics/where-to-find-free-datasets/ [20240414].
[^luck_2021]: Sandro Luck, "9 Best Places To Find Machine Learning Datasets", Towards Data Science -- Medium, 9 Feb 2021, url https://medium.com/p/dfdba8af5220 [20240414].
[^rizzoli_2021]: Alberto Rizzoli, "65+ Best Free Datasets for Machine Learning", V7Labs, 1 Jun 2021, url https://www.v7labs.com/blog/best-free-datasets-for-machine-learning [20240414].
[^turkel_2023]: Lucie Turkel, "Acronym vs. Abbreviation vs. Initialism: What’s the Difference?", Reader's Digest, 6 Feb 2023, url https://www.rd.com/article/acronym-vs-abbreviation-whats-the-difference/ [20240415].
