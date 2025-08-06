+++
title = 'cnn-dgp x-ray covid-19'
date = '2025-01-16T15:05:23+07:00'
draft = false
type = 'notes'
authors = ['viridi']
tags = ['users']
url = '25a45'
+++

<!--more-->

+ `07-aug-2025` {{< link/gh 25a45.17 >}} Files and folder copying to gh.
+ `04-jul-2025` {{< link/gh 25a45.16 >}} Forgotten invitation.
+ `08-jul-2025` {{< link/gh 25a45.15 >}} Final seminar and comments.
+ `29-jun-2025` {{< link/gh 25a45.14 >}} Status with editor for jcmds.
+ `07-jul-2025` {{< link/gh 25a45.13 >}} Contribution verification and registration to jcmds.
+ `07-jul-2025` {{< link/gh 25a45.12 >}} Registration to health analytics.
+ `07-jul-2025` {{< link/gh 25a45.11 >}} Thesis II report and presentation.
+ `03-jul-2025` {{< link/gh 25a45.10 >}} Schedule for thesis II seminar.
+ `17-jun-2025` {{< link/gh 25a45.09 >}} Submission to healthcare analytics.
+ `29-may-2025` {{< link/gh 25a45.08 >}} Online progress report.
+ `27-may-2025` {{< link/gh 25a45.07 >}} Thesis II progress, ch 3-4.
+ `16-jan-2025` {{< link/gh 25a45.06 >}} Thesis I seminar.
+ `13-jan-2025` {{< link/gh 25a45.05 >}} Thesis I report. 
+ `13-dec-2024` {{< link/gh 25a45.04 >}} Proposal seminar.
+ `11-dec-2024` {{< link/gh 25a45.03 >}} Proposal reprot
+ `09-dec-2024` {{< link/gh 25a45.02 >}} Chapters 1 and 2 draft.
+ `25-nov-2024` {{< link/gh 25a45.01 >}} Supervision form. 


## notes
+ It was on [sn83g](https://osf.io/sn83g/).
+ Confusion matrix for x-ray medical image in 27-may-2025 report.
  ```
       | 0 | 341 |   0 |   1
  Ac-  +---+-----+-----+-----
  tu-  | 1 |   0 | 236 |   2
  al   +---+-----+-----+-----
       | 2 |   0 |   0 | 354
       +---+-----+-----+-----
           |  0  |  1  |  2
               Prediction
  ```
+ Above result is very good. Confirmation is required about it. Confusion matrix must be accompanied by confident level, NOSR, FCR, etc.
+ Furhter understanding of radiation interaction with tissues also important to know the limit of information given by x-ray images, which limits machine learning ability in Prediction due to the sourc of infomration. Correction and discussioin about this hypotheses with AI assistant is available [^gpt-4o_2025].


## refs
[^gpt-4o_2025]: GPT-4o, "Limitations of the x-ray imaging modality", ChaGPT, 29 May 2025, url https://chatgpt.com/share/683869ad-d70c-800a-b09a-2ab1303d7977 [20250529].
