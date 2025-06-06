+++
title = 'cnn-dgp x-ray covid-19'
date = '2025-01-16T15:05:23+07:00'
draft = false
type = 'slides'
authors = ['viridi']
tags = ['users']
url = '25a45'
+++
<!--more-->

+ `29-may-2025` [`tue6z`](https://osf.io/tue6z) Online progress report.
+ `27-may-2025` [`63ymx`](https://osf.io/63ymx) Thesis II progress, ch 3-4.
+ `16-jan-2025` [`tvs9g`](https://osf.io/tvs9g) Thesis I seminar.
+ `13-jan-2025` [`xk7g2`](https://osf.io/xk7g2) Thesis I report. 
+ `13-dec-2024` [`ybq3h`](https://osf.io/ybq3h) Proposal seminar.
+ `11-dec-2024` [`aks3f`](https://osf.io/aks3f) Proposal reprot
+ `09-dec-2024` [`c54sx`](https://osf.io/c54sx) Chapters 1 and 2 draft.
+ `25-nov-2024` [`5q2wh`](https://osf.io/5q2wh) Supervision form. 


## notes
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
